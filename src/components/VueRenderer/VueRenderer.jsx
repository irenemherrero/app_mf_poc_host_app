import mount from 'vueApp/mount'

import React, { useRef, useEffect } from 'react'

export default ({ component }) => {
    const ref = useRef(null);

    useEffect(() => {
        mount(ref.current, component)
    }, [])

    return <div ref={ref} />
}