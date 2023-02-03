import React, { useState } from "react";
import {
  Box, Typography, TextField, Checkbox,
  FormGroup, FormControlLabel, FormControl
} from '@mui/material';

export default function ContactData() {
  const [dadExists, setDadExists] = useState<boolean>(true);
  return <FormControl>
    <Typography
      variant="h6"
      textAlign="start"
      fontWeight="bold"
    >Контактные данные</Typography>
    <FormGroup sx={{
      display: "flex",
      flexDirection: "row",
      marginTop: 3, flexWrap: "wrap"
    }}>
      <TextField
        sx={{ marginRight: 3 }}
        id="surname-field"
        label="Фамилия"
      />
      <TextField
        sx={{ marginRight: 3 }}
        id="name-field"
        label="Имя"
      />
      {(dadExists) ?
        <TextField
          sx={{ marginRight: 3 }}
          id="second-name-field"
          label="Отчество"
        /> : <TextField
          disabled={dadExists}
          sx={{ marginRight: 3 }}
          id="second-name-field"
          label="Отчество" />
      }
      <FormControlLabel control={

        <Checkbox
          value={dadExists}
          onChange={() => setDadExists(!dadExists)}
        />}
        label="Нет отчества"
      />
    </FormGroup>
    <Typography
      variant="h6"
      textAlign="start"
      fontWeight="bold"
      sx={{marginTop: 3}}
    >Адрес доставки</Typography>
    <FormGroup
      sx={{
        display: "flex",
        flexDirection: "row",
        marginTop: 3, flexWrap: "wrap"
      }}
    >
      <TextField
        sx={{ marginRight: 3 }}
        id="phone-field"
        label="Номер телефона"
      />
      <TextField
        sx={{ marginRight: 3 }}
        id="date-field"
        label="Дата рождения"
      />
    </FormGroup>
  </FormControl >
}

