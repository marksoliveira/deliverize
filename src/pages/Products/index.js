import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import Header from '../../components/Header';

import * as S from './styles';
import Button from '@material-ui/core/Button';

const Products = () => {
    const [product, setProduct] = useState("");
    
    useEffect(() => {
        getProducts();
    }, []);
    
    const getProducts = async () => {
        try {
            const response = await api.get('/');
            
            setProduct(response.data);
        } catch (error) {
            alert("Erro ao carregar produto :(");
        };
    };

    let productObj = {};
    for (let item of product) {
        productObj = {
            ...productObj,
            ...item
        }
    };

    let extraIngredients = [];
    for (let itemProduct of product) {
        for (let ingredients of itemProduct.ingredients) {
            if (ingredients.group === "Ingredientes Extras") {
                for (let itensExtra of ingredients.itens) {
                    extraIngredients.push(itensExtra)
                }
            }
        }
    };

    const formattedValue = (value) => {
        if (product) {
            const valueBRL = value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            return valueBRL;
        } else {
            return 0;
        }
    };

    return (
        <S.Wrapper>
            <Header />
            <S.Container>
                <S.Product>
                    <img src={productObj.url_image} alt="Product" />
                    <S.Title><p>{productObj.nm_product}</p></S.Title>
                    <S.Description><p>{productObj.description}</p></S.Description>
                    <S.Price>
                        <p>{formattedValue(productObj.vl_discount)}</p>
                        <span>{formattedValue(productObj.vl_price)}</span>
                    </S.Price>
                </S.Product>
                <S.AddIngredients>
                    <S.Content>
                        <S.TitleIngredients>
                            <p>Adicionar ingredientes</p>
                            <span>Até 8 ingredientes</span>
                        </S.TitleIngredients>

                        {extraIngredients.map((item, index) => {
                            return (
                                <S.Ingredients key={index}>
                                    <S.NameAndPrice>
                                        <p>{item.nm_item}</p>
                                        <span>{formattedValue(item.vl_item)}</span>
                                    </S.NameAndPrice>
                                    <S.Quantity>
                                        <span>-</span>
                                        <p>2</p>
                                        <span>+</span>
                                    </S.Quantity>
                                </S.Ingredients>
                            )
                        })}
                            
                        <S.AddCutlery>
                            <p>Precisa de Talher?</p>
                        </S.AddCutlery>
                        <S.Button>
                            <S.CutleryQuantity>
                                <span>-</span>
                                <p>1</p>
                                <span>+</span>
                            </S.CutleryQuantity>
                            <Button
                                style={{
                                    width: "13.6rem",
                                    height: "3rem",
                                    background: "#F09035",
                                    color: "#fff"
                                }}
                                variant="contained" 
                                size="medium"
                            >
                                Adicionar
                            </Button>
                        </S.Button>
                    </S.Content>
                </S.AddIngredients>
            </S.Container>
        </S.Wrapper>       
    );
};

export default Products;
