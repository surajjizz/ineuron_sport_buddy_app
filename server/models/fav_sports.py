from sqlalchemy import Column, ForeignKey, String, Integer, TIMESTAMP
from sqlalchemy.orm import relationship, backref
from ..database import Base
from sqlalchemy.sql.expression import text
# from .user_model import User

class FavouriteGame(Base):
    __tablename__='favourites_games'
    id = Column(Integer, primary_key=True, nullable=False)
    game_id = Column(Integer,ForeignKey('games.id'),nullable = False)
    user_id  = Column(Integer,ForeignKey('users.id'),nullable=False)
    skill_level = Column(String,unique=True)
