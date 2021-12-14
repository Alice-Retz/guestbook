export default function GuestBook() {
    const [name, setName] = useState('')
    const [guestEntry, setGuestEntry] = useState('')
    const { entries, setEntries } = useEntries()
    const { user, setUser } = useUser()

    function updateGuestName() {
        if (!guestEntry) return
        setUser(name)
        setEntries([...entries, { name, message: guestEntry }])
        setGuestEntry('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        updateGuestName()
    }

    const guestNameInput = (
        <section>
            <div >
                <label className='labelText' htmlFor='guestName'>
                    Guest Name
                </label>
            </div>
            <div>
                <input id='guestName' type='text' placeholder='Guest Name...' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
        </section>
    )

    const displayMessage = user ? `Thanks for signing, ${user}!` : 'Please sign the Guestbook!'

    return (
        <>
            <h1>{displayMessage}</h1>
            <form onSubmit={handleSubmit}>
                {user ? null : guestNameInput}
                <div>
                    <div>
                        <label className='labelText' htmlFor='guestEntry'>
                            Guest Entry
                        </label>
                    </div>
                    <div>
                        <textarea id='guestEntry' value={guestEntry} placeholder='Your entry!' onChange={(e) => setGuestEntry(e.target.value)} />
                    </div>
                </div>
                <div>
                    <button type='submit'>
                        Sign
                    </button>
                    {user && (

                        <button type='button' className='signout' onClick={() => {
                            setUser('')
                            setName('')
                        }}>
                        Not {user}?
                        </button>
                    )}
                </div>
            </form>
        </>
    )
}