class Spotify {
    constructor() {
        this.allSongs = {};
    }

    downloadSong(artist, song, lyrics) {
        if (!this.allSongs[artist]) {
            this.allSongs[artist] = {rate: 0, votes: 0, songs: []}
        }

        this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);

        return this;
    }

    playSong(song) {
        let songArtists = Object.keys(this.allSongs).reduce((acc, cur) => {

            let songs = this.allSongs[cur]['songs']
                .filter((songInfo) => songInfo
                    .split(/ - /)[0] === song);

            if(songs.length > 0){
                acc[cur] = songs;
            }

            return acc;
        }, {});

        let arr = Object.keys(songArtists);
        let output = "";

        if(arr.length > 0){

            arr.forEach((artist) => {
                output += `${artist}:\n`;
                output += `${songArtists[artist].join('\n')}\n`;
            });

        } else {
            output = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
        }

        return output;
    }

    get songsList() {
        let songs = Object.values(this.allSongs)
            .map((v) => v['songs'])
            .reduce((acc, cur) => {
                return acc.concat(cur);
            }, []);

        let output;

        if (songs.length > 0) {
            output = songs.join('\n');
        } else {
            output = 'Your song list is empty';
        }

        return output;

    }

    rateArtist() {
        let artistExist = this.allSongs[arguments[0]];
        let output;

        if (artistExist) {

            if (arguments.length === 2) {
                artistExist['rate'] += +arguments[1];
                artistExist['votes'] += 1;
            }

            let currentRate = (+(artistExist['rate'] / artistExist['votes']).toFixed(2));
            isNaN(currentRate) ? output = 0 : output = currentRate;

        } else {
            output = `The ${arguments[0]} is not on your artist list.`
        }

        return output;
    }




}






const assert = require("chai").assert;

describe("Spotify",function(){

    it("should constains object allSongs",function(){
        let songs = new Spotify();
        assert.deepEqual(songs.allSongs,{})
    })

    describe("downloadSong(artist, song, lyrics) adds the given information to the allSongs ",function(){
 

        it("shuold return songs in specific format",function(){
            let songs = new Spotify();
            songs.downloadSong("ivan","qka pesen","lelee");
            assert.deepEqual(songs.downloadSong("ivan","diamond","nqma veche jipove"),{"allSongs":{"ivan":{"rate":0,"votes":0,"songs":["qka pesen" +" - "+"lelee","diamond" +" - "+ "nqma veche jipove"]}}});
        })
    })

    describe("•	playSong(song) searches all already downloaded songs and returns them in format:",function(){


        it("shuold downloaded songs in specific format",function(){
            let songs = new Spotify();
            songs.downloadSong("ivan","qka pesen","lelee");
            assert.equal(songs.playSong("qka pesen"),"ivan:\nqka pesen - lelee\n");
        })

        it("should return no songs error string",function(){
            let songs = new Spotify();
            assert.equal(songs.playSong("qka pesen"),(`You have not downloaded a qka pesen song yet. Use SoftUniFy's function downloadSong() to change that!`))
        })

    })

    describe("•	songsList() gets all already downloaded songs in specific format ",function(){
        it("should return songs in specific format",function(){
            let songs = new Spotify();
            songs.downloadSong("ivan","qka pesen","lelee");
            songs.downloadSong("gosho","diamond","call me maybe")

            assert.equal(songs.songsList,"qka pesen - lelee\n" + "diamond - call me maybe");

        })

        it("should return empty when no songs are downloaded",function(){
            let songs = new Spotify();

            assert.equal(songs.songsList,`Your song list is empty`)
        })
    })

    describe("rate the artist",function(){
        it("should rate the current artist",function(){
            let songs = new Spotify();
            songs.downloadSong("ivan","qka pesen","lelee");
            songs.downloadSong("gosho","diamond","call me maybe")
    
           assert.equal(songs.rateArtist("test"),`The test is not on your artist list.`)
        })
       
    })
 

})
