function leo(oscar){
    switch(true){
        case oscar === 88: return "Leo finally won the oscar! Leo is happy"
        case oscar === 86: return "Not even for Wolf of wallstreet?!"
        case oscar > 86 && oscar < 88 || oscar < 86: return "When will you give Leo an Oscar?"
        case oscar > 88: return "Leo got one already!"
    }
}

console.log(leo(82))