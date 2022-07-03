from sqlalchemy import Column, String, Integer
from ..database import Base
from sqlalchemy.orm import relationship
from .fav_sports import FavouriteGame



class Game(Base):
    __tablename__='games'
    id = Column(Integer, primary_key=True, nullable=False)
    game = Column(String,nullable = False)
    favourite_count = relationship('FavouriteGame')