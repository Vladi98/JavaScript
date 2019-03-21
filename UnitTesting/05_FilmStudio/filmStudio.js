class FilmStudio {

    constructor(studioName) {
        this.name = studioName;
        this.films = [];
    }

    casting(actor, role) {
        let isTheActorIsUnemployed = true;
        let output;

        if (this.films.length) {

            for (let f of this.films) {

                let roles = f.filmRoles.filter((r) => r.role === role);

                if (roles.length) {
                    let filmIndex = this.films.indexOf(f);
                    let wantedRole = this.films[filmIndex].filmRoles.filter((fR) => fR.role === role)[0];
                    let roleIndex = this.films[filmIndex].filmRoles.indexOf(wantedRole);

                    this.films[filmIndex].filmRoles[roleIndex].actor = actor;
                    isTheActorIsUnemployed = false;
                    output = `You got the job! Mr. ${actor} you are next ${role} in the ${f.filmName}. Congratz!`;
                    break;
                }
            }

            if (isTheActorIsUnemployed) {
                output = `${actor}, we cannot find a ${role} role...`;
            }

        } else {
            output = `There are no films yet in ${this.name}.`;
        }

        return output;
    }

    makeMovie(filmName, roles) {

        if (arguments.length === 2) {

            let firstArgIsString = typeof arguments[0] === 'string';
            let secondArgIsArray = arguments[1] instanceof Array;

            if (firstArgIsString && secondArgIsArray) {
                let findedFilms = this.films.filter((f) => f.filmName.includes(filmName));

                let filmRoles = roles.reduce((acc, cur) => {
                    let curFilmRole = {
                        role: cur,
                        actor: false
                    };
                    acc.push(curFilmRole);
                    return acc;
                }, []);

                let film = {
                    filmName,
                    filmRoles
                };

                if (findedFilms.length > 0) {
                    film.filmName += ` ${++findedFilms.length}`;
                }

                this.films.push(film);
                return film;
            } else {
                throw ('Invalid arguments')
            }

        } else {
            throw ('Invalid arguments count')
        }
    }

    lookForProducer(film) {

        let f = this.films.filter((f) => f.filmName === film)[0];
        let output;

        if (f) {
            output = `Film name: ${f.filmName}\n`;
            output += 'Cast:\n';
            Object.keys(f.filmRoles).forEach((role) => {
                output += `${f.filmRoles[role].actor} as ${f.filmRoles[role].role}\n`;
            });
        } else {
            throw new Error(`${film} do not exist yet, but we need the money...`)
        }

        return output;
    }
}

let assert = require("chai").assert;

describe("FilmStudio",function(){
    it("should have one param in ctor",function(){
        let filmStudio = new FilmStudio("peshovi");
        assert.deepEqual(filmStudio,{name: 'peshovi', films: []});
    })

    describe("Make movie func",function(){
        it("should have two params",function(){
            let filmStudio = new FilmStudio("peshovi");
            

            assert.deepEqual(filmStudio.makeMovie("titanik",["bad guy"]),{filmName:"titanik",filmRoles:[{"actor":false,role:"bad guy"}]});
        })

        it("should have work  with same movies",function(){
            let filmStudio = new FilmStudio("peshovi");
            filmStudio.makeMovie("titanik",["good guy"])

            assert.deepEqual(filmStudio.makeMovie("titanik",["bad guy"]),{filmName:"titanik 2",filmRoles:[{"actor":false,role:"bad guy"}]});
        })
      
        it("should throw length error",function(){
            let filmStudio = new FilmStudio("peshovi");
            
            assert.throw(function(){filmStudio.makeMovie("titanik",["good guy"],"gosho")},'Invalid arguments count')

        })

        it("shold throw type error",function(){
            let filmStudio = new FilmStudio("peshovi");
            assert.throw(function(){filmStudio.makeMovie(4,["good guy"])},'Invalid arguments')
            
        })

        it("shold throw type error",function(){
            let filmStudio = new FilmStudio("peshovi");
            assert.throw(function(){filmStudio.makeMovie("Hardy","sdf")},'Invalid arguments')
            
        })
        //to do
    })

    describe("Function casting()",function(){
       it("should cast the actor",function(){
        let filmStudio = new FilmStudio("peshovi");
        filmStudio.makeMovie("Lawless",["crazy man"]);
        assert.equal(filmStudio.casting("Tom Hardy","crazy man"),`You got the job! Mr. Tom Hardy you are next crazy man in the Lawless. Congratz!`);           
       })
        
       it("should throw error when no movies",function(){
        let filmStudio = new FilmStudio("peshovi");
        
        assert.equal(filmStudio.casting("Tom Hardy","bad guy"),`There are no films yet in peshovi.`)
       })

       it("should print unemployed",function(){
        let filmStudio = new FilmStudio("peshovi");
        filmStudio.makeMovie("Lawless",[]);
        assert.equal(filmStudio.casting("Hardy","bad guy"), `Hardy, we cannot find a bad guy role...`)
       //to do
    })
    })
    describe("Function look for producer",function(){

        it("should print an error" ,function(){
            let filmStudio = new FilmStudio("peshovi");

            assert.throw(function(){filmStudio.lookForProducer("titanik")},`titanik do not exist yet, but we need the money...`)
        })

        it("should print correctly",function(){
            let filmStudio = new FilmStudio("peshovi");
            filmStudio.makeMovie("titanik",["bad guy"]);
            filmStudio.casting("Tom Hardy","bad guy");
            assert.equal(filmStudio.lookForProducer("titanik"),"Film name: titanik\nCast:\nTom Hardy as bad guy\n")
          
            
            
        })

        
    })

    


    })



