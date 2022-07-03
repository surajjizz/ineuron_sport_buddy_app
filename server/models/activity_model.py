from sqlalchemy import Column, String, Integer, TIMESTAMP,ForeignKey
from sqlalchemy.orm import relationship, backref
from ..database import Base
from sqlalchemy.sql.expression import text
from .fav_sports import FavouriteGame

class Activity(Base):
    __tablename__='activities'
    id = Column(Integer, primary_key=True, nullable=False)
    user_id=Column(Integer, ForeignKey('users.id'))
    sport_id = Column(Integer, ForeignKey('games.id'))
    venue  = Column(String,nullable=False)
    created_at = Column(TIMESTAMP(timezone=True),nullable=True, server_default = text('now()'))
    activity_time = Column(TIMESTAMP(timezone=True),nullable=True)
    status = Column(String)
    user = relationship("User", backref=backref("activities"),lazy='joined')
    game = relationship("Game",backref=backref("activities"),lazy='joined')