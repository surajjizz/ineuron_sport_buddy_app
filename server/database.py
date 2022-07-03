from sqlalchemy import create_engine,text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import psycopg2
# from psycopg2.extras import RealDictCursor
import time
import sqlparse
# from .config import settings
from dotenv import load_dotenv
import os
load_dotenv()
db_user = os.getenv('POSTGRES_DB_USER')
db_password = os.getenv('POSTGRES_DB_PASSWORD')
db_host = os.getenv('POSTGRES_HOST')
db_port = os.getenv('POSTGRES_PORT')
db_name = os.getenv('POSTGRES_DB_NAME')


SQLALCHEMY_DATABASE_URL = f'postgresql+psycopg2://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}'


engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def init_db():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    
def run_static_queries():
    with open("./app/queries.txt") as f_sql:
        sql_raw = f_sql.read()

    sql_queries = sqlparse.split(
        sqlparse.format(sql_raw, strip_comments=True)
    )
    with engine.connect() as conn:
        for query in sql_queries:
            result = conn.execute(text(query))


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()