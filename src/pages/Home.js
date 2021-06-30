import React from "react";

export const Home = props => {
    return(
        <>
        <hi> Gerenciador de Tarefas - Home</hi>
        <a onClick={e => {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('usuarioNome');
            localStorage.removeItem('usuarioEmail');   
            props.setAccessToken('');       
        }}>Sair</a>
        </>
    );
}