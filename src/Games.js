import {
    Button,
    Divider,
    Grid,
    Stack,
    TextField,
    Typography,
    InputAdornment,
    Card,
    CardActions,
    CardContent,
  } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import Header from "./Header";



const Post=({id, key, name, author, url, updateGame, deleteGame })=>{
    return(

        <Card  className="card" height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between" id = {id} key = {id}>

        <CardContent >
            <Typography gutterBottom variant="h5" component="div">
            {name}
            </Typography>
            <Link href= {url} target="_blank">{url}</Link>
            <Typography variant="body2" color="text.secondary">
            {author} 
            </Typography>
            
        </CardContent>
        <CardActions>
            <Button size="small" onClick={()=> updateGame(id)}>Update Game</Button>
            <Button size="small" onClick={()=> deleteGame(id)}>Delete Game</Button>
        </CardActions>
    </Card>
    )


}

const CreateNewGame = ({saveGameData, handleValueChanges}) => {
    return (
      <>
        <Stack spacing={2} className="form">
        <h2 className="title">Login</h2>
         <TextField
          id="name"
          label="name"
          variant="outlined"
          title="name"
          name="name"
          placeholder="Enter Game Name"
          fullWidth
          onChange = {handleValueChanges}
          //value = {enteredName}
          />
          <TextField
          id="url"
          variant="outlined"
          label="url"
          name="url"
          type="url"
          fullWidth
          placeholder="Enter url"
          onChange = {handleValueChanges}
          // value = {enteredPwd}
          />
          <TextField
          id="author"
          variant="outlined"
          label="author"
          name="author"
          fullWidth
          placeholder="Enter author name"
          onChange = {handleValueChanges}
          // value = {enteredPwd}
          />
          
           
          <Button className="button" variant="contained" onClick = {saveGameData}>
                  Save
          </Button>

          </Stack>
      </>
    );
  };

  const ModifyPost=({name, author, url, handleValueChanges, UpdateGameData})=>{
    return (
      <>
        <Stack spacing={2} className="form">
        <h2 className="title">Login</h2>
         <TextField
          id="name"
          label="name"
          variant="outlined"
          title="name"
          name="name"
          placeholder="Enter Game Name"
          fullWidth
          defaultValue={name}
          onChange = {handleValueChanges}
          //value = {enteredName}
          />
          <TextField
          id="url"
          variant="outlined"
          label="url"
          name="url"
          type="url"
          fullWidth
          defaultValue={url}
          placeholder="Enter url"
          onChange = {handleValueChanges}
          // value = {enteredPwd}
          />
          <TextField
          id="author"
          variant="outlined"
          label="author"
          name="author"
          fullWidth
          defaultValue={author}
          placeholder="Enter author name"
          onChange = {handleValueChanges}
          // value = {enteredPwd}
          />
          
           
          <Button className="button" variant="contained" onClick = {UpdateGameData}>
                  Update
          </Button>

          </Stack>
      </>
    );

  }
const Games =()=>{

    const[gameData, setGameData]= useState([{

      name:'',
      url:'',
      author:'',
      published_date:''
    }]);
    const[allgames, setGames]= useState([{
        "name": "Bottle Flip",
        "url": "https://simpleiralgames.com",
        "author": "Simple Viral Games",
        "published_date": "2022-08-01 00:00:00"
        },
        ]);
    const[getGames, setGetGames]= useState(false);
    const[gameId, setGameId] = useState();
    const[modifyGame, setModifyGame]= useState(false);
    const[iscreatenewgame, setnewgame]= useState(false);



    const deleteGame = (id) => {
        const modifiedGame = allgames.filter((game) => {
          return game.published_date !== id;
        });
        setGames(modifiedGame);
      };

      const updateGame = (id) => {
        setGameId(id);
        setModifyGame(true);
      };
    
     
    
      const saveGameData = (event) => {
        event.preventDefault();
        const date = new Date();
        setGames([...allgames, {name:gameData.name, author:gameData.author, url:gameData.url, published_date:date}]);
        console.log("allgames", allgames);
        localStorage.setItem('allgames',allgames);
        setnewgame(false);
      };

      const handleValueChanges = e => { 
        setGameData({
          ...gameData,
          [e.target.name]: e.target.value,
        });
        console.log(gameData);
      };

      const UpdateGameData = (event) => {
        event.preventDefault();
        console.log("event", event);
       
          const updatedPost = allgames.map((game) => {
            if (game.published_date === gameId) {
                if(game.author && game.name && game.url){

                  return {
                    ...game,
                    name: gameData.name ,
                    url: gameData.url,
                    author:gameData.author 
                  };

                }

                else if(game.author){
                  return {
                    ...game,
                    name: game.name ,
                    url: game.url,
                    author:gameData.author 
                  };
                }

                else if(game.url){
                  return {
                    ...game,
                    name: game.name ,
                    url: gameData.url,
                    author:game.author 
                  };
                }

                else if(game.url){
                  return {
                    ...game,
                    name: gameData.name ,
                    url: game.url,
                    author:game.author 
                  };
                }
                
            }

           
            return game;
          });
          setGames(updatedPost);
          setModifyGame(false);
      };

      const game = allgames.find((game) => {
        return game.published_date === gameId;
      });
      
    return (
    <>
         <Header/>
         <Box display = "flex" flexDirection="column">

        <Box   margin =" 1rem" display = "flex"  alignItems= "center" justifyContent="center">

            <Box margin="1rem">
                <Button margin ="1rem"
                variant ="contained" onClick={()=>{
                  setnewgame(true);
                  setGetGames(false);
                  }}>
                Create New Game
                </Button>
            </Box>

            <Box margin="1rem">
                <Button margin ="1rem"
                variant ="contained">
                Read Game
                </Button>
            </Box>

            <Box margin="1rem">
                <Button margin ="1rem"
                variant ="contained" onClick={()=>{setGetGames(true)
                  setnewgame(false);
                }}>
                Get All Games
                </Button>
            </Box>
            </Box>

            {iscreatenewgame && 
            <>
              <CreateNewGame saveGameData={saveGameData} handleValueChanges={handleValueChanges} />
              <button
                onClick={()=>{setnewgame(false)}}
                >
                Cancel
                </button>
        </>
            }

            {(modifyGame) && 
               
               (
              <>
                  
                  <ModifyPost
                  name={game.name}
                  author={game.author}
                  url ={game.url}
                  UpdateGameData={UpdateGameData}
                  handleValueChanges={handleValueChanges}
                  />
                  <button
                  className="btn btn-danger cancel-update-button"
                  onClick={()=>{setModifyGame(false)}}
                  >
                  Cancel
                  </button>
              </>
              )
          }
            {getGames && allgames.length &&
            
            <Grid  container spacing={1} >
               { allgames.map((game) => (
                    <Box margin ="1rem" width ="40%">
                <Post
                    id={game.published_date}
                    key={game.published_date}
                    name={game.name}
                    author={game.author}
                    url={game.url}
                    deleteGame ={deleteGame}
                    updateGame = {updateGame}
                />
                </Box>
                ))}
                </Grid>
            
            }
        
        </Box>
        </>
    );
}

export default Games;