import {Button} from "./Button";
interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}
interface IModalProps {
    genres: GenreResponseProps[];
    handleClickButton: any;
    selectedGenreId: number;
}
export const SideBar =({genres, handleClickButton, selectedGenreId}:IModalProps)=> {
    return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
            {genres.map(genre => (
                <Button
                    key={String(genre.id)}
                    title={genre.title}
                    iconName={genre.name}
                    onClick={() => handleClickButton(genre.id)}
                    selected={selectedGenreId === genre.id}
                />
            ))}
        </div>

    </nav>
    )
}
