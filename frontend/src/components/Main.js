import React, { useEffect, useState } from "react";
import "./Main.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Header from "./Header";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Searchbar from "./Searchbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Videos from "./Videos";
import Uploadbtn from "./Upload";

const endpoint =
  "https://34822644-66a3-4228-9af0-6ba9dba1e797.mock.pstmn.io/v1/videos/";
const Main = () => {
  const [Allvideoes, setallvideoes] = useState([]);
  const [Genre, setgenre] = useState([]);
  const [Contentrating, setcontentrating] = useState("");
  const [Sort, setsort] = useState("releaseDate");
  const [Search, setsearch] = useState("");
  const [Timer, settimer] = useState(null);
  const fetchallvideo = async () => {
    try {
      const res = await axios.get(endpoint);
      console.log(res);
      setallvideoes(res.data.videos);
    } catch (err) {
      console.log(err);
    }
  };
  const addordeletegenre = (e) => {
    let duplicategenre = [...Genre];
    if (Genre.includes(e.target.value)) {
      setgenre(duplicategenre.filter((x) => x !== e.target.value));
    } else {
      duplicategenre.push(e.target.value);
      setgenre(duplicategenre);
    }
  };

  const filtercontent = async () => {
    //    if(Genre.length>0 && Contentrating.length===0){
    //      fetchbygenre()
    //    }else if(Genre.length===0 && Contentrating.length>0){
    //        fetchbycontentrating()
    //    }else if(Genre.length>0 && Contentrating.length>0){
    const params = {
      ...(Search.length && { title: Search }),
      ...(Genre.length && { genres: `${Genre}` }),
      ...(Contentrating.length && { contentRating: Contentrating }),
    };
    try {
      const res = await axios.get(endpoint, { params });
      console.log(res);
      setallvideoes(res.data.videos);
    } catch (err) {
      console.log(err);
    }
    //    }
  };

  const sort = async () => {
    try {
      const res = await axios.get(endpoint, { params: { sortBy: Sort } });
      console.log(res);
      setallvideoes(res.data.videos);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    if (Timer) {
      clearTimeout(Timer);
    }
    const searchTimer = setTimeout(() => {
      setsearch(searchTerm);
    }, 2000);
    settimer(searchTimer);
    console.log(searchTerm);
  };
  useEffect(() => {
    sort();
  }, [Sort]);

  useEffect(() => {
    filtercontent();
  }, [Genre, Contentrating, Search]);

  useEffect(() => {
    fetchallvideo();
  }, []);
  console.log(typeof Allvideoes);
  console.log(...Genre);
  console.log(Contentrating);
  return (
    <div>
      <Header>
        <Searchbar handleSearch={handleSearch} />
        <Uploadbtn />
      </Header>

      <Box
        className="filterrow"
        sx={{ backgroundColor: "rgba(34, 33, 33, 0.293)" }}
      >
        <Stack spacing={2} direction="row">
          <Button
            className="button"
            value="All"
            size="small"
            onClick={(e) => addordeletegenre(e)}
            variant="contained"
          >
            All Genre
          </Button>
          <Button
            className={Genre.find((x) => x === "Education") ? "button" : "btn"}
            size="small"
            value="Education"
            onClick={(e) => addordeletegenre(e)}
            variant="text"
          >
            Education
          </Button>
          <Button
            className={Genre.find((x) => x === "Sports") ? "button" : "btn"}
            value="Sports"
            onClick={(e) => addordeletegenre(e)}
            variant="text"
          >
            Sports
          </Button>
          <Button
            className={Genre.find((x) => x === "Comedy") ? "button" : "btn"}
            value="Comedy"
            onClick={(e) => addordeletegenre(e)}
            variant="text"
          >
            Comedy
          </Button>
          <Button
            className={Genre.find((x) => x === "Lifestyle") ? "button" : "btn"}
            value="Lifestyle"
            onClick={(e) => addordeletegenre(e)}
            variant="text"
          >
            Lifestyle
          </Button>
          <Box sx={{ minWidth: 140 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                className="button"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Sort}
                label="Sort"
                onChange={(e) => setsort(e.target.value)}
              >
                <MenuItem value="releaseDate">Release Date</MenuItem>
                <MenuItem value="viewCount">View Count</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Stack>

        <Stack spacing={2} direction="row">
          <Button
            className="button"
            value="All"
            onClick={(e) => setcontentrating(e.target.value)}
            variant="text"
          >
            Any age group
          </Button>
          <Button
            className={Contentrating === "7 " ? "button" : "btn"}
            value={"7 "}
            onClick={(e) => setcontentrating(e.target.value)}
            variant="text"
          >
            7+
          </Button>
          <Button
            className={Contentrating === "12 " ? "button" : "btn"}
            value="12 "
            onClick={(e) => setcontentrating(e.target.value)}
            variant="text"
          >
            12+
          </Button>
          <Button
            className={Contentrating === "16 " ? "button" : "btn"}
            value="16 "
            onClick={(e) => setcontentrating(e.target.value)}
            variant="text"
          >
            16+
          </Button>
          <Button
            value="18 "
            className={Contentrating === "18 " ? "button" : "btn"}
            onClick={(e) => setcontentrating(e.target.value)}
            variant="text"
          >
            18+
          </Button>
        </Stack>
      </Box>
      <Videos vid={Allvideoes} />
    </div>
  );
};

export default Main;
