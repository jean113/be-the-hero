import React from 'react';

/*export default function Header()
{
    return (
        <header>
            <h1>Be the Hero</h1>
        </header>
    );

}*/


/*//com as chaves, vai aparecer o conteúdo da variavel
export default function Header(props)
{
    return (
        <header>
            <h1>{props.title}</h1> 
        </header>
    );

}*/

export default function Header(props)//3 forma
{
    return (
        <header>
            <h1>{props.children}</h1> 
        </header>
    );

}
