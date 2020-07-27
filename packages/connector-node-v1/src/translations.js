const translations = {
  en: {
    uploading: 'Uploading',
    uploadingItem: 'Uploading 1 item',
    uploadingItems: 'Uploading {quantity} items',
    upload: 'Upload',
    remove: 'Remove',
    download: 'Download',
    rename: 'Rename',
    creating: 'Creating',
    creatingName: 'Creating {name}...',
    create: 'Create',
    createFolder: 'Create folder',
    zipping: 'Zipping',
    zippingItem: 'Zipping 1 item',
    zippingItems: 'Zipping {quantity} items',
    items: 'items',
    item: 'item',
    cancel: 'Cancel',
    confirm: 'Confirm',
    folderName: 'Folder name',
    files: 'files',
    fileExist: 'File or folder with name {name} already exists',
    newName: 'New name',
    emptyName: 'Name can\'t be empty',
    tooLongFolderName: 'Folder name can\'t contain more than 255 characters',
    folderNameNotAllowedCharacters: 'Folder name contains not allowed characters',
    title: 'Title',
    fileSize: 'File size',
    lastModified: 'Last modified',
    reallyRemove: '{files} will be deleted. Do you really want to proceed?',
    unableReadDir: 'Unable to read a directory.'
  },
  fa: {
    uploading: 'در حال بارگذاری',
    uploadingItem: 'یک آیتم آپلود شد',
    uploadingItems: 'در حال بارگذاری {quantity} آیتم',
    upload: 'بارگذاری',
    remove: 'حذف',
    download: 'دانلود',
    rename: 'تعییر نام',
    creating: 'در حال ایجاد',
    creatingName: 'در حال ایجاد {name}...',
    create: 'ایجاد',
    createFolder: 'ایجاد پوشه',
    zipping: 'در حال فشرده سازی',
    zippingItem: '۱ آیتم فشرده سازی شد.',
    zippingItems: 'در حال فشرده سازی {quantity} آیتم',
    items: 'آیتم ها',
    item: 'آیتم',
    cancel: 'انصراف',
    confirm: 'تایید',
    folderName: 'نام پوشه',
    files: 'فایل ها',
    fileExist: 'فایل یا پوشه با نام {name} قبلا ایجاد شده است.',
    newName: 'نام جدید',
    emptyName: 'نام نمی تواند خالی باشد.',
    tooLongFolderName: 'نام پوشه نمیتواند بیشتر از ۲۵۵ کاراکتر باشد.',
    folderNameNotAllowedCharacters: 'نام پوشه حاوی کاراکتر های غیر مجاز است',
    title: 'عنوان',
    fileSize: 'حجم فایل',
    lastModified: 'تاریخ آخرین تغییر',
    reallyRemove: '{files} باید حذف شود. آیا با این عملیات موافقید؟',
    unableReadDir: 'پوشه قابل خواندن نیست.'
  }
};

export default function getMessage(locale, key, params) {
  const translationExists = (translations[locale] && translations[locale][key]);
  const translation = translationExists ? translations[locale][key] : translations['en'][key];
  if (!params) {
    return translation;
  }

  const re = /{\w+}/g;

  function replace(match) {
    const replacement = match.slice(1, -1);
    return params[replacement] ? params[replacement] : '';
  }

  return translation.replace(re, replace);
}
