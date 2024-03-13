from .common import *
from django.conf import settings

if settings.DEBUG:
    INSTALLED_APPS += [
        "debug_toolbar",
    ]

    MIDDLEWARE = [
        "debug_toolbar.middleware.DebugToolbarMiddleware",
    ] + MIDDLEWARE

    INTERNAL_IPS = ["127.0.0.1"]

    CORS_ORIGIN_WHITELIST = ["http://localhost:3000"]
