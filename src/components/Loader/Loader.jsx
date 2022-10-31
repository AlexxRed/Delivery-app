import { Oval } from 'react-loader-spinner';
import { Box } from "./Loader.styled";

export const Loader = () => {
    return (
    <Box>
        <Oval
        height={80}
        width={80}
        color="#44d142"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#4fa94d"
        strokeWidth={5}
        strokeWidthSecondary={4}
        />        
    </Box>
    )
};

