import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import useGetTrees from "../../data/hooks/useGetTrees";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SearchBox from "../Search";
import IconLeaf from "../../common/IconLeaf";
import AlertImage from "../../common/AlertImage";

import { useState } from "react";

// TODO change 'treesInTheArea' when change 'selectedArea'
export default function TopLeftOverview() {
  const { data, isLoading } = useGetTrees({});
  // will have to get from the useGetTrees hook.
  const treesInTheArea = isLoading ? "loading..." : data?.result?.length;
  // get array of area from ?
  const serveyArea = [
    "All",
    "สวนลุมพินี",
    "สวนเบญ",
    "สวนจตุจักร",
    "สวนสนุก",
    "สวนน้ำ",
  ];

  const [selctedArea, setSelctedArea] = useState(serveyArea[0]);
  
  const handleAreaChange = (event) => {
    setSelctedArea(event.target.value);
  };
  const [dataSearch, setDataSearch] = useState('');
  return (
    <Box
      sx={{
        position: "absolute",
        width: "322px",
        left: "38px",
        top: "29px",
        pointerEvents: "auto",
      }}
    >
      <Box
        sx={{
          borderRadius: "12px",
          width: "100%",
          background: "white",
          height: "56px",
          marginBottom: "20px",
          boxShadow: "0px 4px 8px rgba(109, 143, 12, 0.11)",
          color: "black",
        }}
      >
        <SearchBox setDataSearch={setDataSearch}/>
      </Box>

      {
        dataSearch?
          <Box
          sx={{
            color: "black",
            borderRadius: "12px",
            width: "100%",
            height: "170px",
            background: "white",
            boxShadow: "0px 4px 8px rgba(109, 143, 12, 0.11)",
          }}
        >
          <br/>
          <div>
            <span style={{ fontSize: "25px", fontWeight: "bold", color: "#94B044"}}>จำนวนต้นไม้ในพื้นที่</span>
            <IconLeaf></IconLeaf>
          </div>
          <span style={{ fontSize: "48px", fontWeight: "bold"}}>{dataSearch.amount} ต้น</span>
          <br/>
          <div style={{display: "flex", justifyContent: "center"}}>
             <span style={{ fontSize: "14px", fontWeight: "shape"}}>สำหรับ (พื้นที่สำรวจ)&nbsp;</span>
             <AlertImage></AlertImage>
          </div>
        </Box>
        : <></>
      }
    </Box>
  );
}
