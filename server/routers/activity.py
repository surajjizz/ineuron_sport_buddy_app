from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from typing import List, Optional

from sqlalchemy import func


# from sqlalchemy.sql.functions import func
from ..models import activity_model,user_model
from ..schema import activity_schema
from ..models import game_model
from ..database import get_db


router = APIRouter(
    prefix="/activity",
    tags=['Users']
)


@router.post("/createactivity", status_code= status.HTTP_201_CREATED)
def create_activity(activity:activity_schema.ActivityCreate,db: Session = Depends(get_db)):
    new_activity =  activity_model.Activity(**activity.dict())
    db.add(new_activity)
    db.commit()
    db.refresh(new_activity)
    return new_activity
    

@router.get("/activities",status_code=status.HTTP_200_OK)
def list_activities(db: Session = Depends(get_db)):
    activities = db.query(activity_model.Activity).all()
    return activities


@router.get("/users/activities")
def list_favourite_games(userid:int,db: Session = Depends(get_db)):
    # fav_games = db.query(fav_sports.FavouriteGame.skill_level, game_model.Game.game,game_model.Game.id).filter_by(user_id=userid).join(game_model.Game,fav_sports.FavouriteGame.game_id == game_model.Game.id ).all()
    activities_of_user = db.query(user_model.User).filter_by(id = userid).first()
    print('**********************************************')
    print(activities_of_user)
    return activities_of_user.activities