import { Box } from '@mui/material';
import { forwardRef, useCallback, useImperativeHandle } from 'react';
import { useDropzone } from 'react-dropzone';



const CustomDropzone = forwardRef(
  (
    { handleOnchange, src, className = { width: 384 } },
    ref
  ) => {
    useImperativeHandle(ref, () => ({
      inputFile: () => open(),
    }));

    const onDrop = useCallback((acceptedFiles) => {
      acceptedFiles.forEach((file) => {
        const reader = new FileReader();

        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.onload = () => {
          // Đặt dữ liệu hình ảnh vào state
          //   setSelectedImage(reader.result as string);
          handleOnchange(reader);
        };

        reader.readAsDataURL(file);
      });
    }, []);
    const { getRootProps, getInputProps, open } = useDropzone({
      onDrop,
      multiple: false,
      accept: {
        'image/png': ['.png', '.jpg', '.jpeg'],
      },
    });

    return (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <Box display="flex" flexDirection="column" gap={4} width={384}>
          <Box
            sx={{
              width: 384,
              ...className,
              // padding: 6,
              border: '1px dashed #B0B4B8',
              borderRadius: 2,
              height: 192,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 4,
              // backgroundImage: selectedImage ? `url('${selectedImage}')` : '',
              // backgroundRepeat: 'no-repeat',
            }}
          >
            {src ? (
              <img
                src={src || ''}
                alt="Selected Image"
                style={{ objectFit: 'contain', width: '100%', height: '100%' }}
              />
            ) : (
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Outline/Social/24px/id-outlined">
                  <path
                    id="Union"
                    d="M14.6667 4C14.6667 3.26971 15.2697 2.66667 16 2.66667C16.7303 2.66667 17.3333 3.26971 17.3333 4V8V9.33333H14.6667V8V4ZM12 6.66667V4C12 1.79695 13.797 0 16 0C18.203 0 20 1.79695 20 4V6.66667H30.6667C31.403 6.66667 32 7.26362 32 8V30.6667C32 31.403 31.403 32 30.6667 32H1.33333C0.596954 32 0 31.403 0 30.6667V8C0 7.26362 0.596954 6.66667 1.33333 6.66667H12ZM20 9.33333V10.6667C20 11.403 19.403 12 18.6667 12H13.3333C12.597 12 12 11.403 12 10.6667V9.33333H2.66667V29.3333H29.3333V9.33333H20ZM5.33333 16C5.33333 15.2636 5.93029 14.6667 6.66667 14.6667H14.6667C15.403 14.6667 16 15.2636 16 16V24C16 24.7364 15.403 25.3333 14.6667 25.3333H6.66667C5.93029 25.3333 5.33333 24.7364 5.33333 24V16ZM8 17.3333V22.6667H13.3333V17.3333H8ZM18.6667 17.3333C18.6667 16.597 19.2636 16 20 16H25.3333C26.0697 16 26.6667 16.597 26.6667 17.3333C26.6667 18.0697 26.0697 18.6667 25.3333 18.6667H20C19.2636 18.6667 18.6667 18.0697 18.6667 17.3333ZM20 21.3333C19.2636 21.3333 18.6667 21.9303 18.6667 22.6667C18.6667 23.403 19.2636 24 20 24H25.3333C26.0697 24 26.6667 23.403 26.6667 22.6667C26.6667 21.9303 26.0697 21.3333 25.3333 21.3333H20Z"
                    fill="#898C8F"
                  />
                </g>
              </svg>
            )}
          </Box>
        </Box>
      </div>
    );
  }
);

export default CustomDropzone;