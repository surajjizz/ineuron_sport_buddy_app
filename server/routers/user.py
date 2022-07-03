from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from typing import List, Optional

from sqlalchemy import func

# from sqlalchemy.sql.functions import func
from ..models import user_model,fav_sports
from ..schema import user_schema
from ..models import game_model
from ..database import get_db


router = APIRouter(
    prefix="/users",
    tags=['Users']
)


@router.post("/createuser", status_code= status.HTTP_201_CREATED,response_model=user_schema.UserOut)
def create_user(user:user_schema.UserCreate,db: Session = Depends(get_db)):
    new_user =  user_model.User(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@router.post("/login",status_code=status.HTTP_201_CREATED,response_model=user_schema.UserLogin)
def login(user:user_schema.Login,db: Session = Depends(get_db)):
    req_user = user.dict()
    current_user = db.query(user_model.User).filter_by(email=req_user['email']).first()
    if not current_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="Unable to find the user")
    if current_user.password == req_user['password']:
        return {"status":"success","message":"successfully authenticated","user":current_user}
    else:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="Invalid Password")
    

@router.get("/games",status_code=status.HTTP_200_OK)
def list_games(db: Session = Depends(get_db)):
    games = db.query(game_model.Game).all()
    return games



@router.post("/favouritegame",status_code=status.HTTP_201_CREATED)
def create_favorite_game(fav_games:user_schema.FavouriteGames,db: Session = Depends(get_db)):
    new_favs = [fav_sports.FavouriteGame(**fav_game.dict()) for fav_game in fav_games.favourites_games]
    db.bulk_save_objects(new_favs)
    db.commit()
    return {"status":"success","message":"succesfully added"}

@router.get("/favouritegames/")
def list_favourite_games(userid:int,db: Session = Depends(get_db)):
    fav_games = db.query(fav_sports.FavouriteGame.skill_level, game_model.Game.game,game_model.Game.id).filter_by(user_id=userid).join(game_model.Game,fav_sports.FavouriteGame.game_id == game_model.Game.id ).all()
    return fav_games