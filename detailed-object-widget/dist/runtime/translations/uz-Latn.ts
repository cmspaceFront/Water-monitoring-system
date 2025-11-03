export default {
  _widgetLabel: 'Obyekt haqida batafsil ma\'lumot vidjeti',
  _widgetDescription: 'Konlar qazib olish obyektlari haqida batafsil ma\'lumotni ko\'rsatadi',
  
  // Detailed Object Page
  'detailed-object': {
    error_no_id: 'Obyekt ID mavjud emas',
    loading_data: 'Ma\'lumotlar yuklanmoqda...',
    error_not_found: 'Obyekt topilmadi',
    no_data: 'Ma\'lumotlar mavjud emas',
    
    // Navigation
    info: 'Ma\'lumot',
    calculate: 'Hisoblash',
    docs: 'Hujjatlar',
    info_about_object: 'Obyekt haqida ma\'lumot',
    calculate_monitoring: 'Monitoring hisoblash',
    docs_history: 'Hujjatlar tarixi',
    back_to_list: 'Ro\'yxatga qaytish',
    delete: 'O\'chirish',
    delete_error: 'O\'chirishda xato yuz berdi',
    
    // Info
    info_title: 'Qazib olish uchastkasi haqida ma\'lumot',
    name: 'Nom',
    company_name: 'Kompaniya nomi',
    owner_tin: 'Obyekt INN',
    license_number: 'Litsenziya raqami',
    license_expiry: 'Litsenziyaning amal qilish muddati tugaydi:',
    date: 'Sana',
    object_type: 'Obyekt turi',
    location: 'Joylashuv',
    total_mining_volume: 'Umumiy qazib olish hajmi',
    minerals: 'Minerallar',
    
    // Object types
    object_type_1: '1-tur',
    object_type_2: '2-tur',
    object_type_3: '3-tur',
    
    // Calculate
    calculate_title: 'Aerokosmik monitoring yordamida hisoblash:',
    initial_map: 'Boshlang\'ich xarita:',
    upload_map: 'Yangi xarita yuklash:',
    uploaded_map: 'Yangi xarita:',
    difference_map: 'Hisoblangan xarita:',
    upload_file: 'Faylni yuklash',
    format_archive: 'Fayl formati .ZIP / .RAR',
    file_absent: 'Fayl mavjud emas',
    loading_message: 'Yuklanmoqda...',
    no_files: 'Mavjud fayllar yo\'q',
    file_not_available: 'Fayl mavjud emas',
    
    // Stats
    aerospace_monitoring: 'Aerokosmik monitoring',
    tax_information: 'Soliq ma\'lumotlari',
    total_sum: 'Umumiy summa',
    calculated_difference: 'Hisoblangan farq',
    unknown: 'Noma\'lum',
    
    // Volumes
    volumes_results_title: 'Hajmlarni hisoblash natijalari',
    volumes_licensed_and_adjacent: 'Litsenziyalangan uchastka va qo\'shni hudud',
    volumes_licensed_area: 'Litsenziyalangan uchastka',
    volumes_beyond_boundary: 'Litsenziyalangan uchastka chegarasidan tashqari',
    volumes_excavation: 'Qazib olingan',
    volumes_embankment: 'To\'ldirilgan',
    volumes_info_modal_title: 'Qazib olingan va to\'ldirilgan hajm',
    volumes_info_modal_description: 'Litsenziyalangan uchastka ichidagi qazib olingan va to\'ldirilgan hajm sun\'iy yo\'ldosh ma\'lumotlari asosida hisoblanadi. Xaritada litsenziyalangan hudud chegaralari va relyef o\'zgargan zonalar ko\'rsatilgan.',
    information: 'Ma\'lumot',
    
    // Upload Snackbar
    uploading: 'Yuklanmoqda...',
    upload_successful: 'Yuklash muvaffaqiyatli bajarildi',
    upload_error: 'Yuklashda xato',
    reload: 'Yana yuklash',
    
    // Stats
    monitoring: 'Monitoring',
    mining_name: 'Qazib olish',
    overall_name: 'Jami',
    difference_name: 'Farq',
    
    // Volumes
    volumes_title: 'Hajmlar',
    volumes_section_intersection: 'Kesishma',
    volumes_section_aoi: 'AOI',
    volumes_section_delta: 'Delta',
    cut: 'Qazib olingan',
    fill: 'To\'ldirilgan',
    volumes_info_title: 'Hajmlar haqida ma\'lumot',
    volumes_info_text: 'Hajmlarni hisoblash haqida ma\'lumot',
    
    // Visualization
    visualization_load_error: 'Vizualizatsiyani yuklashda xato',
    visualization_unavailable: 'Vizualizatsiya mavjud emas',
    visualization_downloading: 'Yuklab olinmoqda...',
    visualization_download_error: 'Yuklab olishda xato',
    
    // Docs
    uploading_files: 'Fayllar yuklanmoqda...',
    docs_date: 'Sana:',
    
    // Delete
    delete_title: 'Ma\'lumotlarni o\'chirish',
    delete_text: 'Siz haqiqatan ham hisoblash ma\'lumotlarini o\'chirmoqchimisiz?',
    
    // Unauthorized
    access_denied: 'Kirish rad etildi',
    access_denied_message: 'Sizda ushbu kontentga kirish huquqi yo\'q. Davom etish uchun tizimga kiring.',
    possible_reasons: 'Mumkin bo\'lgan sabablar:',
    not_authorized: 'Siz tizimda ro\'yxatdan o\'tmagansiz',
    session_expired: 'Sizning sessiyangiz tugadi',
    insufficient_rights: 'Sizda ko\'rish uchun yetarli huquqlar yo\'q',
    object_id_not_found: 'Obyekt ID localStorage da topilmadi (kalit: "attribute-id")',
    object_not_found: 'Obyekt topilmadi',
  },
  
  // Buttons
  buttons: {
    download: 'Yuklab olish',
    upload: 'Yuklash',
    calculate: 'Hisoblash va Saqlash',
    calculating: 'Ishlov berilmoqda...',
    cancel: 'Bekor qilish',
    delete: 'O\'chirish',
    close: 'Yopish',
    download_html: 'HTML yuklab olish',
  },
  
  // Snackbar
  snackbar: {
    downloading_start: 'Yuklab olish boshlandi',
    downloading_progress: 'Yuklandi: {loadedMB} MB',
    download_success: 'Yuklab olish tugallandi',
    download_error: 'Yuklab olishda xato',
    download_canceled: 'Yuklab olish bekor qilindi',
    upload_canceled: 'Yuklash bekor qilindi',
    error_common: 'Xato yuz berdi',
    error_token: 'Autentifikatsiya tokeni mavjud emas',
  },
  
  // Steps
  steps: {
    step_0: 'Tekshiruv o\'tkazilmagan',
    step_1: 'Tekshiruv o\'tkazildi',
    step_2: 'Vakolatli organ bilan kelishuv',
    step_3: 'Tadbirkorlik sub\'yektini tekshirish',
    step_4: 'Dalolatnomani rasmiylashtirish',
  },
  
  unknown: 'Noma\'lum',
};

