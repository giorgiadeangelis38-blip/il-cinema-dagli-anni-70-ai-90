const movies = [
  { id: 1, title: "The Godfather", year: 1972, decade: 1970, genres: ["Crime", "Drama"], director: "Francis Ford Coppola", rating: 9.2, boxOffice: 134.97, country: "USA", runtime: 175 },
  { id: 2, title: "Star Wars: Episode IV - A New Hope", year: 1977, decade: 1970, genres: ["Sci-Fi", "Adventure"], director: "George Lucas", rating: 8.6, boxOffice: 775.4, country: "USA", runtime: 121 },
  { id: 3, title: "The Godfather Part II", year: 1974, decade: 1970, genres: ["Crime", "Drama"], director: "Francis Ford Coppola", rating: 9.0, boxOffice: 57.6, country: "USA", runtime: 202 },
  { id: 4, title: "One Flew Over the Cuckoo's Nest", year: 1975, decade: 1970, genres: ["Drama"], director: "Miloš Forman", rating: 8.7, boxOffice: 163.0, country: "USA", runtime: 133 },
  { id: 5, title: "The Towering Inferno", year: 1974, decade: 1970, genres: ["Thriller", "Drama"], director: "John Guillermin", rating: 7.0, boxOffice: 203.0, country: "USA", runtime: 165 },
  { id: 6, title: "Taxi Driver", year: 1976, decade: 1970, genres: ["Crime", "Drama"], director: "Martin Scorsese", rating: 8.2, boxOffice: 28.3, country: "USA", runtime: 114 },
  { id: 7, title: "Annie Hall", year: 1977, decade: 1970, genres: ["Comedy", "Romance"], director: "Woody Allen", rating: 8.0, boxOffice: 38.9, country: "USA", runtime: 93 },
  { id: 8, title: "The Exorcist", year: 1973, decade: 1970, genres: ["Horror"], director: "William Friedkin", rating: 8.1, boxOffice: 441.3, country: "USA", runtime: 122 },
  { id: 9, title: "Apocalypse Now", year: 1979, decade: 1970, genres: ["War", "Drama"], director: "Francis Ford Coppola", rating: 8.4, boxOffice: 150.0, country: "USA", runtime: 153 },
  { id: 10, title: "Chinatown", year: 1974, decade: 1970, genres: ["Mystery", "Drama"], director: "Roman Polanski", rating: 8.1, boxOffice: 29.2, country: "USA", runtime: 130 },
  { id: 11, title: "The French Connection", year: 1971, decade: 1970, genres: ["Crime", "Thriller"], director: "William Friedkin", rating: 7.7, boxOffice: 51.7, country: "USA", runtime: 104 },
  { id: 12, title: "A Clockwork Orange", year: 1971, decade: 1970, genres: ["Sci-Fi", "Crime"], director: "Stanley Kubrick", rating: 8.3, boxOffice: 26.6, country: "UK", runtime: 136 },
  { id: 13, title: "All the President's Men", year: 1976, decade: 1970, genres: ["Drama", "Mystery"], director: "Alan J. Pakula", rating: 8.1, boxOffice: 55.0, country: "USA", runtime: 138 },
  { id: 14, title: "Dog Day Afternoon", year: 1975, decade: 1970, genres: ["Crime", "Drama"], director: "Sidney Lumet", rating: 8.0, boxOffice: 50.0, country: "USA", runtime: 125 },
  { id: 15, title: "Network", year: 1976, decade: 1970, genres: ["Drama", "Satire"], director: "Sidney Lumet", rating: 8.0, boxOffice: 23.7, country: "USA", runtime: 121 },
  { id: 16, title: "Alien", year: 1979, decade: 1970, genres: ["Sci-Fi", "Horror"], director: "Ridley Scott", rating: 8.5, boxOffice: 106.0, country: "USA", runtime: 117 },
  { id: 17, title: "Manhattan", year: 1979, decade: 1970, genres: ["Comedy", "Romance"], director: "Woody Allen", rating: 7.9, boxOffice: 39.9, country: "USA", runtime: 96 },
  { id: 18, title: "Close Encounters of the Third Kind", year: 1977, decade: 1970, genres: ["Sci-Fi", "Drama"], director: "Steven Spielberg", rating: 7.6, boxOffice: 306.9, country: "USA", runtime: 138 },
  { id: 19, title: "The Deer Hunter", year: 1978, decade: 1970, genres: ["War", "Drama"], director: "Michael Cimino", rating: 8.1, boxOffice: 49.0, country: "USA", runtime: 183 },
  { id: 20, title: "Superman", year: 1978, decade: 1970, genres: ["Action", "Sci-Fi"], director: "Richard Donner", rating: 7.4, boxOffice: 300.5, country: "USA", runtime: 143 },
  { id: 21, title: "Rocky", year: 1976, decade: 1970, genres: ["Drama", "Sport"], director: "John G. Avildsen", rating: 8.1, boxOffice: 200.0, country: "USA", runtime: 120 },
  { id: 22, title: "The Conversation", year: 1974, decade: 1970, genres: ["Mystery", "Thriller"], director: "Francis Ford Coppola", rating: 7.7, boxOffice: 4.4, country: "USA", runtime: 113 },
  { id: 23, title: "Serpico", year: 1973, decade: 1970, genres: ["Crime", "Drama"], director: "Sidney Lumet", rating: 7.7, boxOffice: 29.8, country: "USA", runtime: 130 },
  { id: 24, title: "Barry Lyndon", year: 1975, decade: 1970, genres: ["Drama", "Period"], director: "Stanley Kubrick", rating: 8.1, boxOffice: 31.5, country: "UK", runtime: 184 },
  { id: 25, title: "The Texas Chain Saw Massacre", year: 1974, decade: 1970, genres: ["Horror"], director: "Tobe Hooper", rating: 7.6, boxOffice: 30.9, country: "USA", runtime: 83 },
  { id: 26, title: "Halloween", year: 1978, decade: 1970, genres: ["Horror", "Thriller"], director: "John Carpenter", rating: 7.7, boxOffice: 70.0, country: "USA", runtime: 91 },
  { id: 27, title: "Carrie", year: 1976, decade: 1970, genres: ["Horror", "Drama"], director: "Brian De Palma", rating: 7.4, boxOffice: 33.8, country: "USA", runtime: 98 },
  { id: 28, title: "Monty Python and the Holy Grail", year: 1975, decade: 1970, genres: ["Comedy"], director: "Terry Gilliam", rating: 8.2, boxOffice: 5.0, country: "UK", runtime: 91 },
  { id: 29, title: "Saturday Night Fever", year: 1977, decade: 1970, genres: ["Drama", "Music"], director: "John Badham", rating: 6.7, boxOffice: 237.1, country: "USA", runtime: 118 },
  { id: 30, title: "Grease", year: 1978, decade: 1970, genres: ["Romance", "Music"], director: "Randal Kleiser", rating: 6.0, boxOffice: 190.0, country: "USA", runtime: 110 },
  { id: 31, title: "Kramer vs. Kramer", year: 1979, decade: 1970, genres: ["Drama"], director: "Robert Benton", rating: 7.5, boxOffice: 106.3, country: "USA", runtime: 105 },
  { id: 32, title: "Invasion of the Body Snatchers", year: 1978, decade: 1970, genres: ["Sci-Fi", "Horror"], director: "Philip Kaufman", rating: 7.4, boxOffice: 25.0, country: "USA", runtime: 115 },
  { id: 33, title: "Patton", year: 1970, decade: 1970, genres: ["Drama", "War"], director: "Franklin J. Schaffner", rating: 7.8, boxOffice: 61.7, country: "USA", runtime: 172 },
  { id: 34, title: "Dirty Harry", year: 1971, decade: 1970, genres: ["Crime", "Action"], director: "Don Siegel", rating: 7.7, boxOffice: 36.0, country: "USA", runtime: 102 },
  { id: 35, title: "The Man Who Would Be King", year: 1975, decade: 1970, genres: ["Adventure"], director: "John Huston", rating: 7.3, boxOffice: 8.5, country: "UK", runtime: 129 },
  { id: 36, title: "Solaris", year: 1972, decade: 1970, genres: ["Sci-Fi", "Drama"], director: "Andrei Tarkovsky", rating: 8.0, boxOffice: null, country: "USSR", runtime: 167 },
  { id: 37, title: "Willy Wonka & the Chocolate Factory", year: 1971, decade: 1970, genres: ["Family", "Fantasy"], director: "Mel Stuart", rating: 7.8, boxOffice: 4.0, country: "USA", runtime: 100 },
  { id: 38, title: "The Wild Bunch", year: 1969, decade: 1970, genres: ["Western", "Action"], director: "Sam Peckinpah", rating: 7.9, boxOffice: 10.9, country: "USA", runtime: 145 },
  { id: 39, title: "Deliverance", year: 1972, decade: 1970, genres: ["Adventure", "Thriller"], director: "John Boorman", rating: 7.7, boxOffice: 46.0, country: "USA", runtime: 109 },
  { id: 40, title: "The Warriors", year: 1979, decade: 1970, genres: ["Action", "Thriller"], director: "Walter Hill", rating: 7.6, boxOffice: 16.4, country: "USA", runtime: 92 },
  { id: 41, title: "The Empire Strikes Back", year: 1980, decade: 1980, genres: ["Sci-Fi", "Adventure"], director: "Irvin Kershner", rating: 8.7, boxOffice: 538.4, country: "USA", runtime: 124 },
  { id: 42, title: "Raiders of the Lost Ark", year: 1981, decade: 1980, genres: ["Adventure", "Action"], director: "Steven Spielberg", rating: 8.4, boxOffice: 389.9, country: "USA", runtime: 115 },
  { id: 43, title: "Return of the Jedi", year: 1983, decade: 1980, genres: ["Sci-Fi", "Adventure"], director: "Richard Marquand", rating: 8.3, boxOffice: 475.1, country: "USA", runtime: 131 },
  { id: 44, title: "Blade Runner", year: 1982, decade: 1980, genres: ["Sci-Fi", "Thriller"], director: "Ridley Scott", rating: 8.1, boxOffice: 33.8, country: "USA", runtime: 117 },
  { id: 45, title: "E.T. the Extra-Terrestrial", year: 1982, decade: 1980, genres: ["Sci-Fi", "Family"], director: "Steven Spielberg", rating: 7.9, boxOffice: 797.0, country: "USA", runtime: 115 },
  { id: 46, title: "Back to the Future", year: 1985, decade: 1980, genres: ["Sci-Fi", "Comedy"], director: "Robert Zemeckis", rating: 8.5, boxOffice: 388.8, country: "USA", runtime: 116 },
  { id: 47, title: "The Shining", year: 1980, decade: 1980, genres: ["Horror", "Thriller"], director: "Stanley Kubrick", rating: 8.4, boxOffice: 47.0, country: "UK", runtime: 146 },
  { id: 48, title: "Raging Bull", year: 1980, decade: 1980, genres: ["Drama", "Sport"], director: "Martin Scorsese", rating: 8.1, boxOffice: 23.4, country: "USA", runtime: 129 },
  { id: 49, title: "Ghostbusters", year: 1984, decade: 1980, genres: ["Comedy", "Sci-Fi"], director: "Ivan Reitman", rating: 7.8, boxOffice: 295.6, country: "USA", runtime: 105 },
  { id: 50, title: "Die Hard", year: 1988, decade: 1980, genres: ["Action", "Thriller"], director: "John McTiernan", rating: 8.2, boxOffice: 140.8, country: "USA", runtime: 132 },
  { id: 51, title: "The Terminator", year: 1984, decade: 1980, genres: ["Sci-Fi", "Action"], director: "James Cameron", rating: 8.1, boxOffice: 78.4, country: "USA", runtime: 108 },
  { id: 52, title: "Aliens", year: 1986, decade: 1980, genres: ["Sci-Fi", "Action"], director: "James Cameron", rating: 8.4, boxOffice: 180.5, country: "USA", runtime: 137 },
  { id: 53, title: "Amadeus", year: 1984, decade: 1980, genres: ["Drama", "Biography"], director: "Miloš Forman", rating: 8.4, boxOffice: 52.1, country: "USA", runtime: 160 },
  { id: 54, title: "The Princess Bride", year: 1987, decade: 1980, genres: ["Fantasy", "Romance"], director: "Rob Reiner", rating: 8.0, boxOffice: 30.9, country: "USA", runtime: 98 },
  { id: 55, title: "Midnight Run", year: 1988, decade: 1980, genres: ["Comedy", "Action"], director: "Martin Brest", rating: 7.5, boxOffice: 38.4, country: "USA", runtime: 126 },
  { id: 56, title: "Blue Velvet", year: 1986, decade: 1980, genres: ["Mystery", "Thriller"], director: "David Lynch", rating: 7.7, boxOffice: 8.6, country: "USA", runtime: 120 },
  { id: 57, title: "Once Upon a Time in America", year: 1984, decade: 1980, genres: ["Crime", "Drama"], director: "Sergio Leone", rating: 8.3, boxOffice: 5.3, country: "Italy", runtime: 229 },
  { id: 58, title: "The Breakfast Club", year: 1985, decade: 1980, genres: ["Drama", "Comedy"], director: "John Hughes", rating: 7.8, boxOffice: 51.5, country: "USA", runtime: 97 },
  { id: 59, title: "Ferris Bueller's Day Off", year: 1986, decade: 1980, genres: ["Comedy"], director: "John Hughes", rating: 8.0, boxOffice: 70.1, country: "USA", runtime: 103 },
  { id: 60, title: "Top Gun", year: 1986, decade: 1980, genres: ["Action", "Drama"], director: "Tony Scott", rating: 6.9, boxOffice: 357.4, country: "USA", runtime: 110 },
  { id: 61, title: "Indiana Jones and the Last Crusade", year: 1989, decade: 1980, genres: ["Adventure", "Action"], director: "Steven Spielberg", rating: 8.2, boxOffice: 474.2, country: "USA", runtime: 127 },
  { id: 62, title: "Batman", year: 1989, decade: 1980, genres: ["Action", "Crime"], director: "Tim Burton", rating: 7.6, boxOffice: 411.3, country: "USA", runtime: 126 },
  { id: 63, title: "Scarface", year: 1983, decade: 1980, genres: ["Crime", "Drama"], director: "Brian De Palma", rating: 8.3, boxOffice: 66.0, country: "USA", runtime: 170 },
  { id: 64, title: "Lethal Weapon", year: 1987, decade: 1980, genres: ["Action", "Crime"], director: "Richard Donner", rating: 7.6, boxOffice: 120.2, country: "USA", runtime: 109 },
  { id: 65, title: "RoboCop", year: 1987, decade: 1980, genres: ["Sci-Fi", "Action"], director: "Paul Verhoeven", rating: 7.5, boxOffice: 53.4, country: "USA", runtime: 102 },
  { id: 66, title: "The Thing", year: 1982, decade: 1980, genres: ["Horror", "Sci-Fi"], director: "John Carpenter", rating: 8.2, boxOffice: 19.6, country: "USA", runtime: 109 },
  { id: 67, title: "A Nightmare on Elm Street", year: 1984, decade: 1980, genres: ["Horror"], director: "Wes Craven", rating: 7.5, boxOffice: 57.0, country: "USA", runtime: 91 },
  { id: 68, title: "The Fly", year: 1986, decade: 1980, genres: ["Horror", "Sci-Fi"], director: "David Cronenberg", rating: 7.6, boxOffice: 60.6, country: "USA", runtime: 96 },
  { id: 69, title: "Platoon", year: 1986, decade: 1980, genres: ["War", "Drama"], director: "Oliver Stone", rating: 8.1, boxOffice: 138.5, country: "USA", runtime: 120 },
  { id: 70, title: "Ran", year: 1985, decade: 1980, genres: ["Drama", "War"], director: "Akira Kurosawa", rating: 8.2, boxOffice: 4.0, country: "Japan", runtime: 162 },
  { id: 71, title: "Witness", year: 1985, decade: 1980, genres: ["Drama", "Thriller"], director: "Peter Weir", rating: 7.4, boxOffice: 68.7, country: "USA", runtime: 112 },
  { id: 72, title: "The Color Purple", year: 1985, decade: 1980, genres: ["Drama"], director: "Steven Spielberg", rating: 7.7, boxOffice: 98.5, country: "USA", runtime: 154 },
  { id: 73, title: "Stand by Me", year: 1986, decade: 1980, genres: ["Drama", "Adventure"], director: "Rob Reiner", rating: 8.1, boxOffice: 52.3, country: "USA", runtime: 89 },
  { id: 74, title: "When Harry Met Sally...", year: 1989, decade: 1980, genres: ["Romance", "Comedy"], director: "Rob Reiner", rating: 7.6, boxOffice: 109.3, country: "USA", runtime: 95 },
  { id: 75, title: "Do the Right Thing", year: 1989, decade: 1980, genres: ["Drama", "Comedy"], director: "Spike Lee", rating: 7.9, boxOffice: 27.9, country: "USA", runtime: 120 },
  { id: 76, title: "Raising Arizona", year: 1987, decade: 1980, genres: ["Comedy", "Crime"], director: "Coen Brothers", rating: 7.4, boxOffice: 22.8, country: "USA", runtime: 94 },
  { id: 77, title: "The Road Warrior", year: 1981, decade: 1980, genres: ["Action", "Sci-Fi"], director: "George Miller", rating: 7.6, boxOffice: 24.0, country: "Australia", runtime: 95 },
  { id: 78, title: "Beverly Hills Cop", year: 1984, decade: 1980, genres: ["Comedy", "Action"], director: "Martin Brest", rating: 7.4, boxOffice: 316.4, country: "USA", runtime: 105 },
  { id: 79, title: "Rain Man", year: 1988, decade: 1980, genres: ["Drama"], director: "Barry Levinson", rating: 8.0, boxOffice: 354.8, country: "USA", runtime: 133 },
  { id: 80, title: "The Abyss", year: 1989, decade: 1980, genres: ["Sci-Fi", "Adventure"], director: "James Cameron", rating: 7.6, boxOffice: 90.0, country: "USA", runtime: 145 },
  { id: 81, title: "Pulp Fiction", year: 1994, decade: 1990, genres: ["Crime", "Drama"], director: "Quentin Tarantino", rating: 8.9, boxOffice: 213.9, country: "USA", runtime: 154 },
  { id: 82, title: "The Shawshank Redemption", year: 1994, decade: 1990, genres: ["Drama", "Crime"], director: "Frank Darabont", rating: 9.3, boxOffice: 28.3, country: "USA", runtime: 142 },
  { id: 83, title: "The Matrix", year: 1999, decade: 1990, genres: ["Sci-Fi", "Action"], director: "Wachowski Sisters", rating: 8.7, boxOffice: 467.2, country: "USA", runtime: 136 },
  { id: 84, title: "Forrest Gump", year: 1994, decade: 1990, genres: ["Drama", "Romance"], director: "Robert Zemeckis", rating: 8.8, boxOffice: 677.9, country: "USA", runtime: 142 },
  { id: 85, title: "Jurassic Park", year: 1993, decade: 1990, genres: ["Sci-Fi", "Adventure"], director: "Steven Spielberg", rating: 8.3, boxOffice: 1046.0, country: "USA", runtime: 127 },
  { id: 86, title: "Schindler's List", year: 1993, decade: 1990, genres: ["Drama", "War"], director: "Steven Spielberg", rating: 9.0, boxOffice: 96.9, country: "USA", runtime: 195 },
  { id: 87, title: "Se7en", year: 1995, decade: 1990, genres: ["Crime", "Thriller"], director: "David Fincher", rating: 8.6, boxOffice: 327.3, country: "USA", runtime: 127 },
  { id: 88, title: "Fight Club", year: 1999, decade: 1990, genres: ["Drama", "Thriller"], director: "David Fincher", rating: 8.8, boxOffice: 101.2, country: "USA", runtime: 139 },
  { id: 89, title: "The Silence of the Lambs", year: 1991, decade: 1990, genres: ["Thriller", "Horror"], director: "Jonathan Demme", rating: 8.6, boxOffice: 272.7, country: "USA", runtime: 118 },
  { id: 90, title: "Goodfellas", year: 1990, decade: 1990, genres: ["Crime", "Drama"], director: "Martin Scorsese", rating: 8.7, boxOffice: 46.8, country: "USA", runtime: 145 },
  { id: 91, title: "Titanic", year: 1997, decade: 1990, genres: ["Romance", "Drama"], director: "James Cameron", rating: 7.9, boxOffice: 2257.0, country: "USA", runtime: 194 },
  { id: 92, title: "The Lion King", year: 1994, decade: 1990, genres: ["Animation", "Family"], director: "Roger Allers", rating: 8.5, boxOffice: 968.5, country: "USA", runtime: 88 },
  { id: 93, title: "Toy Story", year: 1995, decade: 1990, genres: ["Animation", "Family"], director: "John Lasseter", rating: 8.3, boxOffice: 373.6, country: "USA", runtime: 81 },
  { id: 94, title: "Saving Private Ryan", year: 1998, decade: 1990, genres: ["War", "Drama"], director: "Steven Spielberg", rating: 8.6, boxOffice: 482.3, country: "USA", runtime: 169 },
  { id: 95, title: "The Truman Show", year: 1998, decade: 1990, genres: ["Drama", "Sci-Fi"], director: "Peter Weir", rating: 8.2, boxOffice: 264.1, country: "USA", runtime: 103 },
  { id: 96, title: " Fargo", year: 1996, decade: 1990, genres: ["Crime", "Drama"], director: "Coen Brothers", rating: 8.1, boxOffice: 24.6, country: "USA", runtime: 98 },
  { id: 97, title: "The Big Lebowski", year: 1998, decade: 1990, genres: ["Comedy", "Crime"], director: "Coen Brothers", rating: 8.1, boxOffice: 18.3, country: "USA", runtime: 117 },
  { id: 98, title: "L.A. Confidential", year: 1997, decade: 1990, genres: ["Crime", "Drama"], director: "Curtis Hanson", rating: 8.3, boxOffice: 126.2, country: "USA", runtime: 138 },
  { id: 99, title: "Heat", year: 1995, decade: 1990, genres: ["Crime", "Action"], director: "Michael Mann", rating: 8.3, boxOffice: 67.4, country: "USA", runtime: 170 },
  { id: 100, title: "The Sixth Sense", year: 1999, decade: 1990, genres: ["Thriller", "Drama"], director: "M. Night Shyamalan", rating: 8.2, boxOffice: 672.8, country: "USA", runtime: 107 },
  { id: 101, title: "The Green Mile", year: 1999, decade: 1990, genres: ["Drama", "Fantasy"], director: "Frank Darabont", rating: 8.6, boxOffice: 286.8, country: "USA", runtime: 189 },
  { id: 102, title: "American Beauty", year: 1999, decade: 1990, genres: ["Drama"], director: "Sam Mendes", rating: 8.3, boxOffice: 356.3, country: "USA", runtime: 122 },
  { id: 103, title: "Braveheart", year: 1995, decade: 1990, genres: ["Drama", "War"], director: "Mel Gibson", rating: 8.4, boxOffice: 213.2, country: "USA", runtime: 178 },
  { id: 104, title: "The Thin Red Line", year: 1998, decade: 1990, genres: ["War", "Drama"], director: "Terrence Malick", rating: 7.4, boxOffice: 98.1, country: "USA", runtime: 170 },
  { id: 105, title: "Groundhog Day", year: 1993, decade: 1990, genres: ["Comedy", "Fantasy"], director: "Harold Ramis", rating: 8.1, boxOffice: 70.9, country: "USA", runtime: 101 },
  { id: 106, title: "Dances with Wolves", year: 1990, decade: 1990, genres: ["Drama", "Western"], director: "Kevin Costner", rating: 8.0, boxOffice: 424.2, country: "USA", runtime: 181 },
  { id: 107, title: "Terminator 2: Judgment Day", year: 1991, decade: 1990, genres: ["Sci-Fi", "Action"], director: "James Cameron", rating: 8.6, boxOffice: 520.9, country: "USA", runtime: 137 },
  { id: 108, title: "The Usual Suspects", year: 1995, decade: 1990, genres: ["Crime", "Mystery"], director: "Bryan Singer", rating: 8.5, boxOffice: 23.3, country: "USA", runtime: 106 },
  { id: 109, title: "Scream", year: 1996, decade: 1990, genres: ["Horror", "Thriller"], director: "Wes Craven", rating: 7.4, boxOffice: 173.0, country: "USA", runtime: 111 },
  { id: 110, title: "The Prince of Egypt", year: 1998, decade: 1990, genres: ["Animation", "Drama"], director: "Brenda Chapman", rating: 7.1, boxOffice: 218.6, country: "USA", runtime: 99 },
  { id: 111, title: "Beauty and the Beast", year: 1991, decade: 1990, genres: ["Animation", "Romance"], director: "Gary Trousdale", rating: 8.0, boxOffice: 440.0, country: "USA", runtime: 84 },
  { id: 112, title: "Aladdin", year: 1992, decade: 1990, genres: ["Animation", "Family"], director: "Ron Clements", rating: 8.0, boxOffice: 504.0, country: "USA", runtime: 90 },
  { id: 113, title: "The Mask", year: 1994, decade: 1990, genres: ["Comedy", "Fantasy"], director: "Chuck Russell", rating: 6.9, boxOffice: 351.6, country: "USA", runtime: 101 },
  { id: 114, title: "Speed", year: 1994, decade: 1990, genres: ["Action", "Thriller"], director: "Jan de Bont", rating: 7.1, boxOffice: 350.4, country: "USA", runtime: 116 },
  { id: 115, title: "The Fugitive", year: 1993, decade: 1990, genres: ["Thriller", "Action"], director: "Andrew Davis", rating: 7.8, boxOffice: 368.9, country: "USA", runtime: 130 },
  { id: 116, title: "Independence Day", year: 1996, decade: 1990, genres: ["Sci-Fi", "Action"], director: "Roland Emmerich", rating: 7.0, boxOffice: 817.4, country: "USA", runtime: 145 },
  { id: 117, title: "Men in Black", year: 1997, decade: 1990, genres: ["Sci-Fi", "Comedy"], director: "Barry Sonnenfeld", rating: 7.3, boxOffice: 589.4, country: "USA", runtime: 98 },
  { id: 118, title: "Trainspotting", year: 1996, decade: 1990, genres: ["Drama", "Crime"], director: "Danny Boyle", rating: 8.1, boxOffice: 72.0, country: "UK", runtime: 94 },
  { id: 119, title: "The Iron Giant", year: 1999, decade: 1990, genres: ["Animation", "Family"], director: "Brad Bird", rating: 8.1, boxOffice: 31.5, country: "USA", runtime: 86 },
  { id: 120, title: "Being John Malkovich", year: 1999, decade: 1990, genres: ["Comedy", "Fantasy"], director: "Spike Jonze", rating: 7.7, boxOffice: 22.9, country: "USA", runtime: 112 }
];
const colors = {1970:'#d4af37',1980:'#f43f5e',1990:'#c026d3'};
const tooltip = d3.select('body').append('div').attr('class','tooltip');
const fmt = d3.format(',');
const posterUrls = {
  'A Clockwork Orange':'https://upload.wikimedia.org/wikipedia/en/7/73/A_Clockwork_Orange_%281971%29.png',
  'A Nightmare on Elm Street':'https://upload.wikimedia.org/wikipedia/en/f/fa/A_Nightmare_on_Elm_Street_%281984%29_theatrical_poster.jpg',
  'Aladdin':'https://upload.wikimedia.org/wikipedia/en/b/bd/Aladdin_%281992_Disney_film%29_poster.jpg',
  'Alien':'https://upload.wikimedia.org/wikipedia/en/c/c3/Alien_movie_poster.jpg',
  'Aliens':'https://upload.wikimedia.org/wikipedia/en/f/fb/Aliens_poster.jpg',
  'Amadeus':'https://upload.wikimedia.org/wikipedia/en/2/2f/Amadeusmov.jpg',
  'American Beauty':'https://upload.wikimedia.org/wikipedia/en/9/9a/American_Beauty_1999_film_poster.jpg',
  'Annie Hall':'https://upload.wikimedia.org/wikipedia/en/e/e6/Anniehallposter.jpg',
  'Apocalypse Now':'https://upload.wikimedia.org/wikipedia/en/c/c2/Apocalypse_Now_poster.jpg',
  'Back to the Future':'https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg',
  'Barry Lyndon':'https://upload.wikimedia.org/wikipedia/en/e/ee/Barry_Lyndon_A.jpg',
  'Batman':'https://upload.wikimedia.org/wikipedia/en/5/5a/Batman_%281989%29_theatrical_poster.jpg',
  'Beauty and the Beast':'https://upload.wikimedia.org/wikipedia/en/5/5e/Beauty_and_the_Beast_%281991_film%29_poster.jpg',
  'Being John Malkovich':'https://upload.wikimedia.org/wikipedia/en/5/55/Being_John_Malkovich_poster.jpg',
  'Beverly Hills Cop':'https://upload.wikimedia.org/wikipedia/en/a/a2/Beverly_Hills_Cop.jpg',
  'Blade Runner':'https://upload.wikimedia.org/wikipedia/en/9/9f/Blade_Runner_%281982_poster%29.png',
  'Blue Velvet':'https://upload.wikimedia.org/wikipedia/en/f/fd/Blue_Velvet_%281986_poster%29.png',
  'Braveheart':'https://upload.wikimedia.org/wikipedia/en/e/e1/Braveheart_film_poster.png',
  'Carrie':'https://upload.wikimedia.org/wikipedia/en/d/d7/Carrieposter.jpg',
  'Chinatown':'https://upload.wikimedia.org/wikipedia/en/3/38/Chinatownposter1.jpg',
  'Close Encounters of the Third Kind':'https://upload.wikimedia.org/wikipedia/en/b/ba/Close_Encounters_of_the_Third_Kind_%281977%29_theatrical_poster.jpg',
  'Dances with Wolves':'https://upload.wikimedia.org/wikipedia/en/8/82/Dances_with_Wolves_poster.jpg',
  'Deliverance':'https://upload.wikimedia.org/wikipedia/en/e/e5/Deliverance_poster.jpg',
  'Die Hard':'https://upload.wikimedia.org/wikipedia/en/c/ca/Die_Hard_%281988_film%29_poster.jpg',
  'Dirty Harry':'https://upload.wikimedia.org/wikipedia/en/6/65/Dirty_harry.jpg',
  'Do the Right Thing':'https://upload.wikimedia.org/wikipedia/en/0/03/Do_the_Right_Thing_poster.png',
  'Dog Day Afternoon':'https://upload.wikimedia.org/wikipedia/en/4/44/Dog_Day_Afternoon_film_poster.jpg',
  'E.T. the Extra-Terrestrial':'https://upload.wikimedia.org/wikipedia/en/6/66/E_t_the_extra_terrestrial_ver3.jpg',
  'Fargo':'https://upload.wikimedia.org/wikipedia/en/3/33/Fargo_%281996_movie_poster%29.jpg',
  "Ferris Bueller's Day Off":'https://upload.wikimedia.org/wikipedia/en/9/9b/Ferris_Bueller%27s_Day_Off.jpg',
  'Fight Club':'https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg',
  'Forrest Gump':'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg',
  'Ghostbusters':'https://upload.wikimedia.org/wikipedia/en/2/2f/Ghostbusters_%281984%29_theatrical_poster.png',
  'Goodfellas':'https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg',
  'Grease':'https://upload.wikimedia.org/wikipedia/en/e/e2/Grease_ver2.jpg',
  'Groundhog Day':'https://upload.wikimedia.org/wikipedia/en/b/b1/Groundhog_Day_%28movie_poster%29.jpg',
  'Halloween':'https://upload.wikimedia.org/wikipedia/en/a/af/Halloween_%281978%29_theatrical_poster.jpg',
  'Heat':'https://upload.wikimedia.org/wikipedia/en/6/6c/Heatposter.jpg',
  'Independence Day':'https://upload.wikimedia.org/wikipedia/en/b/bb/Independence_day_movieposter.jpg',
  'Indiana Jones and the Last Crusade':'https://upload.wikimedia.org/wikipedia/en/8/8c/Indiana_Jones_and_the_Last_Crusade.png',
  "All the President's Men":'https://upload.wikimedia.org/wikipedia/en/9/92/All_the_president%27s_men.jpg',
  "Invasion of the Body Snatchers":'https://upload.wikimedia.org/wikipedia/en/9/93/Invasion_of_the_body_snatchers_movie_poster_1978.jpg',
  'Jurassic Park':'https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg',
  'Kramer vs. Kramer':'https://upload.wikimedia.org/wikipedia/en/b/b0/Oscar_posters_79.jpg',
  'L.A. Confidential':'https://upload.wikimedia.org/wikipedia/en/d/d8/La_confidential.jpg',
  'Lethal Weapon':'https://upload.wikimedia.org/wikipedia/en/d/d9/Lethal_weapon1.jpg',
  'Manhattan':'https://upload.wikimedia.org/wikipedia/en/f/f3/Manhattan-poster01.jpg',
  'Men in Black':'https://upload.wikimedia.org/wikipedia/en/f/fb/Men_in_Black_Poster.jpg',
  'Midnight Run':'https://upload.wikimedia.org/wikipedia/en/d/da/Midnight_Run.jpg',
  'Monty Python and the Holy Grail':'https://upload.wikimedia.org/wikipedia/en/0/08/Monty-Python-1975-poster.png',
  'Network':'https://upload.wikimedia.org/wikipedia/en/e/e3/Network_%281976_poster%29.png',
  'Once Upon a Time in America':'https://upload.wikimedia.org/wikipedia/en/c/c2/Once_Upon_a_Time_in_America.png',
  "One Flew Over the Cuckoo's Nest":'https://upload.wikimedia.org/wikipedia/en/2/26/One_Flew_Over_the_Cuckoo%27s_Nest_poster.jpg',
  'Patton':'https://upload.wikimedia.org/wikipedia/en/f/f2/70_patton.jpg',
  'Platoon':'https://upload.wikimedia.org/wikipedia/en/a/a9/Platoon_posters_86.jpg',
  'Pulp Fiction':'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg',
  'Raging Bull':'https://upload.wikimedia.org/wikipedia/en/5/5f/Raging_Bull_poster.jpg',
  'Raiders of the Lost Ark':'https://upload.wikimedia.org/wikipedia/en/4/4c/Raiders_of_the_Lost_Ark.jpg',
  'Rain Man':'https://upload.wikimedia.org/wikipedia/en/b/b2/Rain_Man_poster.jpg',
  'Raising Arizona':'https://upload.wikimedia.org/wikipedia/en/3/31/Raising-Arizona-Poster.jpg',
  'Ran':'https://upload.wikimedia.org/wikipedia/en/f/f2/Kuroran.jpg',
  'Return of the Jedi':'https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg',
  'RoboCop':'https://upload.wikimedia.org/wikipedia/en/1/16/RoboCop_%281987%29_theatrical_poster.jpg',
  'Rocky':'https://upload.wikimedia.org/wikipedia/en/1/18/Rocky_poster.jpg',
  'Saturday Night Fever':'https://upload.wikimedia.org/wikipedia/en/4/45/Saturday_night_fever_movie_poster.jpg',
  'Saving Private Ryan':'https://upload.wikimedia.org/wikipedia/en/a/ac/Saving_Private_Ryan_poster.jpg',
  'Scarface':'https://upload.wikimedia.org/wikipedia/en/7/71/Scarface_-_1983_film.jpg',
  "Schindler's List":'https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg',
  'Scream':'https://upload.wikimedia.org/wikipedia/en/8/86/Scream_%281996_film%29_poster.jpg',
  'Se7en':'https://upload.wikimedia.org/wikipedia/en/6/68/Seven_%28movie%29_poster.jpg',
  'Serpico':'https://upload.wikimedia.org/wikipedia/en/e/ef/Serpico_poster.jpg',
  'Solaris':'https://upload.wikimedia.org/wikipedia/en/5/54/Solyaris_ussr_poster.jpg',
  'Speed':'https://upload.wikimedia.org/wikipedia/en/4/45/Speed_movie_poster.jpg',
  'Stand by Me':'https://upload.wikimedia.org/wikipedia/en/7/74/Stand_By_Me_1986_American_Theatrical_Release_Poster.jpg',
  'Star Wars: Episode IV - A New Hope':'https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg',
  'Superman':'https://upload.wikimedia.org/wikipedia/en/b/b0/Superman_%281978_film_poster%29.jpg',
  'Taxi Driver':'https://upload.wikimedia.org/wikipedia/en/3/33/Taxi_Driver_%281976_film_poster%29.jpg',
  'Terminator 2: Judgment Day':'https://upload.wikimedia.org/wikipedia/en/5/5e/Terminator_2-Judgment_Day.png',
  'The Abyss':'https://upload.wikimedia.org/wikipedia/en/a/ad/TheAbyss.jpg',
  'The Big Lebowski':'https://upload.wikimedia.org/wikipedia/en/3/35/Biglebowskiposter.jpg',
  'The Breakfast Club':'https://upload.wikimedia.org/wikipedia/en/d/d1/The_Breakfast_Club_poster.jpg',
  'The Color Purple':'https://upload.wikimedia.org/wikipedia/en/b/be/The_Color_Purple_poster.jpg',
  'The Conversation':'https://upload.wikimedia.org/wikipedia/en/e/e0/Theconversation.jpg',
  'The Deer Hunter':'https://upload.wikimedia.org/wikipedia/en/5/57/The_Deer_Hunter_poster.jpg',
  'The Empire Strikes Back':'https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg',
  'The Exorcist':'https://upload.wikimedia.org/wikipedia/en/7/7b/Exorcist_ver2.jpg',
  'The Fly':'https://upload.wikimedia.org/wikipedia/en/a/aa/Fly_poster.jpg',
  'The French Connection':'https://upload.wikimedia.org/wikipedia/en/b/b8/TheFrenchConnection.jpg',
  'The Fugitive':'https://upload.wikimedia.org/wikipedia/en/c/c7/The_Fugitive_movie.jpg',
  'The Godfather':'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
  'The Godfather Part II':'https://upload.wikimedia.org/wikipedia/en/0/03/Godfather_part_ii.jpg',
  'The Green Mile':'https://upload.wikimedia.org/wikipedia/en/e/e2/The_Green_Mile_%28movie_poster%29.jpg',
  'The Iron Giant':'https://upload.wikimedia.org/wikipedia/en/d/d3/The_Iron_Giant_poster.JPG',
  'The Lion King':'https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg',
  'The Man Who Would Be King':'https://upload.wikimedia.org/wikipedia/en/8/8c/The_Man_Who_Would_Be_King.jpg',
  'The Mask':'https://upload.wikimedia.org/wikipedia/en/4/4b/The_Mask_%28film%29_poster.jpg',
  'The Matrix':'https://upload.wikimedia.org/wikipedia/en/d/db/The_Matrix.png',
  'The Prince of Egypt':'https://upload.wikimedia.org/wikipedia/en/6/6c/Prince_of_egypt_ver2.jpg',
  'The Princess Bride':'https://upload.wikimedia.org/wikipedia/en/d/db/Princess_bride.jpg',
  'The Road Warrior':'https://upload.wikimedia.org/wikipedia/en/f/f7/Mad_max_two_the_road_warrior.jpg',
  'The Shawshank Redemption':'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
  'The Shining':'https://upload.wikimedia.org/wikipedia/en/1/1d/The_Shining_%281980%29_U.K._release_poster_-_The_tide_of_terror_that_swept_America_IS_HERE.jpg',
  'The Silence of the Lambs':'https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg',
  'The Sixth Sense':'https://upload.wikimedia.org/wikipedia/en/a/a4/The_Sixth_Sense_poster.png',
  'The Terminator':'https://upload.wikimedia.org/wikipedia/en/6/6d/The_Terminator.png',
  'The Texas Chain Saw Massacre':'https://upload.wikimedia.org/wikipedia/en/a/a0/The_Texas_Chain_Saw_Massacre_%281974%29_theatrical_poster.jpg',
  'The Thin Red Line':'https://upload.wikimedia.org/wikipedia/en/a/ae/The_Thin_Red_Line_Poster.jpg',
  'The Thing':'https://upload.wikimedia.org/wikipedia/en/e/e3/The_Thing_%281982_film%29.png',
  'The Towering Inferno':'https://upload.wikimedia.org/wikipedia/en/5/5c/Towering_inferno_movie_poster.jpg',
  'The Truman Show':'https://upload.wikimedia.org/wikipedia/en/c/cd/Trumanshow.jpg',
  'The Usual Suspects':'https://upload.wikimedia.org/wikipedia/en/9/9c/Usual_suspects_ver1.jpg',
  'The Warriors':'https://upload.wikimedia.org/wikipedia/en/0/03/TheWarriors_1979_Movie_Poster.jpg',
  'The Wild Bunch':'https://upload.wikimedia.org/wikipedia/en/0/05/The_Wild_Bunch.JPG',
  'Titanic':'https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png',
  'Top Gun':'https://upload.wikimedia.org/wikipedia/en/4/46/Top_Gun_Movie.jpg',
  'Toy Story':'https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg',
  'Trainspotting':'https://upload.wikimedia.org/wikipedia/en/7/71/Trainspotting_ver2.jpg',
  'When Harry Met Sally...':'https://upload.wikimedia.org/wikipedia/en/1/1c/WhenHarryMetSallyPoster.jpg',
  'Willy Wonka & the Chocolate Factory':'https://upload.wikimedia.org/wikipedia/en/7/7f/WillyWonkaMoviePoster.jpg',
  'Witness':'https://upload.wikimedia.org/wikipedia/en/b/bc/Witness_movie.jpg'
};
function posterUrl(movie) {
  return posterUrls[movie.title.trim()] || posterUrls[movie.title] || posterFallback(movie);
}
function posterFallback(movie) {
  const title = movie.title.trim().replace(/&/g,'and').slice(0,24);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="270"><rect width="180" height="270" fill="#141414"/><rect x="10" y="10" width="160" height="250" rx="8" fill="none" stroke="#d4af37" stroke-width="2"/><circle cx="90" cy="78" r="32" fill="#d4af37" opacity=".16"/><path d="M72 78h36M90 60v36" stroke="#d4af37" stroke-width="2"/><text x="90" y="155" fill="#f4f4f5" font-family="Arial" font-size="15" font-weight="700" text-anchor="middle"><tspan x="90">${title}</tspan></text><text x="90" y="235" fill="#d4af37" font-family="Arial" font-size="12" text-anchor="middle">${movie.year} · ${movie.genres[0]}</text></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

const decadeLabel = d => `Anni '${String(d).slice(2)}`;
d3.select('#film-gallery').append('div').attr('class','film-gallery-track').selectAll('article').data([...movies, ...movies]).join('article').attr('class','film-card').html(m=>`<img src="${posterUrl(m)}" alt="Copertina di ${m.title}" loading="lazy"><div class="film-card-copy"><h3>${m.title}</h3><p>${m.year} · ${m.director}</p></div>`);

const musicButton = document.querySelector('#music-toggle');
let navMusicButton = null;
let audioCtx = null;
let grooveTimer = null;
let musicOn = false;
let noiseBuffer = null;

function syncMusicUI(playing) {
  if (musicButton) {
    musicButton.textContent = playing
      ? '■ Ferma sottofondo musicale'
      : '♫ Ascolta sottofondo musicale';
    musicButton.classList.toggle('playing', playing);
    musicButton.setAttribute('aria-pressed', String(playing));
  }
  if (navMusicButton) {
    navMusicButton.classList.toggle('playing', playing);
    navMusicButton.setAttribute('aria-pressed', String(playing));
    navMusicButton.setAttribute('aria-label', playing ? 'Spegni sottofondo musicale' : 'Accendi sottofondo musicale');
    navMusicButton.title = playing ? 'Spegni sottofondo musicale' : 'Accendi sottofondo musicale';
  }
}

function getNoiseBuffer(ctx) {
  if (noiseBuffer) return noiseBuffer;
  const bufferSize = ctx.sampleRate * 1.0;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
  noiseBuffer = buffer;
  return buffer;
}

function play80sKick(ctx, t) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(150, t);
  osc.frequency.exponentialRampToValueAtTime(45, t + 0.11);
  gain.gain.setValueAtTime(0.36, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.24);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.25);
}

function play80sSnare(ctx, t) {
  const osc = ctx.createOscillator();
  const oscGain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(185, t);
  osc.frequency.exponentialRampToValueAtTime(90, t + 0.08);
  oscGain.gain.setValueAtTime(0.14, t);
  oscGain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
  osc.connect(oscGain);
  oscGain.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.13);

  const noise = ctx.createBufferSource();
  noise.buffer = getNoiseBuffer(ctx);
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.setValueAtTime(1800, t);
  filter.Q.setValueAtTime(0.9, t);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.17, t);
  gain.gain.linearRampToValueAtTime(0.12, t + 0.08);
  gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  noise.start(t);
  noise.stop(t + 0.23);
}

function play80sHat(ctx, t, open) {
  const noise = ctx.createBufferSource();
  noise.buffer = getNoiseBuffer(ctx);
  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.setValueAtTime(7000, t);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(open ? 0.065 : 0.025, t);
  gain.gain.exponentialRampToValueAtTime(0.0005, t + (open ? 0.16 : 0.045));
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  noise.start(t);
  noise.stop(t + (open ? 0.17 : 0.05));
}

function play80sBass(ctx, t, freq, dur) {
  const osc = ctx.createOscillator();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  osc.type = 'sawtooth';
  osc.frequency.setValueAtTime(freq, t);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(750, t);
  filter.frequency.exponentialRampToValueAtTime(220, t + dur);

  gain.gain.setValueAtTime(0.001, t);
  gain.gain.linearRampToValueAtTime(0.18, t + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.001, t + dur);

  osc.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

function play80sSynth(ctx, t, freqs, dur) {
  freqs.forEach(f => {
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const filter = ctx.createBiquadFilter();
    const gain = ctx.createGain();

    osc1.type = 'sawtooth';
    osc2.type = 'triangle';
    osc1.frequency.setValueAtTime(f, t);
    osc2.frequency.setValueAtTime(f * 1.004, t);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2200, t);
    filter.frequency.exponentialRampToValueAtTime(950, t + dur);

    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.032, t + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0005, t + dur);

    osc1.connect(filter);
    osc2.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(t);
    osc2.start(t);
    osc1.stop(t + dur + 0.04);
    osc2.stop(t + dur + 0.04);
  });
}

function start80sBackingTrack() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const bars = [
    { bassLow: 110.00, bassHigh: 220.00, chord: [440.00, 523.25, 659.25] },
    { bassLow: 87.31,  bassHigh: 174.61, chord: [349.23, 440.00, 523.25] },
    { bassLow: 130.81, bassHigh: 261.63, chord: [392.00, 523.25, 659.25] },
    { bassLow: 98.00,  bassHigh: 196.00, chord: [392.00, 493.88, 587.33] }
  ];

  let step = 0;
  const stepMs = 132;

  function tick() {
    if (!musicOn) return;
    const t = audioCtx.currentTime;
    const barIdx = Math.floor(step / 16);
    const s = step % 16;
    const current = bars[barIdx];

    if (s % 4 === 0) play80sKick(audioCtx, t);
    if (s === 4 || s === 12) play80sSnare(audioCtx, t);
    if (s % 2 === 0) play80sHat(audioCtx, t, s % 4 === 2);

    if (s % 2 === 0) {
      const freq = (s % 4 === 0) ? current.bassLow : current.bassHigh;
      play80sBass(audioCtx, t, freq, 0.22);
    }

    if (s === 0) play80sSynth(audioCtx, t, current.chord, 0.75);
    if (s === 6) play80sSynth(audioCtx, t, current.chord, 0.45);
    if (s === 10) play80sSynth(audioCtx, t, current.chord, 0.65);

    step = (step + 1) % 64;
  }

  tick();
  grooveTimer = setInterval(tick, stepMs);
}

function stop80sBackingTrack() {
  if (grooveTimer) {
    clearInterval(grooveTimer);
    grooveTimer = null;
  }
  if (audioCtx && audioCtx.state === 'running') {
    audioCtx.suspend();
  }
}

function toggleMusic() {
  if (musicOn) {
    stop80sBackingTrack();
    musicOn = false;
    syncMusicUI(false);
  } else {
    start80sBackingTrack();
    musicOn = true;
    syncMusicUI(true);
  }
}

if (musicButton) {
  musicButton.addEventListener('click', toggleMusic);
}

const decadeData = d => movies.filter(m => m.decade === d);
const totalBox = d3.sum(movies, m => m.boxOffice || 0);
d3.select('#stats').html(`
  <div class="stat"><b>${movies.length}</b><span>Film nel dataset</span></div>
  <div class="stat"><b>3</b><span>Decenni a confronto</span></div>
  <div class="stat"><b>${new Set(movies.map(m => m.director)).size}</b><span>Registi unici</span></div>
  <div class="stat"><b>$${(totalBox / 1000).toFixed(1)}B</b><span>Incasso totale</span></div>`);

const STRIP_FRAMES = [
  ['https://images.pexels.com/photos/5826828/pexels-photo-5826828.jpeg?auto=compress&cs=tinysrgb&w=800', 'Proiettore'],
  ['https://images.pexels.com/photos/18413963/pexels-photo-18413963.jpeg?auto=compress&cs=tinysrgb&w=800', 'Proiezione e scrittura'],
  ['https://images.pexels.com/photos/5627837/pexels-photo-5627837.jpeg?auto=compress&cs=tinysrgb&w=800', 'Ciak e macchina da presa'],
  ['https://images.pexels.com/photos/5627838/pexels-photo-5627838.jpeg?auto=compress&cs=tinysrgb&w=800', 'Ciak su legno'],
  ['https://images.pexels.com/photos/3692639/pexels-photo-3692639.jpeg?auto=compress&cs=tinysrgb&w=800', 'Ripresa in esterna'],
  ['https://images.pexels.com/photos/3692637/pexels-photo-3692637.jpeg?auto=compress&cs=tinysrgb&w=800', 'Il volto della scena'],
  ['https://images.pexels.com/photos/3692641/pexels-photo-3692641.jpeg?auto=compress&cs=tinysrgb&w=800', 'Operatore alla cinepresa'],
  ['https://images.pexels.com/photos/30396798/pexels-photo-30396798.jpeg?auto=compress&cs=tinysrgb&w=800', 'Troupe sul set'],
  ['https://images.pexels.com/photos/30697922/pexels-photo-30697922.jpeg?auto=compress&cs=tinysrgb&w=800', 'Regia'],
  ['https://images.pexels.com/photos/28613680/pexels-photo-28613680.jpeg?auto=compress&cs=tinysrgb&w=800', 'Rig di ripresa']
];
d3.select('#film-strip').append('div').attr('class', 'film-strip-track')
  .selectAll('figure').data([...STRIP_FRAMES, ...STRIP_FRAMES]).join('figure').attr('class', 'film-frame')
  .html(d => `<img src="${d[0]}" alt="" loading="lazy">`);

function chartSize(el, height) { const width = Math.max(300, el.parentElement.clientWidth - 20); return {width, height}; }
function addAxesStyle(selection) { selection.selectAll('text').attr('fill','#a1a1aa').attr('font-size',11); selection.selectAll('line').attr('stroke','#333').attr('stroke-dasharray','3 3'); selection.select('.domain').attr('stroke','#555'); }
function moveTip(event) {
  const pad = 14;
  const tipNode = tooltip.node();
  const rect = tipNode ? tipNode.getBoundingClientRect() : { width: 260, height: 80 };
  let left = event.clientX + pad;
  let top = event.clientY - rect.height - 10;
  if (left + rect.width > window.innerWidth - 12) {
    left = Math.max(12, event.clientX - rect.width - pad);
  }
  if (top < 12) {
    top = Math.min(window.innerHeight - rect.height - 12, event.clientY + 18);
  }
  tooltip.style('left', `${left}px`).style('top', `${top}px`);
}
function showTip(event, html) {
  tooltip.style('opacity', 1).html(html);
  moveTip(event);
}
function hideTip() { tooltip.style('opacity', 0); }

let selectedFilm = movies.find(m => m.title === 'Titanic') || movies[0];

function ensureFilmDetailVisible() {
  const detailEl = document.querySelector('#film-detail');
  if (!detailEl) return;
  const rect = detailEl.getBoundingClientRect();
  const topSafe = 74;
  const bottomSafe = window.innerHeight - 82;
  const availableH = Math.max(120, bottomSafe - topSafe);

  if (rect.height >= availableH) {
    const targetTop = window.scrollY + rect.top - topSafe;
    window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' });
    return;
  }

  if (rect.bottom > bottomSafe) {
    const delta = rect.bottom - bottomSafe;
    window.scrollTo({ top: Math.max(0, window.scrollY + delta), behavior: 'smooth' });
  } else if (rect.top < topSafe) {
    const delta = rect.top - topSafe;
    window.scrollTo({ top: Math.max(0, window.scrollY + delta), behavior: 'smooth' });
  }
}

function renderFilmDetail(movie, shouldScroll = false) {
  selectedFilm = movie;
  d3.select('#film-detail').html(`<img src="${posterUrl(movie)}" alt="Copertina di ${movie.title}"><div><div class="kicker">FILM SELEZIONATO · CLICCA UN PUNTO</div><h3>${movie.title}</h3><p>${movie.year} · ${movie.genres.join(', ')} · Regia di ${movie.director}</p><p>Incasso: <strong>${d3.format(',.1f')(movie.boxOffice || 0)}M</strong> · Voto IMDb: <strong>${movie.rating}</strong></p></div>`);
  if (shouldScroll) {
    requestAnimationFrame(() => ensureFilmDetailVisible());
  }
}

function renderGenres() {
  const el = document.querySelector('#genre-chart');
  if (!el) return;
  const width = Math.max(300, el.parentElement.clientWidth - 20);
  const margin = { top: 12, right: 48, bottom: 40, left: 120 };
  const genres = [...new Set(movies.map(m => m.genres[0]))];
  const rows = genres
    .map(genre => ({
      genre,
      ...Object.fromEntries([1970, 1980, 1990].map(d => [d, decadeData(d).filter(m => m.genres[0] === genre).length]))
    }))
    .sort((a, b) => d3.sum([1970, 1980, 1990], d => b[d]) - d3.sum([1970, 1980, 1990], d => a[d]));
  const height = rows.length * 66 + margin.top + margin.bottom;
  const iw = width - margin.left - margin.right;
  const ih = height - margin.top - margin.bottom;
  const svg = d3.select(el).attr('viewBox', `0 0 ${width} ${height}`);
  svg.selectAll('*').remove();
  const g = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
  const maxX = d3.max(rows, r => d3.max([1970, 1980, 1990], k => r[k])) || 1;
  const x = d3.scaleLinear().domain([0, maxX]).range([0, iw]).nice();
  const y = d3.scaleBand().domain(rows.map(r => r.genre)).range([0, ih]).paddingInner(.3);
  const yDec = d3.scaleBand().domain([1970, 1980, 1990]).range([0, y.bandwidth()]).padding(.15);

  x.ticks(5).forEach(t =>
    g.append('line')
      .attr('x1', x(t)).attr('x2', x(t))
      .attr('y1', 0).attr('y2', ih)
      .attr('stroke', '#27272a')
      .attr('stroke-dasharray', '3 3')
  );

  addAxesStyle(g.append('g').attr('transform', `translate(0,${ih})`).call(d3.axisBottom(x).ticks(5).tickFormat(d3.format('d'))));
  g.append('g').call(d3.axisLeft(y).tickSize(0))
    .call(s => s.select('.domain').remove())
    .call(s => s.selectAll('text').attr('fill', '#e4e4e7').attr('font-size', 12));

  rows.forEach((r, ri) => {
    const rowY = y(r.genre) ?? 0;
    [1970, 1980, 1990].forEach(dec => {
      const v = r[dec];
      const by = rowY + (yDec(dec) ?? 0);
      const bh = yDec.bandwidth();
      const titles = decadeData(dec)
        .filter(m => m.genres[0] === r.genre)
        .map(m => m.title)
        .sort((a, b) => a.localeCompare(b));

      const tipHtml = v > 0
        ? `<b>${r.genre}</b> · ${decadeLabel(dec)} · ${v} film<br>${titles.join(' · ')}`
        : `<b>${r.genre}</b> · ${decadeLabel(dec)} · Nessun film`;

      g.append('rect')
        .attr('x', 0)
        .attr('y', by)
        .attr('width', 0)
        .attr('height', bh)
        .attr('rx', 3)
        .attr('fill', colors[dec])
        .style('cursor', 'default')
        .on('mouseenter', e => showTip(e, tipHtml))
        .on('mousemove', e => moveTip(e))
        .on('mouseleave', hideTip)
        .transition().duration(700).delay(ri * 60).attr('width', x(v));

      if (v > 0) {
        g.append('text')
          .attr('x', x(v) + 6)
          .attr('y', by + bh / 2)
          .attr('dy', '0.35em')
          .attr('fill', colors[dec])
          .attr('font-size', 11)
          .attr('font-weight', 600)
          .text(v);
      }
    });
  });
}

renderGenres();

function renderBoxOffice() {
  const el=document.querySelector('#boxoffice-chart');const {width,height}=chartSize(el,440);const margin={top:20,right:20,bottom:55,left:77};const iw=width-margin.left-margin.right,ih=height-margin.top-margin.bottom;const data=movies.filter(m=>m.boxOffice!=null);
  const svg=d3.select(el).attr('viewBox',`0 0 ${width} ${height}`).attr('height',height*el.parentElement.clientWidth/width||height);svg.selectAll('*').remove();const g=svg.append('g').attr('transform',`translate(${margin.left},${margin.top})`);const x=d3.scaleLinear().domain([1969,2000]).range([0,iw]);const y=d3.scaleLog().domain([3,d3.max(movies,m=>m.boxOffice)]).range([ih,0]);
  addAxesStyle(g.append('g').call(d3.axisLeft(y).tickValues([3,10,30,100,300,1000,3000]).tickFormat(d=>(d>=1000?`${d/1000}B`:`${d}M`)).tickSize(-iw)));addAxesStyle(g.append('g').attr('transform',`translate(0,${ih})`).call(d3.axisBottom(x).ticks(8).tickFormat(d3.format('d'))));g.append('text').attr('x',iw/2).attr('y',ih+43).attr('text-anchor','middle').attr('fill','#71717a').attr('font-size',12).text('Anno di uscita');g.append('text').attr('transform','rotate(-90)').attr('x',-ih/2).attr('y',-60).attr('text-anchor','middle').attr('fill','#71717a').attr('font-size',12).text('Incasso al botteghino (milioni $, scala log)');
  const radius=d3.scaleSqrt().domain([5,10]).range([4,11]);g.selectAll('circle').data(data).join('circle').attr('cx',m=>x(m.year)).attr('cy',m=>y(m.boxOffice)).attr('r',m=>radius(m.rating)).attr('fill',m=>colors[m.decade]).attr('opacity',.8).attr('stroke','#080808').style('cursor','pointer').on('click',function(e,m){renderFilmDetail(m,true);}).on('mouseenter',(e,m)=>showTip(e,`<div class="film-tip"><img class="tooltip-poster" src="${posterUrl(m)}" alt="Copertina di ${m.title}"><div><b>${m.title}</b><br><span>${m.year} · ${m.genres.join(', ')}</span><br>Regia: ${m.director}<br>Incasso: ${d3.format(',.1f')(m.boxOffice)}M<br>Voto IMDb: ${m.rating}</div></div>`)).on('mousemove',e=>moveTip(e)).on('mouseleave',hideTip);
}
renderBoxOffice();
renderFilmDetail(selectedFilm, false);

let directorObserver=null;
function renderDirector(){
  const el=document.querySelector('#director-chart');
  const DECADES=[1970,1980,1990], TOP_N=12, ROW_H=44, BAR_H=24;
  const byDirector=new Map();
  movies.forEach(m=>{
    if(!byDirector.has(m.director)) byDirector.set(m.director,{name:m.director,ratings:[],boxes:[],perDecade:{1970:0,1980:0,1990:0}});
    const d=byDirector.get(m.director); d.ratings.push(m.rating); d.boxes.push(m.boxOffice||0); d.perDecade[m.decade]++;
  });
  const rows=[...byDirector.values()].map(d=>({name:d.name,total:d.ratings.length,perDecade:d.perDecade,avgRating:d3.mean(d.ratings)||0,avgBox:d3.mean(d.boxes)||0}))
    .sort((a,b)=>b.total-a.total||a.name.localeCompare(b.name)).slice(0,TOP_N);
  const W=Math.max(320, Math.min(960, el.parentElement.clientWidth - 20));
  const H=rows.length*ROW_H+16;
  const labelW=Math.min(200,W*0.24), valueW=Math.min(200,W*0.22);
  const left=labelW+16, right=W-valueW-16, center=(left+right)/2;
  const unit=(right-left)/(d3.max(rows,r=>r.total)||1);
  const svg=d3.select(el).attr('viewBox',`0 0 ${W} ${H}`).attr('width','100%'); svg.selectAll('*').remove();
  if(directorObserver) directorObserver.disconnect();
  svg.append('line').attr('x1',center).attr('x2',center).attr('y1',0).attr('y2',H).attr('stroke','#3f3f46').attr('stroke-dasharray','3 4');
  const animators=[];
  rows.forEach((row,ri)=>{
    const rowY=8+ri*ROW_H, barY=rowY+(ROW_H-BAR_H)/2;
    const g=svg.append('g').attr('class','row');
    let cursor=center-(row.total*unit)/2;
    DECADES.forEach((dec,di)=>{
      const w=row.perDecade[dec]*unit;
      if(w<=0) return;
      const targetX=cursor; cursor+=w;
      const rect=g.append('rect').attr('x',center).attr('y',barY).attr('width',0).attr('height',BAR_H).attr('rx',4).attr('fill',colors[dec]);
      animators.push(()=>rect.transition().delay(ri*120+di*90).duration(900).ease(d3.easeCubicOut).attr('x',targetX).attr('width',w));
    });
    const nameLabel=g.append('text').attr('x',labelW).attr('y',rowY+ROW_H/2).attr('dy','0.35em').attr('text-anchor','end').attr('fill','#e4e4e7').attr('font-size',13).attr('font-weight',600).attr('opacity',0).text(row.name);
    const countLabel=g.append('text').attr('x',right+16).attr('y',rowY+ROW_H/2-2).attr('fill','#fafafa').attr('font-size',13).attr('font-weight',700).attr('opacity',0).text(`${row.total} film · media ${row.avgRating.toFixed(2)}`);
    const decadeLabel=g.append('text').attr('x',right+16).attr('y',rowY+ROW_H/2+14).attr('fill','#a1a1aa').attr('font-size',11).attr('opacity',0).text(DECADES.map(d=>`'${String(d).slice(2)}: ${row.perDecade[d]}`).join('  ·  '));
    animators.push(()=>{
      const delay=ri*120+250;
      [nameLabel,countLabel,decadeLabel].forEach(t=>t.transition().delay(delay).duration(600).attr('opacity',1));
    });
    g.append('rect').attr('x',0).attr('y',rowY).attr('width',W).attr('height',ROW_H).attr('fill','transparent')
      .on('mouseenter',e=>{
        svg.selectAll('g.row').style('opacity',.35); g.style('opacity',1);
        showTip(e,`<b>${row.name}</b><br>${row.total} film nel dataset · media IMDb ${row.avgRating.toFixed(2)}<br>Incasso medio: ${d3.format(',.0f')(row.avgBox)}M<br>${DECADES.map(d=>`'${String(d).slice(2)}: ${row.perDecade[d]}`).join(' · ')}`);
      })
      .on('mousemove',e=>moveTip(e))
      .on('mouseleave',()=>{ svg.selectAll('g.row').style('opacity',1); hideTip(); });
  });
  directorObserver=new IntersectionObserver(entries=>{
    if(entries.some(e=>e.isIntersecting)){ animators.forEach(run=>run()); directorObserver.disconnect(); }
  },{threshold:.35});
  directorObserver.observe(el);
}
renderDirector();

function renderRatings(){
  const el=document.querySelector('#rating-chart');
  const {width,height}=chartSize(el,360);
  const margin={top:28,right:20,bottom:66,left:46};
  const iw=width-margin.left-margin.right, ih=height-margin.top-margin.bottom;
  const svg=d3.select(el).attr('viewBox',`0 0 ${width} ${height}`);
  svg.selectAll('*').remove();
  const g=svg.append('g').attr('transform',`translate(${margin.left},${margin.top})`);
  const x0=d3.scaleBand().domain(['1970','1980','1990']).range([0,iw]).padding(.2);
  const xRating=d3.scaleLinear().domain([5.5,10]).range([0,x0.bandwidth()]);
  const bins=decade=>d3.bin().domain([5.5,10]).thresholds(d3.range(5.5,10.01,.5))(decadeData(decade).map(m=>m.rating));
  const allBins=[1970,1980,1990].map(d=>bins(d));
  const y=d3.scaleLinear().domain([0,d3.max(allBins,b=>d3.max(b,x=>x.length))+1]).range([ih,0]);
  addAxesStyle(g.append('g').attr('transform',`translate(0,${ih})`).call(d3.axisBottom(x0).tickFormat(d=>`'${d.slice(2)}`)));
  addAxesStyle(g.append('g').call(d3.axisLeft(y).ticks(5).tickSize(-iw)));
  [1970,1980,1990].forEach((dec,idx)=>{
    const gd=g.append('g').attr('transform',`translate(${x0(String(dec))},0)`);
    gd.selectAll('rect').data(allBins[idx]).join('rect')
      .attr('x',b=>xRating(b.x0)).attr('y',b=>y(b.length))
      .attr('width',b=>Math.max(0,xRating(b.x1)-xRating(b.x0)-2))
      .attr('height',b=>ih-y(b.length)).attr('fill',colors[dec]).attr('rx',2)
      .on('mouseenter',(e,b)=>showTip(e,`${decadeLabel(dec)}<br><b>${b.x0.toFixed(1)}–${b.x1.toFixed(1)}</b> · ${b.length} film`))
      .on('mousemove',e=>moveTip(e)).on('mouseleave',hideTip);
    const mean=d3.mean(decadeData(dec),m=>m.rating);
    g.append('text').attr('x',x0(String(dec))+x0.bandwidth()/2).attr('y',ih+30).attr('text-anchor','middle').attr('fill','#a1a1aa').attr('font-size',12).attr('font-weight',600).text(`Voto medio ${mean.toFixed(1)}`);
  });
}
renderRatings();
const SECTION_IDS=['hero','intro','generi','botteghino','filmografia','valutazioni','registi','scoperte','dati'];
window.addEventListener('resize',()=>{renderGenres();renderBoxOffice();renderDirector();renderRatings()});

const sectionNav=document.createElement('nav');
sectionNav.className='section-nav';
sectionNav.setAttribute('aria-label','Navigazione sezioni');
sectionNav.innerHTML=`<button type="button" data-action="prev" aria-label="Sezione precedente">←</button><button type="button" data-action="top" aria-label="Torna su">Torna su</button><button type="button" data-action="music" class="nav-music" aria-label="Accendi sottofondo musicale" aria-pressed="false" title="Accendi sottofondo musicale">♫</button><button type="button" data-action="next" aria-label="Sezione successiva">→</button>`;
document.body.appendChild(sectionNav);
navMusicButton = sectionNav.querySelector('[data-action="music"]');
let currentSection=0;
let isAutoScrolling=false;
let scrollUnlockTimer=null;
function syncCurrentSection(){
  if(isAutoScrolling) return;
  const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
  if(nearBottom){
    currentSection = SECTION_IDS.length - 1;
    return;
  }
  const triggerY=window.innerHeight*0.4;
  let active=0;
  SECTION_IDS.forEach((id,idx)=>{
    const el=document.getElementById(id);
    if(el && el.getBoundingClientRect().top<=triggerY) active=idx;
  });
  currentSection=active;
}
window.addEventListener('scroll',syncCurrentSection,{passive:true});
sectionNav.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{
  const action=b.dataset.action;
  if(action==='music'){
    toggleMusic();
    return;
  }
  if(action==='top'){
    currentSection=0;
    isAutoScrolling=true;
    clearTimeout(scrollUnlockTimer);
    scrollUnlockTimer=setTimeout(()=>{isAutoScrolling=false;},850);
    window.scrollTo({top:0,behavior:'smooth'});
    return;
  }
  const nextIdx=action==='next'?Math.min(currentSection+1,SECTION_IDS.length-1):Math.max(currentSection-1,0);
  const target=document.getElementById(SECTION_IDS[nextIdx]);
  if(target){
    currentSection=nextIdx;
    isAutoScrolling=true;
    clearTimeout(scrollUnlockTimer);
    scrollUnlockTimer=setTimeout(()=>{isAutoScrolling=false;},850);
    target.scrollIntoView({behavior:'smooth',block:'start'});
  }
}));
