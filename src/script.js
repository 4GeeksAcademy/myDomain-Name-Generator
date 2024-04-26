
let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.gal'];

//CON FOR NORMAL ANIDADO

/*for (let i = 0; i < pronoun.length; i++){
   // console.log(pronoun[i]);
    for( let x = 0; x < adj.length; x++){
       // console.log(pronoun[i] , adj[x])
       // console.log(adj[x]);
       for (let j = 0; j < noun.length; j++){
        for(let t = 0; t < domain.length; t++){
            console.log(pronoun[i] + adj[x] + noun[j]+ domain[t]);
        }
       }
   }

    
} */
    //Con ForEach
     pronoun.forEach(function(word){
        adj.forEach(function(adj){
            noun.forEach(function(noun){
                domain.forEach(function(domain){
                    console.log(word + adj + noun+ domain);
                })
            })
        })
    });

    
    







