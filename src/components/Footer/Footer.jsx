import { Container, CompanyInfo, Tel } from './Footer.styled'


export default function Footer() {
    return (
        <>
            <Container>
                <CompanyInfo>Pro Delivery Ltd. 2022</CompanyInfo>
                <Tel>
                    <a style={{ textDecoration: "none", color: "black"}} href="tel:+1-900-566-45-55">Tel: +1-900-566-45-55</a>
                </Tel>
            </Container>
        </>
    )
}