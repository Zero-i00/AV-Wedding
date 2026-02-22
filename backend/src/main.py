from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from config import settings, IS_DEBUG
from feature.alcohol_category.resolver import alcohol_category_resolver
from feature.invitation.resolver import invitation_resolver

app = FastAPI(
    title=settings.app.name
)

app.include_router(alcohol_category_resolver.router)
app.include_router(invitation_resolver.router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.app.ALLOWED_HOSTS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

@app.get("/")
def health_check():
    return {'status': 'ok'}

if __name__ == '__main__':
    import uvicorn

    uvicorn.run(
    "main:app",
        host=settings.app.host,
        port=settings.app.port,
        reload=IS_DEBUG,
        reload_dirs=['/app']
    )