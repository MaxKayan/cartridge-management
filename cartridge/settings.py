"""
Django settings for cartridge project.

Generated by 'django-admin startproject' using Django 3.0.6.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.0/ref/settings/
"""

import os

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

REACT_APP_DIR = os.path.join(BASE_DIR, 'frontend', 'react-cartridge-management')
STATICFILES_DIRS = [
    os.path.join(REACT_APP_DIR, 'build', 'static'),
]

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.0/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'p*_150-7s20=!j*ygnr*0w37d!ps1!c-+-4p)b+w^2&aob&niy'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = [
    "127.0.0.1",
    "localhost",
    "10.36.240.155",
    "10.36.240.51",
    "10.36.240.51",
    "it-vlshv.dellin.local",
    "vlshv-127.dellin.local",
    "10.36.241.83"
]

INTERNAL_IPS = [
    '127.0.0.1',
]

CORS_ORIGIN_ALLOW_ALL = True

# Application definition

INSTALLED_APPS = [
    'chat',
    'channels',
    'main',
    'api',
    'telegram',
    'rest_framework',
    'crispy_forms',
    'corsheaders',
    'debug_toolbar',
    'django_mailbox',
    'constance',
    'django_celery_beat',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        # 'rest_framework.authentication.BasicAuthentication',
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication'
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        # 'rest_framework.permissions.DjangoModelPermissionsOrAnonReadOnly',
        'rest_framework.permissions.AllowAny',
        # 'rest_framework.permissions.IsAuthenticatedOrReadOnly',
    ],
}

CONSTANCE_BACKEND = 'constance.backends.redisd.RedisBackend'
CONSTANCE_REDIS_CONNECTION = {
    'host': 'localhost',
    'port': 6379,
    'db': 0,
}

CONSTANCE_CONFIG = {
    # 'PRINTER_SUPPORT_MAIL': (
    # "support@masservice.ru", "Почтовый адрес менеджера принт-сервиса, куда будут отправлятся письма."),
    'EMAIL_MANAGER_ADDRESS': (
        "maxim.kayander1@gmail.com", "Почтовый адрес менеджера принт-сервиса, куда будут отправлятся письма."),
    'EMAIL_ALLOW_RESEND': (False, "Разрешить повторную отправку писем по заказу?"),
    'EMAIL_REFRESH_TASK_NAME': (
        "Refresh Email Mailbox", "Наименование Periodic Task'а в Celery Beat для обновления почтовых ящиков"),
    'CARTRIDGE_MIN_COUNT': (
        3,
        "Минимально допустимое кол-во картриджей одного типа. Заказ будет создан если кол-во ниже данного значения."),
    'CARTRIDGE_DEF_AMOUNT': (6, "Кол-во картриджей для нового заказа по умолчанию.")
}
CONSTANCE_CONFIG_FIELDSETS = {
    'Email Options': ('EMAIL_MANAGER_ADDRESS', 'EMAIL_ALLOW_RESEND', 'EMAIL_REFRESH_TASK_NAME'),
    'Cartridge Options': ('CARTRIDGE_MIN_COUNT', 'CARTRIDGE_DEF_AMOUNT')
}

CRISPY_TEMPLATE_PACK = 'bootstrap4'

# ----- EMAIL Settings -----
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = os.environ.get("EMAIL_HOST_USER")
EMAIL_HOST_PASSWORD = os.environ.get("EMAIL_HOST_PASSWORD")
DEFAULT_FROM_EMAIL = os.environ.get("DEFAULT_FROM_EMAIL")

SERVER_EMAIL = DEFAULT_FROM_EMAIL
EMAIL_SUBJECT_PREFIX = os.environ.get("EMAIL_SUBJECT_PREFIX")

if os.environ.get("EMAIL_USE_ADMIN_NOTIF") == "yes":
    ADMINS = [('Каяндер Максим', 'Maksim.Kayander@dellin.ru'), ('Тирских Никита', 'Nikita.Tirskih@dellin.ru')]
# ADMINS = [('Каяндер Максим', 'maxim.kayander1@gmail.com')]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'debug_toolbar.middleware.DebugToolbarMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'cartridge.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'cartridge.wsgi.application'
ASGI_APPLICATION = 'cartridge.routing.application'

CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'channels_redis.core.RedisChannelLayer',
        'CONFIG': {
            # "hosts": [('it-vlshv.dellin.local', 6379)],
            "hosts": [('localhost', 6379)],
        },

    },
}

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'django_db',
        'USER': 'django',
        'PASSWORD': 'D123456d',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}

# Password validation
# https://docs.djangoproject.com/en/3.0/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# Internationalization
# https://docs.djangoproject.com/en/3.0/topics/i18n/

LANGUAGE_CODE = 'ru-RU'

TIME_ZONE = 'Europe/Moscow'

DATETIME_FORMAT = 'd E Y в H:m'

USE_I18N = True

USE_L10N = True

USE_TZ = True

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.0/howto/static-files/

STATIC_URL = '/static/'

MEDIA_URL = '/telegram/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, '')

DEBUG_TOOLBAR_CONFIG = {
    # Toolbar options
    # 'RESULTS_CACHE_SIZE': 3,
    'SHOW_COLLAPSED': True,
    # Panel options
    'SQL_WARNING_THRESHOLD': 100,  # milliseconds
}

# --- CELERY ---
CELERY_BROKER_URL = 'redis://localhost:6379/1'
CELERY_CELERYBEAT_SCHEDULER = "django_celery_beat.schedulers:DatabaseScheduler"
# CELERY_TASK_ALWAYS_EAGER = True
# CELERY_IMPORTS = ("main.receivers","main.models")

TELEGRAM_BOT_URL = 'https://api.telegram.org/bot'