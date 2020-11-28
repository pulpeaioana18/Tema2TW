function addTokens(input, tokens){
    //validare string
    if(typeof input !== "string"){
        throw new Error("Invalid input");

    }
    //validare lungime
    if(input.length < 6){
        throw new Error("Input should have at least 6 characters");
    }
    //validare token
    for(let i = 0; i < tokens.length; i++){
        if(typeof tokens[i].tokenName !== "string"){
            throw new Error("Invalid array format");
        }
    }
    
    //daca nu existista puncte
    if(!input.includes("...")){
        return input;
    }

    //daca exista puncte
    let nrToken = 0;
    while(input.includes("...")){
        let tokenFormat = "${" + tokens[nrToken].tokenName + "}";
        input = input.replace("...", tokenFormat);
        nrToken++;
    }
    return input;
    
}

const app = {
    addTokens: addTokens
}

module.exports = app;