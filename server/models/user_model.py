from sqlalchemy import Column, String, Integer, TIMESTAMP
from sqlalchemy.orm import relationship
from ..database import Base
from sqlalchemy.sql.expression import text
from .fav_sports import FavouriteGame
# from .activities import Activity

class User(Base):
    __tablename__='users'
    id = Column(Integer, primary_key=True, nullable=False)
    fullname = Column(String,nullable = False)
    email  = Column(String,nullable=False,unique=True)
    phone = Column(String,nullable=False,unique=True)
    password = Column(String,nullable=False)
    created_at = Column(TIMESTAMP(timezone=True),nullable=True, server_default = text('now()'))
    favourite_games = relationship('FavouriteGame',lazy='joined')
