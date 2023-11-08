import { Card } from 'flowbite-react';

const Comments = ({ comment }) => {
    const { name, userPhoto, text } = comment;
    return (
        <Card className="max-w-sm">
        <div className="flex flex-col items-center pb-10">
            <img
                alt="Bonnie image"
                height="96"
                src={userPhoto}
                width="96"
                className="mb-3 rounded-full shadow-lg"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
            <div className="mt-4 flex space-x-3 lg:mt-6">
                <p>{text}</p>
            </div>
        </div>
    </Card>
        );
    }
export default Comments;