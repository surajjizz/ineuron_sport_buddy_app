from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import List, Optional

from pydantic.types import conint


class ActivityCreate(BaseModel):
    user_id: int
    sport_id: int
    venue: str
    activity_time: datetime
    status:str
    
class ActivityUser(BaseModel):
    id:int
    fullname:str
    phone:str
    
    class Config:
        orm_mode = True
    
class ActivitySport(BaseModel):
    id : int
    game :str
    
    class Config:
        orm_mode = True
    
class Activity(BaseModel):
    id: int
    venue: str
    activity_time: str
    created_at: str
    status:str
    user : ActivityUser
    game : ActivitySport
    
    class Config:
        orm_mode = True
    
class ActivityOut(BaseModel):
    activites_list: List[Activity]  

    class Config:
        orm_mode = True
        
