interface TitleProps {
    currentPage: string;
    onPageChange: (page: string) => void;
}

function Title({ currentPage, onPageChange }: TitleProps) {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="text-xl text-accent">
                    CS3733-D25 Team 27: Biking and Snowboarding
                </a>
            </div>
            <div className="flex-none gap-2">
                <button 
                    className={`btn ${currentPage === 'hudson' ? 'btn-primary' : 'btn-ghost'}`}
                    onClick={() => onPageChange('hudson')}
                >
                    Hudson's Home Page
                </button>
                <button 
                    className={`btn ${currentPage === 'rohan' ? 'btn-primary' : 'btn-ghost'}`}
                    onClick={() => onPageChange('rohan')}
                >
                    Rohan's Home Page
                </button>
            </div>
        </div>
    )
}

export default Title
