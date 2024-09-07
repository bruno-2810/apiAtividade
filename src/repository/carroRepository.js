import con from "./connection";


export async function inserirCarro(carro) {
    const comando = `
    
    insert into tb_carro ( ds_marca, ds_modelo, nr_ano, vl_preco, dt_inclusao)
	    values(?, ?, ?, ?, ?);
    
    `

    let resposta = await con.query(comando, [carro.marca, carro.modelo, carro.ano, carro.preco, carro.inclusao]);
    let info = resposta[0]

    return info.insertId
}


export async function consultarCarro() {
    const comando = `
    
    select id_carro     id,
            ds_marca    marca,
            ds_modelo   modelo,
            nr_ano      ano,
            vl_preco    preco,
            dt_inclusao inclusao
        from tb_carro
    
    `;

    let resposta = await con.query(comando);
    let info = resposta [0]

    return info
}

export async function alterarCarro (id, carro) {
    const comando = `
    update tb_carro
        set ds_marca = ?,
            ds_modelo = ?,
            nr_ano = ?,
            vl_preco = ?,
            dt_inclusao = ?

    where id_carro = ?;        
`

let resposta = await con.query(comando, [carro.marca, carro.modelo, carro.ano, carro.preco, carro.inclusao, id])
let info = resposta[0];

return info.affectedRows;
}

export async function removerCarro(id){
    const comando = `
    delete from tb_carro
    where id_carro = ?
`

let resposta = await con.query(comando, [id]);
let info = resposta[0];

return info.affectedRows;

}