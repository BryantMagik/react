import PropTypes from 'prop-types'

XfollowCard.propTypes = {
    userName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isFollowing: PropTypes.bool.isRequired
};

export function XfollowCard({ userName, name, isFollowing }) {
    return (
        <article className='x-followCard'>
            {/* <span className='x-followCard-title'><h2>Who to follow</h2></span> */}
            <header className='x-followCard-header'>
                <img
                    className='x-followCard-imgProfile'
                    alt="Icono de Twitter"
                    src={`https://unavatar.io/twitter/${userName}`} />
                <div className='x-followCard-body'>
                    <div className='x-followCard-data'>
                        <span className='x-followCard-name'>{name}</span>
                        <span className='x-followCard-userName'>@{userName}</span>
                    </div>
                    <div className='x-followCard-bodyButton'>
                        <button className='x-followCard-button'>
                            {isFollowing ? 'Dejar de seguir' : 'Seguir'}
                        </button>
                    </div>
                </div>
            </header>


        </article>
    )
}