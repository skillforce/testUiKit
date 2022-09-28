import React, { useRef, useMemo, forwardRef, useImperativeHandle } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './texteditor.css';

const TextEditor = forwardRef(
  (
    { setText, isError, setOffErrorHandler, descriptionLocalError, setDescriptionLocalError, placeHolderText },
    ref
  ) => {
    const editor = useRef();

    useImperativeHandle(ref, () => ({
      onSetValue(value) {
        const quill = editor.current.getEditor();
        quill.setText(value);
      },
    }));
    const onChange = () => {
      const quill = editor.current.getEditor();
      const currentText = [...quill.editor.delta.ops];
      setOffErrorHandler();
      setText(currentText[0].insert);
      if (quill.getText().length < 502) {
        setDescriptionLocalError(false);
      } else {
        setDescriptionLocalError(true);
      }
    };
    const modules = useMemo(
      () => ({
        toolbar: {},
        history: {
          delay: 100,
          maxStack: 100,
          userOnly: true,
        },
      }),
      []
    );
    const formats = [];
    return (
      <div className={'description-block-editor'}>
        <div className={isError ? 'withError-container' : 'text-editor-container'}>
          <ReactQuill
            placeholder={placeHolderText}
            theme="snow"
            ref={editor}
            onChange={onChange}
            modules={modules}
            formats={formats}
          />
        </div>
        {descriptionLocalError && (
          <div className={'editor-text-local-error-label'}>{descriptionLocalError}</div>
        )}
      </div>
    );
  }
);
TextEditor.displayName = 'TextEditor';
export default TextEditor;
