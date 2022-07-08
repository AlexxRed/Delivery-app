import { Link } from "react-router-dom";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {Box, Text} from './NotFoundPage.styled'

export default function NotFoundPage() {
    Notify.info('Sorry, page not found :(');
    return (
        <Box>
            <Text>Sorry, page not found :( <Link to="/">Please go to main page</Link></Text>
        </Box>
    )
};