from email import message
from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import List, Optional

from pydantic.types import conint


class UserCreate(BaseModel):
    fullname: str
    email: EmailStr
    phone: str
    password: str
    
class UserOut(BaseModel):
    id: int
    fullname: str
    email: EmailStr
    phone: str
    created_at: datetime
    

    class Config:
        orm_mode = True
        
class UserLogin(BaseModel):
    status:str = "success"
    message:str="successfully authenticated"
    user:UserOut
    

    class Config:
        orm_mode = True
        
class Login(BaseModel):
    email: EmailStr
    password: str
    
class FavouriteGame(BaseModel):
    game_id:int
    user_id:int
    
class FavouriteGames(BaseModel):
    favourites_games:List[FavouriteGame]