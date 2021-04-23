import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Container = styled.section`
    display: flex;
    width: 100%;
    padding: 1.3rem 4.1rem;
`

export const Product = styled.article`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        margin-top: 1rem;
    }
`

export const Title = styled.div`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: #4E4E4E;
    margin-top: 0.5rem;
`

export const Description = styled.div`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    color: #4E4E4E;
`

export const Price = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 1rem;

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 2rem;
        color: #DC6E05;
        margin: 0;
        padding-right: 1.1rem;
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-size: 2rem;
        text-decoration-line: line-through;
        color: #4E4E4E;
    }
`

export const AddIngredients = styled.article`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Content = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    border: 1px solid #4E4E4E;
    padding: 1.5rem;
`

export const TitleIngredients = styled.div`
    width: 100%;
    height: 3.4rem;
    background: rgba(253, 215, 14, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
    margin-bottom: 0.8rem;

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 0.9rem;
        color: #4E4E4E;
        margin: 0;
        padding-bottom: 3px;
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-size: 0.8rem;
        color: #E49700;
    }
`

export const Ingredients = styled.div`
    width: 90%;
    height: 5.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E49700;
    padding: 3rem 0;
`

export const NameAndPrice = styled.div`
    p {
        margin: 0;
        padding-bottom: 1.8rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 0.9rem;
        color: #4E4E4E;
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-size: 0.9rem;
        color: #F09035;
    }
`

export const Quantity = styled.div`
    width: 5.5rem;
    height: 2rem;
    border: 1px solid #F09035;
    border-radius: 5px;
    padding: 0 0.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 1.6rem;
        color: #D80000;
        margin-bottom: 0.4rem;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 0.9rem;
        color: #4E4E4E;
    }
`

export const AddCutlery = styled.div`
    width: 100%;
    height: 3.4rem;
    background: rgba(253, 215, 14, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 1rem;
    margin: 0.6rem 0;

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 0.9rem;
        color: #4E4E4E;
        margin: 0;
        padding-bottom: 3px;
    }
`

export const Button = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CutleryQuantity = styled.div`
    width: 8.75rem;
    height: 3rem;
    border: 1px solid #F09035;
    border-radius: 5px;
    padding: 0 0.8rem;
    margin: 0.4rem 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        font-size: 2rem;
        color: #D80000;
        margin-bottom: 0.4rem;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-size: 0.9rem;
        color: #4E4E4E;
    }
`
