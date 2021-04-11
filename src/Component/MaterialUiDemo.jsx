import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

function MaterialUiDemo() {
  return (
    <div>
      <Container>
        <Paper elevation={2}>
          <Box mt={2} p={8}>
            <Typography variant="h3" color="secondary">
              Why choose Material UI ?
            </Typography>
            <br />
            <Typography variant="subtitle1" align="justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              iure itaque et qui aut eveniet ab quasi numquam, at, dicta optio
              incidunt nisi aspernatur nulla voluptatibus corrupti officia eos
              deleniti autem. Accusantium quas facere repellat corporis quia
              dolor eos quisquam suscipit quo. Totam provident in expedita quae
              fugit quibusdam! Aut, unde. Blanditiis dolorum, ipsa laboriosam
              praesentium nostrum nihil ratione corporis nostrum eligendi earum
              odit sapiente.
            </Typography>
            <br />
            <Button variant="contained" color="secondary">
              Learn More
            </Button>
          </Box>
        </Paper>
        <Paper elevation={2}>
          <Box mt={2} p={8}>
            <Typography variant="h3">Why choose Material UI ?</Typography>
            <Typography variant="subtitle1" align="justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              iure itaque et qui aut eveniet ab quasi numquam, at, dicta optio
              incidunt nisi aspernatur nulla voluptatibus corrupti officia eos
              deleniti autem. Accusantium quas facere repellat corporis quia
              dolor eos quisquam suscipit quo. Totam provident in expedita quae
              fugit quibusdam! Aut, unde. Blanditiis dolorum, ipsa laboriosam
              praesentium nostrum nihil ratione corporis nostrum eligendi earum
              odit sapiente.
            </Typography>
          </Box>
        </Paper>
        <Paper elevation={2}>
          <Box mt={2} p={8}>
            <Typography variant="h3">Why choose Material UI ?</Typography>
            <Typography variant="subtitle1" align="justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              iure itaque et qui aut eveniet ab quasi numquam, at, dicta optio
              incidunt nisi aspernatur nulla voluptatibus corrupti officia eos
              deleniti autem. Accusantium quas facere repellat corporis quia
              dolor eos quisquam suscipit quo. Totam provident in expedita quae
              fugit quibusdam! Aut, unde. Blanditiis dolorum, ipsa laboriosam
              praesentium nostrum nihil ratione corporis nostrum eligendi earum
              odit sapiente.
            </Typography>
          </Box>
        </Paper>
        <Paper elevation={2}>
          <Box mt={2} p={8}>
            <Typography variant="h3">Why choose Material UI ?</Typography>
            <Typography variant="subtitle1" align="justify">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
              iure itaque et qui aut eveniet ab quasi numquam, at, dicta optio
              incidunt nisi aspernatur nulla voluptatibus corrupti officia eos
              deleniti autem. Accusantium quas facere repellat corporis quia
              dolor eos quisquam suscipit quo. Totam provident in expedita quae
              fugit quibusdam! Aut, unde. Blanditiis dolorum, ipsa laboriosam
              praesentium nostrum nihil ratione corporis nostrum eligendi earum
              odit sapiente.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default MaterialUiDemo;
