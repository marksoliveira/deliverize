import React from 'react';

import Logo from '../../images/logo.png';
import Logo2 from '../../images/logo2.png';

import * as S from './styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Badge from '@material-ui/core/Badge';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Header = () => {
    return (
        <S.Wrapper>
            <S.LogoDeliverize>
                <S.Logo1 src={Logo} alt="Logo" />
                <S.Logo2 src={Logo2} alt="Logo2" />
            </S.LogoDeliverize>
            <S.InputsAndOptions>
                <FormControl variant="outlined">
                    <InputLabel id="simple-select">Entrega</InputLabel>
                    <Select
                        style={{
                            width: "14.3rem",
                            background: "#fff"
                        }}
                        labelId="simple-select"
                        id="select"
                        label="Entrega"
                    >
                        <MenuItem value={1}>Rua Antonio Braune, 222</MenuItem>
                    </Select>
                </FormControl>
                <S.Search placeholder="Busque por estabelecimentos ou produtos" />
                <S.Login>
                    <AccountCircleOutlinedIcon style={{color: '#ED3237'}} />
                    <span>Entrar</span>
                </S.Login>
                <S.ShoppingCart>
                    <Badge
                        color='error'
                        badgeContent={1}
                    >
                        <ShoppingCartOutlinedIcon style={{color: '#ED3237'}} />
                    </Badge>
                    <p>Carrinho</p>
                </S.ShoppingCart>
            </S.InputsAndOptions>
        </S.Wrapper>       
    );
};

export default Header;
