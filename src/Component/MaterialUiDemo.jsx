import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

function MaterialUiDemo() {
  return (
    <div>
      <Box boxShadow={3} p={6} m={3}>
        <Typography variant="h1" color="secondary" align="center">
          Learning React Material UI
        </Typography>
        <Typography variant="h2" align="right" color="primary">
          Learning React Material UI
        </Typography>
        <Typography variant="h3" align="center" color="primary" gutterBottom>
          Learning React Material UI
        </Typography>

        <Typography variant="body1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          maxime quam, nesciunt nobis nam corporis iusto enim esse consequuntur
          similique fugiat dolores atque aspernatur quia provident. Odit optio
          neque nam.
        </Typography>
      </Box>
      <Box boxShadow={3} p={6} m={3} component="section">
        <h1>Hello World</h1>
        <Typography variant="subtitle1" align="justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores,
          iure itaque et qui aut eveniet ab quasi numquam, at, dicta optio
          incidunt nisi aspernatur nulla voluptatibus corrupti officia eos
          deleniti autem. Accusantium quas facere repellat corporis quia dolor
          eos quisquam suscipit quo. Totam provident in expedita quae fugit
          quibusdam! Aut, unde. Blanditiis dolorum, ipsa laboriosam praesentium
          nostrum animi, reprehenderit aperiam repellendus vero error dolore
          consequatur officiis dolor perspiciatis voluptas obcaecati? Incidunt
          alias cumque vitae eius soluta in enim, facere odit veniam ab aliquam.
          Nisi, repudiandae. Aperiam ea temporibus harum possimus praesentium
          fugiat sunt sint dignissimos obcaecati culpa consequatur rem error
          molestiae nobis consequuntur maxime voluptates repellat quis fuga
          impedit tenetur, minima porro nostrum magnam? Accusamus nihil iure
          quasi autem rerum laudantium nulla ipsa odit facilis ipsam repellendus
          debitis tempora, dignissimos dolor! Nemo incidunt officia, nesciunt
          est molestiae provident culpa explicabo suscipit facere ratione rem
          totam esse, minima dolores maxime vero cumque dignissimos non, iusto
          magnam unde fuga. Culpa, hic nobis ex iure voluptatem fuga esse,
          quibusdam suscipit id a quaerat omnis architecto. Officiis, dolor.
          Voluptatem, corrupti. Reprehenderit iure vero aliquam. Perspiciatis
          inventore ullam saepe alias sed fuga fugiat consequuntur nobis omnis!
          Et, nihil ratione corporis nostrum eligendi earum odit sapiente.
        </Typography>
      </Box>
    </div>
  );
}

export default MaterialUiDemo;
