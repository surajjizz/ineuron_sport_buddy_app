from fastapi import FastAPI

from .routers import user,activity
from .database import init_db,run_static_queries
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# app.add_middleware(
#     TrustedHostMiddleware, allowed_hosts=["192.168.89.187","localhost"] 
# )
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup():
    init_db()
    run_static_queries()
# app.include_router(actor)
# app.include_router(movie)
app.include_router(user.router)
app.include_router(activity.router)

@app.get('/')
def root():
    return {"message":"Welcome!!!"}