import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    //khi mà k truyền fallbac từ ngoài vào mặc định nếu ảnh lỗi sẽ lấy noImage, còn có fallback từ ngoài vào thì khi ảnh src rồi nó sẽ lấy link
    //của prop fallback, còn cái customFallback chỉ là đổi tên khỏi bị trùng cái fallback khi dùng useState

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};

export default Image;
