import React from "react";

import Player from "../components/MusicPlayerComps/Player";
import Song from "../components/MusicPlayerComps/Song";

const MusicPlayerPage  = () => {
    return (
        <section className="basic-styles">
            <Song />
            <Player />
            <h1>music playerrrr</h1>
        </section>
    )
}

export default MusicPlayerPage;