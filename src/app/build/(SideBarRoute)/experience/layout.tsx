import React, {FC} from 'react'

interface layoutProps {
    children: React.ReactNode;
}

const layout: FC<layoutProps> = ({
                                     children,
                                 }) => {
    return (
        <div>
            <div>{children}</div>
        </div>
    )
}
export default layout