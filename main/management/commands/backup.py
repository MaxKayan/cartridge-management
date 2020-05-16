import json

from django.core.management.base import BaseCommand
from django.core.serializers.json import DjangoJSONEncoder

from main.models import Cartridge, Supply


class Command(BaseCommand):
    help = "Gets all needed data from Django database, converts it to JSON and stores on disk"

    def add_arguments(self, parser):
        parser.add_argument('action', nargs='+', type=str)

    def handle(self, *args, **options):
        if "all" in options["action"]:
            db = {
                "Cartridge": list(Cartridge.objects.values()),
                "Supply": list(Supply.objects.values()),
                "Order": list(Supply.objects.values())
            }

            with open("db.json", 'w+') as outfile:
                json.dump(db, outfile, sort_keys=True, indent=4, cls=DjangoJSONEncoder)
            self.stdout.write(self.style.SUCCESS("Successfully backed up database to db.json"))

        elif "restore" in options["action"]:
            with open("db.json", 'r') as file:
                saved_data = json.load(file)
                for key, values in saved_data.items():
                    model = globals()[key]
                    for obj in values:
                        try:
                            key = obj["id"] if "id" in obj else obj["name"]
                            print(f"{key=}")
                            db_entry = model.objects.get(pk=key)
                        except model.DoesNotExist:
                            print(f'Restoring -- {obj}')
                            model.objects.create(**obj)
                            print("done")

                self.stdout.write(self.style.SUCCESS("Successfully restored database from db.json"))

        elif "reload-all" in options["action"]:
            with open("db.json", 'r') as file:
                saved_data = json.load(file)
                for key, values in saved_data.items():
                    model = globals()[key]
                    for obj in values:
                        try:
                            key = obj["id"] if "id" in obj else obj["name"]
                            print(f"{key=}")
                            instance = model.objects.get(pk=key)

                            for attr, value in obj.items():
                                setattr(instance, attr, value)
                            instance.save()
                        except Cartridge.DoesNotExist:
                            self.stdout.write(self.style.ERROR(f"Cartridge {obj.name} does not exist!"))

                self.stdout.write(self.style.SUCCESS("Reloaded from db.json"))

        elif "reload-cartridges" in options["action"]:
            with open("db.json", 'r') as file:
                saved_data = json.load(file)
                for obj in saved_data["Cartridge"]:
                    try:
                        cartridge = Cartridge.objects.get(pk=obj["name"])
                        print(obj.items())
                        for attr, value in obj.items():
                            setattr(cartridge, attr, value)
                        cartridge.save()
                    except Cartridge.DoesNotExist:
                        self.stdout.write(self.style.ERROR(f"Cartridge {obj.name} does not exist!"))

                self.stdout.write(self.style.SUCCESS("Cartridges reloaded from db.json"))
