import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileView from './views/ProfileView';
import HandleView from './views/HandleView';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProfileView />} />
                <Route path="/:handle" element={<HandleView />} />
                <Route path="/404" element={<div>404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
    );
}
