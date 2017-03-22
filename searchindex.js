Search.setIndex({docnames:["api/api","api/cesium.build_model","api/cesium.data_management","api/cesium.datasets","api/cesium.features.cadence_features","api/cesium.features.graphs","api/cesium.featureset","api/cesium.featurize","api/cesium.time_series","api/cesium.transformation","api/cesium.util","auto_examples/index","auto_examples/plot_EEG_Example","feature_table","index","install"],envversion:51,filenames:["api/api.txt","api/cesium.build_model.txt","api/cesium.data_management.txt","api/cesium.datasets.txt","api/cesium.features.cadence_features.txt","api/cesium.features.graphs.txt","api/cesium.featureset.txt","api/cesium.featurize.txt","api/cesium.time_series.txt","api/cesium.transformation.txt","api/cesium.util.txt","auto_examples/index.rst","auto_examples/plot_EEG_Example.rst","feature_table.rst","index.rst","install.md"],objects:{"cesium.build_model":{Featureset:[1,1,1,""],build_model_from_featureset:[1,3,1,""],fit_model_optimize_hyperparams:[1,3,1,""],score_model:[1,3,1,""]},"cesium.build_model.Featureset":{__init__:[1,2,1,""],impute:[1,2,1,""],to_dataframe:[1,2,1,""]},"cesium.data_management":{DataFormatError:[2,1,1,""],TimeSeries:[2,1,1,""],parse_and_store_ts_data:[2,3,1,""],parse_headerfile:[2,3,1,""],parse_ts_data:[2,3,1,""]},"cesium.data_management.DataFormatError":{__init__:[2,2,1,""]},"cesium.data_management.TimeSeries":{__init__:[2,2,1,""],channels:[2,2,1,""],to_netcdf:[2,2,1,""]},"cesium.datasets":{fetch_andrzejak:[3,3,1,""],fetch_asas_training:[3,3,1,""]},"cesium.features":{cadence_features:[4,0,0,"-"],graphs:[5,0,0,"-"]},"cesium.features.cadence_features":{cad_prob:[4,3,1,""],delta_t_hist:[4,3,1,""],double_to_single_step:[4,3,1,""],find_sorted_peaks:[4,3,1,""],normalize_hist:[4,3,1,""],peak_bin:[4,3,1,""],peak_ratio:[4,3,1,""]},"cesium.features.graphs":{amplitude:[5,3,1,""],cad_prob:[5,3,1,""],delta_t_hist:[5,3,1,""],double_to_single_step:[5,3,1,""],find_sorted_peaks:[5,3,1,""],flux_percentile_ratio:[5,3,1,""],generate_dask_graph:[5,3,1,""],get_fold2P_slope_percentile:[5,3,1,""],get_lomb_amplitude:[5,3,1,""],get_lomb_amplitude_ratio:[5,3,1,""],get_lomb_frequency:[5,3,1,""],get_lomb_frequency_ratio:[5,3,1,""],get_lomb_lambda:[5,3,1,""],get_lomb_rel_phase:[5,3,1,""],get_lomb_signif:[5,3,1,""],get_lomb_signif_ratio:[5,3,1,""],get_lomb_trend:[5,3,1,""],get_lomb_varrat:[5,3,1,""],get_lomb_y_offset:[5,3,1,""],get_max_delta_mags:[5,3,1,""],get_medperc90_2p_p:[5,3,1,""],get_min_delta_mags:[5,3,1,""],get_model_phi1_phi2:[5,3,1,""],get_p2p_scatter_2praw:[5,3,1,""],get_p2p_scatter_over_mad:[5,3,1,""],get_p2p_scatter_pfold_over_mad:[5,3,1,""],get_p2p_ssqr_diff_over_var:[5,3,1,""],get_qso_log_chi2_qsonu:[5,3,1,""],get_qso_log_chi2nuNULL_chi2nu:[5,3,1,""],lomb_scargle_fast_period:[5,3,1,""],lomb_scargle_model:[5,3,1,""],max_slope:[5,3,1,""],maximum:[5,3,1,""],median:[5,3,1,""],median_absolute_deviation:[5,3,1,""],minimum:[5,3,1,""],normalize_hist:[5,3,1,""],num_alias:[5,3,1,""],p2p_model:[5,3,1,""],peak_bin:[5,3,1,""],peak_ratio:[5,3,1,""],percent_amplitude:[5,3,1,""],percent_beyond_1_std:[5,3,1,""],percent_close_to_median:[5,3,1,""],percent_difference_flux_percentile:[5,3,1,""],period_folding:[5,3,1,""],periodic_model:[5,3,1,""],qso_fit:[5,3,1,""],scatter_res_raw:[5,3,1,""],skew:[5,3,1,""],std:[5,3,1,""],stetson_j:[5,3,1,""],stetson_k:[5,3,1,""],weighted_average:[5,3,1,""]},"cesium.featureset":{Featureset:[6,1,1,""],from_netcdf:[6,3,1,""]},"cesium.featureset.Featureset":{__init__:[6,2,1,""],impute:[6,2,1,""],to_dataframe:[6,2,1,""]},"cesium.featurize":{Featureset:[7,1,1,""],TimeSeries:[7,1,1,""],assemble_featureset:[7,3,1,""],featurize_single_ts:[7,3,1,""],featurize_time_series:[7,3,1,""],featurize_ts_files:[7,3,1,""],generate_dask_graph:[7,3,1,""],load_and_store_feature_data:[7,3,1,""]},"cesium.featurize.Featureset":{__init__:[7,2,1,""],impute:[7,2,1,""],to_dataframe:[7,2,1,""]},"cesium.featurize.TimeSeries":{__init__:[7,2,1,""],channels:[7,2,1,""],to_netcdf:[7,2,1,""]},"cesium.time_series":{TimeSeries:[8,1,1,""],from_netcdf:[8,3,1,""]},"cesium.time_series.TimeSeries":{__init__:[8,2,1,""],channels:[8,2,1,""],to_netcdf:[8,2,1,""]},"cesium.transformation":{train_test_split:[9,3,1,""],transform_ts_files:[9,3,1,""]},"cesium.util":{DataFormatError:[10,1,1,""],extract_time_series:[10,3,1,""],make_list:[10,3,1,""],remove_files:[10,3,1,""],shorten_fname:[10,3,1,""]},"cesium.util.DataFormatError":{__init__:[10,2,1,""]},cesium:{build_model:[1,0,0,"-"],data_management:[2,0,0,"-"],datasets:[3,0,0,"-"],featureset:[6,0,0,"-"],featurize:[7,0,0,"-"],time_series:[8,0,0,"-"],transformation:[9,0,0,"-"],util:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"0511458v1":[5,13],"065e":12,"1101_2406v1":[5,13],"111e":12,"112e":12,"127e":12,"133e":12,"241e":12,"294e":12,"2_qso":5,"2nd":[5,13],"321e":12,"362e":12,"384e":12,"50k":3,"513e":12,"5th":[5,13],"65e":12,"695e":12,"806e":12,"90th":[5,13],"95th":[5,13],"98th":[5,13],"boolean":[2,10],"case":[1,2,4,5,6,7,8,9,12],"class":[1,2,3,5,6,7,8,9,10,12],"default":[1,2,3,5,6,7,8,9,10,12],"final":12,"float":[1,2,6,7,8,9],"function":[1,6,7],"import":12,"int":[1,5,9],"long":5,"new":[1,6,7,12],"return":[1,2,3,4,5,6,7,9,10,12,13],"true":[2,4,5,10,12],"try":1,But:12,For:[2,4,5,7,12],The:[1,2,3,6,7,8,10,12,15],These:[1,6,7],Using:11,__init__:[1,2,6,7,8,10],a_ij:5,abl:12,abov:12,abs:12,abs_diff:12,abs_diffs_sign:12,absolut:[5,10,13],accept:12,accordingli:7,accuraci:[4,5,12],accuracy_scor:12,across:[2,7,8],activ:3,actual:[4,5],added:[2,7],addit:[5,12],adjust:1,affect:9,against:[1,6,7],aggreg:[4,5],alarm:5,alias:[5,13],all:[1,2,3,4,5,6,7,8,11,12,13],all_times_nhist_numpeak:13,all_times_nhist_peak1_bin:13,all_times_nhist_peak2_bin:13,all_times_nhist_peak3_bin:13,all_times_nhist_peak4_bin:13,all_times_nhist_peak_1_to_2:13,all_times_nhist_peak_1_to_3:13,all_times_nhist_peak_1_to_4:13,all_times_nhist_peak_2_to_3:13,all_times_nhist_peak_2_to_4:13,all_times_nhist_peak_3_to_4:13,all_times_nhist_peak_v:13,alloc:12,along:[1,2,6,7,8,12],alpha:[1,5],alphath:[5,13],alreadi:[3,10],also:[2,5,7,8,12],alwai:[1,2,6,7],ambigu:5,amplitud:[0,12,13],analysi:12,andrzejak:[3,12],ani:[2,7,8,10,12],anoth:[1,6,7],api:14,appear:[1,6,7],appli:[9,12],applic:[2,3,7,8,10],approach:12,appropri:12,approxim:[5,13],arang:12,arbitrari:[2,4,5,7,8,13],arbitrarili:[4,5],archiv:[2,3,10],argument:[1,6,7,12],arithmet:[5,13],around:5,arrai:[1,2,3,4,5,6,7,8,12],array_lik:5,arxiv:[5,13],asa:[5,13],asas_train:3,assemble_featureset:0,assert_all_finit:[1,6,7],associ:[1,6,7],assum:[1,5,6,7],astro:[5,13],astrophys:3,astyp:12,async:7,attr:[1,6,7],attribut:[1,2,3,6,7,8,10],auto:12,auto_examples_jupyt:11,auto_examples_python:11,autom:3,averag:[5,13],avg_double_to_single_step:13,avg_err:13,avgt:13,axi:[1,6,7],band:[5,12],base:[1,2,5,6,7,8,9,10,12],becom:[1,6,7],befor:12,being:7,belokurov:[5,13],belong:[1,6,7],besid:2,best:5,beta:1,better:[4,5],between:[5,12,13],bin:[4,5,13],biolog:12,bloom:3,bool:[2,10],both:[4,5,12],brain:3,brink:3,broadcast:[1,2,6,7,8],broadcast_equ:[1,6,7],browser:12,build:[1,4,5],build_model:[0,12,14],build_model_from_featureset:[0,12],built:12,butler:3,cad:[4,5,13],cad_prob:0,cad_probs_10000000:13,cad_probs_1000000:13,cad_probs_100000:13,cad_probs_10000:13,cad_probs_1000:13,cad_probs_100:13,cad_probs_10:13,cad_probs_1:13,cad_probs_20:13,cad_probs_30:13,cad_probs_40:13,cad_probs_5000000:13,cad_probs_500000:13,cad_probs_50000:13,cad_probs_5000:13,cad_probs_500:13,cad_probs_50:13,cadenc:13,cadence_featur:[0,14],cads_avg:13,cads_m:13,cads_std:13,calcul:[5,13],calibr:3,call:12,can:[1,2,6,7,8,12,15],catalog:3,cesium:[1,2,3,4,5,6,7,8,9,10,11,12,15],chang:[5,13],channel:[2,7,8],channel_:[2,7,8],channel_nam:[2,7,8],check:[5,13],chi2:[5,13],chi:5,choic:[1,6,7,12],choos:[4,5],chosen:12,classic:[5,12],classif:[3,12],classifi:12,cleanup_arch:[2,10],cleanup_fil:10,cleanup_head:2,code:[5,11,12],column:[2,7],combin:1,common:[1,6,7],compar:[1,5,6,7,12],compat:[1,6,7,12],comput:[1,4,5,7,12,13],concurr:7,conflict:[1,6,7],consecut:[5,13],consid:12,consist:[2,7,8,12],constant:[1,6,7],construct:[3,4,5],constructor:1,consum:7,contain:[1,2,5,6,7,12],context:10,conv_oversampl:[4,5],conveni:[1,6,7],convert:[1,6,7],convolut:[4,5],coord:[1,6,7],coordin:[1,6,7,12],core:[1,6,7],correspond:[1,2,5,7,8,12],cov:15,covari:[5,13],creat:[1,2,6,7,8,10],crellin:3,cross:1,csv:7,curv:[3,5],custom:7,custom_funct:[7,12],custom_script_path:7,cython:15,dai:[5,13],dask:[7,12,15],data:[1,2,3,5,6,7,8,9,10,11,13],data_dir:3,data_manag:[0,14],data_path:[2,3,10],data_var:[1,6,7],dataarrai:[1,6,7],dataformaterror:0,datafram:[1,2,3,6,7],dataset:[0,1,5,6,7,12,13,14],datum:5,db1:12,deboss:[5,13],debug:7,decompos:12,decreas:[4,5,13],def:12,default_error_valu:2,default_max_tim:2,defin:[1,5,6,7],definit:7,delet:[2,10],delta_t:13,delta_t_hist:0,demonstr:12,densiti:[4,5],depend:[1,2,3,6,7,8,15],describ:[1,2,6,7,8,12],descript:13,desir:12,detail:[1,7,9,12],detect:11,determin:5,determinist:3,dev:[5,13],develop:15,deviat:[5,13],dict:[1,2,3,5,6,7,8],dictionari:[1,2,3,5,7,8,12],diff:12,differ:[1,2,4,5,7,8,13],dim:[1,6,7],dimens:[1,6,7,12],dimension:[1,2,3,6,7,8],directori:[2,10],discret:[12,13],disk:[2,7,8,10],distanc:[5,13],distinguish:12,distribut:[4,5,7,12,13],divid:5,dmodel:5,document:[1,2,7,8,12],doe:[2,10],doi:3,domain:[2,7,8],double_to_single_step:0,download:[3,11,12],dsutil:3,dubath:[5,13],dummi:2,dure:1,dwt:12,each:[1,2,3,5,6,7,8,9,12],edg:[4,5],eeg:[3,11],effici:[4,5],either:[9,12],electr:3,els:5,empti:[2,7],encapsul:[2,7,8],engin:6,ensembl:12,ensur:[1,6,7],epilepsi:11,epoch:[4,5,13],equal:[1,4,5,6,7],error:[1,2,3,5,6,7,8,12,13],essenti:[5,12],estim:[1,5,13],etc:12,evalu:7,evan:[5,13],even:2,evenli:2,everyth:5,exampl:[3,12,14],except:[1,2,6,7,10,12],executor:7,exit:10,expect:[2,5,13],explain:[5,13],explor:1,expon:5,express:[5,13],extens:[1,6,7,10],extract:[1,6,7,10],extract_dir:10,extract_time_seri:0,extrem:5,eyer:[5,13],factor:[4,5],fals:[5,10,12],faster:5,featur:[0,1,2,6,8,14],feature_dict:7,feature_nam:[7,12],features_path:7,features_to_us:[7,12],featureset:[0,12,14],featurize_single_t:0,featurize_time_seri:[0,12],featurize_ts_fil:0,fetch_andrzejak:[0,12],fetch_asas_train:0,few:12,fewer:2,fig:12,file:[1,2,3,6,7,8,10],file_path:10,filenam:2,filepath:[2,10],files_to_includ:2,fill:[1,6,7],filter:5,find:[4,5],find_sorted_peak:0,finit:3,first:[2,4,5,7,8,12,13],fit:[1,5,12,13],fit_lomb_scargl:5,fit_model_optimize_hyperparam:0,five:12,fix:[1,5,6,7,13],float64:12,flux:[5,13],flux_percentile_ratio:0,flux_percentile_ratio_mid20:13,flux_percentile_ratio_mid35:13,flux_percentile_ratio_mid50:13,flux_percentile_ratio_mid65:13,flux_percentile_ratio_mid80:13,fold2p_slope_10percentil:13,fold2p_slope_90percentil:13,fold:[1,5,13],follow:[12,15],forest:[1,6,7,12],form:[1,6,7,12],format:[2,7,10,12],found:[5,12],fraction:[5,9,13],freq1_amplitude1:13,freq1_amplitude2:13,freq1_amplitude3:13,freq1_amplitude4:13,freq1_freq:13,freq1_lambda:13,freq1_rel_phase2:13,freq1_rel_phase3:13,freq1_rel_phase4:13,freq1_signif:13,freq2_amplitude1:13,freq2_amplitude2:13,freq2_amplitude3:13,freq2_amplitude4:13,freq2_freq:13,freq2_rel_phase2:13,freq2_rel_phase3:13,freq2_rel_phase4:13,freq3_amplitude1:13,freq3_amplitude2:13,freq3_amplitude3:13,freq3_amplitude4:13,freq3_freq:13,freq3_rel_phase2:13,freq3_rel_phase3:13,freq3_rel_phase4:13,freq_amplitude_ratio_21:13,freq_amplitude_ratio_31:13,freq_fit:5,freq_frequency_ratio_21:13,freq_frequency_ratio_31:13,freq_model_max_delta_mag:13,freq_model_min_delta_mag:13,freq_model_phi1_phi2:13,freq_n_alia:13,freq_signif_ratio_21:13,freq_signif_ratio_31:13,freq_varrat:13,freq_y_offset:13,frequenc:[5,12,13],from:[1,2,4,5,6,7,8,10,12,13],from_netcdf:[0,7],frontend:12,fset_cesium:12,fset_dwt:12,fset_guo:12,full:[5,10],galleri:[11,12],gaussian:[5,13],gener:[1,2,5,6,7,9,11,12,13],generate_dask_graph:0,get:[5,7,12,13],get_fold2p_slope_percentil:0,get_lomb_amplitud:0,get_lomb_amplitude_ratio:0,get_lomb_frequ:0,get_lomb_frequency_ratio:0,get_lomb_lambda:0,get_lomb_rel_phas:0,get_lomb_signif:0,get_lomb_signif_ratio:0,get_lomb_trend:0,get_lomb_varrat:0,get_lomb_y_offset:0,get_max_delta_mag:0,get_medperc90_2p_p:0,get_min_delta_mag:0,get_model_phi1_phi2:0,get_p2p_scatter_2praw:0,get_p2p_scatter_over_mad:0,get_p2p_scatter_pfold_over_mad:0,get_p2p_ssqr_diff_over_var:0,get_qso_log_chi2_qsonu:0,get_qso_log_chi2nunull_chi2nu:0,get_sync:7,give:[1,6,7],given:[1,2,4,5,6,7,8,10,12,13],global:[1,6,7],good:[1,5,6,7,13],graph:[0,7,12,14],greater:[4,5],grid:12,gridsearchcv:1,group:[2,7,8,12],guo:12,guo_featur:12,half:[5,13],handl:12,harmon:[5,13],has:[12,15],have:[1,2,4,5,6,7,12],hdf5:[2,7,8],header:[2,3,10],header_path:2,headerfile_path:2,here:[5,12,13],hist:[4,5],histogram:[4,5,13],holdout:12,how:[1,5,6,7,11,12],http:3,hyperparamet:1,hyperparamt:1,ictal:12,ident:[1,6,7],identifi:[2,7,8],iff:5,implement:[1,6,7,12],improperli:[2,10],imput:[1,6,7],includ:[5,7,9,12],incorpor:12,independ:[1,2,6,7,8],index:[1,3,4,5,6,7,12,13],indic:[1,3,4,5,6,7,9,13],individu:[2,9],inf:[1,6,7],infinit:[1,6,7],inform:[2,7,12],initi:[1,6,7],input:[5,7,9,12],inspect:12,instal:14,instanti:1,instead:[2,7,8],int64:12,integr:[4,5],intention:12,intercept:[5,13],interict:12,interior:[4,5],introduc:12,ipynb:12,isel:12,isn:10,item:[1,6,7],iter:[1,2,7,8],ith:[4,5,13],journal:3,jth:[4,5,13],jupyt:[11,12],just:12,kei:[1,7,9,12],keyword:12,kneighborsclassifi:12,knn_param_grid:12,kurtosi:[5,13],label:[2,3,7,8,9,12],lag:[4,5,13],larg:[1,6,7],largest:[4,5,13],later:12,latest:15,learn:[1,11,12,15],least:5,len:12,length:[1,6,7],level:12,librari:[11,12,15],light:[3,5],like:[1,6,7],linear:[5,13],linear_trend:13,list:[1,2,3,4,5,7,8,9,10,12,13],load:[1,2,3,6,7,8,12],load_and_store_feature_data:0,local:[4,5,13],log:[5,13],logical_or:12,lomb:[5,13],lomb_model:5,lomb_scargl:5,lomb_scargle_fast_period:0,lomb_scargle_model:0,longer:12,machin:[11,12],mad:5,made:12,mag0:5,magnitud:[5,13],mai:[1,6,7,12],make:[5,12,15],make_list:0,mani:12,map:[1,6,7],match:[2,7,8],mathemat:12,matplotlib:12,max:[5,13],max_featur:12,max_slop:[0,12,13],maxima:[4,5,13],maximum:[0,12,13],mean2:12,mean:[1,5,6,7,12,13],mean_sign:12,mean_square_sign:12,measur:[1,2,3,5,6,7,8,12,13],med_double_to_single_step:13,med_err:13,median:[0,1,6,7,12,13],median_absolute_devi:[0,12,13],medperc90_2p_p:13,memori:12,messag:[2,10],meta:2,meta_featur:[2,7,8],meta_feature_dict:7,metadata:[2,3,7,8],metafeatur:[3,7],method:[1,2,6,7,8,10,12],metric:12,miller:3,min:[5,13],minimum:[0,12,13],minu:[5,13],minut:[4,5,12,13],miss:[1,2,6,7],mock:15,mode:[1,6,7],model:[1,5,6,7,13],model_cesium:12,model_dict:5,model_dwt:12,model_guo:12,model_paramet:1,model_predict:12,model_select:[1,9,12],model_typ:1,modul:[0,12,14],more:[4,5,7,13],most_frequ:[1,6,7],much:5,multi:5,multichannel:[2,7,8,12],multipl:[2,7,8,9],multiprocess:[7,12],multivari:7,must:[1,6,7],n_channel:12,n_epoch:13,n_estim:12,n_neighbor:12,n_sampl:1,name:[1,2,6,7,8,9,10,12],nan:[1,6,7],natur:[2,5,7,8,13],nbin:[4,5],ndarrai:2,nearest:12,need:[1,6,7,12],neg:[1,6,7],neighbor:[4,5,12],netcdf4:[6,15],netcdf:[2,6,7,8],netcdf_path:[6,8],never:[1,6,7],next:[4,5,12,13],nfreq:5,nharm:5,non:[1,5,13],none:[1,2,3,6,7,8,9,10,12],nonlinear:3,normal:[1,4,5,12],normalize_hist:0,not_qso:5,note:5,notebook:[11,12],now:12,nu_nul:5,num_alia:0,number:[1,2,5,7,8,9,13],numpi:[12,15],object:[1,2,6,7,8,9,10],observ:[2,4,5,7,8,13],obtain:5,occur:[4,5,13],omit:[2,7,8,10,12],onc:12,one:[2,7,8],onli:[1,2,4,5,7,15],open_dataset:[1,6,7],optim:1,option:[1,2,3,6,7,8,9,10],order:[4,5,13],org:3,origin:[5,10],other:[1,2,5,6,7,12],otherwis:10,our:12,out:[5,12],output:[1,2,5,6,7,9,12],output_dir:2,output_path:7,over:[2,5,7,8,13],overal:12,overload:[1,6,7],overrid:7,p2p_model:0,p2p_scatter_2praw:13,p2p_scatter_over_mad:13,p2p_scatter_pfold_over_mad:13,p2p_ssqr_diff_over_var:13,pair:[5,13],panda:[1,2,6,7,15],paper:[5,13],parallel:12,paramet:[1,2,3,5,6,7,8,9,10,12,13],params_to_optim:[1,12],pars:2,parse_and_store_ts_data:0,parse_headerfil:0,parse_ts_data:0,particular:[1,6,7],pass:[1,12],path:[2,3,7,8,10],pattern:12,pdf:[4,5],peak:[4,5,13],peak_bin:0,peak_ratio:0,per:7,percent_amplitud:[0,13],percent_beyond_1_std:[0,12,13],percent_close_to_median:[0,12,13],percent_difference_flux_percentil:[0,13],percentag:[5,13],percentil:[5,13],percentile90:5,percentile_rang:[5,13],perform:[1,4,5,7,11,12],period:[5,13],period_fast:13,period_fold:0,periodic_model:0,phase:[5,13],phi:5,phi_j:5,phy:3,pip:15,plot:12,plot_eeg_exampl:12,plt:12,point:[4,5],possibl:[4,5,7,9,13],post:12,potenti:[1,6,7],predict:5,preds_cesium:12,preds_dwt:12,preds_guo:12,present:[7,12],primari:[1,6,7],print:12,probabilist:3,probabl:[4,5,13],problem:12,process:[2,7,8],produc:[1,6,7],provid:[1,2,6,7,12],pyplot:12,pytest:15,python:[7,11,12,15],pywt:12,qso:[5,13],qso_engin:5,qso_fit:0,qso_log_chi2_qsonu:13,qso_log_chi2nunull_chi2nu:13,qso_model:5,quantiti:[1,6,7],quick:3,ralph:3,random:[1,6,7,9,12],random_st:[9,12],randomforestclassifi:[1,12],randomst:9,rate:[5,13],rather:[4,5],ratio:[4,5,13],raw:[2,5,7,8,12],read:7,record:3,rectangular:[1,12],refer:3,referenc:7,regener:5,region:3,regular:[5,13],rel:[5,10,13],relat:5,remov:10,remove_fil:0,replac:[1,6,7],repres:[2,7,8,12],requir:[5,12],res:5,reshap:12,residu:[5,13],respect:[5,7,13],result:[1,4,5,7],return_model:5,return_prob:12,rev:3,rfc_param_grid:12,richard:3,robust:[5,13],roughli:5,row:2,rule:5,run:[5,12,15],same:[1,2,6,7,8,12],sampl:[1,9],sample_weight:1,satisfi:[1,6,7],save:[1,2,6,7,9],scalar:[1,2,6,7,8],scale:5,scargl:[5,13],scatter:5,scatter_res_raw:[0,13],schedul:[7,12],scikit:[1,12,15],scipi:[12,15],score:1,score_model:0,script:[7,12],seaborn:12,second:[5,12,13],section:5,see:[1,2,5,7,8,9,13],seed:9,select:12,sep:2,separ:[2,7,8,12],sequenc:[4,5,7],seri:[1,2,3,5,6,7,8,9,10,11],serial:[6,8,12],sesar:5,set:[1,2,6,7,8,9,12],setup:12,shape:[1,2,7,8],share:[2,7,8],sharei:12,shorten_fnam:0,should:[1,3,6,7,12],shuffl:9,sigma:[5,13],signal:[5,12],signif_not_qso:5,signif_qso:5,signif_vari:5,signific:[5,12,13],simpl:[5,13],simpli:[2,7,8,12],simplifi:[1,6,7],simplist:12,simultan:5,sin:5,singl:[2,5,7,8,10,12],sinuosid:[5,13],sinusoid:5,skew:[0,12,13],skew_sign:12,sklearn:[1,6,7,9,12],sky:3,slope:[5,13],smallest:[5,13],some:[1,6,7,9,12],sort:[4,5,13],sourc:[3,5,11,12,13],space:2,special:12,specif:[1,5,6,7],specifi:[1,2,5,7,8,10],sphinx:[11,12],split:[1,9],squar:[5,13],standard:[5,12,13],starr:3,stat:12,state:[3,9],statist:[5,13],std:[0,12,13],std_double_to_single_step:13,std_err:13,std_signal:12,step:12,stetson_j:[0,13],stetson_k:[0,13],store:[2,3,5,7,8,12],str:[1,2,3,6,7,8,9,10],strategi:[1,6,7],stratifi:9,string:[1,6,7,9],strip82:5,structur:3,subasi:12,subdirectori:3,submodul:12,subplot:12,subset:2,subtract:5,suggest:12,sum:[5,12,13],sum_i:5,sum_j:5,sum_k:5,supplement:3,suppli:[1,6,7],survei:3,synchron:7,sys_err:5,t_i:[4,5],t_j:[4,5],t_max:[4,5],t_min:[4,5],tabular:2,take:[5,7,12],tar:10,tarbal:2,tarfil:10,target:[1,2,7,8,9,12],techniqu:12,temporari:10,test:[1,9,12,14],test_siz:9,text:2,than:[4,5,13],thei:[1,2,4,5,6,7,8,12],them:12,thi:[1,2,5,6,7,8,12],those:1,three:[2,12],ties:[4,5],time:[1,2,3,4,5,6,7,8,9,10,11,13],time_seri:[0,2,7,9,14],timeseri:[0,9],titl:12,to_datafram:[1,6,7],to_netcdf:[2,7,8],togeth:12,tone_control:5,total:[4,5,12,13],total_tim:[4,5,13],train:[1,6,7,9,12],train_siz:9,train_test_split:[0,12],training_s:9,transform:[0,7,12,14],transform_info_dict:9,transform_ts_fil:0,transform_typ:9,treat:10,trend:[5,13],ts_path:7,tupl:[1,4,5,6,7,9,10,13],twice:[5,13],two:[2,7,8],type:[5,12],typic:[2,7,8],u10:12,u16:12,ugriz:5,uncertainti:[5,13],underli:[1,5,6,7],unfold:[5,13],uniform:12,uniqu:12,unit:5,univari:12,unlabel:12,unlik:[1,6,7],unseen:12,upcom:12,upload:2,use:[1,4,5,6,7,11,12],used:[1,2,5,6,7,8,12,13],using:[1,5,7,12],util:[0,14],valid:[1,6,7,10,12],valu:[1,2,3,4,5,6,7,8,9,10,12,13],vari:[1,6,7],variabl:[1,3,5,6,7,12,13],varianc:[5,13],variou:[1,12],vector:[1,2,7,8],veri:[1,6,7],versatil:7,version:15,via:[4,5,12,15],wavedec:12,wavelet:12,web:12,weight:[1,5,13],weighted_averag:[0,12,13],when:[1,4,5,6,7,10],where:[2,3,5,7,8,12,13],wherea:9,whether:[2,7,8,10],which:[1,2,5,6,7,8,10,12],whole:[2,7,8],whose:[1,5,13],window_frac:[5,13],within:[2,3,4,5,13],workflow:12,would:[1,12],wrap:10,wrapper:12,wth:[1,6,7],xarrai:[1,6,7,12,15],xlabel:12,yield:[1,10],ylabel:12,zip:[10,11,12],zipfil:10},titles:["API Reference","Module: <code class=\"docutils literal\"><span class=\"pre\">build_model</span></code>","Module: <code class=\"docutils literal\"><span class=\"pre\">data_management</span></code>","Module: <code class=\"docutils literal\"><span class=\"pre\">datasets</span></code>","Module: <code class=\"docutils literal\"><span class=\"pre\">features.cadence_features</span></code>","Module: <code class=\"docutils literal\"><span class=\"pre\">features.graphs</span></code>","Module: <code class=\"docutils literal\"><span class=\"pre\">featureset</span></code>","Module: <code class=\"docutils literal\"><span class=\"pre\">featurize</span></code>","Module: <code class=\"docutils literal\"><span class=\"pre\">time_series</span></code>","Module: <code class=\"docutils literal\"><span class=\"pre\">transformation</span></code>","Module: <code class=\"docutils literal\"><span class=\"pre\">util</span></code>","Examples","Epilepsy Detection Using EEG Data","Cesium Features - By Category","Machine Learning Time-Series Platform Documentation","Installation"],titleterms:{"function":12,Using:12,amplitud:5,api:0,assemble_featureset:7,build:12,build_model:1,build_model_from_featureset:1,cad_prob:[4,5],cadence_featur:4,categori:13,cesium:13,channel:12,custom:12,data:12,data_manag:2,dataformaterror:[2,10],dataset:3,delta_t_hist:[4,5],detect:12,document:14,double_to_single_step:[4,5],eeg:12,epilepsi:12,exampl:11,extract_time_seri:10,featur:[4,5,7,12,13],featureset:[1,6,7],featurize_single_t:7,featurize_time_seri:7,featurize_ts_fil:7,fetch_andrzejak:3,fetch_asas_train:3,find_sorted_peak:[4,5],fit_model_optimize_hyperparam:1,flux_percentile_ratio:5,from_netcdf:[6,8],generate_dask_graph:[5,7],get_fold2p_slope_percentil:5,get_lomb_amplitud:5,get_lomb_amplitude_ratio:5,get_lomb_frequ:5,get_lomb_frequency_ratio:5,get_lomb_lambda:5,get_lomb_rel_phas:5,get_lomb_signif:5,get_lomb_signif_ratio:5,get_lomb_trend:5,get_lomb_varrat:5,get_lomb_y_offset:5,get_max_delta_mag:5,get_medperc90_2p_p:5,get_min_delta_mag:5,get_model_phi1_phi2:5,get_p2p_scatter_2praw:5,get_p2p_scatter_over_mad:5,get_p2p_scatter_pfold_over_mad:5,get_p2p_ssqr_diff_over_var:5,get_qso_log_chi2_qsonu:5,get_qso_log_chi2nunull_chi2nu:5,graph:5,instal:15,learn:14,load_and_store_feature_data:7,lomb_scargle_fast_period:5,lomb_scargle_model:5,machin:14,make_list:10,max_slop:5,maximum:5,median:5,median_absolute_devi:5,minimum:5,model:12,modul:[1,2,3,4,5,6,7,8,9,10],multi:12,normalize_hist:[4,5],num_alia:5,p2p_model:5,parse_and_store_ts_data:2,parse_headerfil:2,parse_ts_data:2,peak_bin:[4,5],peak_ratio:[4,5],percent_amplitud:5,percent_beyond_1_std:5,percent_close_to_median:5,percent_difference_flux_percentil:5,period_fold:5,periodic_model:5,platform:14,predict:12,qso_fit:5,refer:0,remove_fil:10,scatter_res_raw:5,score_model:1,seri:[12,14],shorten_fnam:10,skew:5,std:5,stetson_j:5,stetson_k:5,test:15,time:[12,14],time_seri:8,timeseri:[2,7,8],train_test_split:9,transform:9,transform_ts_fil:9,util:10,weighted_averag:5}})