import React from "react";
import Layout from "../Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Layout>
        <Box
          sx={{
            my: 15,
            textAlign: "center",
            p: 2,
            "& h4": {
              fontWeight: "bold",
              my: 2,
              fontSize: "2rem",
            },
            "& p": {
              textAlign: "justify",
            },
            "@media (max-width: 600px)": {
              mt: 0,
              "& h4": {
                fontSize: "2rem",
              },
            },
          }}
        >
          <Typography variant="h4">Welcome To My Resturant</Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            vulputate interdum turpis vitae gravida. Aenean ac lacus posuere,
            accumsan mi vitae, dapibus tortor. Nullam et tristique nibh.
            Pellentesque volutpat dui eu ipsum placerat, nec lacinia enim
            luctus. In quis semper diam, nec egestas eros. Curabitur a ligula at
            massa ultrices luctus in et mauris. Maecenas massa lacus, laoreet
            non dictum eu, pulvinar id diam. Cras facilisis maximus aliquam.
            Etiam ultricies mi nibh, id malesuada mauris sagittis vel. Maecenas
            efficitur gravida magna at consequat. Sed feugiat mattis vestibulum.
            Nullam a tempor tellus, ac volutpat nisi. Quisque lectus urna,
            mattis eget aliquet at, laoreet ut lorem. Morbi dignissim mi at
            lobortis rhoncus. <br />
            Fusce a sodales lectus. Donec dignissim, dolor nec rhoncus
            ultricies, sem augue scelerisque erat, quis sagittis nisi diam ac
            turpis. Vivamus suscipit metus vitae risus ultricies ultricies.
            Pellentesque vehicula ex erat, in sollicitudin orci interdum et.
            Fusce rhoncus tempus placerat. Etiam condimentum, leo quis luctus
            iaculis, nisl turpis varius dui, sit amet bibendum quam dolor a
            diam. Praesent sed scelerisque nisi, sed malesuada mi. Ut elit
            purus, aliquam at sapien vel, aliquet consequat sem. Fusce aliquam
            vitae nibh quis malesuada. Morbi lacinia, lorem a vulputate
            imperdiet, purus odio hendrerit justo, sit amet sollicitudin felis
            eros et ante. Donec elementum consectetur tellus nec faucibus.
            Quisque et suscipit urna. Phasellus maximus nec ex sed tristique.
            Vestibulum eget quam dapibus lorem tempor sodales in in diam.
            Curabitur in faucibus quam, vel tempus ipsum. Nullam nec semper
            purus. Ut tempus scelerisque elit. Nam et sapien consequat massa
            porttitor vehicula.
            <br /> Cras imperdiet justo eget felis fringilla scelerisque.
            Vivamus vehicula neque vitae massa fringilla, non tempor eros
            gravida. Vestibulum mattis feugiat consectetur. Nam eget magna
            volutpat, suscipit lacus vel, pellentesque elit. Pellentesque
            euismod ultricies est, eget ornare nulla volutpat id. Nulla interdum
            turpis sit amet purus malesuada porta. Quisque vitae arcu et velit
            imperdiet rhoncus. Vestibulum a justo sapien. Etiam faucibus
            faucibus mollis. Etiam in lacus in mi auctor euismod. Aliquam ut
            efficitur nunc. Pellentesque rutrum elit quam, vel congue tellus
            ornare pretium. Nam gravida augue ut lacinia placerat. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Fusce at ante magna. Nulla nibh nisl, porttitor in
            venenatis sit amet, sollicitudin eu eros.
          </p>
        </Box>
      </Layout>
    </>
  );
};

export default About;
