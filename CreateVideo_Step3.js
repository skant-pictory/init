import { Box, Button, Chip, Link, Stack, Tooltip, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import amplitude from 'amplitude-js';
import anime from 'animejs';
import { Auth, Storage } from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { PDialog } from 'components/atoms/PDialog/PDialog';
import { AlertDialog } from 'components/molecules/AlertDialog/AlertDialog';
import DialogWithButtonAndIcon from 'components/atoms/DialogWithButtonAndIcon';
import { decode } from 'html-entities';
import $ from 'jquery';
import 'jquery/dist/jquery.min.js';
import sha512 from 'js-sha512';
import _ from 'lodash';
import moment from 'moment';
import React, { Component } from 'react';
import { Alert, Dropdown } from 'react-bootstrap';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import copy from 'copy-to-clipboard';
import ReactHtmlParser from 'react-html-parser';
import InputRange from 'react-input-range';
import LoadingOverlay from 'react-loading-overlay';
import { connect } from 'react-redux';
import { createHtmlPortalNode, InPortal, OutPortal } from 'react-reverse-portal';
import ClipLoader from 'react-spinners/ClipLoader';
import { ActionCreators as UndoActionCreators } from 'redux-undo';
import 'tachyons';
import MediaStorage from 'Utilities/MediaStorage';
import { v4 as uuidv4 } from 'uuid';
import WaveSurfer from 'wavesurfer.js';
import RegionsPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.regions.js';
import Animation1 from '../Animations/Animation1';
import Animation2 from '../Animations/Animation2';
import AnimationHelper from '../Animations/AnimationHelper';
import SubtitleTheme1 from '../Animations/SubtitleTheme1';
import actions from '../Store/Actions';
import GeneratingVideoDialog from '../components/molecules/GeneratingVideoDialog';
import LinkIcon from '@mui/icons-material/Link';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import CircularProgress from '@mui/material/CircularProgress';
import {
  allowReelFastVideo,
  allowFLVVideo,
  allowTemplates,
  clientId,
  ConditionalWrapper,
  findAndReplaceAll,
  fixMorethanOnePopup,
  generateUUID,
  getAspectRatioFontFactor,
  getCleanedUrl,
  projectQuotaAvailable,
  getFeatures,
  getResourceType,
  getSelectedVoiceOverTrack,
  getSubscriptionDetails,
  getUserDisplayname,
  getVideoUrlWithoutTime,
  isImgApplyToAll,
  isProfessionalSubscription,
  isUnSupportedStockVisual,
  isValidValue,
  removeAllWhiteSpaces,
  removeNullFromArray,
  saveProjectBackup,
  session_info,
  voiceOverTrackSelected,
  allowTextToImages,
  getElementsVisualType,
  getCurrentWorkspaceDetails,
  sleep,
  lightOrDark,
  hexToRgba,
  invertColor,
  updateEstimatedSceneDuration,
  progressCountdown,
  currentProgress,
  updateProgressCount,
  startProgressCountdown,
  invertRGBAColor,
  devOnlyFeature,
  depreciatedVoiceovers,
  getRGBAString,
  getRgbaObject,
} from '../Utilities';
import AppLocalStorage from '../Utilities/AppLocalStorage';
import {
  BLACK_IMAGE,
  CloseButtonSvg,
  DEFAULT_BG_COLOR,
  DEFAULT_LINE_HEIGHT_FACTOR,
  DEFAULT_LINE_PADDING_FACTOR,
  DUMMY_IMAGE,
  features,
  NO_IMAGE,
  optionsFontSize,
  PLAN_CODES,
  PROJECT_OPEN_ACTIONS,
  PROJECT_STATES,
  textFormatAttributes,
  DEFAULT_DISPLAY_TEXT,
  SCRIPT_LANGUAGES,
  DEFAULT_FONT_SIZE,
} from '../Utilities/Constants';
import { refreshSession } from '../Utilities/refreshSession';
import { showError, showInfo } from '../Utilities/toastNotifications';
import CustomURLs from '../Utilities/Urls';
import { voiceOverTracks } from '../Utilities/VoiceOverTracks';
import VideoPlayback from '../VideoPlayback/VideoPlayback';
import AllScenePanel from './AllScenePanel';
import AllStatementPanel from './AllStatementPanel';
import ApiRequest from './API/api.js';
import AspectRatios, {
  AllAspectRatios,
  ASPECT_RATIO_DEFAULT_CLASS,
  ASPECT_RATIO_DEFAULT_FRACTION_VALUE,
  ASPECT_RATIO_DEFAULT_OPTION,
} from './AspectRatios';
import './assets/css/animations.css';
import './assets/css/font-awesome.min.css';
import './assets/css/jquery.mCustomScrollbar.css';
import './assets/css/responsive.css';
import './assets/css/scrollbar-style.css';
import audio_icon from './assets/images/audio-ico.svg';
import crying_face_emoji from './assets/images/crying_face_emoji.png';
import warningAmberIcon from '@mui/icons-material/WarningAmber';
import GlobalJs from './assets/js/global.js';
import AudioUpload from './AudioUpload';
import StepProgress from './components/StepProgress';
import UpgradeButton from './components/UpgradeButton';
import VideoGenerationErrorModal from './components/VideoGenerationErrorModal';
import EditVideoAllScene from './EditVideoAllScene';
import Favourite from './Favourite';
import Footer from './Footer';
import Header from './Header';
import ImageFavourite from './ImageFavourite';
import ImageRecent from './ImageRecent';
import MusicTracks from './MusicTracks';
import Progress from './Progress';
import ProjectTitle from './ProjectTitle';
import Recent from './Recent';
import TemplatesMain, {
  STYLE_TYPE_TABS,
  TEMPLATES_ACTION,
  TEMPLATES_LAYOUT,
  TEMPLATES_VIEW,
} from './templates/TemplatesMain';
import Textures from './Textures';
import UploadImage from './UploadImage';
import VisualLibrary from './VisualLibrary';
import ReelArt from './ReelArt';
import VoiceOverTab from './VoiceOverTab';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined';

import brandingOutlined from './assets/images/branding_outlined.svg';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import checkRounded from './assets/images/checkrounded.svg';
import musicPlayerFilled from './assets/images/musicplayer_filled.svg';
import pictureFilled from './assets/images/picture_filled.svg';
import storyboard from './assets/images/storyboard.svg';
import stylesOutlined from './assets/images/styles_outlined.svg';
import videoResizeFilled from './assets/images/videoresize_filled.svg';
import videoCameraLoaderV5 from './assets/images/video_camera_loaderV5.gif';
import {
  InterestsOutlined,
  TextFieldsOutlined,
  VolumeDownOutlined,
  VolumeOffOutlined,
  VolumeUpOutlined,
} from '@mui/icons-material';
import { DisplayTextTab } from 'components/organisms/DisplayTextTab/DisplayTextTab';
import { ELEMENT_TYPE } from './EditVideo';
import { DisplayElementsTab } from 'components/organisms/DisplayElementsTab/DisplayElementsTab';
import NewFeatureChip from 'components/atoms/NewFeatureChip';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import AspectRatioOutlinedIcon from '@mui/icons-material/AspectRatioOutlined';
import DownloadVideoDialogContainer from 'containers/DownloadVideoDialogContainer';
import AlertNotification from 'components/atoms/AlertNotification';
import BrandView from 'components/organisms/BrandView';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { VolumeControlledSVG } from 'Utilities/SvgHelper.js';
import queryString from 'query-string';

const getMyVideos = actions.getMyVideos;
const getBrandSettings = actions.getBrandSettings;
const fetchAllVideosAndImages = actions.fetchAllVideosAndImages;
const searchAllAssets = actions.searchAllAssets;
const saveBrandSettings = actions.saveBrandSettings;
const saveProject = actions.saveProject;
const getVideoProgress = actions.getVideoProgress;
const generateVideo = actions.generateVideo;
const getVoiceOverTrackForPreview = actions.getVoiceOverTrackForPreview;
const deleteAudioFavAndRecents = actions.deleteAudioFavAndRecents;
const saveAudioFavAndRecents = actions.saveAudioFavAndRecents;
const getAudioFavAndRecents = actions.getAudioFavAndRecents;
const deleteGeneratedVideo = actions.deleteGeneratedVideo;
const getArticleAudios = actions.getArticleAudios;
const findProjectMusic = actions.findProjectMusicRequest;
const getProjectMusic = actions.getProjectMusicRequest;
const getMusicById = actions.getMusicByIdRequest;
const getCurrentSubscription = actions.getCurrentSubscription;
const quotaUtilization = actions.quotaUtilization;
const storeUndoableData = actions.storeUndoableData;
const getFavoriteVisuals = actions.getFavoriteVisualsRequest;
const getRecentVisuals = actions.getRecentVisualsRequest;
const getImageList = actions.getImageList;
const getMoreImages = actions.getMoreImagesRequest;
const searchCategoriesBegin = actions.searchCategoriesBegin;
const undo = UndoActionCreators.undo;
const redo = UndoActionCreators.redo;
const clearUndoHistory = UndoActionCreators.clearHistory;
const resetAssetsSearchStatus = actions.resetAssetsSearchStatus;
const getSavedAssets = actions.getSavedAssets;
const generateCSV = actions.generateCSV;
const getTranscriptionScenes = actions.getTranscriptionScenes;
const generateAsyncVideo = actions.generateAsyncVideo;
const showErrorNotification = actions.showErrorNotification;
const openProject = actions.openProject;
const openPreviewProject = actions.openPreviewProject;
const projectOpened = actions.projectOpened;
const stopVideoGeneration = actions.stopVideoGeneration;
const saveRecentImages = actions.saveRecentImages;
const generateVideoStatus = actions.generateVideoStatus;
const initiateVideoPostsLogin = actions.initiateVideoPostsLogin;
const createElementsProgress = actions.createElementsProgress;
const getSceneLevelAudio = actions.getSceneLevelAudioRequest;
const getSentenceKeywordSuggestions = actions.getSentenceKeywordSuggestionsRequest;
const getStylesByAttributes = actions.getStylesByAttributesRequest;
const sharePreview = actions.sharePreviewRequest;
const getTeamUsersRequest = actions.getTeamUsersRequest;
const importAudio = actions.importAudio;
const importImage = actions.importImage;
const getUserBrandsRequest = actions.getUserBrandsRequest;
const getUserPreferenceRequest = actions.getUserPreferenceRequest;
const getStyles = actions.getStylesRequest;

const MAX_UNDO_COUNT = 20;
const SCENE_TIME_SEC_PER_CHAR = 0.08;
export const ASPECT_RATIO_FACTOR = 0.5625;
export const REDUCED_BG_MUSIC_VOL_PERCENT = 10;
export const TAB_AI_VOICEOVER = 'AiVoiceover';
export const TAB_VOICEOVER_UPLOADS = 'VoiceoverUploads';
export const TAB_VISUALS = 'Visuals';
export const TAB_TEMPLATES = 'Templates';
export const TAB_TEMPLATE_STYLES = 'TemplateStyles';
const VOICEOVER_PROGRESS_LIMIT = 80;
const MIN_SCENE_DURATION = 0.5;

const menuTabEnum = {
  story: 0,
  visuals: 1,
  audio: 2,
  styles: 3,
  text: 4,
  branding: 5,
  elements: 6,
  format: 7,
};

const audioTabEnum = {
  backgroundMusic: 'track',
  voiceOver: 'voiceOver',
  myUploads: 'upload',
  recent: 'recent',
  favourite: 'favourite',
  volumeSettings: 'settings',
};

const visualTabEnum = {
  library: 'Library',
  textures: 'Textures',
  myUploads: 'Uploads',
  recent: 'Recent',
  favourite: 'Favourite',
  reelArt: 'ReelArt',
};

/**
 * Note: this.setState({ isAnyChange: true }) is an expensive call in our app, as it initiates a backend save.
 * If a fn has this code and the fn is called in a loop, then we should pass a flag to the fn to set isAnyChange value to true only in the last call in the loop.
 * This would ensure that save project is not called in a loop.
 */
class CreateVideo_Step3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadProject: this.loadProject(),
      loadProjectDetails: this.props.location.state.projectDetails,
      saveProjectList: this.props.location.state.projectList,
      summaryJsonText: this.loadProject() ? [] : this.props.location.state.summaryJson,
      timeInSec: 0,
      url: this.loadProject() ? '' : this.props.location.state.url,
      sentences: this.loadProject() ? 0 : this.props.location.state.sentences,
      originalText: this.loadProject() ? '' : this.props.location.state.originalText,
      baseText: this.loadProject() ? '' : this.props.location.state.baseText,
      summaryText: this.loadProject() ? '' : this.props.location.state.summaryText,
      allSummaryText: this.loadProject() ? '' : this.props.location.state.allSummaryText,
      isPrevious: false,
      isShowOverlay: false,
      project_id: this.loadProject()
        ? this.props.location.state.project_id
        : this.props.location.state.projectDetails.project_id,
      OverlayMessage: 'Building scenes with relevant<br /> images and video clips...',
      imageURL: this.loadProject() ? [] : this.props.location.state.imageURL,
      timePerFrame: this.loadProject() ? [] : this.props.location.state.timePerFrame,
      keywords: this.loadProject() ? [] : this.props.location.state.keywords,
      metaDescription: this.loadProject() ? '' : this.props.location.state.metaDescription,
      articleKeywords: this.loadProject() ? '' : this.props.location.state.articleKeywords,
      isSummaryOff: this.loadProject() ? false : this.props.location.state.isSummaryOff,
      lines: this.loadProject() ? 0 : this.props.location.state.lines,
      totalLines: this.loadProject() ? 0 : this.props.location.state.totalLines,
      value: this.loadProject() ? 0 : this.props.location.state.value,
      sendOriginalText: this.props.location.state.sendOriginalText,
      isSkipStep2: this.loadProject() ? true : this.props.location.state.isSkipStep2,
      scriptLanguage: this.props.location.state.scriptLanguage || 'en',
      filterLanguage: this.props.location.state.scriptLanguage,
      intervalData: '',
      totalSentence: 0,
      videoURL: '',
      imageCategoryText: '',
      categoryImages: [],
      defaultImages: [],
      txtShareTitle: '',
      txtShareDescription: '',
      txtShareTags: '',
      txtSharePrivacy: 'public',
      logoImage: '',
      logoLocation: '',
      mainOriginalText: this.loadProject() ? '' : this.props.location.state.mainOriginalText,
      startingSummary: this.loadProject() ? '' : this.props.location.state.startingSummary,
      totalSentencesWithSubScenes: this.loadProject() ? 0 : this.props.location.state.sentences,
      pIdForPreview: '#',
      subSentencesArray: [],
      animationTheme: this.props.location.state.animationThemeName
        ? AnimationHelper.getThemeByName(this.props.location.state.animationThemeName)
        : Animation2,
      currentThemeName: this.props.location.state.animationThemeName || Animation2.themeName,
      showPreview: false,
      className: 'figure-block',
      activeTrack: '',
      trackType: '',
      trackId: '',
      trackName: '',
      voiceOverTracks: voiceOverTracks,
      defaultTime: 5000,
      speedValue: 100,
      voiceOverURL: {},
      selectedKeywordForUnderline: [],
      percent: 0,
      //isShowOverlay: true,
      SaveButtonText: 'Save',
      distinctprojectCategory: ['Select category', 'Add new category'],
      allAssets: {},
      isAnyChange: this.loadProject() ? false : false,
      gotoUrl: '',
      isSave: '',
      isAnyUpdate: false,
      allSummaryAssets: [],
      activeVisualTab: '',
      visualTabsActivationStatus: {
        Textures: true,
      },
      // visualTabsActivationStatus: {
      // 	"Favourite": true
      // },
      audioTabsActivationStatus: {},
      scenePosition: [],
      dynamicPercentWidth: '0%',
      displayTextProjectCategory: false,
      GenerateVideoPopuptext2: false,
      audioFavourites: [],
      audioRecent: [],
      visualData: [],
      recentTracks: [],
      timeTakenInSeconds: 0,
      isFirstTimeSaved: true,
      askBrandSettingChange: false,
      popupAskBrandSettingChange: this.props.location.state.askBrandSettingChange
        ? this.props.location.state.askBrandSettingChange
        : false,
      projectName: this.props.location.state.projectDetails?.projectName,
      source: this.props.location.state.projectDetails?.source,
      projectCategory: this.props.location.state.projectDetails?.projectName,
      title: this.props.location.state.title ? this.props.location.state.title : null,
      cognito_id: this.props.location.state.projectDetails?.cognito_id,
      saveDate: this.props.location.state.projectDetails?.saveDate,
      step2TxtData: this.props.location.state.projectDetails?.step2TxtData,
      projectStates: this.props.location.state.projectDetails?.states,
      currentState: this.props.location.state.projectDetails?.currentState,
      scriptTxtData: this.props.location.state.projectDetails?.scriptTxtData,
      isNewProject: this.props.location.state.projectDetails?.isNewProject,
      showInitialLoadingBar: this.props.location.state.projectDetails?.isNewProject,
      isImportedFromPersonalWorkspace: this.props.location.state.projectDetails?.isImportedFromPersonalWorkspace,
      imageAssests: [],
      recentLoading: true,
      favLoading: true,
      uploadLoading: true,
      saveFromGenerate: false,
      showSave: true,
      brandSetting: {},
      aspectRatioClass: this.props.location.state.aspectRatioClass
        ? this.props.location.state.aspectRatioClass
        : ASPECT_RATIO_DEFAULT_CLASS,
      aspectRatioValue: this.props.location.state.aspectRatioValue
        ? this.props.location.state.aspectRatioValue
        : ASPECT_RATIO_DEFAULT_OPTION,
      aspectRatioFractionValue: this.props.location.state.aspectRatioFractionValue
        ? this.props.location.state.aspectRatioFractionValue
        : ASPECT_RATIO_DEFAULT_FRACTION_VALUE,
      VideoRes: '720p',
      videoResolutions: ['720p', '1080p'],
      currentActiveDiv: 1,
      defaultSceneSettings: {
        imageZoomPan: true,
        voiceOver: true,
        music: true,
        muteClipAudio: true,
        loopVideo: true,
        hideText: false,
        videoOptions: {
          isCropped: true,
          segments: [
            {
              start: 0,
              end: 0,
            },
          ],
        },
        loopVideoAllScene: false,
        muteClipAudioAllScene: false,
        applyHideTextToAllScene: false,
        applyImageZoomPanToAllScene: false,
        applyMusicToAllScene: false,
        applyVoiceOverToAllScene: false,
      },
      applyToAllScenes: false,
      defaultOutroTimeInSec: 5,
      defaultOutroTimeInMiniSec: 5000,
      defaultCustomIntroTimeInSec: 5,
      defaultCustomIntroTimeInMiniSec: 5000,
      favourites: [],
      recents: [],
      lists: [],
      currentSceneId: 1,
      showFocusOverlay: false,
      transitionId: 'none',
      shareVideoURL: '',
      isTransitions: false,
      listOfRecordedAudio: [],
      searchSceneText: {
        query: '',
        activeEl: null,
        activeElIndex: -1,
        matches: [],
        consecutiveMatchedWords: 1,
      },
      activeSearchElIndex: -1,
      past: [],
      present: this.props.location.state.projectDetails?.scenes
        ? _.cloneDeep(this.props.location.state.projectDetails)
        : null, // copy reqd to store state.loadProjectDetails value after returning from Brand Settings screen
      future: [],
      bgMusicVolPercent:
        this.props.location.state.bgMusicVolPercent == undefined ? 100 : this.props.location.state.bgMusicVolPercent,
      videoVolume: 50,
      voiceOverApplied: false,
      optimizeVideoOutput: false,
      audioTrimmerLoadingPercent: 0,
      hasOneSubPerSentence: this.props.location.state.hasOneSubPerSentence,
      previewPlayerKey: '',
      previewPlayerWidth: 0,
      previewPlayerHeight: 0,
      previewDefaultX: 0,
      previewDefaultY: 0,
      isInvalidSceneDuration: false,
      durationUpdatedScenes: this.loadProject()
        ? { loading: false, sceneIds: [], sceneIndices: [], isSceneDeleted: false, updatedSceneDuration: [] }
        : this.props.location.state.projectDetails?.durationUpdatedScenes,

      activeAudioTrack: null,
      elevenLabTrackID: null,
      applyingAudio: null,
      previewProgressMessage: null,
      showQuotaExceeded: false,
      brandId: this.props.location.state.projectDetails?.brandId,
      showBrandSwitchConfirmationDialog: this.props.location.state.applyBrandId,
      cancelingVO: null,
      generatedVoiceOvers: this.loadProject() ? [] : this.props.location.state.projectDetails.generatedVoiceOvers,
      voiceoverprogressStatus: 0,
      selectedAudioTabValue: 0,
      selectedVisualTabValue: 0,
      updatedDuraion: 0,
      selectedMenuTabValue: 0,
      showVoPopup: false,
    };
    if (this.props.location.state.applyBrandId)
      this.props.history.replace({
        state: {
          ...this.props.location.state,
          applyBrandId: null,
        },
      });
    this.previewMusicAudio = React.createRef();
    this.previewVoiceOverAudio = React.createRef();
    this.sceneContainerRef = React.createRef();

    this.timeTakenInStepThree = 0;
    //this.changePosition = this.changePosition.bind(this);
    //this.changeParagraphWidth = this.changeParagraphWidth.bind(this);
    this.audioTrimmerPortalNode = createHtmlPortalNode();

    this.videoPreviewRef = React.createRef();
    this.videoPreviewSingleSceneRef = React.createRef();
    this.timerId = null;
  }

  componentWillUnmount() {
    this.clearUndoHistory();
    clearInterval(this.state.timeTakenInStepThreeInterval);
    this.cancelIntervalTimers();
    document.removeEventListener('keydown', this.handleKeyPress);
    document.removeEventListener('click', this.handleMouseClick);
    this.saveImageRecent();
    this.props.generateVideoStatus({ step: 1 });
    AppLocalStorage.setItem('recordedAudio', '');
    window.removeEventListener('resize', this.windowDidResized);
    this.previewMusicAudio = null;
    this.previewVoiceOverAudio = null;
    this.sceneContainerRef = null;
    this.removeAudioTrimmer();
  }

  storeUndoableData = async loadProjectDetails => {
    const { past, present, future } = this.state;
    // Create a deep copy of the undoableData object so that further updates to it
    //don't change the object in 'past' array
    const newPresentCopy = _.cloneDeep(loadProjectDetails);
    //console.log('In storeUndoableData, past, present, loadProjectDetails: ', this.state.past, this.state.present, loadProjectDetails);

    let newPast = [...past];
    if (newPast.length > MAX_UNDO_COUNT) newPast.shift();
    if (present) newPast.push(present);
    //console.log('newPast: ', newPast);
    await this.setState({
      past: newPast,
      present: newPresentCopy,
      future: [],
      actionTaken: false,
    });
  };

  setPreviewReady = bool => this.setState({ previewReady: bool });

  onUndo = () => {
    amplitude.getInstance().logEvent('undo-click-step-3', {
      'media-url': this.state.url,
      'project-id': this.state.project_id,
    });
    const { past, present, future, loadProjectDetails } = this.state;

    const undoPast = [...past];
    const restoredPresent = undoPast.pop();
    const presentCopy = { ...present };

    this.setState(
      {
        loadProjectDetails: restoredPresent,
        future: [presentCopy, ...future],
        past: undoPast,
        present: restoredPresent,
        actionTaken: true,
      },
      () => {
        this.loadProjectFromJson(true);
      }
    );
  };

  onRedo = () => {
    amplitude.getInstance().logEvent('redo-click-step-3', {
      'media-url': this.state.url,
      'project-id': this.state.project_id,
    });
    const { past, present, future, loadProjectDetails } = this.state;
    if (future.length == 0) return;
    let newFuture = [...future];
    const restoredPresent = newFuture.splice(0, 1)[0];
    const presentCopy = { ...present };
    //console.log('In redo, restoredPresent, future: ', restoredPresent, future);

    this.setState(
      {
        loadProjectDetails: restoredPresent,
        past: [...past, presentCopy],
        present: restoredPresent,
        future: newFuture,
        actionTaken: true,
      },
      () => {
        this.loadProjectFromJson(true);
      }
    );
  };

  clearUndoHistory = () => {
    //console.log('In clearUndoHistory, this.state.canUndo, this.props.canRedo: ', this.state.canUndo, this.props.canRedo);
    this.props.clearUndoHistory();
  };

  async componentWillReceiveProps(props) {
    if (props.findProjectMusicResult !== this.props.findProjectMusicResult) {
      if (props.findProjectMusicResult.success) {
        if (!this.state.loadProject && this.state.source !== 'transcribe') {
          if (
            props.musicResult &&
            props.musicResult.Items &&
            props.musicResult.Items.length > 0 &&
            props.userBrands &&
            !props.userBrands.find(x => x.isDefault)
          ) {
            this.makeTrackActive(
              props.musicResult.Items[0].id,
              props.musicResult.Items[0].audio_url,
              props.musicResult.library,
              props.musicResult.Items[0].title,
              null,
              true,
              false
            );
          }
        }
      }
      this.setState({
        fetchingTracks: false,
      });
    }
    if (props.recentVisualsResult?.Items !== this.props.recentVisualsResult?.Items) {
      this.setState({
        recentVisuals: props.recentVisualsResult.Items,
      });
    }
    if (
      props.videoGenerationProgress !== this.props.videoGenerationProgress &&
      this.props.videoGenerationProgress.response_id == this.state.videoGenerationResponseId
    ) {
      if (props.videoGenerationProgress.progress !== false) {
        if (props.videoGenerationProgress.project_id) {
          if (props.videoGenerationProgress.project_id == this.state.project_id) {
            this.setState({
              percent: Math.trunc(props.videoGenerationProgress.progress),
              dynamicPercentWidth: Math.trunc(props.videoGenerationProgress.progress) + '%',
              generateVideoStatusMessage: props.videoGenerationProgress.generateVideoStatusMessage,
            });
          } else {
            console.log('ignoring video gen status data for previously opened project');
          }
        }
      } else {
        this.setState({
          OverlayMessage: 'Please wait...',
          displayGenerateVideo: false,
          timeTakenInSeconds: 0,
          generateError: true,
          preprocessError: true,
          hasExportID: false,
        });
      }
    } else if (
      !_.isEqual(props.generateVideoData, this.props.generateVideoData) ||
      props.generateVideoData !== this.props.generateVideoData
    ) {
      this.callRetrieveMpAPI(props.generateVideoData);
    }

    if (
      this.props.pastState.length !== props.pastState.length &&
      this.props.futureState.length !== props.futureState.length
    ) {
      this.setState(
        {
          loadProjectDetails: props.presentState,
        },
        () => {
          this.loadProjectFromJson(true);
        }
      );
    }

    if (this.props.pastState.length !== props.pastState.length) {
      let canUndo = props.canUndo;
      if (!canUndo) {
        this.setState({
          canUndo,
        });
      } else if (canUndo && this.state.isNewProject && props.pastState.length < 3) {
        this.setState({
          canUndo: false,
        });
      } else {
        this.setState({
          canUndo,
        });
      }
    }

    if (props.audioFavsAndRecent.length != this.props.audioFavsAndRecent.length) {
      let favourite = [];
      let recent = [];
      let upload = [];
      for (let i = 0; i < props.audioFavsAndRecent.length; i++) {
        const el = props.audioFavsAndRecent[i];
        if (el.category == 'favorite') {
          favourite.push(el);
        }
        if (el.category == 'recent') {
          recent.push(el);
        }
        if (el.category == 'upload') {
          upload.push(el);
        }
      }
      this.setState({
        favourites: favourite,
        recents: recent,
        uploadAudio: upload,
        lists: props.audioFavsAndRecent,
      });
    }

    if (this.props.assetResponseId != props.assetResponseId) {
      if (!this.state.assetResponseId) {
        this.setState({
          assetResponseId: props.assetResponseId,
        });
      }
    }

    if (this.props.allSummaryAssets.isChanged != props.allSummaryAssets.isChanged) {
      this.getSavedAssets(props.allSummaryAssets.data);
    }

    if (
      props.asyncVideoGenData.responseId != '' &&
      !props.asyncVideoGenData.isError &&
      this.props.asyncVideoGenData.responseId != props.asyncVideoGenData.responseId
    ) {
      this.setState({
        hasExportID: true,
        videoGenerationResponseId: props.asyncVideoGenData.responseId,
        isSavingForEmailNotification: true,
        isAnyChange: true,
      });
    } else if (props.asyncVideoGenData.responseId == '' && props.asyncVideoGenData.isError) {
      this.setState({
        hasExportID: false,
        videoGenerationResponseId: '',
        isSavingForEmailNotification: false,
      });
    }

    if (this.props.asyncCompleteData.isChanged != props.asyncCompleteData.isChanged && props.asyncCompleteData.URL) {
      if (props.asyncCompleteData.projectId == this.state.project_id) {
        // this.callRetrieveMpAPI(props.asyncCompleteData);
        this.setState(
          {
            generatingAsyncVideo: false,
            hasExportID: false,
            videoGenerationResponseId: '',
            videoURL: props.asyncCompleteData.URL,
            srtFile: props.asyncCompleteData.srt,
            txtFile: props.asyncCompleteData.text,
            vttFile: props.asyncCompleteData.vtt,
            previewJson: props.asyncCompleteData.preview,
            videoThumbnail: props.asyncCompleteData.thumbnail,
            audioURL: props.asyncCompleteData.audioURL,
            outputVideoDuration: props.asyncCompleteData.videoDuration,
            GenerateVideoHeading: 'Video Generated',
            isSavingForEmailNotification: false,
            // displayGenerateVideo: true,
          },
          () => {
            this.setState({
              // isAnyChange: true
            });
          }
        );
      }
    }

    if (props.videoPostSuccesfulLoginFlag > this.props.videoPostSuccesfulLoginFlag) {
      await this.goToVideoPosts(true);
    } else if (props.videoPostFailedLoginFlag > this.props.videoPostSuccesfulLoginFlag) {
      this.isOverlayShown(false);
    }
    let sceneArray = [...this.state.summaryJsonText];
    if (props.importAudioStatus == 'success' && this.state.audioImportStatus == 'pending' && sceneArray?.length) {
      if (
        AppLocalStorage.getItem('activeTrack') !== '' &&
        AppLocalStorage.getItem('activeTrack') !== null &&
        props.importAudioMappings
      ) {
        let selectedTrackUrl = AppLocalStorage.getItem('activeTrack');
        let mapItem = props.importAudioMappings.filter(x => x.sourceUrl == selectedTrackUrl);
        if (mapItem && mapItem.length > 0) {
          selectedTrackUrl = mapItem[0].url;
          AppLocalStorage.setItem('activeTrack', selectedTrackUrl);
          AppLocalStorage.setItem('trackId', mapItem[0].trackId);
        }
      }

      for (let t = 0; t < sceneArray.length; t++) {
        let scene = sceneArray[t];
        if (props.importAudioMappings && scene.recordedAudio) {
          let mapItem = props.importAudioMappings.filter(x => x.sourceUrl == scene.recordedAudio);
          if (mapItem && mapItem.length > 0 && mapItem[0].url) {
            sceneArray[t].recordedAudio = mapItem[0].url;
          }
        }
        if (props.importAudioMappings && scene.audioSegments && scene.audioSegments.length > 0) {
          for (let p = 0; p < scene.audioSegments.length; p++) {
            let mapItem = props.importAudioMappings.filter(x => x.sourceUrl == scene.audioSegments[p].recordedAudio);
            if (mapItem && mapItem.length > 0 && mapItem[0].url) {
              sceneArray[t].audioSegments[p].recordedAudio = mapItem[0].url;
            }
          }
        }
      }
      this.setState({ audioImportStatus: 'completed', summaryJsonText: sceneArray }, async () => {
        await this.saveProjectDetail_debounce();
      });
    }
    if (props.importImageStatus == 'success' && this.state.visualImportStatus == 'pending' && sceneArray?.length) {
      for (let t = 0; t < sceneArray.length; t++) {
        let scene = sceneArray[t];
        if (props.importImageMappings) {
          let mapItem = props.importImageMappings.filter(x => x.sourceUrl == scene.image);
          if (mapItem && mapItem.length > 0 && mapItem[0].url) {
            sceneArray[t].image = mapItem[0].url;
          }
        }
      }
      let imageURL = this.state.imageURL;
      for (let t = 0; t < imageURL.length; t++) {
        if (props.importImageMappings) {
          let mapItem = props.importImageMappings.filter(x => x.sourceUrl == imageURL[t]);
          if (mapItem && mapItem.length > 0 && mapItem[0].url) {
            imageURL[t] = mapItem[0].url;
          }
        }
      }
      this.setState({ visualImportStatus: 'completed', summaryJsonText: sceneArray }, async () => {
        await this.saveProjectDetail_debounce();
      });
    }
  }

  //To autosave the project
  componentDidUpdate(prevProps, prevState) {
    this.onStoppedProjectChange(prevProps);
    // this.onSharePreviewResultChange(prevProps);
    if (this.state.isAnyChange) {
      if (this.state.enableApplyVisualToAll === 1) this.setState({ enableApplyVisualToAll: 2 });
      else if (this.state.enableApplyVisualToAll === 2) this.setState({ enableApplyVisualToAll: false });
      this.setState(
        {
          isAnyChange: false,
        },
        async () => {
          await this.saveProjectDetail_debounce();
          //this.saveImageRecent(); // commented as this is causing several recent fav calls in a loop
          this.getEstimatedTime();
        }
      );
    }

    if (this.state.generateError) {
      let errorMessage = this.state.preprocessError ? 'Video pre-processing failed' : 'Video generation failed';
      if (this.state.voiceOverError) {
        errorMessage = 'Voice over failed to generate';
      }
      this.setState({
        OverlayMessage: 'Please wait...',
        displaySaveInprogress: false,
        voiceOverError: false,
        generateError: false,
        preprocessError: false,
      });
      this.props.showErrorNotification(errorMessage);
      if (this.state.VideoCreationJson && !_.isEmpty(this.state.VideoCreationJson)) {
        saveProjectBackup(this.state.VideoCreationJson, 'generate', this.state.user, this.state.project_id);
      }
    }

    if (
      (this.state.defaultImages &&
        (prevState.defaultImages !== this.state.defaultImages ||
          prevState.defaultImages.length !== this.state.defaultImages.length)) ||
      (this.state.allSummaryAssets &&
        (prevState.allSummaryAssets !== this.state.allSummaryAssets ||
          prevState.allSummaryAssets.length !== this.state.allSummaryAssets.length))
    ) {
      this.getDefaultAssets(this.state.defaultImages, this.state.allSummaryAssets);
    }

    if (
      this.state.trackId &&
      prevState.trackId !== this.state.trackId &&
      this.state.activeTrack &&
      this.state.activeTrack.startsWith('https://tracks.melod.ie')
    ) {
      this.props.getMusicById(this.state.trackId);
    }

    if (
      this.state.subSentencesArray &&
      prevState.subSentencesArray !== this.state.subSentencesArray &&
      this.state.searchSceneText &&
      this.state.searchSceneText.query
    ) {
      this.clearSearchValue();
    }

    if (prevState.activeVisualTab && !this.state.activeVisualTab) {
      // user clicks out of Visual Tab
      if (this.state.selectTemplateVisual) this.setState({ selectTemplateVisual: false });
      if (this.state.enableApplyVisualToAll) this.setState({ enableApplyVisualToAll: false });
    }

    if (
      devOnlyFeature() &&
      !this.state.templateMetaData &&
      prevState.templateMetaData !== this.state.templateMetaData
    ) {
      console.log('\nERROR::: Template is NULL\n');
      this.props.showErrorNotification('Template data is empty. Please report this issue to Sharad');
    }
    if (this.props.voiceOverDeleteResult !== prevProps.voiceOverDeleteResult) {
      this.setState({
        cancelRequestSent: this.props.voiceOverDeleteResult?.success?.status,
      });
    }

    if (
      this.props.voiceOverDataResponseID &&
      this.props.voiceOverDataResponseID !== prevProps.voiceOverDataResponseID
    ) {
      updateProgressCount(0, true);
      startProgressCountdown(0, voiceoverprogressStatus => {
        this.setState({
          voiceoverprogressStatus,
        });
      });
    }

    if (
      this.props.voiceoverprogressStatus !== prevProps.voiceoverprogressStatus &&
      this.state.voiceoverprogressStatus < this.props.voiceoverprogressStatus
    ) {
      updateProgressCount(this.props.voiceoverprogressStatus);
    }

    if (this.state.durationUpdatedScenes !== prevState.durationUpdatedScenes) {
      this.addUpdatedScenes(this.state.durationUpdatedScenes.sceneIndices);
    }
  }

  addUpdatedScenes = sceneIndices => {
    let updatedDuration = 0;
    if (sceneIndices?.length > 0) {
      sceneIndices.forEach(sceneIndex => {
        updatedDuration = updatedDuration + this.state.timePerFrame[sceneIndex];
      });
    } else {
      updatedDuration = 0;
    }
    this.setState({
      updatedDuration,
    });
  };

  applyingAudioStatus = trackId => {
    this.setState({ applyingAudio: trackId });
  };

  cancelingAudioStatus = status => {
    this.setState({ cancelingVO: status ? this.state.applyingAudio : null });
  };

  onStoppedProjectChange = prevProps => {
    if (this.props.stoppedProject && this.props.stoppedProject !== prevProps.stoppedProject) {
      if (this.state.project_id === this.props.stoppedProject.projectId) {
        this.setState({
          generatingAsyncVideo: false,
        });
      }
    }
  };

  updateVOInProject = (voiceOver, trackid) => {
    if (!trackid) return;
    const currentVO = {
      trackid,
      ...voiceOver,
    };
    const generatedVoiceOvers = this.state.generatedVoiceOvers?.length > 0 ? this.state.generatedVoiceOvers : [];
    const generatingVOIndex = generatedVoiceOvers.findIndex(voiceover => voiceover?.trackid == trackid);
    if (generatingVOIndex >= 0) {
      generatedVoiceOvers[generatingVOIndex] = currentVO;
    } else {
      generatedVoiceOvers.push({ ...currentVO, volume: this.state.videoVolume });
    }
    this.setState({ generatedVoiceOvers });
  };

  getGeneratedVOFromProject = trackid => {
    let generatedVoiceOvers = this.state.generatedVoiceOvers?.length > 0 ? this.state.generatedVoiceOvers : [];
    const generatingVOIndex = generatedVoiceOvers.findIndex(voiceover => voiceover?.trackid === trackid);
    if (generatingVOIndex >= 0) {
      let generatedVoiceOver;
      // if any scene duration changes, refetch VO from backend
      if (
        this.state?.durationUpdatedScenes?.sceneIds?.length > 0 ||
        this.state?.durationUpdatedScenes?.isSceneDeleted ||
        this.state.timeChangedPostAIVO ||
        generatedVoiceOvers[generatingVOIndex].volume !== this.state.videoVolume
      ) {
        this.setState({ generatedVoiceOvers: [] });
        generatedVoiceOver = null;
      } else {
        generatedVoiceOver = generatedVoiceOvers[generatingVOIndex];
      }
      return generatedVoiceOver;
    } else {
      return null;
    }
  };

  // onSharePreviewResultChange = prevProps => {
  //   if (this.props.sharePreviewResult && this.props.sharePreviewResult !== prevProps.sharePreviewResult) {
  //     if (!this.props.sharePreviewResult?.success || !this.props?.sharedPreviewUrl) {
  //       showError('An error occurred while sharing preview. Please contact support.');
  //     }
  //   }
  // };

  voiceOverOnEntireVideo = () => {
    return this.state.subSentencesArray.some(scene => scene.recordingApplyToAll);
  };

  loadAudioTrimmer = (forceRefresh, recordedAudioUrl) => {
    if (!this.voiceOverOnEntireVideo()) return;
    /*if (this.wavesurfer && !forceRefresh) {
			if (!this.state.showAudioTrimmerLoading) this.renderAudioTimelines();
			return;
		}*/
    if (!recordedAudioUrl) {
      if (!this.state.subSentencesArray || this.state.subSentencesArray.length == 0) return;
      // find for the first scene having recordingApplyToAll flag, as intro and new scenes may not have it
      let scene = this.state.subSentencesArray.find(scene => scene.recordingApplyToAll && scene.recordedAudio);
      if (scene) recordedAudioUrl = scene.recordedAudio;
      if (!recordedAudioUrl) return;
    }
    this.removeAudioTrimmer();
    this.setState({ showAudioTrimmerLoading: true });
    WaveSurfer.regions = RegionsPlugin;
    this.wavesurfer = WaveSurfer.create({
      container: '#audioTrimmer',
      height: 200,
      //barHeight: 2,
      //barWidth: 2,
      //barRadius: 2,
      //backend: "MediaElement",
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      waveColor: 'rgba(255, 255, 255, 0.5)',
      progressColor: 'transparent',
      cursorColor: 'white',
      scrollParent: true, // enable scrollbar
      autoCenter: false, // don't center the cursor when playing audio
      minPxPerSec: 100, //default is 20
      normalize: true, //increase wave height to fit the space
      interact: false, // disable seek on mouse click as it interferes with play button
      partialRender: true,
      responsive: true, // resize waveform on window resize
      plugins: [WaveSurfer.regions.create()],
    });
    this.wavesurfer.on('loading', loadingPercent => {
      this.setState({ audioTrimmerLoadingPercent: loadingPercent });
    });
    this.wavesurfer.on('ready', () => {
      this.renderAudioTimelines(); // render scene audio timelines when wavesurfer wave is loaded
      this.setState({ showAudioTrimmerLoading: false });
    });
    this.wavesurfer.on('region-removed', region => {
      // action to take when a region is removed from timeline
      //console.log('region removed: ', region.id);
    });
    this.wavesurfer.on('region-update-end', region => {
      const subSentencesArray = [...this.state.subSentencesArray];
      const timePerFrame = [...this.state.timePerFrame];
      let regionsList = this.wavesurfer.regions.list;
      let regionPrev = regionsList[this.state.currentActiveDiv - 1];
      let regionNext = regionsList[this.state.currentActiveDiv + 1];
      let activeSceneSubSentence = { ...subSentencesArray[this.state.currentActiveDiv - 1] };
      let prevSceneSubSentence = { ...this.state.subSentencesArray[this.state.currentActiveDiv - 2] };
      let nextSceneSubSentence = { ...this.state.subSentencesArray[this.state.currentActiveDiv] };
      if (region.start < 0) region.start = 0;
      if (region.end < 0) region.end = 0;
      let start = Math.round(region.start * 1000) / 1000;
      let end = Math.round(region.end * 1000) / 1000;
      if (
        nextSceneSubSentence &&
        nextSceneSubSentence.audioSegments &&
        regionNext &&
        nextSceneSubSentence.audioSegments[0].end < end
      ) {
        let endDiff = Math.round((nextSceneSubSentence.audioSegments[0].end - end) * 1000) / 1000;
        region.onResize(endDiff);
        end = nextSceneSubSentence.audioSegments[0].end;
      }
      if (
        prevSceneSubSentence &&
        prevSceneSubSentence.audioSegments &&
        regionPrev &&
        prevSceneSubSentence.audioSegments[0].start > start
      ) {
        let startDiff = Math.round((prevSceneSubSentence.audioSegments[0].start - start) * 1000) / 1000;
        region.onResize(startDiff, 'start');
        start = prevSceneSubSentence.audioSegments[0].start;
      }
      activeSceneSubSentence.audioSegments = [{ start, end }];
      activeSceneSubSentence.recordedAudioDuration =
        activeSceneSubSentence.audioSegments[0].end - activeSceneSubSentence.audioSegments[0].start;
      activeSceneSubSentence.recordedAudioDurationMiniSec = activeSceneSubSentence.recordedAudioDuration * 1000;
      activeSceneSubSentence.recordedAudio = recordedAudioUrl;
      subSentencesArray[this.state.currentActiveDiv - 1] = activeSceneSubSentence;
      timePerFrame[this.state.currentActiveDiv - 1] = activeSceneSubSentence.recordedAudioDuration;
      if (nextSceneSubSentence && nextSceneSubSentence.audioSegments && regionNext) {
        let start = activeSceneSubSentence.audioSegments[0].end;
        let end = nextSceneSubSentence.audioSegments[0].end;
        if (start > end) end = start;
        let startDiff = Math.round((start - nextSceneSubSentence.audioSegments[0].start) * 1000) / 1000;
        let endDiff = Math.round((end - nextSceneSubSentence.audioSegments[0].end) * 1000) / 1000;
        regionNext.onResize(startDiff, 'start');
        regionNext.onResize(endDiff);
        nextSceneSubSentence.audioSegments = [{ start, end }];
        nextSceneSubSentence.recordedAudioDuration = end - start;
        nextSceneSubSentence.recordedAudioDurationMiniSec = nextSceneSubSentence.recordedAudioDuration * 1000;
        subSentencesArray[this.state.currentActiveDiv] = nextSceneSubSentence;
        timePerFrame[this.state.currentActiveDiv] = nextSceneSubSentence.recordedAudioDuration;
      }
      if (prevSceneSubSentence && prevSceneSubSentence.audioSegments && regionPrev) {
        let start = prevSceneSubSentence.audioSegments[0].start;
        let end = activeSceneSubSentence.audioSegments[0].start;
        if (start > end) start = end;
        let startDiff = Math.round((start - prevSceneSubSentence.audioSegments[0].start) * 1000) / 1000;
        let endDiff = Math.round((end - prevSceneSubSentence.audioSegments[0].end) * 1000) / 1000;
        regionPrev.onResize(startDiff, 'start');
        regionPrev.onResize(endDiff);
        prevSceneSubSentence.audioSegments = [{ start, end }];
        prevSceneSubSentence.recordedAudioDuration = end - start;
        prevSceneSubSentence.recordedAudioDurationMiniSec = prevSceneSubSentence.recordedAudioDuration * 1000;
        subSentencesArray[this.state.currentActiveDiv - 2] = prevSceneSubSentence;
        // dont change intro duration if it is less than min allowed scene duration
        if (this.state.currentActiveDiv - 2 > 0 || prevSceneSubSentence.recordedAudioDuration > MIN_SCENE_DURATION)
          timePerFrame[this.state.currentActiveDiv - 2] = prevSceneSubSentence.recordedAudioDuration;
      }
      this.wavesurfer.pause();
      this.hideUnhidePlayButton(region);
      this.setState(
        { subSentencesArray, timePerFrame },
        _.debounce(() => this.saveTrimmedAudio(), 500)
      );
    });
    this.wavesurfer.load(recordedAudioUrl);
  };

  removeAudioTrimmer = () => {
    if (this.wavesurfer) this.wavesurfer.destroy();
    this.wavesurfer = null;
  };

  /*hideAudioTrimmer = () => {
		if (this.state.showAudioTrimmer) this.setState({ showAudioTrimmer: false });
	}*/

  toggleAudioTrimmer = show => {
    this.setState({ showAudioTrimmer: show }, () => {
      if (show) {
        amplitude.getInstance().logEvent('adjust-voiceover', {
          'project-id': this.state.project_id,
        });
        this.loadAudioTrimmer();
      } else this.removeAudioTrimmer();
    });
    //		this.setState({ showAudioTrimmer: show, refreshAudioTrimmer: true });
  };

  /**
   * Adds a centered play button and play/stop events to the wavesurfer region
   * @param {*} region
   */
  addPlayButton = region => {
    let playButton = document.createElement('i');
    playButton.setAttribute('class', 'fa fa-play-circle');
    playButton.addEventListener('click', () => {
      if (playButton.getAttribute('class') == 'fa fa-play-circle') {
        region.play();
        playButton.setAttribute('class', 'fa fa-stop-circle');
      } else {
        this.wavesurfer.pause();
        playButton.setAttribute('class', 'fa fa-play-circle');
      }
    });
    this.wavesurfer.on('pause', () => {
      playButton.setAttribute('class', 'fa fa-play-circle'); // change stop button to play button when audio is paused
    });
    region.element.appendChild(playButton);
    this.hideUnhidePlayButton(region);
  };

  hideUnhidePlayButton = region => {
    let playButton = region.element.querySelector('.fa.fa-play-circle');
    if (!playButton) return;
    if (region.end - region.start < 0.4) playButton.style.color = 'transparent';
    else playButton.style.color = '';
  };

  renderAudioTimelines = () => {
    if (!this.wavesurfer || (this.state.autoSyncProgress && this.state.autoSyncProgress < 100)) return;
    if (this.audioTrimmerScrollPosition)
      this.wavesurfer.container.children[0].scrollLeft = this.audioTrimmerScrollPosition;
    let regionsList = this.wavesurfer.regions.list;
    let modifyRegions = false;
    //if (Object.keys(regionsList).length > this.state.subSentencesArray.length) {
    this.wavesurfer.clearRegions();
    //} else
    //	modifyRegions = true;
    for (let i = 0; i < this.state.subSentencesArray.length; i++) {
      let audioSegment = this.state.subSentencesArray[i].audioSegments;
      let startTime = 0;
      let endTime = 0;
      let activeIndex = this.state.currentActiveDiv - 1;
      let isActive = activeIndex == i;
      // audioSegment[0]?.recordedAudio implies intro / outro / inserted scene has scene level recorded audio
      if (!audioSegment || audioSegment.length == 0 || audioSegment[0]?.recordedAudio) {
        // intro, outro or inserted scene
        if (i == this.state.subSentencesArray.length - 1) {
          // outro scene
          //try { this.wavesurfer.getDuration(); } catch (e) { console.log(e) }
          let prevSceneNumber = i.toString();
          let prevRegion = regionsList[prevSceneNumber];
          startTime = prevRegion.end;
          endTime = startTime;
        } else if (i == 0) {
          // intro scene
          startTime = 0;
          endTime = 0;
          //if(isActive) this.changeActiveDiv(2);
        } else {
          // inserted scene
          let prevSceneNumber = i.toString();
          let prevRegion = regionsList[prevSceneNumber];
          startTime = prevRegion.end;
          endTime = startTime;
        }
        let subSentencesArray = [...this.state.subSentencesArray];
        subSentencesArray[i] = { ...subSentencesArray[i] };
        subSentencesArray[i].audioSegments = [{ start: startTime, end: endTime }];
        this.setState({ subSentencesArray });
      } else {
        if (audioSegment[0]) {
          startTime = audioSegment[0].start;
          endTime = audioSegment[0].end;
        } else {
          let prevSceneNumber = i.toString();
          let prevRegion = regionsList[prevSceneNumber];
          startTime = prevRegion.end;
          endTime = startTime;
        }
      }
      let sceneNumber = (i + 1).toString();
      let region = regionsList[sceneNumber];
      let regionElementToDelete;
      if (region) {
        if (region.start !== startTime || region.end !== endTime || region.resize !== isActive) {
          //region.remove();
          regionElementToDelete = region.element;
          region = this.wavesurfer.addRegion({
            id: sceneNumber, //data-id: used to access the region from wavesurfer.regions.list
            start: startTime,
            end: endTime,
            loop: false,
            drag: false,
            resize: isActive ? true : false,
            color: isActive ? 'rgba(0, 0, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)',
          });
        }
      } else {
        region = this.wavesurfer.addRegion({
          id: sceneNumber, //data-id: used to access the region from wavesurfer.regions.list
          start: startTime,
          end: endTime,
          loop: false,
          drag: false,
          resize: isActive ? true : false,
          color: isActive ? 'rgba(0, 0, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)',
        });
      }
      if (isActive) {
        region.element.setAttribute('id', 'region-active'); //used to set css properties to main region
        let playButton = region.element.querySelector('.fa');
        if (!playButton) this.addPlayButton(region);
        let regionRect = region.element.getBoundingClientRect();
        let containerRect = this.wavesurfer.container.children[0].getBoundingClientRect();
        // Only completely visible elements return true:
        let isVisible = regionRect.left >= containerRect.left && regionRect.right <= containerRect.right;
        if (!isVisible) region.element.scrollIntoView();
        //region.element.scrollIntoView({ behavior: "smooth", inline: "center" }); // { behavior: "smooth" } for smooth scroll, inline: "center" to always move the div to center
      } else {
        region.element.removeAttribute('id');
        let playButton = region.element.querySelector('.fa');
        if (playButton) playButton.remove();
      }
      const { index } = this.getSummaryFromGivenSubSentenceSceneId(this.state.subSentencesArray[i].sceneId);
      if (index > -1 && (this.state.imageAssests[index] || this.state.imageURL[index])) {
        let imageSrc, vidSrc;
        if (this.state.imageAssests[index] && this.state.imageAssests[index].thumb_jpg) {
          imageSrc = this.state.imageAssests[index].thumb_jpg;
        } else if (this.state.imageAssests[index] && this.state.imageAssests[index].thumb) {
          let resourceType = getResourceType(this.state.imageAssests[index].thumb);
          if (resourceType === 'image') imageSrc = this.state.imageAssests[index].thumb;
          else if (resourceType === 'video') vidSrc = this.state.imageAssests[index].thumb;
        } else {
          let resourceType = getResourceType(this.state.imageURL[index]);
          if (resourceType === 'image') imageSrc = this.state.imageURL[index];
          else if (resourceType === 'video') vidSrc = this.state.imageURL[index];
        }
        let visualElementMatched = false;
        let thumbnailDiv = region.element.querySelector('.audio-trimmer-thumbnail');
        if (regionElementToDelete) {
          // move div from old region to new region
          thumbnailDiv = regionElementToDelete.querySelector('.audio-trimmer-thumbnail');
          if (thumbnailDiv) region.element.appendChild(thumbnailDiv);
          regionElementToDelete.remove();
        }
        let sceneNumDiv, thumbnailVisual;
        if (thumbnailDiv) {
          sceneNumDiv = thumbnailDiv.querySelector('.audio-trimmer-thumbnail div');
          thumbnailVisual = thumbnailDiv.querySelector('.audio-trimmer-thumbnail img');
          if (thumbnailVisual) {
            if (imageSrc) visualElementMatched = true;
            else thumbnailVisual.remove();
          } else {
            thumbnailVisual = thumbnailDiv.querySelector('.audio-trimmer-thumbnail video');
            if (thumbnailVisual) {
              if (vidSrc) visualElementMatched = true;
              else thumbnailVisual.remove();
            }
          }
        } else {
          thumbnailDiv = document.createElement('div');
          thumbnailDiv.setAttribute('class', 'audio-trimmer-thumbnail');
          sceneNumDiv = document.createElement('div');
          thumbnailDiv.appendChild(sceneNumDiv);
          region.element.appendChild(thumbnailDiv);
        }
        sceneNumDiv.innerHTML = this.state.subSentencesArray[i].showSceneNumber;
        thumbnailDiv.setAttribute('data-id', sceneNumber);
        if (imageSrc && !visualElementMatched) {
          thumbnailVisual = document.createElement('img');
          thumbnailVisual.setAttribute('src', imageSrc);
        } else if (vidSrc && !visualElementMatched) {
          thumbnailVisual = document.createElement('video');
          let vidSource = document.createElement('source');
          vidSource.setAttribute('src', vidSrc);
          thumbnailVisual.appendChild(vidSource);
        }
        if (thumbnailVisual) thumbnailDiv.appendChild(thumbnailVisual);
      }
    }
  };

  onAudioTrimmerClick = event => {
    event && event.preventDefault();
    this.audioTrimmerScrollPosition = event.target.closest('wave').scrollLeft;
    if (
      event.target.closest('region') &&
      event.target.closest('region').dataset.id &&
      event.target.closest('region').id !== 'region-active'
    ) {
      let index = parseInt(event.target.closest('region').dataset.id);
      this.changeActiveDiv(index);
    }
  };

  saveTrimmedAudio = () => {
    const subSentencesArray = this.state.subSentencesArray;
    const summaryJsonText = [...this.state.summaryJsonText];
    let scene = this.state.subSentencesArray.find(scene => scene.recordingApplyToAll && scene.recordedAudio);
    let recordedAudio = scene ? scene.recordedAudio : undefined;
    let index = 0;
    let recordedAudioDurationMiniSec = 0;
    let recordedAudioDuration = 0;
    for (let i = 0; i < subSentencesArray.length; i++) {
      let audioSegment = subSentencesArray[i].audioSegments &&
        subSentencesArray[i].audioSegments.length > 0 && { ...subSentencesArray[i].audioSegments[0] };
      //scene.audioSegments = [...scene.audioSegments];
      //scene = { ...scene };
      if (index == 0 && i == 0) {
        summaryJsonText[index].audioSegments = [];
      } else {
        let prevSubSentence = subSentencesArray[i - 1];
        if (subSentencesArray[i].sceneId === prevSubSentence.sceneId) {
          // implies subscene
        } else {
          index++;
          recordedAudioDuration = 0;
          summaryJsonText[index].audioSegments = [];
        }
      }
      if (audioSegment) {
        recordedAudioDuration += audioSegment.end - audioSegment.start;
        recordedAudioDurationMiniSec = recordedAudioDuration * 1000;
        // user may have dragged the intro scene to 0 but actually there may be small gap hence 0.01 value below
        if (
          recordedAudioDuration < 0.01 &&
          (subSentencesArray[i].showSceneNumber === 'Custom Intro Scene' ||
            subSentencesArray[i].showSceneNumber === 'Outro Scene')
        ) {
          // dont save audioSegment if its a outro or intro scene with 0sec duration
          summaryJsonText[index] = {
            ...summaryJsonText[index],
            recordedAudioDuration: undefined,
            recordedAudioDurationMiniSec: undefined,
            recordingApplyToAll: true,
            recordedAudio: undefined,
            audioSegments: undefined,
          };
        } else {
          summaryJsonText[index] = {
            ...summaryJsonText[index],
            recordedAudioDuration,
            recordedAudioDurationMiniSec,
            recordingApplyToAll: true,
            recordedAudio,
          };
          summaryJsonText[index].audioSegments.push(audioSegment);
        }
      }
    }
    this.setState({ summaryJsonText, isAnyChange: true });
  };

  audioTrimmerModal = children => {
    return (
      <div id="audio-trimmer-modal">
        <div className="audio-trimmer-screen">
          <div className="modal-body" style={{ height: '100%', overflowY: 'auto' }}>
            <div className="blue font-size-2 bold">Adjust voice-over</div>
            <div className="blue bold mt-2 vo-scene-num">
              {this.state.subSentencesArray[this.state.currentActiveDiv - 1].showSceneNumber}
            </div>
            {children}
            <OutPortal node={this.audioTrimmerPortalNode} />
          </div>
          <button
            type="button"
            className="btn btn-default blue blue-border secondary-button-elliptical top-before-right"
            onClick={() => this.saveTrimmedAudio()}
            disabled={this.state.SaveButtonText == 'Saving...'}
          >
            {this.state.SaveButtonText}
          </button>
          <button
            type="button"
            className="btn btn-default blue blue-border secondary-button-elliptical top-right"
            onClick={() => this.setState({ showAudioTrimmer: false })}
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  fetchAspectRatioFromSettings = () => {
    const aspectRatioValue = this.state.aspectRatioValue;
    const row = AllAspectRatios.find(row => row.value == aspectRatioValue);
    if (row) {
      this.updateAspectRatio(row, true);
    }
  };

  getDaysRemainingTillResetDate = monthlyResetDate => {
    const resetDate = moment(monthlyResetDate, 'YYYY-MM-DD');
    const today = moment().startOf('day');
    const resetDay = resetDate.date();
    const todayDay = today.date();

    // To calculate the time difference of two dates
    let daysRemainingTillResetDate = moment.duration(resetDate.diff(today)).asDays();
    if (daysRemainingTillResetDate > 0) {
      daysRemainingTillResetDate = resetDay - todayDay;
    } else if (daysRemainingTillResetDate < 0) {
      let dd = resetDate.date();
      let mm = today.month;
      let yy = today.year;
      // add one month
      let newResetDate = moment(resetDate).add(1, 'months');
      daysRemainingTillResetDate = moment.duration(newResetDate.diff(today)).asDays();
    }

    return daysRemainingTillResetDate;
  };

  logEventVoiceSelected = (trackName, category, categoryName, trackLanguage) => {
    try {
      this.getVoiceOverQuota(true);
      amplitude.getInstance().logEvent('voice-selected', {
        name: trackName,
        country: category,
        'project-id': this.state.project_id,
        'voice-type': categoryName === 'Eleven Labs' ? 'Elevenlabs' : 'Standard',
        'voice duration': this.state.videoTotalDurationInSeconds,
        'quota left': this.state.textToSpeechDurationValue,
        language: trackLanguage,
      });
    } catch (error) {
      amplitude.getInstance().logEvent('log-failed', {
        'event-name': 'voice-selected',
      });
    }
  };

  getVoiceOverQuota = async (refreshSubscription = false) => {
    let textToSpeechDurationPerMonth = 0;
    let monthlyResetDate;
    let daysRemainingTillResetDate;
    let textToSpeechDuration = 0;
    let subscriptionDetails = null;

    if (refreshSubscription) {
      subscriptionDetails = await this.props.getCurrentSubscription(this.state.username);

      if (subscriptionDetails && subscriptionDetails.data?.currentQuota?.textToSpeechDurationPerMonth) {
        textToSpeechDurationPerMonth = subscriptionDetails.data.currentQuota.textToSpeechDurationPerMonth;
        monthlyResetDate = subscriptionDetails.data.currentQuota.monthlyResetDate;
      }
    } else {
      subscriptionDetails = getSubscriptionDetails(this.state.username ? this.state.username : '');
      if (subscriptionDetails && subscriptionDetails.currentQuota?.textToSpeechDurationPerMonth) {
        {
          textToSpeechDurationPerMonth = subscriptionDetails.currentQuota.textToSpeechDurationPerMonth;
          monthlyResetDate = subscriptionDetails.currentQuota.monthlyResetDate;
        }
      }
    }

    daysRemainingTillResetDate = this.getDaysRemainingTillResetDate(monthlyResetDate);

    let remainingSecs = 0;
    //if (textToSpeechDuration != 0) {
    const quotaDuration = textToSpeechDurationPerMonth; //  - textToSpeechDuration;
    remainingSecs = quotaDuration >= 0 ? quotaDuration : 0;
    let intRemainingSecs = parseInt(remainingSecs);

    let mins = parseInt(remainingSecs / 60);
    let secs = parseInt(remainingSecs % 60);
    if (secs != 0) {
      this.setState({ textToSpeechDuration: mins + 'm ' + secs + 's' });
      remainingSecs = mins * 60 + secs;
    } else {
      this.setState({ textToSpeechDuration: mins + ' mins' });
      remainingSecs = mins * 60;
    }
    // } else {
    //   remainingSecs = subscriptionDetails.currentQuota.textToSpeechDurationPerMonth;
    //   this.setState({
    //     textToSpeechDuration: (remainingSecs > 0 ? remainingSecs / 60 : 0) + ' mins',
    //   });
    // }
    this.setState({
      textToSpeechDurationValue: parseInt(remainingSecs != 0 ? remainingSecs : 0),
      daysRemainingTillResetDate: daysRemainingTillResetDate,
    });
  };

  getEstimatedTime = () => {
    if (
      !this.state.subSentencesArray ||
      this.state.subSentencesArray.length === 0 ||
      !this.state.timePerFrame ||
      this.state.timePerFrame.length === 0
    )
      return;
    let timeArray = _.cloneDeep(this.state.timePerFrame);
    if (
      this.state.subSentencesArray[0].showSceneNumber === 'Custom Intro Scene' &&
      this.state.subSentencesArray[0].settings.hideScene
    )
      timeArray.splice(0, 1);
    if (
      this.state.subSentencesArray[this.state.subSentencesArray.length - 1].showSceneNumber === 'Outro Scene' &&
      this.state.subSentencesArray[this.state.subSentencesArray.length - 1].settings.hideScene
    )
      timeArray.splice(timeArray.length - 1, 1);
    let videoTime = timeArray.reduce((a, b) => a + b, 0);

    const subscriptionDetails = getSubscriptionDetails(this.state.username ? this.state.username : '');

    var videoDurationLimit = 601;
    let videoDurationLimitWithGrace = subscriptionDetails?.data?.plan?.features?.video?.textToVideoDuration
      ? subscriptionDetails.data.plan.features.video.textToVideoDuration
      : 720;

    if (videoDurationLimitWithGrace > 120) {
      videoDurationLimit = videoDurationLimitWithGrace - 120;
    }

    const planCode = subscriptionDetails?.plan ? subscriptionDetails.plan.plan_code : '';
    const isFreeTrial = planCode === PLAN_CODES.freeTrial || planCode === PLAN_CODES.teamsFreeTrial;
    if (isFreeTrial) {
      videoTime += 6; // add 6 sec for Pictory clip that is added to free trial videos
    }
    videoTime = Math.round(videoTime);

    const videoDuration = AnimationHelper.secondsToMinutesRepresentationHuman(videoTime);
    const mins = parseInt(videoDurationLimit / 60);
    var videoDurationToolTip = 'Video duration has exceeded ' + mins + ' minutes';

    this.setState({
      videoDuration,
      videoTotalDurationInSeconds: videoTime,
      videoDurationLimit: videoDurationLimit,
      videoDurationLimitWithGrace: videoDurationLimitWithGrace,
      videoDurationToolTip: videoDurationToolTip,
    });

    return { videoTime, videoDuration, timeArray };
  };
  isKey = (event, str) => event && event.key && event.key.toLowerCase() === str;
  //To save the project with cntrl+S or cmd+S
  handleKeyPress = event => {
    const key = this.isKey(event, 's');
    const undoKey = this.isKey(event, 'z');
    const redoKey = this.isKey(event, 'y');
    if ((key && event.ctrlKey) || (key && event.metaKey)) {
      if (
        window.location &&
        window.location.pathname &&
        window.location.pathname.replace('/', '') === CustomURLs.stepThree
      ) {
        this.saveProjectDetail_debounce();
        event.preventDefault();
        return false;
      }
    }

    if (((redoKey && event.ctrlKey) || (undoKey && event.metaKey && event.shiftKey)) && !this.state.isOpenTextEditor) {
      event.preventDefault();
      this.onRedo();
    } else if (((undoKey && event.ctrlKey) || (undoKey && event.metaKey)) && !this.state.isOpenTextEditor) {
      event.preventDefault();
      this.onUndo();
    }
    // dont change active div if focus is on input element (project title or search box)
    if (document.activeElement.nodeName === 'INPUT' || document.activeElement.contentEditable === 'true') return;
    if (
      (event.key == 'ArrowLeft' || event.key == 'ArrowUp') &&
      !this.state.activeVisualTab &&
      !this.state.activeAudioTab &&
      !this.state.activeAspectRatioTab &&
      !this.state.activeThemeTab &&
      !this.state.activeDisplayTextTab
    ) {
      const currentSentence = this.state.currentActiveDiv;
      if (currentSentence - 1 > 0 && !this.state.isOpenTextEditor) {
        if (currentSentence == 2 && this.state.subSentencesArray[0]?.settings?.hideScene) {
          // skip scene open if the scene on right is outro and it is hidden
        } else {
          event.preventDefault();
          this.changeActiveDiv(currentSentence - 1, true);
        }
      }
    }
    if (
      (event.key == 'ArrowRight' || event.key == 'ArrowDown') &&
      !this.state.activeVisualTab &&
      !this.state.activeAudioTab &&
      !this.state.activeAspectRatioTab &&
      !this.state.activeThemeTab &&
      !this.state.activeDisplayTextTab
    ) {
      const currentSentence = this.state.currentActiveDiv;
      if (this.state.subSentencesArray.length >= currentSentence + 1 && !this.state.isOpenTextEditor) {
        if (
          currentSentence == this.state.subSentencesArray.length - 1 &&
          this.state.subSentencesArray[this.state.subSentencesArray.length - 1]?.settings?.hideScene
        ) {
          // skip scene open if the scene on right is outro and it is hidden
        } else {
          event.preventDefault();
          this.changeActiveDiv(currentSentence + 1, true);
        }
      }
    }
    //if (event && event.key && event.key.toLowerCase() === "q" && event.ctrlKey && devOnlyFeature()) {
    // add any dev only shortcut if required
    //}
  };

  update() {
    this.props.update(this.state);
  }

  ChangeComplete = value => {
    AppLocalStorage.setItem('voiceSpeechSpeed', value);
    let timePerFrame = this.state.timePerFrame;
    let sceneIds = this.state.durationUpdatedScenes?.sceneIds || [];
    let sceneIndices = this.state.durationUpdatedScenes?.sceneIndices || [];
    if (!this.state.subSentencesArray.some(scene => scene.recordingApplyToAll) && getSelectedVoiceOverTrack()) {
      this.state.subSentencesArray.forEach((subSentence, index) => {
        if (
          subSentence.showSceneNumber !== 'Custom Intro Scene' &&
          subSentence.showSceneNumber !== 'Outro Scene' &&
          !subSentence.transcription &&
          subSentence.settings?.voiceOver
        ) {
          sceneIndices.push(index);
          sceneIds.push(subSentence.sceneId);
          timePerFrame = updateEstimatedSceneDuration(
            this.getVoiceOverText(subSentence.sentence),
            this.state.timePerFrame,
            index,
            this.state.speedValue
          );
        }
      });
    }
    this.setState({
      speedValue: value,
      timePerFrame,
      durationUpdatedScenes: {
        loading: false,
        sceneIds,
        sceneIndices,
        isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
        updatedSceneDuration: [],
      },
      isAnyChange: true,
    });
  };

  downloadFile = (url, fileName, type = 'video/mp4') => {
    var FileSaver = require('file-saver');

    url = MediaStorage.Instance.GetVideoUrlFromCDN(url);
    // Create an invisible A element
    const a = document.createElement('a');
    a.style.display = 'none';
    document.body.appendChild(a);

    if (typeof a.download != 'undefined') {
      // Set the HREF to a Blob representation of the data to be downloaded
      a.href = url;

      // Use download attribute to set set desired file name
      a.setAttribute('download', fileName);

      // Trigger the download by simulating click
      a.click();

      // Cleanup
      window.URL.revokeObjectURL(a.href);
      document.body.removeChild(a);
    } else {
      FileSaver.saveAs(url, fileName);
    }
  };

  DownloadVideo = () => {
    var url = this.state.videoURL;
    var fileName = this.state.summaryJsonText[0].sentence + '.mp4';

    this.downloadFile(url, fileName);
    // window.open(url);
    amplitude.getInstance().logEvent('asset-downloaded', {
      'downloaded-from': 'download-modal',
      asset: 'video',
      'asset-type': '.mp4',
      'article-link': this.state.url,
      'video-link': url,
      'video-name': fileName,
      'project-id': this.state.project_id,
    });

    this.setState({
      //videoURL: videoURL,
      OverlayMessage: 'Please wait...<br /> Your video download is in progress.',
    });

    setTimeout(() => {
      // document.getElementById('VideoProgressBar').style.display = 'none';
      this.setState({
        OverlayMessage: 'Please wait...',
        displayVideoProgressBar: false,
      });
    }, 15000);
  };

  downloadAudio = () => {
    var url = this.state.audioURL;
    var fileName = this.state.summaryJsonText[0].sentence + '.mp3';

    this.downloadFile(url, fileName);
    // window.open(url);

    amplitude.getInstance().logEvent('asset-downloaded', {
      'downloaded-from': 'download-modal',
      asset: 'audio',
      'asset-type': '.mp3',
      'audio-url': this.state.audioURL,
      'project-id': this.state.project_id,
    });

    this.setState({
      //videoURL: videoURL,
      OverlayMessage: 'Please wait...<br /> Your audio download is in progress.',
    });

    setTimeout(() => {
      // document.getElementById('VideoProgressBar').style.display = 'none';
      this.setState({
        OverlayMessage: 'Please wait...',
        displayVideoProgressBar: false,
      });
    }, 15000);
  };

  showTooltip = () => {
    $('#tooltip-file-size').hover(
      () => {
        $('#tooltip-file-size')
          .tooltip({
            title: `Download to PC${this.state.fileSize ? ` (${this.state.fileSize} MB)` : ''}`,
            placement: 'top',
            trigger: 'manual',
          })
          .tooltip('show');
      },
      () => {
        this.hideTooltip();
      }
    );
  };

  hideTooltip = () => {
    $('#tooltip-file-size').tooltip('hide');
  };

  generateCSV = urls => {
    const ShowLabel = false;
    let arrData = [];
    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    // var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
    urls.map((url, i) => {
      let sentence = '';
      this.state.summaryJsonText[i] &&
        this.state.summaryJsonText[i].subsentences.map(el => {
          sentence = `${sentence} ${el}`;
        });
      let data = {
        'Date & Time': `${moment().format('MM/DD/YYYY')} ${moment().format('HH:mm')}`,
        Sentence: sentence,
        URL: url,
      };
      if (
        this.state.source === 'url' &&
        this.state.summaryJsonText[i].sceneId != 'Outro Scene' &&
        this.state.summaryJsonText[i].sceneId != 'Custom Intro Scene'
      ) {
        data['Sentence'] = `${data['Sentence']}. Read More ${this.state.url}`;
      }
      arrData.push(data);
    });
    var CSV = '';
    //This condition will generate the Label/Header
    if (ShowLabel) {
      let row = '';

      //This loop will extract the label from 1st index of on array
      for (var index in arrData[0]) {
        //Now convert each value to string and comma-seprated
        row += index + ',';
      }
      row = row.slice(0, -1);
      //append Label row with line break
      CSV += row + '\r\n';
    }

    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
      let row = '';
      //2nd loop will extract each column and convert it in string comma-seprated
      for (var index in arrData[i]) {
        row += '"' + arrData[i][index] + '",';
      }
      row.slice(0, row.length - 1);
      //add a line break after each row
      CSV += row + '\r\n';
    }

    if (CSV == '') {
      alert('Invalid data');
      return;
    }

    //this trick will generate a temp "a" tag
    var link = document.createElement('a');
    link.id = 'lnkDwnldLnk';

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);

    var csv = CSV;
    let blob = new Blob([csv], { type: 'text/csv' });
    var csvUrl = window.webkitURL.createObjectURL(blob);
    var filename = 'social.csv';
    $('#lnkDwnldLnk').attr({
      download: filename,
      href: csvUrl,
    });

    $('#lnkDwnldLnk')[0].click();
    document.body.removeChild(link);
  };

  callRetrieveMpAPI = video => {
    let isCSV = this.state.generateCSV;
    const subscriptionDetails = getSubscriptionDetails(this.state.username);
    const planCode = subscriptionDetails && subscriptionDetails.plan ? subscriptionDetails.plan.plan_code : '';
    const isFreeTrial = planCode === PLAN_CODES.freeTrial || planCode === PLAN_CODES.teamsFreeTrial;
    if (video) {
      if (video.failed) {
        clearInterval(this.state.intervalGenerateVideoMessage);
        clearInterval(this.state.timeTakenToGenerateVideo);
        this.setState({
          OverlayMessage: 'Please wait...',
          displayGenerateVideo: false,
          timeTakenInSeconds: 0,
        });
        if (video.error) {
          switch (video.error) {
            case 'VIDEO_MONTHLY_QUOTA_REACHED':
              amplitude.getInstance().logEvent('generate-clicked-after-exceeding-quota');
              this.setState(
                {
                  quotaExceeded: false,
                },
                () => {
                  this.setState({
                    quotaExceeded: true,
                  });
                }
              );
              break;
            default:
              this.setState({
                videoGenerationError: video.error,
                showVideoGenerationError: true,
              });
              break;
          }
        }
      } else {
        var url = video.output;
        if (isCSV) {
          this.generateCSV(video.per_scene_output);
          this.setState({ videoId: null, generateCSV: undefined });
        } else {
          this.setState({
            videoURL: url,
            videoId: null,
            shareVideoURL: video.share_output,
            srtFile: video.srt,
            txtFile: video.text,
            vttFile: video.vtt,
            previewJson: video.preview,
            videoThumbnail: video.thumbnail,
            audioURL: video.audioURL,
            outputVideoDuration: video.videoDuration,
          });
        }
        clearInterval(this.state.intervalGenerateVideoMessage);
        clearInterval(this.state.timeTakenToGenerateVideo);
        if (video.output && isCSV) {
          amplitude.getInstance().logEvent(isCSV ? 'CSV-generated' : 'video-generated', {
            'time-taken-in-seconds': this.state.timeTakenInSeconds,
            'time-taken-in-minutes': (this.state.timeTakenInSeconds / 60).toFixed(2),
            'project-id': this.state.project_id,
            video_url: video.output,
            share_video_url: video.share_output,
            containsTextToImage: this.state.containsTextToImage,
          });
        }
        this.props.getCurrentSubscription();
        if (isCSV) {
          this.setState({
            OverlayMessage: 'Please wait...',
            displayGenerateVideoPopuptext1: false,
            displayGenerateVideoPopuptext2: false,
            timeTakenInSeconds: 0,
            displayVideoProgressBar: false,
            displayGenerateVideo: false,
          });
        } else {
          this.setState({
            OverlayMessage: 'Please wait...',
            displayGenerateVideoPopuptext1: false,
            displayGenerateVideoPopuptext2: true,
            timeTakenInSeconds: 0,
          });
        }
        this.setState({ GenerateVideoHeading: 'Video generated', isAnyChange: true });
      }
    } else {
      clearInterval(this.state.intervalGenerateVideoMessage);
      clearInterval(this.state.timeTakenToGenerateVideo);
      this.setState({
        OverlayMessage: 'Please wait...',
        displayGenerateVideo: false,
        timeTakenInSeconds: 0,
      });
    }
  };

  isOutroScene = sceneId => {
    if (allowTemplates(this.state.username)) return false;
    let array = [...this.state.summaryJsonText];
    let arr = array[sceneId - 1];
    if (arr.sceneId !== undefined && arr.sceneId === 'Outro Scene') return true;
    else return false;
  };

  isCustomIntroScene = sceneId => {
    if (allowTemplates(this.state.username)) return false;
    let array = [...this.state.summaryJsonText];
    let arr = array[sceneId - 1];
    if (arr.sceneId !== undefined && arr.sceneId === 'Custom Intro Scene') return true;
    else return false;
  };

  saveImageRecent = () => {
    if (this.state.user) {
      //add recent used images
      this.props.saveRecentImages({
        username: this.state.user.username,
        scenes: this.state.loadProjectDetails ? this.state.loadProjectDetails.scenes : this.state.summaryJsonText,
        imageURL: this.state.imageURL,
        allAssets: this.state.allAssets,
      });
    }
  };

  hideShowOverlay = async (
    SentenceCounter,
    ImageUrl,
    isChange = false,
    assets,
    isUpdated = false,
    isNewScene = false
  ) => {
    if (this.state.selectTemplateVisual) {
      this.selectTemplateVisualSelected(
        'visual',
        ImageUrl,
        isUpdated == 'isUploadImage' && getResourceType(ImageUrl) == 'video'
      );
      //return;
    }
    let imageURL = [...this.state.imageURL];
    let imageAssests = [];
    let asset = {};
    let shouldUpdateScene = false;
    let sceneId = parseInt(SentenceCounter);
    if (
      (this.state.selectTemplateVisualSceneType == 'intro' || this.state.selectTemplateVisualSceneType == 'outro') &&
      isUpdated == 'isUploadImage' &&
      getResourceType(ImageUrl) == 'video'
    ) {
      this.checkMusic(false, sceneId, undefined, undefined, true);
    } else {
      this.checkMusic(true, sceneId, undefined, undefined, true);
    }
    if (isUpdated) {
      let subSentencesArray = this.state.subSentencesArray;
      let firstMatchedSubscene;
      for (let i = 0; i < subSentencesArray.length; i++) {
        let scene = subSentencesArray[i];
        if (scene.sceneId === sceneId) {
          scene.isImageChanged = true;
          let bRollSet = scene.transcription && (await this.setTranscriptionScenebRoll(scene.sceneId));
          if (isUpdated == 'isUploadImage') {
            scene.isCustomImage = true;
            const isVideo = ImageUrl ? getResourceType(ImageUrl) == 'video' : false;

            if (isVideo && !bRollSet) {
              shouldUpdateScene = true;
              scene.isUploadedVideo = true;
              if (!scene.recordedAudio || scene.recordedAudio == '' || !bRollSet) {
                if (voiceOverTrackSelected() === false) {
                  await this.muteClipAudio(false, scene.sceneId, true, true);
                }
              }
              if (
                scene.showSceneNumber &&
                (scene.showSceneNumber == 'Custom Intro Scene' || scene.showSceneNumber == 'Outro Scene')
              ) {
                if (scene.isUploadedVideo == true) {
                  await this.muteClipAudio(false, scene.sceneId, true, true);
                  this.checkVoiceOver(false, scene.sceneId, scene.settings, false);
                }
              }
            } else {
              scene.isUploadedVideo = false;
              await this.muteClipAudio(true, scene.sceneId, false, true);
              if (
                scene.showSceneNumber &&
                (scene.showSceneNumber == 'Custom Intro Scene' || scene.showSceneNumber == 'Outro Scene')
              ) {
                if (voiceOverTrackSelected() === true) {
                  this.checkVoiceOver(true, scene.sceneId, scene.settings, false);
                }
              }
            }
            if (scene.settings) {
              if (this.state.applyToAllScenes) {
                await this.checkImageZoom(scene.settings.imageZoomPan, scene.sceneId, false, false, true);
              } else {
                await this.checkImageZoom(false, scene.sceneId, false, false, true);
              }
            } else {
              await this.checkImageZoom(false, scene.sceneId, false, false, true);
            }
          } else if (scene.isCustomImage || scene.isArticleImage) {
            scene.isCustomImage = false;
            scene.isArticleImage = false;
            scene.isUploadedVideo = false;
            if (scene.settings) {
              if (this.state.applyToAllScenes) {
                await this.checkImageZoom(scene.settings.imageZoomPan, scene.sceneId, false, false, true);
              } else {
                await this.checkImageZoom(true, scene.sceneId, false, false, true);
              }
            } else {
              await this.checkImageZoom(true, scene.sceneId, false, false, true);
            }
          } else {
            scene.isUploadedVideo = false;
            await this.muteClipAudio(true, scene.sceneId, false, true);
          }

          await this.trimScene(0, 0, false, scene.sceneId, undefined, undefined, true);
          if (!this.state.isOpenTextEditor) {
            await this.reloadScene(SentenceCounter);
          }
          if (scene.settings.frame) {
            scene.settings.frame = null; // reset frame values on new visual upload
          }
          if (!firstMatchedSubscene) firstMatchedSubscene = scene;
        }
      }
      const summaryJsonText = [...this.state.summaryJsonText];
      let { index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId);
      summaryJsonText[index] = { ...summaryJsonText[index] };
      summaryJsonText[index].image = ImageUrl;
      if (summaryJsonText[index].settings.frame) summaryJsonText[index].settings.frame = null; // reset frame values on new visual upload
      //if (isUpdated == "isUploadImage") summaryJsonText[index].isUploadedVideo = true;
      //else summaryJsonText[index].isUploadedVideo = false;
      summaryJsonText[index].isImageChanged = firstMatchedSubscene?.isImageChanged;
      summaryJsonText[index].isCustomImage = firstMatchedSubscene?.isCustomImage;
      summaryJsonText[index].isUploadedVideo = firstMatchedSubscene?.isUploadedVideo;
      await this.setState({ summaryJsonText });
      asset = assets;
    } else {
      if (this.state.allAssets[ImageUrl]) {
        asset = this.state.allAssets[ImageUrl];
      }
    }
    if (asset && !_.isEmpty(asset)) {
      imageAssests = [...this.state.imageAssests];
      imageAssests[SentenceCounter - 1] = asset;
    } else {
      imageAssests = [...this.state.imageAssests, { thumb: ImageUrl, url: ImageUrl, large: ImageUrl }];
    }
    if (this.isOutroScene(SentenceCounter)) {
      return false;
    }
    // if(this.isCustomIntroScene(SentenceCounter)){
    // 	return false;
    // }
    let defaultImages = this.state.defaultImages;
    imageURL[SentenceCounter - 1] = ImageUrl;
    if (isNewScene) {
      defaultImages.splice(
        SentenceCounter - 1,
        0,
        !_.isEmpty(asset) ? assets : isUpdated ? asset : { thumb: ImageUrl, preview: ImageUrl, large: ImageUrl }
      );
    } else {
      defaultImages[SentenceCounter - 1] = !_.isEmpty(asset)
        ? asset
        : isUpdated
        ? asset
        : { thumb: ImageUrl, preview: ImageUrl, large: ImageUrl };
    }
    let refreshVisualLibrary = this.state.refreshVisualLibrary;
    let isShowOverlay = this.state.isShowOverlay;
    if (SentenceCounter === Object.keys(this.state.summaryJsonText).length) {
      isShowOverlay = false;
    }
    let visualChanged = {};
    if (ImageUrl && isUpdated) {
      visualChanged = {
        changedVisualUrl: ImageUrl,
        changedVisualAsset: assets,
        changedBackgroundColor: '',
        enableApplyVisualToAll: 1,
      };
    }

    // restrict save call twice in case of uploaded video. If both these flags are true, save call will be made from trimScene function below
    if (isUpdated && shouldUpdateScene) isChange = false;

    await this.setState(
      {
        imageURL: imageURL,
        defaultImages: defaultImages,
        refreshVisualLibrary: !refreshVisualLibrary,
        isShowOverlay: isShowOverlay,
        isAnyChange: false, // dont save here. Instead save in the componentWillMount_call below
        imageAssests,
        ...visualChanged,
      },
      async () => {
        if (isChange) await this.componentWillMount_call(isChange);
      }
    );

    if (isUpdated) {
      await this.setState({ editScenePlayVideo: !this.state.editScenePlayVideo }, async () => {
        if (shouldUpdateScene) {
          let video = document.createElement('video');
          video.src = ImageUrl;
          if (video) {
            await video.addEventListener('durationchange', async () => {
              if (video.duration) {
                await this.trimScene(0, video.duration, true, sceneId, {}, true);
              }
            });
          }
        }
      });
    }
  };

  NoImageFind(sentenceCounter, subSceneLength, isChange) {
    this.hideShowOverlay(sentenceCounter, NO_IMAGE, isChange);
  }

  isOverlayShown = (isTrue, overlayMessage = 'Please wait...') => {
    this.setState({
      isShowOverlay: isTrue,
      OverlayMessage: overlayMessage,
    });
  };

  SetTimePerFrame = async (subSceneIndex, sceneDuration, oldSceneDuration, isAnyChange = true) => {
    sceneDuration = Math.round(sceneDuration * 100) / 100;
    const timePerFrame = [...this.state.timePerFrame];
    timePerFrame[subSceneIndex] = sceneDuration;
    await this.setState({ timePerFrame, isAnyChange });
    if (!this.state.timeChangedPostAIVO) this.setState({ timeChangedPostAIVO: true });
    amplitude.getInstance().logEvent('scene-duration-set', {
      'scene-number': subSceneIndex + 1,
      'old-duration': oldSceneDuration,
      'new-duration': sceneDuration,
    });
  };

  SetTimePerFrameForAllScenes = async (sceneDuration, isAnyChange = true) => {
    var len = this.state.subSentencesArray.length;
    const timePerFrame = [...this.state.timePerFrame];

    for (let i = 0; i < len; i++) {
      if (
        this.state.subSentencesArray[i].showSceneNumber !== 'Custom Intro Scene' &&
        this.state.subSentencesArray[i].showSceneNumber !== 'Outro Scene'
      ) {
        timePerFrame[i] = sceneDuration;
      }
    }

    await this.setState({ timePerFrame, isAnyChange });
    if (this.state.timeChangedPostAIVO === false) this.setState({ timeChangedPostAIVO: true });
    //  amplitude.getInstance().logEvent('scene-duration-set', {
    //    'scene-number': subSceneIndex + 1,
    //    'old-duration': oldSceneDuration,
    //    'new-duration': sceneDuration,
    //  });
  };

  SetTransition = async (transition, sceneId, applytoAll) => {
    let subSentencesArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    let scenes = [];
    let summaryJson = [];
    if (applytoAll) {
      scenes = subSentencesArray;
      summaryJson = summaryJsonText;
    } else {
      scenes = subSentencesArray.filter(x => x.sceneId == sceneId);
    }
    scenes.forEach(scene => {
      scene.transition = transition;
      const { index } = this.getSummaryFromGivenSubSentenceSceneId(scene.sceneId);
      summaryJsonText[index].transition = transition;
    });
    this.setState({ subSentencesArray, summaryJsonText, isAnyChange: true });
  };

  RemoveTransition = async sceneId => {
    let subSentencesArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    let scenes = subSentencesArray.filter(x => x.sceneId == sceneId);
    scenes.forEach(scene => {
      scene.transition = null;
      const { index } = this.getSummaryFromGivenSubSentenceSceneId(scene.sceneId);
      summaryJsonText[index].transition = null;
    });
    this.setState({ subSentencesArray, summaryJsonText, isAnyChange: true });
  };

  RemoveAllTransitions = async () => {
    let subSentencesArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    let scenes = subSentencesArray;
    scenes.forEach(scene => {
      scene.transition = null;
      const { index } = this.getSummaryFromGivenSubSentenceSceneId(scene.sceneId);
      summaryJsonText[index].transition = null;
    });
    this.setState({ subSentencesArray, summaryJsonText, isAnyChange: true });
  };

  //yet to be implement method
  YetToBeImplement = event => {
    alert(GlobalJs.YetToImplement);
  };

  //Change Text
  changeText(text) {
    $('#divGenerateVideoMessage').hide(1000);
    setTimeout(() => {
      this.setState({ GenerateVideoMessage: text });
      $('#divGenerateVideoMessage').show(1000);
    }, 1000);
  }

  closeQuotaPopup = () => {
    this.setState({
      quotaExceeded: false,
      trimVideoNotAllowed: false,
      transitionsNotAllowed: false,
      musicTrackNotAllowed: false,
    });
  };

  getFileSize = url => {
    var fileSize = '';
    var http = new XMLHttpRequest();
    http.open('GET', url, false); // false = Synchronous

    http.send(null); // it will stop here until this http request is complete

    // when we are here, we already have a response, b/c we used Synchronous XHR

    if (http.status === 200) {
      fileSize = http.getResponseHeader('content-length');
      fileSize = fileSize / 1024 / 1024;
      fileSize = Math.ceil(fileSize);
    }
    return fileSize;
  };

  generateElements = async (e, isCSV, isScegen) => {
    const selectedVOTrackId = AppLocalStorage.getItem('voiceOverTrackId');
    if (depreciatedVoiceovers.includes(+selectedVOTrackId)) {
      this.setState({ showVoPopup: true });
      return;
    }
    let { invalidStockVisuals, invalidSceneIds } = this.validateVideoStockVisuals();
    if (invalidStockVisuals) {
      this.setState({
        videoStockVisualsNotSupport: true,
        notSupportedScenes: invalidSceneIds,
      });
      return;
    }
    const subscriptionDetails = getSubscriptionDetails(this.state.username);
    this.props.generateVideoStatus({ step: 1 });
    if (!this.state.generatingAsyncVideo) {
      if (this.state.intervalGenerateVideoMessage !== undefined) clearInterval(this.state.intervalGenerateVideoMessage);

      var TextLines = [
        'Video boosts conversion rates by 80%',
        '“77% of companies use YouTube to host marketing videos',
        'Videos are shared 20X more often than other types of content on LinkedIn',
        'Video in email subject increases open rates by 19%, click-through rates by 65%',
      ];

      var counter = 1;
      var data = setInterval(() => {
        if (counter === TextLines.length) counter = 0;
        this.changeText(TextLines[counter]);
        counter++;
      }, 10000);

      this.setState(
        {
          GenerateVideoHeading: 'Video generation in progress',
          generateVideoStatusMessage: 'Preprocessing video...',
          percent: 0,
          intervalGenerateVideoMessage: data,
          GenerateVideoMessage: TextLines[0],
          displayGenerateVideo: true,
          hasExportID: false,
          dynamicPercentWidth: '0%',
          displayGenerateVideoPopuptext1: true,
          displayGenerateVideoPopuptext2: false,
        },
        () => {
          setTimeout(() => {
            this.setState(
              {
                generateCSV: isCSV,
              },
              () => setTimeout(() => this.GenerateVideo(e, isCSV, isScegen), 1000)
            );
          }, 100);
        }
      );
    } else {
      showInfo('Video generation is in progress');
    }
  };

  beginButtonMovingAnimation = () => {
    // PICT-852: Remove the animation entirely
    return;

    const alreadyFoundDiv = document.querySelector('.floating-blue-box');
    if (alreadyFoundDiv) alreadyFoundDiv.parentElement.removeChild(alreadyFoundDiv);

    const startEls = document.querySelectorAll('.VideoProgressBar#GenerateVideo .modal-dialog');
    let start = null;
    startEls.forEach(el => {
      const rect = el.getBoundingClientRect();

      if (rect.width && rect.height) start = rect;
    });
    if (!start) return;

    const end = document.querySelector('.working-div #notification-bell-dropdown').getBoundingClientRect();

    const div = document.createElement('div');
    div.classList.add('floating-blue-box');

    const img = document.createElement('img');
    img.src = '/images/video-generating.png';
    img.classList.add('fill-height-width');

    div.appendChild(img);

    div.style.left = parseInt(start.left) + 'px';
    div.style.top = parseInt(start.top) + 'px';
    div.style.width = parseInt(start.width) + 'px';
    div.style.height = parseInt(start.height) + 'px';
    div.style.display = 'block';

    anime({
      targets: div,
      translateX: end.x - start.x * 1.96,
      translateY: end.y - start.y * 1.68,
      scaleX: end.width / start.width,
      scaleY: end.height / start.height,
      duration: 1000,
      easing: 'easeOutQuint',
      complete: () => {
        div.style.display = 'none';
      },
    });

    document.body.appendChild(div);
  };

  GenerateNextGenerationVideo = async event => {
    this.generateNextGenerationVideo = true;
    await this.generateElements(event, false, false);
  };

  GenerateDraftVideo = async event => {
    this.generateDraftVideo = true;
    await this.generateElements(event, false, false);
  };

  //Generate Button click method
  GenerateVideo = async (event, isCSV, isScegen) => {
    try {
      const axios = require('axios');
      const signal = axios.CancelToken.source();
      const timeTakenToGenerateVideo = setInterval(() => {
        this.setState({
          timeTakenInSeconds: this.state.timeTakenInSeconds + 1,
        });
      }, 1000);
      this.setState({ abortControllerGenration: signal, timeTakenToGenerateVideo });
      document.getElementById('myMusicTrackPlay').pause();
      document.getElementById('myAudioPlay').pause();
      document.getElementById('myPreviewAudioPlayForEdit').pause();
      document.getElementById('myPreviewVoiceOverPlayForEdit').pause();
      var arrayOfElements = document.getElementsByClassName('voicePlayStop');
      var lengthOfArray = arrayOfElements.length;

      for (var i = 0; i < lengthOfArray; i++) {
        arrayOfElements[i].className = 'voicePlayStop fa fa-play';
      }

      arrayOfElements = document.getElementsByClassName('playStop');
      lengthOfArray = arrayOfElements.length;

      for (var i = 0; i < lengthOfArray; i++) {
        arrayOfElements[i].className = 'playStop fa fa-play';
      }

      arrayOfElements = document.getElementsByClassName('recentPlayStop');
      lengthOfArray = arrayOfElements.length;

      for (var i = 0; i < lengthOfArray; i++) {
        arrayOfElements[i].className = 'recentPlayStop fa fa-play';
      }

      arrayOfElements = document.getElementsByClassName('pausePreviewButton');
      lengthOfArray = arrayOfElements.length;

      for (var i = 0; i < lengthOfArray; i++) {
        arrayOfElements[i].className = 'pausePreviewButton icon-play-right';
      }

      arrayOfElements = document.getElementsByClassName('voiceOverMusicTrack');
      lengthOfArray = arrayOfElements.length;

      for (var i = 0; i < lengthOfArray; i++) {
        arrayOfElements[i].className = 'voiceOverMusicTrack fa fa-play';
      }

      this.setState({
        //isShowOverlay: true,
        OverlayMessage: 'Please wait... <br />Your video creation is in progress.',
      });
      let VideoCreationJson = null;
      let containsTextToImage = false;
      try {
        let json = await this.generateVideoJSON(isCSV, isScegen, true, null, null, true, true);
        if (json) {
          VideoCreationJson = json.VideoCreationJson;
          containsTextToImage = json.containsTextToImage;
        }
      } catch (error) {
        this.setState({
          displayGenerateVideo: false,
          showVideoGenerationError: true,
          videoGenerationError: error,
        });
        return;
      }
      if (!VideoCreationJson) {
        this.setState({
          displayGenerateVideo: false,
        });
        return;
      }
      let totalImages = 0;
      let totalVideos = 0;
      let totalScenes = VideoCreationJson.scenes.length;
      let totalSubScenes = 0;
      let videoTime = 0;
      let totalChangedScenes = 0;
      VideoCreationJson &&
        VideoCreationJson.scenes &&
        VideoCreationJson.scenes.map(scene => {
          scene &&
            scene.background &&
            scene.background.src &&
            scene.background.src.map(asset => {
              if (asset.type === 'image') {
                totalImages++;
              } else if (asset.type === 'video') {
                totalVideos++;
              }
            });
          scene &&
            scene.sub_scenes &&
            scene.sub_scenes.map((subScene, index) => {
              if (index > 0) {
                totalSubScenes++;
              }
            });
          videoTime += scene.time;
        });

      this.state.subSentencesArray.map(scene => {
        if (scene.isImageChanged) {
          totalChangedScenes++;
        }
      });
      let videoTimeExceded = false;
      if (this.state.source !== 'transcribe') {
        let textToVideoDuration = this.getTextToVideoDurationFeatureValue();
        if (videoTime > textToVideoDuration) {
          videoTimeExceded = true;
        }
      }

      amplitude.getInstance().logEvent(videoTimeExceded ? 'video-time-exceeded' : 'generate-clicked', {
        'total-time-to-generate-in-seconds': this.timeTakenInStepThree,
        'total-time-to-generate-in-minutes': (this.timeTakenInStepThree / 60).toFixed(2),
        'total-images': totalImages,
        'total-videos': totalVideos,
        'total-scenes': totalScenes,
        'total-sub-scenes': totalSubScenes,
        'track-name': localStorage.getItem('trackName'),
        'voice-track-name': localStorage.getItem('voiceOverTrackName'),
        'total-video-time-in-seconds': videoTime,
        'total-video-time-in-minutes': (videoTime / 60).toFixed(2),
        'project-id': this.state.project_id,
        'total-scenes-with-original-image': totalScenes - totalChangedScenes,
        'video-usecase': this.state.source,
      });
      if (videoTimeExceded) {
        this.setState({
          videoTimeLimitExceeded: true,
          displayGenerateVideo: false,
        });
        return;
      }
      clearInterval(this.state.timeTakenInStepThreeInterval);
      this.timeTakenInStepThree = 0;
      this.setState({
        VideoCreationJson,
        containsTextToImage,
      });
      await this.props.generateVideo({ abortController: signal, VideoCreationJson, isCSV });
    } catch (error) {
      await refreshSession();
      console.log(error);
      const filePath =
        this.state.username + '/project/' + this.state.project_id + '/frontend-generate-failed-error.txt';
      Storage.put(filePath, JSON.stringify({ error: `${error}` }), {
        level: 'public',
        ACL: 'public-read',
      }).then(res => {
        amplitude.getInstance().logEvent('frontend-generate-failed', {
          error: MediaStorage.Instance.GetUserUploadUrl(filePath, 'public'),
        });
      });
      clearInterval(this.state.timeTakenToGenerateVideo);
      this.setState({
        OverlayMessage: 'Please wait...',
        displayGenerateVideo: false,
        timeTakenInSeconds: 0,
        generateError: true,
        hasExportID: false,
      });
    }
  };

  getTextToVideoDurationFeatureValue = () => {
    return parseInt(getFeatures(this.state.username)[features.textToVideoDuration] || 1620); //video time more than 25 minutes
  };

  sanatizeString(keyword) {
    const replacements = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&nbsp;': ' ',
      '</strong>.</strong>': '.</strong>',
    };

    for (let key in replacements) {
      keyword = keyword.split(key).join(replacements[key]);
    }

    return keyword;
  }

  /**
   * For aspect ratio other than 16:9, font size should reduce so that captions don't cover most of the screen space
   * @param {*} fontSizeIn
   * @returns float value of font size
   */
  getFontSizeForAspectRatio = fontSizeIn => {
    let fontSize = fontSizeIn * (this.state.aspectRatioClass == 'sixteen-nine' ? 1 : ASPECT_RATIO_FACTOR);
    // font size is in pt (not px) so rounded for it to show up as integer in Edit mode
    return fontSize;
  };
  getFontNameForVideoGen = fontName => {
    fontName = fontName.replace(' ', '') + '.ttf';
    //For Japanese and Korean Transcription language
    if (this.state.source === 'transcribe' && this.state.transcriptionLanguage) {
      if (['ja-JP', 'ko-KR'].includes(this.state.transcriptionLanguage)) {
        fontName = 'arial-unicode-ms.ttf';
      } else if (this.state.transcriptionLanguage === 'hi-IN') {
        fontName = 'Mangal-Regular.ttf';
      }
    }
    return fontName;
  };

  removeBOMChar = text => {
    let str = findAndReplaceAll(text, /[\b]/, ''); //remove /b backspace characters
    if (str) {
      for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) === 0xfeff || str.charCodeAt(i) === 0x00bb) {
          str = str.substring(0, i) + str.substring(i + 1);
          i = i - 1;
        }
      }
    }
    return str;
  };

  removeBOMChar = text => {
    let str = findAndReplaceAll(text, /[\b]/, ''); //remove /b backspace characters
    if (str) {
      for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) === 0xfeff) {
          str = str.substring(0, i) + str.substring(i + 1);
          i = i - 1;
        }
      }
    }
    return str;
  };

  executeAsyc = async (callback, delay = 100) => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          await callback();
          resolve();
        } catch (error) {
          reject(error.message);
        }
      }, delay);
    });
  };

  // async refreshDuration() {
  //   console.log('refresh duration');
  //   voiceOverResult = await this.getVoiceOverTrackURL(
  //     getSelectedVoiceOverTrack(),
  //     this.state.speedValue,
  //     voiceOverTrackSelected(),
  //     null,
  //     null,
  //     { videoGeneration: false }
  //   );
  // }

  async generateVideoJSON(
    videoClips,
    isScegen,
    generateVoiceOver = true,
    SceneId,
    showSceneNumber,
    isNewPreview,
    isGeneratevideo = false
  ) {
    this.videoGenProgress = 0;
    this.voiceOverProgress = 0;
    this.setState({
      previewProgressMessage: null,
    });

    this.timerIdVideoGen = setInterval(() => {
      if (this.videoGenProgress < VOICEOVER_PROGRESS_LIMIT) {
        this.props.createElementsProgress(this.videoGenProgress || 1, 'Preprocessing scenes...');
        this.videoGenProgress++;
      } else {
        this.cancelIntervalTimers();
      }
    }, 1000);

    const subscriptionDetails = getSubscriptionDetails(this.state.username);
    const planCode = subscriptionDetails && subscriptionDetails.plan ? subscriptionDetails.plan.plan_code : '';
    const isFreeTrial = planCode === PLAN_CODES.freeTrial || planCode === PLAN_CODES.teamsFreeTrial;
    let isOutroScene = false;
    let isVoiceOver = false;
    const isAllowTemplates = allowTemplates(this.state.username);
    const aspectRatioFontFactor = getAspectRatioFontFactor(this.state.aspectRatioClass);
    let Theme = this.state.animationTheme;
    let ThemeStyle = Theme.getStyles();
    ThemeStyle.fontSize = this.getFontSizeForAspectRatio(ThemeStyle.fontSize);
    let minimumWidth = this.state.VideoRes && this.state.VideoRes === '1080p' ? 1080 : 720;
    let videoWidth =
      this.state.VideoRes && this.state.VideoRes === '1080p'
        ? AnimationHelper.defaultWidth * 1.5
        : AnimationHelper.defaultWidth;
    let videoHeight =
      this.state.VideoRes && this.state.VideoRes === '1080p'
        ? AnimationHelper.defaultHeight * 1.5
        : AnimationHelper.defaultHeight;

    if (videoWidth < minimumWidth) {
      let minWidth = minimumWidth / videoWidth;

      videoWidth = minWidth * videoWidth;
      videoHeight = minWidth * videoHeight;
    }

    if (this.state.aspectRatioFractionValue) {
      let videoResolution = parseInt(this.state.VideoRes.replace(/[^0-9]/g, ''));
      if (isNaN(videoResolution) === false) {
        if (this.state.aspectRatioFractionValue >= 1) {
          videoHeight = videoResolution;
          videoWidth = parseInt(Math.floor(videoHeight * this.state.aspectRatioFractionValue) / 2) * 2;
        } else {
          videoWidth = videoResolution;
          videoHeight = parseInt(Math.floor(videoWidth / this.state.aspectRatioFractionValue) / 2) * 2;
        }
      }
    }

    let outputFileName = 'Untitled Project';
    if (this.state.projectName !== '' && this.state.projectName !== null && this.state.projectName !== undefined)
      outputFileName =
        this.state.projectName
          .replace(/[^A-Za-z0-9]/g, '')
          .replace(/\s/g, '')
          .trim()
          .substring(0, 20) + '.mp4';
    else
      outputFileName =
        this.state.subSentencesArray[0].subSentences.replace(/[^A-Za-z0-9]/g, '').substring(0, 20) + '.mp4';
    if (outputFileName === '.mp4') outputFileName = 'Untitled.mp4';
    var VideoCreationJson = {
      audio: {},
      output: {
        width: videoWidth,
        height: videoHeight,
        format: 'mp4',
        name: outputFileName,
        title: this.state.projectName,
        description: '',
      },
      scenes: [],
      optimize_video_output: this.state.optimizeVideoOutput,
      projectId: this.state.project_id,
      authorId: this.state.loadProjectDetails.cognito_id,
    };

    var containsTextToImage = false;
    let description = '';
    var audio = {};
    let voiceOver = false;
    let music = false;
    let hasRecordedVoice = false;
    let playBgClipAudio = false;
    let hasbRollAudio = false;
    let ImgApplyToAll = isImgApplyToAll(this.state.summaryJsonText);
    for (let i = 0; i < this.state.summaryJsonText.length; i++) {
      /*if (this.state.source === "transcribe") {
				if (this.state.summaryJsonText[i].sceneId !== "Custom Intro Scene"
					&& this.state.summaryJsonText[i].sceneId !== "Outro Scene"
					&& !this.state.summaryJsonText[i].transcription) {
					VideoCreationJson["optimize_video_output"] = true;
				}
			}*/

      const summary = this.state.summaryJsonText[i];
      if (summary && summary.settings && voiceOver == false) {
        voiceOver = summary.settings.voiceOver ? true : false;
      }

      if (summary && summary.settings && playBgClipAudio == false && !summary.transcription) {
        playBgClipAudio = !summary.settings.muteClipAudio;
      }

      if (summary && summary.settings && !music) {
        music = summary.settings.music;
      }

      if (
        ((summary.recordedAudio && summary.recordedAudio != '') ||
          (summary.audioSegments && summary.audioSegments.some(segment => segment && segment.recordedAudio))) &&
        hasRecordedVoice == false
      ) {
        hasRecordedVoice = true;
      }

      if (summary.bRoll) {
        hasbRollAudio = true;
      }
    }

    if (
      AppLocalStorage.getItem('activeTrack') !== null &&
      AppLocalStorage.getItem('activeTrack') !== '' &&
      music == true
    ) {
      audio['src'] = AppLocalStorage.getItem('activeTrack');
      audio['audio_library'] = AppLocalStorage.getItem('trackType');
      audio['audio_id'] = AppLocalStorage.getItem('trackId');
      //if (this.state.source === "transcribe") {
      //	audio["track_volume"] = 0.1;
      //}
      if (this.state.bgMusicVolPercent !== undefined) {
        audio['track_volume'] = this.state.bgMusicVolPercent / 100; // convert percent to decimal value
      }
    }
    audio['video_volume'] = 1;
    this.voiceOverProgress = 0;
    if (generateVoiceOver) {
      if ((voiceOverTrackSelected() && voiceOver == true) || hasRecordedVoice || playBgClipAudio || hasbRollAudio) {
        var voiceOverResult;
        amplitude.getInstance().logEvent('generate-video-json-get-voiceover', {
          'project-id': this.state.project_id,
        });
        this.setState({
          previewProgressMessage: isVoiceOver
            ? this.state.durationUpdatedScenes?.sceneIds?.length > 0 || this.state.durationUpdatedScenes?.isSceneDeleted
              ? 'Generating voice over...'
              : 'Fetching voice over...'
            : 'Generating preview',
        });
        if (SceneId) {
          voiceOverResult = await this.getVoiceOverTrackURL(
            getSelectedVoiceOverTrack(),
            this.state.speedValue,
            voiceOverTrackSelected(),
            SceneId,
            showSceneNumber,
            {},
            this.state.showPreviewProgress,
            isGeneratevideo,
            'preview'
          );
        } else {
          voiceOverResult = await this.getVoiceOverTrackURL(
            getSelectedVoiceOverTrack(),
            this.state.speedValue,
            voiceOverTrackSelected(),
            null,
            null,
            { videoGeneration: true },
            this.state.showPreviewProgress,
            isGeneratevideo,
            'preview'
          );
        }
        amplitude.getInstance().logEvent('generate-video-json-get-voiceover-result-received', {
          'project-id': this.state.project_id,
        });
        if (voiceOverResult.error === true) {
          this.setState({
            previewProgressMessage: isVoiceOver
              ? this.state.durationUpdatedScenes?.sceneIds?.length > 0 ||
                this.state?.durationUpdatedScenes?.isSceneDeleted
                ? 'Generating voice over failed'
                : 'Fetching voice over failed'
              : 'Generating preview failed',
          });
          return;
        }
        if (voiceOverResult.success === true && this.state.voiceOverURLForScene && SceneId) {
          isVoiceOver = true;
          audio['tts'] = this.state.voiceOverURLForScene.Url;
        } else if (voiceOverResult.success === true && this.state.voiceOverURL) {
          isVoiceOver = true;
          audio['tts'] = this.state.voiceOverURL.Url;
        }
        this.setState({
          previewProgressMessage: isVoiceOver ? 'Applying voice over' : 'Generating preview',
        });
        amplitude.getInstance().logEvent('generate-video-json-get-voiceover-result', {
          'project-id': this.state.project_id,
          audio: audio['tts'],
        });
      }
      //this.voiceOverProgress = VOICEOVER_PROGRESS_LIMIT;
    }

    VideoCreationJson.audio = audio;
    let intro_index = -1;
    let outro_index = -1;
    var fontsize = parseFloat(ThemeStyle.fontSize);
    const heightCoefficient = VideoCreationJson.output.height / AnimationHelper.defaultHeight;
    const widthCoefficient = VideoCreationJson.output.width / AnimationHelper.defaultWidth;
    if (isGeneratevideo) {
      let elementsCreatedPercentage = this.voiceOverProgress;
      this.cancelIntervalTimerVideoGen();
      this.cancelIntervalTimerVoiceover();
      this.timerIdElements = setInterval(() => {
        if (elementsCreatedPercentage < 100 && !this.props.videoGenerationProgress?.generateVideoStatusMessage) {
          elementsCreatedPercentage++;
          this.props.createElementsProgress(elementsCreatedPercentage, 'Preprocessing scenes...');
        } else {
          this.cancelIntervalTimers();
        }
      }, 1000);
    }
    for (let i = 0; i < this.state.subSentencesArray.length; i++) {
      if (
        (this.state.subSentencesArray[i] && SceneId && this.state.subSentencesArray[i].sceneId != SceneId) ||
        (this.state.subSentencesArray[i] &&
          this.state.subSentencesArray[i].settings &&
          this.state.subSentencesArray[i].settings.hideScene)
      ) {
        continue;
      }
      await this.executeAsyc(async () => {
        /* Used a different progress percent logic above (before the for loop)
        if (isGeneratevideo && (this.voiceOverProgress == -1 || this.voiceOverProgress >= VOICEOVER_PROGRESS_LIMIT)) {
          let progress = i >= this.voiceOverProgress ? i : this.voiceOverProgress;
          if (progress > this.state.subSentencesArray.length) {
            progress = this.state.subSentencesArray.length;
          }
          const elementsCreatedPercentage = Math.ceil((progress / this.state.subSentencesArray.length) * 100);
          this.props.createElementsProgress(elementsCreatedPercentage === 0 ? 1 : elementsCreatedPercentage);
        } */
        let text = this.state.subSentencesArray[i];
        var fontName = text.fontName ? text.fontName.replace(/\'/g, '') : '';
        var fontsize =
          text.fontSize === '' || text.fontSize === undefined
            ? parseFloat(ThemeStyle.fontSize)
            : parseFloat(text.fontSize);
        var fontColor = removeAllWhiteSpaces(text.fontColor ? text.fontColor : '');
        var backColor = removeAllWhiteSpaces(text.textBackgroundColor ? text.textBackgroundColor : '');
        var backcolorFullwidth = removeAllWhiteSpaces(text.backcolorFullwidth ? text.backcolorFullwidth : '');
        var backgroundColor = removeAllWhiteSpaces(text.backgroundColor ? text.backgroundColor : '');
        var keywordColor = removeAllWhiteSpaces(text.keywordColor ? text.keywordColor : '');
        var textAlign = text.textAlign ? text.textAlign : '';
        if (!fontName || fontName === '' || typeof fontName != 'string') {
          fontName = ThemeStyle.fontName.replace(/\'/g, '') + '-' + ThemeStyle.fontWeight;
        }

        if (!fontColor || fontColor === '' || fontColor === undefined || typeof fontColor != 'string') {
          fontColor = removeAllWhiteSpaces(ThemeStyle.fontColor);
        }
        if (!backColor || backColor === '' || backColor === undefined || typeof backColor != 'string') {
          backColor = removeAllWhiteSpaces(ThemeStyle.textBackgroundColor);
        }
        if (
          !backcolorFullwidth ||
          backcolorFullwidth === '' ||
          backcolorFullwidth === undefined ||
          typeof backcolorFullwidth != 'string'
        ) {
          backcolorFullwidth = ThemeStyle.backcolorFullwidth;
        }
        if (!keywordColor || keywordColor === '' || keywordColor === undefined || typeof keywordColor != 'string') {
          keywordColor = removeAllWhiteSpaces(ThemeStyle.keywordColor);
        }

        fontName = this.getFontNameForVideoGen(fontName);
        let color = fontColor.split(',');
        fontColor = (color[0].replace('rgba(', 'rgb(') + ',' + color[1] + ',' + color[2]).trim();
        if (fontColor[fontColor.length - 1] === ')') fontColor = this.parseColorForVideoAPI(fontColor);
        else fontColor = this.parseColorForVideoAPI(fontColor + ')');

        backColor = this.parseColorForVideoAPI(backColor);
        backcolorFullwidth = this.parseColorForVideoAPI(backcolorFullwidth);

        color = keywordColor.split(',');
        keywordColor = (color[0].replace('rgba(', 'rgb(') + ',' + color[1] + ',' + color[2]).trim();
        if (keywordColor[keywordColor.length - 1] === ')') keywordColor = this.parseColorForVideoAPI(keywordColor);
        else keywordColor = this.parseColorForVideoAPI(keywordColor + ')');

        let backgroundSrcArray = [];
        var bgFrame = null;
        if (text.settings.frame) {
          bgFrame = text.settings.frame;
        }
        if (!(text.settings && text.settings.imageZoomPan)) {
          bgFrame = null;
        }
        let currentSceneImage = this.state.imageURL[text.sceneId - 1];
        let backgroundSrc = {
          url: getVideoUrlWithoutTime(currentSceneImage),
          asset_id: '',
          type: getResourceType(currentSceneImage),
          library: '',
          mode:
            text.settings && text.settings.imageZoomPan
              ? this.state.defaultSceneSettings.imageZoomPan
                ? 'crop'
                : 'fit'
              : 'fit',
          frame: bgFrame,
          loop_video:
            text.settings && (text.settings.loopVideo || text.settings.loopVideo === undefined) ? true : false,
          resource_id: generateUUID(),
          sessionId: clientId,
        };

        containsTextToImage =
          containsTextToImage ||
          MediaStorage.Instance.CheckUrlFromtextToImagebucket(backgroundSrc.url ? backgroundSrc.url : '');

        if (
          text.settings &&
          text.settings.videoOptions &&
          text.settings.videoOptions.isCropped &&
          text.settings.videoOptions.segments &&
          text.settings.videoOptions.segments.length > 0
        ) {
          let isbRoll = text.transcription && text.bRoll;
          if (!isbRoll) {
            for (let segment of text.settings.videoOptions.segments) {
              let srcItem = { ...backgroundSrc };
              srcItem['start'] = parseFloat(segment.start);
              srcItem['end'] = parseFloat(segment.end);
              if (srcItem['end'] !== 0) {
                backgroundSrcArray.push(srcItem);
              }
            }
          }
        }

        if (backgroundSrcArray.length == 0) {
          backgroundSrcArray.push(backgroundSrc);
        }
        //If clip audio needs to be added (muteClipAudio == false) in the video and no recorded audio provided
        //and either voice over is not opted or voice over track is not selected
        //then dont mute the scene background audio
        backgroundSrcArray.map(src => {
          if (
            text.settings &&
            text.settings.muteClipAudio == false &&
            (!text.recordedAudio || text.recordedAudio === '') &&
            !text.bRoll &&
            (!(text.settings && text.settings.voiceOver) || !voiceOverTrackSelected())
          ) {
            src['mute'] = false;
          } else if (text.settings && text.settings.muteClipAudio == true) {
            src['mute'] = true;
          }

          if (this.state.allAssets[currentSceneImage]) {
            src.asset_id = this.state.allAssets[currentSceneImage].id;
            src.type = this.state.allAssets[currentSceneImage].media_type;
            src.library = this.state.allAssets[currentSceneImage].library;
          } else if (this.props.imageList && this.props.imageList.length > 0) {
            let uploadedVisual = this.props.imageList.find(visual => visual.url === src.url);
            if (uploadedVisual) {
              src.library = 'user_uploaded';
            }
          }
        });

        var scene = {
          background: {
            src: backgroundSrcArray,
          },
          time: 0,
          keywords: [],
          sub_scenes: [],
          sentences: [],
          music: text.settings ? text.settings.music : this.state.defaultSceneSettings.music,
          tts: text.settings ? text.settings.voiceOver : this.state.defaultSceneSettings.voiceOver,
          subtitle: text.transcription || false,
          subtitles: [],
          sceneDisplayNo: text.showSceneNumber || i + 1,
        };
        if (!scene.tts && audio.tts && text.bRoll) scene.tts = true;

        if (
          audio.tts &&
          (text.recordedAudio ||
            (text.audioSegments &&
              text.audioSegments.length > 0 &&
              text.audioSegments[0] &&
              text.audioSegments[0].recordedAudio))
        ) {
          scene.tts = true;
        }

        if (backgroundColor !== '' && backgroundColor !== null && backgroundColor !== undefined) {
          scene.background.color = removeAllWhiteSpaces(this.parseColorForVideoAPI(backgroundColor));
        }
        if (currentSceneImage === DUMMY_IMAGE) {
          scene = {
            background: {
              src: [
                {
                  url: '',
                  asset_id: '',
                  type: 'image',
                  library: '',
                },
              ],
            },
            time: 0,
            keywords: [],
            sub_scenes: [],
            tts: text.settings ? text.settings.voiceOver : this.state.defaultSceneSettings.voiceOver,
            subtitles: [],
            sceneDisplayNo: text.showSceneNumber || i + 1,
          };
          if (backgroundColor !== '' && backgroundColor !== null && backgroundColor !== undefined) {
            color = backgroundColor.split(',');
            backgroundColor = (color[0].replace('rgba(', 'rgb(') + ',' + color[1] + ',' + color[2]).trim();
            if (backgroundColor[backgroundColor.length - 1] === ')')
              backgroundColor = this.parseColorForVideoAPI(backgroundColor);
            else backgroundColor = this.parseColorForVideoAPI(backgroundColor + ')');

            scene.background.color = removeAllWhiteSpaces(backgroundColor);
          }
        }
        if (text.showSceneNumber !== 'Outro Scene') {
          if (ThemeStyle.bgMask) {
            scene.background.bg_mask = {
              side: ThemeStyle.bgMaskSide,
              area: ThemeStyle.bgMaskArea,
              color: removeAllWhiteSpaces(this.parseColorForVideoAPI(ThemeStyle.bgMaskColor)),
            };
          }
          if (text.showSceneNumber === 'Custom Intro Scene' || (!ImgApplyToAll && text.settings.imageZoomPan)) {
            scene.background.bg_animation = {
              animation: ThemeStyle.bgAnimation,
            };
          }
        }
        if (text.settings.imageZoomPan) {
          scene.background.bg_animation = {
            animation: ThemeStyle.bgAnimation,
          };
        }
        if (text.visual) {
          if (text.visual.isLogo && text.visual.position && text.visual.visualUrl && text.visual.visualUrl !== '') {
            scene.background.logo = {
              src: text.visual.visualUrl,
              location: text.visual.position.preset,
              opacity: text.visual.opacity,
              width: text.visual.position.width,
            };
          }
        } else if (text.showLogo) {
          scene.background.logo = {
            src: text.logoImage,
            location: text.logoLocation == '1' ? 'top-left' : 'top-right',
          };
        }
        //in case of outro scene logo position and animation
        if (text.layout !== undefined && text.layout !== '' && currentSceneImage === DUMMY_IMAGE) {
          if (text.layout === 'logo' || text.layout === 'logotext') {
            let logoPadding = 20;

            if (this.state.aspectRatioClass === 'sixteen-nine') {
              logoPadding = 20;
            } else if (this.state.aspectRatioClass === 'one-one') {
              logoPadding = 16;
            } else if (this.state.aspectRatioClass === 'nine-sixteen') {
              logoPadding = 10;
            } else {
              logoPadding = 10;
            }
            var yPercent = 0;
            // for trying to load the logo so that it is loaded at the outro scene
            try {
              if (text.logoImage) {
                var downloadingImage = new Image();
                downloadingImage.src = text.logoImage;
              }
            } catch (e) {}
            // if (document.querySelector('#image_a_' + (text.sceneId) + '_' + text.subSceneId)) {
            // 	let mainDivTop = document.querySelector('#image_a_' + (text.sceneId) + '_' + text.subSceneId).getBoundingClientRect();
            // 	let test = document.querySelector('#text' + (text.sceneId) + '_' + text.subSceneId);
            // 	let imgTop = test.querySelector("img").getBoundingClientRect();
            // 	yPercent = parseInt(imgTop.top - mainDivTop.top) / parseInt(mainDivTop.height);
            // }
            // else if (isNewPreview) {
            var overrideStyle = {};
            this.copyTextFormatting(text, overrideStyle);
            overrideStyle.fontSize = overrideStyle.fontSize * aspectRatioFontFactor;
            var animationContainerEle = await this.createTextAnimationContainer(
              text.sentence,
              [],
              overrideStyle.fontSize,
              AnimationHelper.defaultHeight,
              AnimationHelper.defaultWidth,
              true,
              overrideStyle,
              text.logoImage,
              text.layout
            );
            let mainDivTop = animationContainerEle.getBoundingClientRect();
            let test = animationContainerEle.querySelector('.sentences');
            let imgTop = test.querySelector('img').getBoundingClientRect();
            yPercent = parseInt(imgTop.top - mainDivTop.top) / parseInt(mainDivTop.height);
            animationContainerEle.remove();
            //}
            scene.background.logo = {
              src: text.logoImage,
              location: 'center',
              size: 0.25,
              location_y: parseInt(AnimationHelper.defaultHeight * yPercent + logoPadding),
            };
            scene.background.logo_animation = {
              animation: 'expand-out',
              speed: 1,
            };
          }
        }

        let bRollBackgroundSrc = [];
        for (let j = i; j <= i + text.AllSubSentences.length - 1; j++) {
          let sub = this.state.subSentencesArray[j];
          if (sub.isDeleted) continue;

          let sub_scene = {
            time: 0,
            location: {},
            text_lines: [],
            subtitle: '',
            showSceneNumber: sub.showSceneNumber,
          };

          //var animationContainerEle = document.getElementById('image_a_' + (sub.sceneId) + '_' + sub.subSceneId);
          var animationContainerEle = null;
          var lineCount = 0;
          var sentencesEle = null;
          var elementsCreatedDynamically = false;
          // if (animationContainerEle) {
          // 	sentencesEle = animationContainerEle.querySelector(".sentences");
          // 	//let offset = AnimationHelper.getOffset(sentencesEle, animationContainerEle);
          // 	lineCount = sentencesEle.querySelectorAll("p > span").length;
          // }
          // else
          if (!SceneId || SceneId === sub.sceneId) {
            var theme = this.state.animationTheme;
            let overrideStyle = theme.getStyles();
            this.copyTextFormatting(sub, overrideStyle, null, true);
            //overrideStyle.fontSize = sub.fontSize;
            var isOutroSceneFlag = false;
            let outroHasVideo = false;
            // if (sub.showSceneNumber === 'Outro Scene' && !this.state.templateMetaData) {
            //   isOutroSceneFlag = true;
            //   if (
            //     backgroundSrcArray &&
            //     backgroundSrcArray[0] &&
            //     backgroundSrcArray[0].url &&
            //     backgroundSrcArray[0].url != DUMMY_IMAGE
            //   ) {
            //     outroHasVideo = true;
            //   }
            // }
            overrideStyle.fontSize = overrideStyle.fontSize * aspectRatioFontFactor;
            var animationContainerEle = await this.createTextAnimationContainer(
              sub.sentence,
              sub.keywords,
              overrideStyle.fontSize,
              AnimationHelper.defaultHeight,
              AnimationHelper.defaultWidth,
              isOutroSceneFlag,
              overrideStyle,
              sub.logoImage,
              outroHasVideo ? 'logo' : sub.layout,
              sub.settings.hideText,
              sub.fullWidth,
              sub.displayItems,
              aspectRatioFontFactor
            );
            var sentencesEle = animationContainerEle.querySelector('#sentenceElement');
            elementsCreatedDynamically = true;
            // //let offset = AnimationHelper.getOffset(sentencesEle, animationContainerEle);
            lineCount = sentencesEle?.querySelectorAll('p > span')?.length;
          } else {
            lineCount = sub.AllSubSentences.length;
          }
          let textLineHt = 0;
          let lineSpacing = 0;
          let start_y = 0;
          let end_y = 0;
          let start_x = 0;
          let end_x = 0;
          let center_x = 0;
          if (lineCount > 0) {
            let headstrokeLineHt = 0;
            let fontSizePx = AnimationHelper.convertPttoPx(sub.fontSize);
            if (ThemeStyle.strokeLine) headstrokeLineHt = fontSizePx * (0.5 + 0.8 * 2);
            textLineHt = fontSizePx * (DEFAULT_LINE_HEIGHT_FACTOR - 2 * DEFAULT_LINE_PADDING_FACTOR);
            lineSpacing = 1 + DEFAULT_LINE_PADDING_FACTOR * 2;
            let textBoxHt = fontSizePx * DEFAULT_LINE_HEIGHT_FACTOR * lineCount + headstrokeLineHt;
            if (ThemeStyle.textBottomAlignPercent !== undefined) {
              // textBottomAlign is false for animation 1 - 8, as backend doesn't have end_y implementated for Animation 1 - 8. start_y is calculated instead and sent to backend
              end_y = AnimationHelper.defaultHeight * (1 - ThemeStyle.textBottomAlignPercent / 100);
              start_y = end_y - textBoxHt;
            } else {
              start_y = (AnimationHelper.defaultHeight - textBoxHt) / 2;
            }
          }

          if (sub.showSceneNumber !== 'Outro Scene' || isAllowTemplates) {
            let backcolorOption = sub.backcolorFullwidth
              ? { backcolor_fullwidth: removeAllWhiteSpaces(this.parseColorForVideoAPI(sub.backcolorFullwidth)) }
              : { backcolor: removeAllWhiteSpaces(this.parseColorForVideoAPI(sub.textBackgroundColor) || 'none') };
            sub_scene.font = {
              name: this.getFontNameForVideoGen(sub.fontName),
              size: sub.fontSize,
              line_spacing: lineSpacing,
              color: removeAllWhiteSpaces(this.parseColorForVideoAPI(sub.fontColor)),
              ...backcolorOption,
              keycolor: removeAllWhiteSpaces(this.parseColorForVideoAPI(sub.keywordColor)),
              line_height: textLineHt,
              case: sub.case,
              decoration: sub.decoration,
              textShadowColor: sub.textShadowColor,
              textShadowWidthFr: sub.textShadowWidthFr,
              fullWidth: sub.fullWidth,
              textBackgroundRadius: sub.textBackgroundRadius,
            };
          } else {
            sub_scene.font = {
              name: fontName,
              size: fontsize,
              line_spacing: 1,
              color: removeAllWhiteSpaces(fontColor),
              backcolor: 'none',
              keycolor: removeAllWhiteSpaces(keywordColor),
              line_height: null,
            };
          }

          if (sub.showSceneNumber === 'Outro Scene' && !isAllowTemplates) {
            isOutroScene = true;
            if (
              sub.layout != undefined &&
              (sub.layout === 'logotext' || sub.layout === 'text') &&
              currentSceneImage === DUMMY_IMAGE
            ) {
              if (document.querySelector('#image_a_' + sub.sceneId + '_' + sub.subSceneId)) {
                let imagetop = document
                  .querySelector('#image_a_' + sub.sceneId + '_' + sub.subSceneId)
                  .getBoundingClientRect();
                let test = document.querySelector('#text' + sub.sceneId + '_' + sub.subSceneId);
                let ptop = test.querySelector('p').getBoundingClientRect();
                let yPercent = parseFloat(ptop.top - imagetop.top) / parseFloat(imagetop.height);
                sub_scene.location.start_y = parseInt(AnimationHelper.defaultHeight * yPercent);
              } else if (animationContainerEle && isNewPreview) {
                let imagetop = animationContainerEle.getBoundingClientRect();
                let test = animationContainerEle.querySelector('.sentences');
                let ptop = test.querySelector('p').getBoundingClientRect();
                let yPercent = parseFloat(ptop.top - imagetop.top) / parseFloat(imagetop.height);
                sub_scene.location.start_y = parseInt(AnimationHelper.defaultHeight * yPercent);
              }
            }
            //sub_scene.location.start_y = 450;
          } else {
            if (sentencesEle) {
              if (sub.preset) {
                sub_scene.location.preset = sub.preset;
              }
              let offset = AnimationHelper.getOffset(sentencesEle, animationContainerEle);
              if (sub.textAlign === 'right' || (!sub.textAlign && ThemeStyle.textRightAlign)) {
                if (sub.fullWidth) {
                  sub_scene.location.end_x = offset.end_x - 26;
                } else {
                  sub_scene.location.end_x = offset.end_x;
                }
              } else if (sub.textAlign === 'center' || (!sub.textAlign && ThemeStyle.textHCenterAlign)) {
                sub_scene.location.center_x = (offset.x + offset.end_x) / 2;
              } else if (
                sub.textAlign === 'left' ||
                (!sub.textAlign && ThemeStyle.textLeftAlignPercent !== undefined)
              ) {
                sub_scene.location.start_x = offset.x;
              }

              if (sub.topCoordinate && !sub.preset && !sub.fullWidth) {
                sub_scene.location.start_y = (parseFloat(sub.topCoordinate) / 100) * AnimationHelper.defaultHeight;
              } else if (sub.preset && sub.preset.startsWith('top') && !sub.fullWidth) {
                sub_scene.location.start_y = AnimationHelper.defaultTopPadding * AnimationHelper.defaultHeight;
              } else if (sub.preset && sub.preset.startsWith('center') && !sub.fullWidth) {
                sub_scene.location.start_y = 0.5 * AnimationHelper.defaultHeight - offset.height / 2;
              } else if (sub.preset && sub.preset.startsWith('bottom') && !sub.fullWidth) {
                sub_scene.location.start_y =
                  AnimationHelper.defaultHeight -
                  AnimationHelper.defaultTopPadding * AnimationHelper.defaultHeight -
                  offset.height;
              } else if (sub.fullWidth) {
                if (sub.preset == 'full-width-top') {
                  sub_scene.location.start_y = 20;
                } else if (sub.preset == 'full-width-bottom') {
                  sub_scene.location.start_y = AnimationHelper.defaultHeight - offset.height;
                } else if (sub.preset == 'full-width-center') {
                  sub_scene.location.start_y = 0.5 * AnimationHelper.defaultHeight - offset.height / 2;
                } else {
                  if (sub.topCoordinate) {
                    sub_scene.location.start_y = (parseFloat(sub.topCoordinate) / 100) * AnimationHelper.defaultHeight;
                  } else {
                    sub_scene.location.preset = 'full-width-bottom';
                    sub_scene.location.start_y = AnimationHelper.defaultHeight - offset.height;
                  }
                }
              } else if (ThemeStyle.textBottomAlign) {
                sub_scene.location.end_y = end_y;
              } else {
                sub_scene.location.start_y = start_y;
              }
            }
          }

          if (sub.settings && sub.settings.hideText) {
            scene.keywords = [];
          } else {
            scene.keywords = sub.keywords;
          }

          /*
					Do we need to over-write timePerFrame?
					if (text.transcription && !text.bRoll) {
						this.state.timePerFrame[j] = sub.transcribeVideoLength;
					}
					else if (this.state.voiceOverURL && this.state.voiceOverURL.timePerSceneForVoiceOver && ((voiceOverTrackSelected() && audio.tts) || hasRecordedVoice || playBgClipAudio || hasbRollAudio)) {
						this.state.timePerFrame[j] = (this.state.voiceOverURL.timePerSceneForVoiceOver[j] / 1000);
					}*/

          if (text.transcription) {
            //Set the scene time from voice over time markers if time markers are present.
            if (
              audio.tts &&
              this.state.voiceOverURL &&
              this.state.voiceOverURL.timePerSceneForVoiceOver &&
              this.state.voiceOverURL.timePerSceneForVoiceOver.length > 0
            ) {
              sub_scene.time = parseFloat((this.state.voiceOverURL.timePerSceneForVoiceOver[j] / 1000).toFixed(2));
              scene.time += parseFloat(sub_scene.time);
              scene.time = parseFloat(scene.time.toFixed(2));
            } else if (text.bRoll) {
              let subSceneDuration = parseFloat(this.state.timePerFrame[j].toFixed(2));
              sub_scene.time = parseFloat(subSceneDuration.toFixed(2));
              scene.time += parseFloat(sub_scene.time);
              scene.time = parseFloat(scene.time.toFixed(2));
            } else if (
              this.state.subSentencesArray[j].settings &&
              this.state.subSentencesArray[j].settings.videoOptions &&
              this.state.subSentencesArray[j].settings.videoOptions.subSentenceSegments &&
              this.state.subSentencesArray[j].settings.videoOptions.subSentenceSegments.length &&
              !this.state.subSentencesArray[j].recordedAudio
            ) {
              const timeSegments = this.state.subSentencesArray[j].settings.videoOptions.subSentenceSegments;
              let time = 0;
              timeSegments.map((markers, i) => {
                let { start, end } = markers;
                start = parseFloat(start);
                end = parseFloat(end);
                time = time + (end - start);
              });
              // scene.segments = [...timeSegments];
              sub_scene.time = parseFloat(time.toFixed(2));
              scene.time += parseFloat(sub_scene.time);
              scene.time = parseFloat(scene.time.toFixed(2));
            } else {
              sub_scene.time = this.state.timePerFrame[j];
              scene.time += parseFloat(sub_scene.time);
              scene.time = parseFloat(scene.time.toFixed(2));
            }
          } else if ((voiceOverTrackSelected() && audio.tts) || hasRecordedVoice || playBgClipAudio || hasbRollAudio) {
            if (this.state.source === 'transcribe') {
              if (this.state.subSentencesArray[i].showSceneNumber == 'Custom Intro Scene') {
                sub_scene.time = parseFloat(this.state.timePerFrame[j].toFixed(2));
                scene.time = sub_scene.time;
              } else if (
                this.state.subSentencesArray[j].settings &&
                this.state.subSentencesArray[j].settings.videoOptions &&
                this.state.subSentencesArray[j].settings.videoOptions.subSentenceSegments &&
                this.state.subSentencesArray[j].settings.videoOptions.segments.length &&
                !this.state.subSentencesArray[j].recordedAudio &&
                !this.state.subSentencesArray[j].settings.voiceOver
              ) {
                const timeSegments = this.state.subSentencesArray[j].settings.videoOptions.subSentenceSegments;

                let time = 0;
                timeSegments.map((markers, i) => {
                  let { start, end } = markers;
                  start = parseFloat(start);
                  end = parseFloat(end);
                  time = time + (end - start);
                });
                if (time > 0) {
                  scene.segments = [...timeSegments];
                  // const { end, start } = this.state.subSentencesArray[i].settings.videoOptions.segments[0];
                  // sub_scene.time = end - start;
                  sub_scene.time = parseFloat(time);
                  scene.time += parseFloat(sub_scene.time);
                  scene.time = parseFloat(scene.time.toFixed(2));
                } else {
                  sub_scene.time = this.state.timePerFrame[j] === undefined ? 5 : this.state.timePerFrame[j];
                  scene.time += parseFloat(sub_scene.time);
                  scene.time = parseFloat(scene.time.toFixed(2));
                }
              } else {
                sub_scene.time = this.state.timePerFrame[j] === undefined ? 5 : this.state.timePerFrame[j];
                scene.time += parseFloat(sub_scene.time);
              }
            } else {
              // if the scene duration is less than 1 sec, it leads to video gen failure while creating audio so set it to default(5 sec) if less than 1 sec
              //sub_scene.time = (this.state.timePerFrame[j] === undefined || this.state.timePerFrame[j] < 1) ? 5 : this.state.timePerFrame[j];

              sub_scene.time = this.state.timePerFrame[j] === undefined ? 5 : this.state.timePerFrame[j];
              scene.time += parseFloat(sub_scene.time);
            }

            /*if (sub.showSceneNumber === 'Outro Scene') {
							//If the outro scene has recorded audio then consider scene time from this.state.timePerFrame as this would get
							//time marker for recorded audio from voice over audio. The recorded audio would be embedded into voice over mp3
							if (!text.recordedAudio) {
								sub_scene.time = this.getOutroVideoDurationPromise ? await this.getOutroVideoDurationPromise : this.state.defaultOutroTimeInSec;
								scene.time = parseFloat(sub_scene.time);
							}
						}*/
            if (isNaN(scene.time) && sub.showSceneNumber === 'Outro Scene') {
              //If scene time is not there for outro scene then get it from outro duration method.
              sub_scene.time = this.getOutroVideoDurationPromise
                ? await this.getOutroVideoDurationPromise
                : this.state.defaultOutroTimeInSec;
              scene.time = sub_scene.time;
            }
          } else {
            sub_scene.time =
              this.state.timePerFrame[j] === undefined
                ? 5
                : this.state.timePerFrame[j] >= 1
                ? this.state.timePerFrame[j]
                : 5;
            if (isNaN(sub_scene.time) && sub.showSceneNumber === 'Outro Scene') {
              //If scene time is not there for outro scene then get it from outro duration method.
              sub_scene.time = this.getOutroVideoDurationPromise
                ? await this.getOutroVideoDurationPromise
                : this.state.defaultOutroTimeInSec;
            }
            scene.time += parseFloat(sub_scene.time);
          }

          if (this.state.source === 'transcribe' && sub.showSceneNumber !== 'Outro Scene') {
            scene.sentences.push({
              time: sub_scene.time,
              text: this.state.subSentencesArray[j].sentence
                ? this.getVoiceOverText(this.state.subSentencesArray[j].sentence)
                : '',
            });
          }
          var lines = [];
          if (sentencesEle) {
            lines = Array.from(sentencesEle.querySelectorAll('p > span')).map(e => {
              return e.innerHTML;
            });
          } else {
            lines.push(this.state.subSentencesArray[j].sentence);
            sub_scene.generateLines = true;
          }
          //For transcripton, the empty pause subscenes are not getting added to subscene lines
          if (this.state.source === 'transcribe' && lines.length === 0) {
            lines.push('');
          }

          let text_lines = [];

          if (ThemeStyle.strokeLine && sub.showSceneNumber !== 'Outro Scene' && lines.length > 0) {
            let strokeLine = {
              stroke_color: removeAllWhiteSpaces(ThemeStyle.strokeColor),
              stroke_width: ThemeStyle.strokeWidth,
              text_animation: [
                {
                  animation: ThemeStyle.strokeAnimation,
                  speed: ThemeStyle.strokeAnimationSpeed,
                },
              ],
            };
            text_lines.push(strokeLine);
          }

          for (let k = 0; k < lines.length; k++) {
            let line = lines[k];
            line = findAndReplaceAll(line, '<br/>', '');
            line = findAndReplaceAll(line, '<br>', '');
            line = AnimationHelper.sanatizeString(line);
            line = findAndReplaceAll(line, '⏎', '');
            line = findAndReplaceAll(line, '↵', '');
            if (sub.animation) {
              for (let animationIndex = 0; animationIndex < sub.animation.text_animation.length; animationIndex++) {
                sub.animation.text_animation[animationIndex].source = 'templates';
              }
              text_lines.push({
                text_animation: sub.animation.text_animation,
                text_bg_animation: sub.animation.text_animation,
                text: line,
              });
            } else {
              let textAnimation = {};
              let textBgAnimation = {};
              if (sub.showSceneNumber !== 'Outro Scene') {
                textAnimation = {
                  animation: ThemeStyle.textAnimation,
                  speed: ThemeStyle.textAnimationSpeed + ThemeStyle.textStagger * k,
                };
                textBgAnimation = {
                  animation: ThemeStyle.textBgAnimation,
                  speed: ThemeStyle.textBgAnimationSpeed + ThemeStyle.textBgStagger * k,
                };
              } else if (!isAllowTemplates) {
                textAnimation = {
                  animation: 'expand-out',
                  speed: 1,
                };
                textBgAnimation = {
                  animation: 'expand-out',
                  speed: 1,
                };
              }

              text_lines.push({
                text_animation: [textAnimation],
                text_bg_animation: [textBgAnimation],
                text: line,
              });
            }

            if (!description) {
              description += ` ${line}`;
            }
          }
          if (!this.state.subSentencesArray[j].settings || !this.state.subSentencesArray[j].settings.hideText) {
            sub_scene.text_lines = text_lines;
          } else {
            sub_scene.text_lines = [];
          }

          if (!scene.subtitles) {
            scene.subtitles = [];
          }
          scene.subtitles.push({
            text: AnimationHelper.HtmlToText(
              (sub.sentence &&
                decode(
                  this.removeBOMChar(
                    AnimationHelper.removeBrTag(
                      sub.sentence
                        .replace('↵', '')
                        .replace('⏎', '')
                        .replace(/\r?\n|\r/g, ' ')
                    )
                  )
                )) ||
                ''
            ),
            time: sub_scene.time,
          });

          /* if (this.state.source === "transcribe") {
						scene.sub_scenes.push(sub_scene);
					}//These if conditions are not working for empty subscenes which would come in transcription pause subscenes
					else if (sub_scene.text_lines.length == 1 && sub_scene.text_lines[0].text !== "") {
						scene.sub_scenes.push(sub_scene);
					}
					//special case for theme 3 and theme 7
					else if (sub_scene.text_lines.length === 2 && (sub_scene.text_lines[0].text || sub_scene.text_lines[1].text !== "")) {
						scene.sub_scenes.push(sub_scene);
					}
					else if (sub_scene.text_lines.length > 2 && sub_scene.text_lines.some(line => line)) {
						scene.sub_scenes.push(sub_scene);
					} else if (sub_scene.text_lines.length === 0 && sub.settings.hideText) { // one of the sub-scene in a scene has hideText turned ON
						scene.sub_scenes.push(sub_scene);
					} */
          sub_scene.displayItems = [];
          if (sub.displayItems && sub.displayItems.length > 0) {
            for (let m = 0; m < sub.displayItems.length; m++) {
              let disp_lines = [];
              let dispItem = sub.displayItems[m];
              if (dispItem.type === 'visual') {
                if (dispItem.visualData.url && dispItem.visualData.url != '') {
                  sub_scene.displayItems.push({
                    type: 'visual',
                    src: dispItem.visualData.url,
                    id: uuidv4(),
                    isVideo: getResourceType(dispItem.visualData.url) === 'video' ? true : false,
                    location: {
                      topCoordinate: dispItem.itemStyleData.topCoordinate,
                      leftCoordinate: dispItem.itemStyleData.leftCoordinate,
                      width: dispItem.itemStyleData.paragraphWidth,
                      preset: dispItem.itemStyleData.preset,
                      rotation: dispItem.itemStyleData.rotation,
                      flipVertical: dispItem.itemStyleData.flipVertical,
                      flipHorizontal: dispItem.itemStyleData.flipHorizontal,
                      opacity: dispItem.itemStyleData.opacity,
                    },
                  });
                }
              } else {
                let itemStyle = _.cloneDeep(dispItem.itemStyleData);
                let id = 'disp' + dispItem.id.replaceAll('-', '');
                var dispEle = animationContainerEle.querySelector('#' + id);
                let dispLines = Array.from(dispEle.querySelectorAll('p > span')).map(e => {
                  return e.innerHTML;
                });
                let dispItemLocation = {};
                for (let k = 0; k < dispLines.length; k++) {
                  let line = dispLines[k];
                  line = findAndReplaceAll(line, '<br/>', '');
                  line = findAndReplaceAll(line, '<br>', '');
                  line = AnimationHelper.sanatizeString(line);
                  line = findAndReplaceAll(line, '⏎', '');
                  line = findAndReplaceAll(line, '↵', '');
                  let textAnimation = {};
                  let textBgAnimation = {};
                  if (itemStyle.animation.text_animation && itemStyle.animation.text_bg_animation) {
                    textAnimation = itemStyle.animation.text_animation;
                    textAnimation = textAnimation.filter(x => (x.source = 'templates'));
                    textBgAnimation = itemStyle.animation.text_animation;
                    textBgAnimation = textBgAnimation.filter(x => (x.source = 'templates'));
                  }
                  disp_lines.push({
                    text_animation: itemStyle.animation.text_animation,
                    text_bg_animation: itemStyle.animation.text_animation,
                    text: line,
                  });
                }
                if (dispEle) {
                  if (itemStyle.preset) {
                    dispItemLocation.preset = itemStyle.preset;
                  }
                  let offset = AnimationHelper.getOffset(dispEle, animationContainerEle);
                  if (itemStyle.textAlign === 'right' || (!itemStyle.textAlign && ThemeStyle.textRightAlign)) {
                    if (itemStyle.fullWidth) {
                      dispItemLocation.end_x = offset.end_x - 26;
                    } else {
                      dispItemLocation.end_x = offset.end_x;
                    }
                  } else if (
                    itemStyle.textAlign === 'center' ||
                    (!itemStyle.textAlign && ThemeStyle.textHCenterAlign)
                  ) {
                    dispItemLocation.center_x = (offset.x + offset.end_x) / 2;
                  } else if (
                    itemStyle.textAlign === 'left' ||
                    (!itemStyle.textAlign && ThemeStyle.textLeftAlignPercent !== undefined)
                  ) {
                    dispItemLocation.start_x = offset.x;
                  }

                  if (itemStyle.topCoordinate && !itemStyle.preset && !itemStyle.fullWidth) {
                    dispItemLocation.start_y =
                      (parseFloat(itemStyle.topCoordinate) / 100) * AnimationHelper.defaultHeight;
                  } else if (itemStyle.preset && itemStyle.preset.startsWith('top') && !itemStyle.fullWidth) {
                    dispItemLocation.start_y = AnimationHelper.defaultTopPadding * AnimationHelper.defaultHeight;
                  } else if (itemStyle.preset && itemStyle.preset.startsWith('center') && !itemStyle.fullWidth) {
                    dispItemLocation.start_y = 0.5 * AnimationHelper.defaultHeight - offset.height / 2;
                  } else if (itemStyle.preset && itemStyle.preset.startsWith('bottom') && !itemStyle.fullWidth) {
                    dispItemLocation.start_y =
                      AnimationHelper.defaultHeight -
                      AnimationHelper.defaultTopPadding * AnimationHelper.defaultHeight -
                      offset.height;
                  } else if (itemStyle.fullWidth) {
                    if (itemStyle.preset == 'full-width-top') {
                      dispItemLocation.start_y = 20;
                    } else if (itemStyle.preset == 'full-width-bottom') {
                      dispItemLocation.start_y = AnimationHelper.defaultHeight - offset.height;
                    } else if (itemStyle.preset == 'full-width-center') {
                      dispItemLocation.start_y = 0.5 * AnimationHelper.defaultHeight - offset.height / 2;
                    } else {
                      if (itemStyle.topCoordinate) {
                        dispItemLocation.start_y =
                          (parseFloat(itemStyle.topCoordinate) / 100) * AnimationHelper.defaultHeight;
                      } else {
                        dispItemLocation.start_y = AnimationHelper.defaultHeight - offset.height;
                      }
                    }
                  } else if (ThemeStyle.textBottomAlign) {
                    dispItemLocation.end_y = end_y;
                  } else {
                    dispItemLocation.start_y = start_y;
                  }
                }
                if (itemStyle.fontSize) {
                  itemStyle.size = itemStyle.fontSize * heightCoefficient * aspectRatioFontFactor;
                  itemStyle.line_height = itemStyle.size * 1.33 * 1.3;
                  itemStyle.line_spacing = 1.2;
                }
                if (itemStyle.fontName) {
                  itemStyle.name = this.getFontNameForVideoGen(itemStyle.fontName);
                }
                if (itemStyle.fontColor) {
                  itemStyle.color = itemStyle.fontColor;
                }
                if (itemStyle.keywordColor) {
                  itemStyle.keycolor = itemStyle.keywordColor;
                }
                if (itemStyle.textBackgroundColor) {
                  itemStyle.backcolor = itemStyle.textBackgroundColor;
                }
                if (itemStyle.textBackgroundRadius) {
                  itemStyle.backgroundRadius = itemStyle.textBackgroundRadius;
                }
                if (dispItemLocation.start_x) {
                  dispItemLocation.start_x = dispItemLocation.start_x * widthCoefficient;
                }
                if (dispItemLocation.center_x) {
                  dispItemLocation.center_x = dispItemLocation.center_x * widthCoefficient;
                }
                if (dispItemLocation.end_x) {
                  dispItemLocation.end_x = dispItemLocation.end_x * widthCoefficient;
                }

                if (dispItemLocation.start_y) {
                  dispItemLocation.start_y = dispItemLocation.start_y * heightCoefficient;
                }
                if (dispItemLocation.end_y) {
                  dispItemLocation.end_y = dispItemLocation.end_y * heightCoefficient;
                }
                sub_scene.displayItems.push({
                  font: itemStyle,
                  location: dispItemLocation,
                  text_lines: disp_lines,
                  type: 'text',
                  isCounter: dispItem.isCounter,
                });
              }
            }
            // sub_scene.displayItems.push({
            //   type:'visual',
            //   src : 'https://media.giphy.com/media/lLkVX0F1YedTZkP9Ev/giphy.gif',
            //   location: {
            //     topCoordinate: '10%',
            //     leftCoordinate: '10%',
            //     width: 100,
            //     rotation: 5,
            //     flipVertical:true
            //   }
            // });
            // sub_scene.displayItems.push({
            //   type:'visual',
            //   src : 'https://brand-settings-images74751-pictorydev.s3.us-east-2.amazonaws.com/public/93ce8443-aeb1-42cd-a72a-4268f559669b/images/062d1248-b93f-416f-9624-b5a3e2346066.jpg',
            //   location: {
            //     preset:'top-right',
            //     width: 100,
            //     rotation: 5,
            //     flipVertical:true
            //   }
            // });
          }
          scene.sub_scenes.push(sub_scene);
          if (sub.bRollSubSceneSegment && sub.bRollSubSceneSegment.length > 0) {
            for (let bRollSegment of sub.bRollSubSceneSegment) {
              bRollBackgroundSrc.push({
                url: sub.bRollUrl,
                asset_id: Date.now(),
                type: 'video',
                library: 'transcriptionVideoThumbnails',
                mode: 'crop',
                frame: null,
                loop_video: false,
                resource_id: uuidv4(),
                sessionId: uuidv4(),
                start: bRollSegment.start,
                end: bRollSegment.end,
                mute: false,
              });
            }
          }

          if (elementsCreatedDynamically) {
            animationContainerEle?.remove();
            sentencesEle?.remove();
          }
          if (sub_scene.time <= 0 && isGeneratevideo) {
            this.setState({ isInvalidSceneDuration: true });
            amplitude.getInstance().logEvent('invalid-sub-scene-duration', {
              'project-id': this.state.project_id,
              'sub_scene-duration': sub_scene.time,
              showSceneNumber: sub_scene.showSceneNumber,
            });
            throw 'invalid scene duration';
          }
        }

        if (text.showSceneNumber === 'Outro Scene' && !isAllowTemplates) {
          //If outro scene has recorded audio then dont disable tts
          //tts or machine voice over is disabled for outro scene by design but recorded audio is exception for outro scene
          //The recorded audio would be embedded into to voice over audio mp3 hence tts needs to be enabled
          //The voice over is added to scene when tts is enabled for the particular scene
          if (!text.recordedAudio) {
            scene.tts = false;
          }
        }
        if (text.transition) {
          scene.transition = text.transition;
        }
        i = i + text.AllSubSentences.length - 1;
        if (videoClips) {
          if (text.showSceneNumber === 'Custom Intro Scene') {
            intro_index = VideoCreationJson.scenes.length;
            for (let videoScene of VideoCreationJson.scenes) {
              videoScene.intro_index = intro_index;
            }
          }
          if (text.showSceneNumber === 'Outro Scene') {
            outro_index = VideoCreationJson.scenes.length;
            for (let videoScene of VideoCreationJson.scenes) {
              videoScene.outro_index = outro_index;
            }
          }
          if (intro_index > -1) {
            scene.intro_index = intro_index;
          }
          if (outro_index > -1) {
            scene.outro_index = outro_index;
          }
        }
        if (scene.time <= 0 && isGeneratevideo) {
          this.setState({ isInvalidSceneDuration: true });
          amplitude.getInstance().logEvent('invalid-scene-duration', {
            'project-id': this.state.project_id,
            'scene-duration': scene.time,
            sceneDisplayNo: scene.sceneDisplayNo,
          });
          throw 'invalid scene duration';
        }

        if (isGeneratevideo) {
          if (
            text.transcription === true &&
            scene.tts === true &&
            scene.background &&
            scene.background.src &&
            scene.background.src.length > 0 &&
            !voiceOverTrackSelected() &&
            !text.settings.voiceOver
          ) {
            if (text.bRollUrl && bRollBackgroundSrc.length > 0) {
              scene.tts = false;
              scene.background.bRollSrc = bRollBackgroundSrc;
            } else if (text.transcription === true && scene.background.src[0].mute === false) {
              scene.tts = false;
            }
          }
        }

        VideoCreationJson.scenes.push(scene);
      }, 50);
    }

    //const heightCoefficient = VideoCreationJson.output.height / AnimationHelper.defaultHeight;
    //const widthCoefficient = VideoCreationJson.output.width / AnimationHelper.defaultWidth;
    //const aspectRatioFontFactor = getAspectRatioFontFactor(this.state.aspectRatioClass);

    VideoCreationJson.scenes = VideoCreationJson.scenes.map(scene => {
      scene.sub_scenes = scene.sub_scenes.map(subScene => {
        subScene.font.size = subScene.font.size * heightCoefficient * aspectRatioFontFactor; // will be multiplied by hight res

        if (subScene.font.line_height !== null) {
          subScene.font.line_height = subScene.font.line_height * heightCoefficient * aspectRatioFontFactor;
        }

        if (subScene.location.start_x) {
          subScene.location.start_x = subScene.location.start_x * widthCoefficient;
        }

        if (subScene.location.center_x) {
          subScene.location.center_x = subScene.location.center_x * widthCoefficient;
        }

        if (subScene.location.end_x) {
          subScene.location.end_x = subScene.location.end_x * widthCoefficient;
        }

        if (subScene.location.start_y) {
          subScene.location.start_y = subScene.location.start_y * heightCoefficient;
        }

        if (subScene.location.end_y) {
          subScene.location.end_y = subScene.location.end_y * heightCoefficient;
        }

        return subScene;
      });

      if (scene.background && scene.background.logo && scene.background.logo.location_y)
        scene.background.logo.location_y = scene.background.logo.location_y * heightCoefficient;
      if (scene.background && scene.background.src) {
        scene.background.src = [...scene.background.src];
        scene.background.src.forEach((element, index) => {
          if (element.frame) {
            element.frame = { ...element.frame };
            element.frame.center_x = element.frame.center_x * heightCoefficient;
            element.frame.center_y = element.frame.center_y * heightCoefficient;
          }
        });
      }

      return scene;
    });
    try {
      if (!isFreeTrial) {
        /*if (!isVoiceOver) {
					VideoCreationJson.scenes[VideoCreationJson.scenes.length - 1]["music-fade-out"] = true
				} else if (isOutroScene) {
					VideoCreationJson.scenes[VideoCreationJson.scenes.length - 1]["music-fade-out"] = true
				}*/
        // music should fade out for the last scene if music is enabled on it, else it should fade out for the last-but-one scene
        if (VideoCreationJson.scenes[VideoCreationJson.scenes.length - 1].music)
          VideoCreationJson.scenes[VideoCreationJson.scenes.length - 1]['music-fade-out'] = true;
        else if (VideoCreationJson.scenes[VideoCreationJson.scenes.length - 2]?.music)
          VideoCreationJson.scenes[VideoCreationJson.scenes.length - 2]['music-fade-out'] = true;
      }
    } catch (error) {}
    if (description != '') {
      VideoCreationJson.output.description = description;
    }

    if (
      this.state.isTransitions &&
      this.state.transitionId &&
      this.state.transitionId != '' &&
      this.state.transitionId != 'none' &&
      typeof this.state.transitionId != 'number'
    ) {
      const scenes = VideoCreationJson.scenes.map(el => {
        let scene = { ...el };
        //scene['in-effect'] = this.state.transitionId;
        //scene['out-effect'] = this.state.transitionId;
        return scene;
      });
      VideoCreationJson.scenes = scenes;
    }

    if (videoClips) {
      VideoCreationJson.video_editing = true;
      VideoCreationJson.use_moviepy = true;
      VideoCreationJson.video_per_scene = true;
    }

    if (this.state.source === 'transcribe') {
      VideoCreationJson.video_editing = true;
      VideoCreationJson.use_moviepy = true;

      //VideoCreationJson["video-url"] = this.state.url
      //Commented as it is not needed in new video generation using moviepy
      /* let videoScenes = [];
			videoScenes.push(VideoCreationJson.scenes[0]);
			for (let i = 1; i < VideoCreationJson.scenes.length; i++) {
				let videoScene = VideoCreationJson.scenes[i];
				let prevVideoScene = VideoCreationJson.scenes[i - 1];
				let videoSceneSrc = videoScene.background.src;
				let prevVideoSceneSrc = prevVideoScene.background.src;
				if (videoSceneSrc.length === 1 &&
					prevVideoSceneSrc.length === 1 &&
					prevVideoSceneSrc[0].url === videoSceneSrc[0].url &&
					((videoSceneSrc[0].start === prevVideoSceneSrc[0].end) ||
						((videoSceneSrc[0].start - 0.01) === prevVideoSceneSrc[0].end))) {
					let parentVideoScene = videoScenes[videoScenes.length - 1];
					parentVideoScene.time = parentVideoScene.time + videoScene.time;
					parentVideoScene.sub_scenes = [...parentVideoScene.sub_scenes, ...videoScene.sub_scenes];
					parentVideoScene.background.src[0].end = videoScene.background.src[0].end;
				}
				else {
					videoScenes.push(videoScene);
				}
			}
			VideoCreationJson.scenes = videoScenes; */
    }
    if (isScegen) {
      VideoCreationJson.use_scegen = true;
    }
    if (this.generateDraftVideo) {
      VideoCreationJson.draftVideo = true;
      this.generateDraftVideo = false;
    }

    if (this.generateNextGenerationVideo) {
      VideoCreationJson.next_generation_video = true;
      this.generateNextGenerationVideo = false;
    }
    this.setState({
      previewProgressMessage: 'Generating preview',
    });

    VideoCreationJson.containsTextToImage = containsTextToImage;
    amplitude.getInstance().logEvent('generate-video-json-completed', {
      'project-id': this.state.project_id,
    });
    return { VideoCreationJson, containsTextToImage };
  }

  parseColorForVideoAPI(color) {
    if (!color) return;
    color = color.trim();
    let type = color.match(/rgba?/g);

    let values = color.match(/[\d\.]+/g);

    if (type == null) {
      return 'none';
    } else if (type[0] == 'rgb') {
      return color;
    } else if (type[0] == 'rgba') {
      values[3] = Math.round(parseFloat(values[3]) * 255);
      return 'rgba(' + values.join(',') + ')';
    } else {
      return 'none';
    }
  }

  validateVideoStockVisuals = () => {
    let sceneIds = [];
    let stockExpiryDate = moment('2021-11-02');
    let currentDate = moment();
    if (currentDate.isAfter(stockExpiryDate)) {
      let uniqueSceneIds = new Set();
      for (let i = 0; i < this.state.subSentencesArray.length; i++) {
        let scene = this.state.subSentencesArray[i];
        let visualUrl = this.state.imageURL[scene.sceneId - 1];
        if (visualUrl) {
          let inValidStockVisual = false;
          let visual = this.state.allAssets[visualUrl];
          if (visual) {
            inValidStockVisual = isUnSupportedStockVisual(visual);
          } else {
            inValidStockVisual = isUnSupportedStockVisual({ url: visualUrl });
          }
          if (inValidStockVisual && uniqueSceneIds.has(scene.sceneId) === false) {
            sceneIds.push(scene.sceneId);
            uniqueSceneIds.add(scene.sceneId);
          }
        }
      }
    }
    return {
      invalidStockVisuals: sceneIds.length > 0,
      invalidSceneIds: sceneIds,
    };
  };

  //Go to Previous step
  gotoCreateVideoStep2 = event => {
    if (!this.state.goToPreviousConfirm && !this.state.tryLaterGotoStep1) {
      this.openGoToPreviousConfirm();
      return;
    }
    this.closeGoToPreviousConfirm();
    if (
      this.state.isSkipStep2 &&
      (this.props.location && this.props.location.state && this.props.location.state.step2Data ? false : true)
    ) {
      this.props.history.push({
        pathname: GlobalJs.BaseURL + CustomURLs.stepOne,
        state: {
          url: this.state.url,
          sentences: this.state.sentences,
          text: this.state.originalText,
          isPreviousButton: true,
          originalText: this.state.originalText,
          sendOriginalText: this.state.sendOriginalText,
          baseText: this.state.baseText,
          autoHighlightKeywords: this.props.location.state.autoHighlightKeywords,
          autoVisualSelection: this.props.location.state.autoVisualSelection,
          selectedValueSceneBreakChar: this.props.location.state.selectedValueSceneBreakChar,
          scriptLanguage: this.props.location.state.scriptLanguage,
          projectDetails: this.props.location.state.projectDetails,
        },
      });
    } else {
      let projectDetails = {
        ...this.state.loadProjectDetails,
        isSubtitleEnabled: this.props.location.state.isSubtitleEnabled
          ? this.props.location.state.isSubtitleEnabled
          : false,
        isRemoveFillers: this.props.location.state.isRemoveFillers ? this.props.location.state.isRemoveFillers : false,
        isSummarized: this.props.location.state.isSummarized ? this.props.location.state.isSummarized : false,
        summarizePercent: this.props.location.state.summarizePercent ? this.props.location.state.summarizePercent : 0,
        selectedSentences: this.props.location.state.selectedSentences
          ? this.props.location.state.selectedSentences
          : [],
        transcribe_sentences: this.props.location.state.transcribe_sentences
          ? this.props.location.state.transcribe_sentences
          : [],
        speakers: this.props.location.state.projectDetails.speakers,
        projectName: this.state.projectName ? this.state.projectName : this.state.loadProjectDetails.projectName,
      };
      delete projectDetails.imageAssests;
      delete projectDetails.allSummaryAssets;
      // reset aspectRatio to original video height / width
      let fractionValue = this.state.editingVideoWidth / this.state.editingVideoHeight;
      if (fractionValue) {
        const aspectRatio = AllAspectRatios.find(ratio => Math.abs(ratio.fractionValue - fractionValue) <= 0.01);
        if (aspectRatio) {
          projectDetails.aspectRatioClass = aspectRatio.class;
          projectDetails.aspectRatioValue = aspectRatio.value;
          projectDetails.aspectRatioFractionValue = aspectRatio.fractionValue;
        } else {
          projectDetails.aspectRatioClass = 'custom';
          projectDetails.aspectRatioValue = 'custom';
          projectDetails.aspectRatioFractionValue = fractionValue;
        }
      } else {
        projectDetails.aspectRatioClass = ASPECT_RATIO_DEFAULT_CLASS;
        projectDetails.aspectRatioValue = ASPECT_RATIO_DEFAULT_OPTION;
        projectDetails.aspectRatioFractionValue = ASPECT_RATIO_DEFAULT_FRACTION_VALUE;
      }

      this.props.history.push({
        pathname: GlobalJs.BaseURL + CustomURLs.stepTwo,
        state: {
          url: this.state.url,
          sentences: this.state.sentences,
          originalText: this.state.originalText,
          baseText: this.state.baseText,
          summaryText: this.state.summaryText,
          isPrevious: true,
          summaryJson: this.state.summaryJsonText,
          lines: this.props.location.state.lines || this.state.lines,
          totalLines: this.props.location.state.totalLines || this.state.totalLines,
          value: this.props.location.state.value || this.state.value,
          sendOriginalText: this.state.sendOriginalText,
          mainOriginalText: this.state.mainOriginalText,
          allSummaryText: this.state.allSummaryText,
          startingSummary: this.state.startingSummary,
          articleKeywords: this.state.articleKeywords,
          projectDetails,
          step2Data: this.props.location.state.step2Data && { ...this.props.location.state.step2Data },
          documentFile: this.props.location.state.documentFile,
          documentFileName: this.props.location.state.documentFileName,
          selectedSentences: this.props.location.state.selectedSentences
            ? this.props.location.state.selectedSentences
            : [],
          transcribe_sentences: this.props.location.state.transcribe_sentences
            ? this.props.location.state.transcribe_sentences
            : [],
          saveProjectFirst: true,
          autoHighlightKeywords: this.props.location.state.autoHighlightKeywords,
          autoVisualSelection: this.props.location.state.autoVisualSelection,
          scriptLanguage: this.props.location.state.scriptLanguage,
        },
      });
    }
  };

  ApplyNewBrandSetting = (isApply, event) => {
    if (isApply === 'Cancel' || isApply === 'No') {
      this.setState({
        askBrandSettingChange: false,
        popupAskBrandSettingChange: false,
        isShowOverlay: true,
        OverlayMessage: 'Please wait...',
      });
      this.loadProjectFromJson();
    }
    if (isApply === 'Yes') {
      this.setState({
        askBrandSettingChange: true,
        popupAskBrandSettingChange: false,
        isShowOverlay: true,
        OverlayMessage: 'Applying the new brand settings...',
      });
      this.loadProjectFromJson();
    }
  };

  CloseUpdateBox = (isSave, event) => {
    if (isSave === 'Cancel') {
      this.setState({ isAnyUpdate: false });
    } else if (isSave === 'No' && this.state.gotoUrl === 'brand') {
      this.props.history.push({
        pathname: GlobalJs.BaseURL + 'brandSettings',
        state: {
          isAnyChange: false,
        },
      });
      this.setState({ isAnyUpdate: false });
    } else if (isSave === 'No' && this.state.gotoUrl === 'video') {
      this.props.history.push({
        pathname: GlobalJs.BaseURL + CustomURLs.myProjects,
        state: {
          isAnyChange: false,
        },
      });
      this.setState({ isAnyUpdate: false });
    } else if (isSave === 'No' && this.state.gotoUrl === 'logout') {
      Auth.signOut();
      AppLocalStorage.clear();
      this.props.history.push(GlobalJs.BaseURL);
      event.preventDefault();
    } else if (isSave === 'Yes') {
      this.setState({ isAnyUpdate: false });
      if (this.state.videoURL !== '' && this.state.videoURL !== null) this.OpenSaveProjectPopup('video', true);
      else this.OpenSaveProjectPopup('project', true);
    }
  };

  gotoMyVideo = () => {
    this.clearUndoHistory();
    if (
      this.state.isAnyChange ||
      this.state.projectName === '' ||
      this.state.projectName === null ||
      this.state.projectName === undefined
    ) {
      this.setState({ isAnyUpdate: true, gotoUrl: 'video' });
    } else {
      this.props.history.push({
        pathname: GlobalJs.BaseURL + CustomURLs.myProjects,
        state: {
          isAnyChange: false,
        },
      });
    }
  };

  gotoLogout = event => {
    this.clearUndoHistory();
    if (
      this.state.isAnyChange ||
      this.state.projectName === '' ||
      this.state.projectName === null ||
      this.state.projectName === undefined
    ) {
      this.setState({ isAnyUpdate: true, gotoUrl: 'logout' });
    } else {
      Auth.signOut();
      AppLocalStorage.clear();
      this.props.history.push(GlobalJs.BaseURL);
      event && event.preventDefault();
    }
  };

  gotoHome = () => {
    this.clearUndoHistory();
    this.props.history.push(GlobalJs.BaseURL + CustomURLs.stepOne);
  };
  //Handle on change event on text boxes and text areas
  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  };

  changeProjectName = event => {
    this.setState({
      projectName: event.target.value,
    });
  };

  handleBlurProjectName = (projectName, isDuplicate) => {
    if (this.state.projectName !== projectName) {
      this.setState({
        projectName,
        isAnyChange: isDuplicate ? false : true,
      });
    }
    // const value = event.target.value;
    // this.setState({ projectName: value });

    // if(value.trim() !== "")
    // {
    // 	let regEx = /^(?:[A-Za-z0-9]+)(?:[A-Za-z0-9 _().@,&]*)$/;
    // 	if(regEx.test(value.trim()))
    // 	{
    // 		this.setState({
    // 			hasErrorProjectName: false,
    // 			popupVisibleProjectNameError: false,
    // 			hasErrorProjectCategory: false,
    // 			popupVisibleProjectCategoryError: false,
    // 			hasErrorProjectCategoryDDL: false,
    // 			popupVisibleProjectDDLCategoryError: false,
    // 		});
    // 	}
    // 	else{
    // 		this.setState({
    // 			hasErrorProjectName: true,
    // 			popupVisibleProjectNameError: true,
    // 			projectNameErrorMessage: 'Only alphabets, numbers, ().,@_& and spaces are allowed'
    // 		});
    // 	}
    // }
    // else if(value.trim() === "")
    // {
    // 	this.setState({
    // 		hasErrorProjectName: true,
    // 		popupVisibleProjectNameError: true,
    // 		projectNameErrorMessage: 'Enter project name'
    // 	});
    // }
  };

  handleBlurProjectCategory = event => {
    const value = event.target.value;
    this.setState({ projectCategory: value });

    if (value.trim() !== '') {
      this.setState({
        hasErrorProjectName: false,
        popupVisibleProjectNameError: false,
        hasErrorProjectCategory: false,
        popupVisibleProjectCategoryError: false,
        hasErrorProjectCategoryDDL: false,
        popupVisibleProjectDDLCategoryError: false,
      });
    } else if (value.trim() === '') {
      this.setState({
        hasErrorProjectCategory: true,
        popupVisibleProjectCategoryError: true,
      });
    }
  };

  handleSelectChange = event => {
    if (document.getElementById('ddlCategory').value === 'Add new category') {
      this.setState({
        projectCategory: '',
        ddlCategory: '',
        hasErrorProjectCategoryDDL: false,
        popupVisibleProjectDDLCategoryError: false,
        displayDdlCategory: false,
        displayOuterDdlCategory: false,
        displayTextProjectCategory: true,
      });
      document.getElementById('ddlCategory').style.display = 'none';
      document.getElementById('outerDDLCategory').style.display = 'none';
      document.getElementById('txtProjectCategory').style.display = 'block';
    } else if (document.getElementById('ddlCategory').value === 'Select category') {
      this.setState({
        projectCategory: '',
        ddlCategory: '',
        hasErrorProjectCategoryDDL: true,
        popupVisibleProjectDDLCategoryError: true,
      });
    } else
      this.setState({
        projectCategory: event.target.value,
        ddlCategory: event.target.value,
        hasErrorProjectCategoryDDL: false,
        popupVisibleProjectDDLCategoryError: false,
      });
  };

  async componentWillMount() {
    MediaStorage.Instance.Configure();

    Auth.currentAuthenticatedUser()
      .then(async user => {
        this.state.user = user;
        this.setState({
          VideoRes: isProfessionalSubscription(user.username) ? '1080p' : '720p',
        });
        this.fetchAspectRatioFromSettings();
        this.showSubscriptionVoiceOverTracks(user.username);
        this.props.searchCategoriesBegin();
        this.props.getImageList(user.username, this.state.getImageFilter);
        this.props.getFavoriteVisuals(user.username);
        this.props.getRecentVisuals(user.username);
        this.props.getAudioFavAndRecents(user.username);
        this.props.getCurrentSubscription(user.username);
        await this.props.getStyles();
        await this.props.getUserBrandsRequest(user.username);
        this.getVoiceOverQuota(true);
        this.setState({ user: user, username: user.username });
        if (getFeatures(this.state.username)[features.sceneTransitions]) {
          this.setState({
            isTransitions: true,
            // transitionId: "fade"
          });
        }
        if (this.state.loadProject) {
          this.setState({ OverlayMessage: 'Please wait...' });
          await this.openProject();
        } else if (!this.state.popupAskBrandSettingChange) {
          this.setState({ isShowOverlay: true });
          await this.loadProjectFromJson();
        }
        if (
          this.state.loadProjectDetails &&
          this.state.loadProjectDetails.states &&
          this.state.loadProjectDetails.currentState == PROJECT_STATES.VIDEO_GENERATING
        ) {
          const states = this.state.loadProjectDetails.states;
          const index = states.findIndex(state => state.name === PROJECT_STATES.VIDEO_GENERATING && state.responseId);
          if (index != -1) {
            const responseId = states[index].responseId;
            await this.props.getVideoProgress({ responseId });
            const video = this.props.videoProgress;
            if (video && !_.isEmpty(video) && video.message) {
              if (video.message.status === 'completed' || video.message.status === 'complete') {
                this.setState({
                  videoURL: video.message.output,
                  isGeneratedAsyncVideo: true,
                  shareVideoURL: video.message.share_output,
                  generatingAsyncVideo: false,
                  // isAnyChange: true
                });
              } else if (video.message.status === 'error') {
                // TODO: show msg to user when video gen errored
              } else {
                this.setState({
                  generatingAsyncVideo: true,
                });
              }
            } else {
              this.setState({
                generatingAsyncVideo: true,
              });
            }
          }
        }
        let currentWorkspace = getCurrentWorkspaceDetails();
        if (currentWorkspace) {
          this.props.getTeamUsersRequest(currentWorkspace);
        }
        //this.props.getUserPreferenceRequest(user.username, 'color');
      })
      .catch(
        function (e) {
          this.props.history.push(GlobalJs.BaseURL);
        }.bind(this)
      );
    // As the location.state is already utilized in constructor,
    // change loadProject to true so that browser refresh load data from saved project instead of location.state
    if (
      this.props.location.state &&
      (!this.props.location.state.loadProject || this.props.location.state.askBrandSettingChange)
    ) {
      const templatesActionData = {
        template: this.props.location.state.projectDetails.template,
      };
      this.setState({ templatesAction: TEMPLATES_ACTION.applyTemplateId, templatesActionData });
      this.props.history.replace({
        state: {
          ...this.props.location.state,
          loadProject: true,
          askBrandSettingChange: false,
          project_id: this.state.project_id,
          projectDetails: { ...this.props.location.state.projectDetails, isNewProject: false },
        },
      });
    }
    if (this.props.location.state && this.props.location.state.loadProject && this.props.location.state.isFromStep2) {
      this.props.history.replace({
        state: {
          ...this.props.location.state,
          isFromStep2: false,
        },
      });
    }
  }

  componentDidMount() {
    //Reset reload page attributes in history to avoid unnecessary reload during other history navigations
    if (
      this.props.history &&
      this.props.history.location &&
      this.props.history.location.state &&
      this.props.history.location.state.reloadPage
    ) {
      this.props.history.replace({
        state: {
          ...this.props.location.state,
          reloadPage: false,
          reloadKey: null,
        },
      });
    }

    const timeTakenInStepThreeInterval = setInterval(() => {
      this.timeTakenInStepThree = this.timeTakenInStepThree + 1;
    }, 1000);
    this.setState({
      timeTakenInStepThreeInterval,
    });
    AppLocalStorage.removeItem('lastUrl');
    AppLocalStorage.setItem('lastUrl', CustomURLs.stepThree);
    document.addEventListener('keydown', this.handleKeyPress);
    document.addEventListener('click', this.handleMouseClick);
    $('[data-toggle="tooltip"]').tooltip({ trigger: 'hover' });

    $('.copy-url-link').click(function (e) {
      e.stopPropagation();
      $('.copy-url-link').show(); //show the button
      this.setState({ copy: true });
      setTimeout(() => {
        this.setState({ showCopyLink: false, copy: false });
      }, 1000);
    });
    $('.link-copy').click(e => {
      e.stopPropagation();
      this.setState({ showCopyLink: true });
      $('.copy-url-link').show(); //show the button
    });

    $(function () {
      $(document).click(function () {
        $('.copy-url-link').hide(); //hide the button
      });
    });

    window.addEventListener('resize', this.windowDidResized);
    // Reset voice over for all scenarios so removed this condition
    //if (this.state.source == "visuals" || this.state.source == "transcribe") {
    AppLocalStorage.removeItem('voiceOverTrackName');
    AppLocalStorage.removeItem('voiceOverTrackId');
    AppLocalStorage.removeItem('trackType');
    AppLocalStorage.removeItem('activeTrack');
    AppLocalStorage.removeItem('trackId');
    AppLocalStorage.removeItem('trackName');
    //}
    this.getDefaultTextStyles();

    // Appcues event
    window.Appcues?.on('step_interacted', event => {
      if (
        event.flowName === '11Labs Announcement' ||
        event.flowName === '11Labs Announcement Step 2' ||
        event.flowName === '11Labs Announcement Existing Project'
      ) {
        //console.log('Appcues step_interacted: ', event);
        // button click interaction on the flow modal
        if (event.interaction) this.openTab(TAB_AI_VOICEOVER);
      }
    });
  }

  handleImportAssets = async project => {
    if (this.state.audioImportStatus == 'pending') {
      let audioAssets = [];
      if (project?.audio?.selectedTrackType == 'music' && project?.audio?.selectedTrackUrl) {
        if (audioAssets.filter(a => a == project?.audio?.selectedTrackUrl).length == 0) {
          audioAssets.push(project?.audio?.selectedTrackUrl);
        }
      }
      for (let i = 0; i < project.scenes.length; i++) {
        let scene = project.scenes[i];
        if (scene?.recordedAudio) {
          if (audioAssets.filter(a => a == scene?.recordedAudio).length == 0) {
            audioAssets.push(scene?.recordedAudio);
          }
        }
        if (scene?.audioSegments) {
          for (let j = 0; j < scene.audioSegments.length; j++) {
            let audioSegment = scene.audioSegments[j];
            if (audioSegment?.recordedAudio) {
              if (audioAssets.filter(a => a == audioSegment?.recordedAudio).length == 0) {
                audioAssets.push(audioSegment?.recordedAudio);
              }
            }
          }
        }
      }
      // call api to import to team workspace
      this.props.importAudio(this.state.username, audioAssets);
    }
    if (this.state.visualImportStatus == 'pending') {
      let visualAssets = [];
      for (let i = 0; i < project.scenes.length; i++) {
        if (project.scenes[i].isCustomImage && project.scenes[i].image) {
          if (visualAssets.filter(a => a == project.scenes[i].image).length == 0) {
            visualAssets.push(project.scenes[i].image);
          }
        }
      }
      // call api to import to team workspace
      this.props.importImage(this.state.username, visualAssets);
    }
  };

  getDefaultTextStyles = async () => {
    let result = await this.props.getStylesByAttributes([
      { displayTextStyleType: 'heading', scope: 'global' },
      { displayTextStyleType: 'subheading', scope: 'global' },
      { displayTextStyleType: 'bodytext', scope: 'global' },
    ]);
    this.setState({ defaultTextStyles: result?.stylesResult });
  };

  showSubscriptionVoiceOverTracks = userName => {
    const subscriptionDetails = getSubscriptionDetails(userName);
    if (subscriptionDetails && subscriptionDetails.plan && subscriptionDetails.plan.plan_code) {
      let subscriptionVoiceOverTracks = voiceOverTracks.filter(
        track => track.subscriptions.indexOf(subscriptionDetails.plan.plan_code) > -1
      );
      this.setState({
        voiceOverTracks: subscriptionVoiceOverTracks,
      });
    }
  };

  loadProject = () => {
    if (
      this.props.location &&
      (this.props.location.search ||
        this.props.location.pathname.startsWith(`/${CustomURLs.stepThree_scriptToVideo}?preview=`))
    ) {
      if (this.props.location.search && this.props.location.search.indexOf('preview=') > -1) {
        const urlParams = queryString.parse(this.props.location.search);
        if (urlParams.preview) {
          return true;
        }
      }
    } else {
      if (this.props.location.pathname.startsWith(`/${CustomURLs.stepThree_scriptToVideo}?preview=`)) {
        return true;
      }
    }
    return this.props.location.state.loadProject === true;
  };

  openProject = async () => {
    let isPreviewProject = false;
    if (
      this.props.location &&
      (this.props.location.search ||
        this.props.location.pathname.startsWith(`/${CustomURLs.stepThree_scriptToVideo}?preview=`))
    ) {
      if (this.props.location.search && this.props.location.search.indexOf('preview=') > -1) {
        const urlParams = queryString.parse(this.props.location.search);
        if (urlParams.preview) {
          isPreviewProject = true;
          await this.props.openPreviewProject(urlParams.preview);
          if (this.props.activeProject) {
            isPreviewProject = true;
          }
        }
      } else {
        isPreviewProject = true;
        let previewId = this.props.location.pathname.split(`${CustomURLs.stepThree_scriptToVideo}?preview=`)[1];
        if (previewId) {
          await this.props.openPreviewProject(previewId);
          if (this.props.activeProject) {
            isPreviewProject = true;
          }
        }
      }
      if (isPreviewProject && this.props.activeProject) {
        this.setState({
          project_id: this.props.activeProject.project_id,
        });
      }
    }

    if (!this.props.activeProject || _.isEmpty(this.props.activeProject)) {
      await this.props.openProject(this.state.project_id, PROJECT_OPEN_ACTIONS.OpenProject, this.state.cognito_id);
    }
    if (this.props.activeProject && !_.isEmpty(this.props.activeProject)) {
      this.setState(
        {
          loadProjectDetails: this.props.activeProject,
        },
        () => {
          // When brand setting popup shows up, dont call loadProjectFromJson here,
          // as it will be done in ApplyNewBrandSetting based on user confirmation on popup
          if (!this.state.popupAskBrandSettingChange) {
            this.setState({ isShowOverlay: true });
            this.loadProjectFromJson();
          }
          if (isPreviewProject) {
            setTimeout(() => {
              this.setState({
                isAnyChange: true,
              });
            }, 2000);
          }
        }
      );
    }
  };

  async componentWillMount_call(isAnyChange = false, updateSettingFromSubSentencesArray = true) {
    var subSentencesArray = [];
    //var scenePosition = [...this.state.scenePosition];
    const timePerFrame = [...this.state.timePerFrame];
    if (
      this.state.summaryJsonText?.length > 0 &&
      this.state.summaryJsonText[this.state.summaryJsonText.length - 1].sceneId === 'Outro Scene' &&
      getResourceType(this.state.summaryJsonText[this.state.summaryJsonText.length - 1].image) === 'video' &&
      !this.getOutroVideoDurationPromise
    ) {
      this.getOutroVideoDurationPromise = this.getOutroVideoDuration(
        this.state.summaryJsonText[this.state.summaryJsonText.length - 1].image
      );
    }
    let currentSubSentence = this.state.subSentencesArray[this.state.currentActiveDiv - 1];
    for (let i = 0; i < this.state.summaryJsonText.length; i++) {
      let text = this.state.summaryJsonText[i];
      var sceneId = text.sceneId == 'Custom Intro Scene' ? 1 : parseInt(i) + 1;
      //var showSceneNumber = text.sceneId == "Custom Intro Scene" ? text.sceneId : '';
      /* Moved this scenario to loadProjectJson as hideShowOverlay calls componentWillMount_call and this gets into infinite loop
			if (text.sentence && text.sentence.replace(/<[^>]*>?/gm, '').length === 0) {
				console.log(text.sentence);
				this.hideShowOverlay(sceneId, NO_IMAGE);
			} */
      if (text.subsentences.length === 0) {
        let textCopy = { ...text };
        delete textCopy.sentence;
        delete textCopy.subsentences;
        delete textCopy.image;
        delete textCopy.type;
        delete textCopy.format;
        delete textCopy.bRollSubSceneSegments;
        delete textCopy.subSentenceSegments;
        delete textCopy.uuidArray;
        const defaultSceneSettings = _.cloneDeep(this.state.defaultSceneSettings);
        let sceneData = {
          ...textCopy,
          sentence: text.sentence || '',
          subSentences: text.sentence,
          subSceneId: 1,
          AllSubSentences: text.sentence ? [text.sentence] : [],
          settings: text.settings || defaultSceneSettings,
          isDeleted: false,
          isNew: false,
          isActive: false,
          isOpenTextEditor: false,
          //showSceneNumber,
          transcription: text.transcription || false,
        };
        if (text.format) sceneData = { ...sceneData, ...text.format[0] };
        if (text.recordedAudio) {
          sceneData.recordedAudio = text.recordedAudio;
          //sceneData.recordedAudioDuration = text.recordedAudioDuration;
          //sceneData.recordedAudioDurationMiniSec = text.recordedAudioDurationMiniSec;
          sceneData.recordingApplyToAll = text.recordingApplyToAll;
          sceneData.playbackRate = text.playbackRate;
          sceneData.audioSegments = text.audioSegments;
        }
        if (text.bRoll) {
          sceneData.bRoll = text.bRoll;
          sceneData.bRollUrl = text.bRollUrl;
          sceneData.bRollSubSceneSegment = text.bRollSubSceneSegments[0];
        }
        if (text.isBrandIntro) {
          sceneData.isBrandIntro = true;
        }
        if (text.isBrandOutro) {
          sceneData.isBrandOutro = true;
        }
        subSentencesArray.push(sceneData);
      }
      for (let j = 0; j < text.subsentences.length; j++) {
        let sub = text.subsentences[j];

        var subText = sub;
        var subSceneId = parseInt(j) + 1;
        if (text.subsentences.length === 1 && text.sentence) {
          subText = text.sentence;
        }
        let isSettingChanged = false;
        const defaultSceneSettings = _.cloneDeep(this.state.defaultSceneSettings);
        const hideText =
          !this.props.location || !this.props.location.state || this.props.location.state.isSubtitleEnabled === true
            ? false
            : true;
        let settings =
          text.settings && Object.keys(text.settings).length > 0
            ? text.settings
            : text.transcription === true
            ? { ...defaultSceneSettings, muteClipAudio: false, hideText }
            : defaultSceneSettings;
        if (updateSettingFromSubSentencesArray) {
          const index = this.state.subSentencesArray.findIndex(scene => scene.sceneId == sceneId);
          if (index > -1) {
            if (this.state.subSentencesArray[index] && this.state.subSentencesArray[index].settings) {
              settings = { ...this.state.subSentencesArray[index].settings };
            }
          }
        }
        let transcribeVideoLength = 0;
        if (!text.bRoll && text.subSentenceSegments && text.subSentenceSegments[j]) {
          isSettingChanged = true;
          text.subSentenceSegments[j] &&
            text.subSentenceSegments[j].map(time => {
              let duration = 0;
              if (time && time.start != time.end) {
                duration = parseFloat(time.end) - parseFloat(time.start);
              }
              transcribeVideoLength = transcribeVideoLength + duration;
            });
          const segments =
            text.settings && text.settings.videoOptions
              ? text.settings.videoOptions.segments
              : settings.videoOptions.segments;
          settings = {
            ...text.settings,
            ...settings,
            videoOptions: { isCropped: true, segments, subSentenceSegments: text.subSentenceSegments[j] },
          };
        }
        let textCopy = { ...text };
        delete textCopy.sentence;
        delete textCopy.subsentences;
        delete textCopy.image;
        delete textCopy.type;
        delete textCopy.format;
        delete textCopy.bRollSubSceneSegments;
        delete textCopy.subSentenceSegments;
        delete textCopy.uuidArray;
        let sceneData = {
          ...textCopy,
          sentence: subText,
          subSentences: subText,
          sceneId,
          subSceneId,
          AllSubSentences: text.subsentences,
          transcribeVideoLength: isSettingChanged
            ? parseFloat(parseFloat(transcribeVideoLength).toFixed(2))
            : text.transcribeVideoLength,
          settings: _.cloneDeep(isSettingChanged ? settings : text.settings || settings),
          isDeleted: false,
          isNew: false,
          isActive: false,
          isOpenTextEditor: (currentSubSentence && currentSubSentence.isOpenTextEditor) || false,
          //showSceneNumber,
          transcription: text.transcription || false,
        };
        if (text.format && text.format[j]) {
          let hideText = text.format[j].hideText;
          delete text.format[j].hideText;
          sceneData = { ...sceneData, ...text.format[j], settings: { ...sceneData.settings } };
          if (hideText !== undefined) {
            sceneData.settings.hideText = hideText;
          }
        }
        /* as all the format data is now stored in summaryJsonText[i].format[] array, remove scenePosition
				if (scenePosition && scenePosition[subSentencesArray.length]) {
					let position = scenePosition[subSentencesArray.length];
					sceneData["topCoordinate"] = position.topCoordinate;
					sceneData["leftCoordinate"] = position.leftCoordinate;
					sceneData["paragraphWidth"] = position.paragraphWidth;
				}*/
        if (text.recordedAudio) {
          sceneData.recordedAudio = text.recordedAudio;
          sceneData.recordingApplyToAll = text.recordingApplyToAll;
          sceneData.playbackRate = text.playbackRate;
          if (text.audioSegments && text.audioSegments.length > 0 && text.audioSegments[j]) {
            sceneData.audioSegments = [text.audioSegments[j]];
            sceneData.recordedAudioDuration = text.audioSegments[j].end - text.audioSegments[j].start;
            sceneData.recordedAudioDurationMiniSec = sceneData.recordedAudioDuration * 1000;
          } else sceneData.audioSegments = [null];
          /*if (text.subSentenceSegments && text.subSentenceSegments.length > 0) {
						sceneData.audioSegments = text.subSentenceSegments[j];
						sceneData.recordedAudioDuration = text.subSentenceSegments[j].reduce((prevValue, currentSegment) => {
							prevValue += parseFloat(currentSegment.end - currentSegment.start);
							return prevValue;
						}, 0);
						sceneData.recordedAudioDuration = parseFloat(sceneData.recordedAudioDuration.toFixed(2));
						sceneData.recordedAudioDurationMiniSec = sceneData.recordedAudioDuration * 1000;
					}*/
        } else if (text.audioSegments && text.audioSegments[j] !== undefined) {
          sceneData.audioSegments = [text.audioSegments[j]];
        }
        if (text.bRoll) {
          sceneData.bRoll = text.bRoll;
          sceneData.bRollUrl = text.bRollUrl;
          sceneData.bRollSubSceneSegment = text.bRollSubSceneSegments[j];
          if (sceneData.bRollSubSceneSegment && Array.isArray(sceneData.bRollSubSceneSegment))
            sceneData.transcribeVideoLength = sceneData.bRollSubSceneSegment.reduce((duration, segment) => {
              duration = duration + (segment ? segment.end - segment.start : 0);
              return duration;
            }, 0);
          else
            console.log(
              sceneData.sceneId,
              '.',
              sceneData.subSceneId,
              ' sceneData.bRollSubSceneSegment is ',
              sceneData.bRollSubSceneSegment
            );
        }
        sceneData.uuid = text.uuidArray[j];
        subSentencesArray.push(sceneData);
        if (
          text.transcription &&
          sceneData.transcribeVideoLength > 0 &&
          text.sceneId !== 'Custom Intro Scene' &&
          text.sceneId !== 'Outro Scene'
        ) {
          // intro and outro timePerFrame already set
          timePerFrame[subSentencesArray.length - 1] = sceneData.transcribeVideoLength;
        }
      }
      if (text.recordedAudio) {
        //text.subSentenceSegments = []; //reset subsentences segments for recorded audio
      }
    }
    this.setShowSceneNumbersInSceneArray(this.state.summaryJsonText, subSentencesArray, 0);
    if (subSentencesArray.length > 0) {
      let refreshEditScene = this.state.refreshEditScene;
      let refreshAllStatement = this.state.refreshAllStatement;
      let refreshAllScenePanel = this.state.refreshAllScenePanel;
      let refreshVisualLibrary = this.state.refreshVisualLibrary;
      let refreshImageFavourite = this.state.refreshImageFavourite;
      let refreshImageRecent = this.state.refreshImageRecent;
      let switchToScene = 0;

      if (typeof this.state.subSentencesArray == 'object' && this.state.subSentencesArray.length > 0) {
        this.state.subSentencesArray.forEach((scene, sceneIndex) => {
          if (scene['isActive'] == true) switchToScene = sceneIndex;
        });
      }
      try {
        if (switchToScene === 0 && subSentencesArray[switchToScene].settings.hideScene) switchToScene++; // on first time load if intro scene exists and has hideScene set to true, switch to next scene
        subSentencesArray[switchToScene]['isActive'] = true;
        this.props.getSentenceKeywordSuggestions(
          this.getVoiceOverText(
            (subSentencesArray[switchToScene].sentence &&
              subSentencesArray[switchToScene].sentence.replace(/<strong>/g, '').replace(/<\/strong>/g, '')) ||
              ''
          ),
          this.state.scriptLanguage
        );
      } catch (err) {
        subSentencesArray[switchToScene - 1]['isActive'] = true;
        this.props.getSentenceKeywordSuggestions(
          this.getVoiceOverText(
            (subSentencesArray[switchToScene - 1].sentence &&
              subSentencesArray[switchToScene - 1].sentence.replace(/<strong>/g, '').replace(/<\/strong>/g, '')) ||
              ''
          ),
          this.state.scriptLanguage
        );
      }

      await this.setState(
        {
          subSentencesArray: subSentencesArray,
          isAnyChange,
          isShowOverlay: false,
          timePerFrame,
          currentActiveDiv: switchToScene + 1,
          currentSceneId: subSentencesArray[switchToScene].sceneId,
          refreshImageUpload: !this.state.refreshImageUpload,
          refreshEditScene: !refreshEditScene,
          refreshAllStatement: !refreshAllStatement,
          refreshAllScenePanel: !refreshAllScenePanel,
          refreshImageRecent: !refreshImageRecent,
          refreshImageFavourite: !refreshImageFavourite,
          refreshVisualLibrary: !refreshVisualLibrary,
        },
        async () => {
          this.getEstimatedTime();
          //this.loadAudioTrimmer();
        }
      );
    }
  }

  getOutroVideoDuration = async videoUrl => {
    let defaultOutroTimeInSec = await this.getVideoDuration(videoUrl, this.state.defaultOutroTimeInSec);
    this.setState({
      defaultOutroTimeInSec,
      defaultOutroTimeInMiniSec: defaultOutroTimeInSec * 1000,
    });
    return defaultOutroTimeInSec;
  };

  getVideoDuration = async (videoUrl, defaultDuration) => {
    let video = document.createElement('video');
    video.preload = 'metadata';
    return new Promise((resolve, reject) => {
      let timeoutId = setTimeout(resolve, 20000, defaultDuration);
      video.onloadedmetadata = function () {
        clearTimeout(timeoutId);
        resolve(parseFloat(video.duration.toFixed(2)));
      };
      video.src = videoUrl;
    });
  };

  /**
   * Open / Close the text editor
   * @param {*} SentenceCounter
   * @param {boolean} isTrue if true Open editor, else close
   */
  closeOpenTextEditor = async (SentenceCounter, isTrue) => {
    let sceneArray = [...this.state.subSentencesArray];
    let scene = { ...sceneArray[SentenceCounter - 1] };
    scene['isOpenTextEditor'] = isTrue;
    sceneArray[SentenceCounter - 1] = scene;

    await this.setState({
      subSentencesArray: sceneArray,
      isOpenTextEditor: isTrue,
      isSaveTextError: false,
      saveTextNextSceneCounter: undefined,
    });
  };

  setActiveScenes(sceneArray, currentScene, setActive) {
    let newSceneArray = sceneArray.map(scene => {
      if (scene.sceneId === currentScene.sceneId) scene.isActive = setActive;
      return scene;
    });
    return newSceneArray;
  }

  changeActiveDiv = async (SentenceCounter, isKeyBoard, isCtrlPressed = false) => {
    if (this.state.isOpenTextEditor) {
      // when user changes active scene while the editor is open
      // await this.setState({ saveTextNextSceneCounter: SentenceCounter });
      // return;
      await this.closeOpenTextEditor(this.state.currentActiveDiv, false);
    }

    let sceneArray = [...this.state.subSentencesArray];
    let scene = {};
    if (SentenceCounter < 1) SentenceCounter = 1;
    if (SentenceCounter > sceneArray.length) SentenceCounter = sceneArray.length;
    let newCurrentActiveDiv;
    const currentSelected = sceneArray[SentenceCounter - 1];
    if (isCtrlPressed) {
      //ONLY IF Ctrl is pressed, all the linked scenes should be selected else only clicked scene of the linked scenes should be selected.
      let activeSceneCount = sceneArray.filter(scene => scene.isActive).length;
      //This is a case when the user wants to unselect the only selected scene by clicking Ctrl.
      //Combined with delete keypress, it makes the video editing screen disappear
      if (activeSceneCount <= 1 && currentSelected.isActive) return;
      sceneArray = !currentSelected.isActive
        ? [...this.setActiveScenes(sceneArray, currentSelected, true)]
        : [...this.setActiveScenes(sceneArray, currentSelected, false)];
    } else {
      sceneArray.forEach(scene => (scene.isActive = false));
      currentSelected.isActive = true;
    }
    //Do not allow unselection of all the scenes
    let remainingActiveScenes = sceneArray.filter(scene => scene.isActive);
    if (remainingActiveScenes.length === 0) return;
    if (!sceneArray[this.state.currentActiveDiv - 1]?.isActive) newCurrentActiveDiv = remainingActiveScenes[0].sceneId;
    if (sceneArray[SentenceCounter - 1].recordedAudio && sceneArray[SentenceCounter - 1].recordedAudio != '') {
      AppLocalStorage.setItem('recordedAudio', sceneArray[SentenceCounter - 1].recordedAudio);
    } else if (sceneArray[SentenceCounter - 1].audioSegments && sceneArray[SentenceCounter - 1].audioSegments[0]) {
      AppLocalStorage.setItem('recordedAudio', sceneArray[SentenceCounter - 1].audioSegments[0].recordedAudio);
    } else {
      AppLocalStorage.setItem('recordedAudio', '');
    }
    scene = sceneArray[SentenceCounter - 1];

    if (scene.sceneId) {
      await this.setState({
        currentSceneId: scene.sceneId,
      });
    }

    // changeActiveDiv() should not be called for intro / outro having hideSceen = true, but if it is still called, change hideScene to false to maintain integrity
    if (scene.showSceneNumber === 'Outro Scene' || scene.showSceneNumber === 'Custom Intro Scene') {
      scene.settings.hideScene = false;
    }
    if (isCtrlPressed && isNaN(newCurrentActiveDiv)) {
      await this.setState({
        subSentencesArray: sceneArray,
      });
      return;
    }

    await this.setState(
      {
        subSentencesArray: sceneArray,
        currentActiveDiv: SentenceCounter,
        rerenderAudio: !this.state.rerenderAudio,
        closePreviewFlag: Date.now(),
      },
      () => {
        if (this.state.showAudioTrimmer) this.renderAudioTimelines();
      }
    );
  };

  reloadScene = async () => {
    const SentenceCounter = this.state.currentActiveDiv;
    let sceneArray = [...this.state.subSentencesArray];
    for (let i = 0; i < sceneArray.length; i++) {
      if (sceneArray[i].isActive) sceneArray[i].isActive = false;
    }
    if (SentenceCounter - 1 !== sceneArray.length) {
      if (sceneArray[SentenceCounter - 1]) {
        sceneArray[SentenceCounter - 1].isActive = false;
      }
    } else {
      sceneArray[0].isActive = false;
    }

    await this.setState({ subSentencesArray: sceneArray, currentActiveDiv: SentenceCounter }, async () => {
      await this.changeActiveDiv(SentenceCounter);
    });
  };

  /**
   * Save formatting and text from Text Editor
   * @param {*} SentenceCounter
   * @param {*} subSentence
   * @param {*} keywords
   * @param {*} formattingValues formatting values name value pair
   * @param {*} SceneId
   * @param {*} SubSceneId
   * @param {*} paragraphWidth
   * @param {*} applyToAll apply to all scenes except custom intro and outro
   * @param {*} keepEditorOpen
   * @param {*} isAnyChange
   * @param {*} applyToIntroOutro if tru, apply to intro and outro as well
   * @param {*} displayItemAddToAll displayItem object to be applied to all scenes
   */
  saveTextEditorValue = async (
    SentenceCounter,
    subSentence,
    keywords,
    formattingValues,
    SceneId,
    SubSceneId,
    paragraphWidth,
    applyToAll = false,
    keepEditorOpen,
    isAnyChange,
    applyToIntroOutro,
    displayItemAddToAll,
    removeLogoFromAll = false
  ) => {
    const sceneArray = [...this.state.subSentencesArray];
    const summaryArray = [...this.state.summaryJsonText];
    const scenePosition = [...this.state.scenePosition];
    if (!SubSceneId) SubSceneId = 1;
    if (formattingValues && formattingValues.fontName)
      formattingValues.FontNameForFront = CreateVideo_Step3.getFrontFontName(formattingValues.fontName);
    let isNew = false;
    let startCounter = 0;
    let endCounter = sceneArray.length - 1;
    if (!applyToAll) {
      startCounter = sceneArray.findIndex(scene => scene.sceneId === SceneId);
      endCounter = sceneArray.map(scene => scene.sceneId === SceneId).lastIndexOf(true);
    }
    keepEditorOpen = sceneArray[SentenceCounter - 1].isOpenTextEditor && keepEditorOpen; // keep editor open only if it is already open for the current scene
    let AllSubSentences = [...sceneArray[SentenceCounter - 1].AllSubSentences];
    AllSubSentences.splice(SubSceneId - 1, 1, subSentence);
    // set values to all subScenes in the scene
    for (let index = startCounter; index <= endCounter; index++) {
      if (
        (sceneArray[index].showSceneNumber == 'Outro Scene' && applyToAll && !applyToIntroOutro) ||
        (sceneArray[index].showSceneNumber == 'Custom Intro Scene' && applyToAll && !applyToIntroOutro)
      )
        continue;
      let scene = { ...sceneArray[index], isOpenTextEditor: false };
      if (applyToAll) {
        scene = { ...scene, ..._.cloneDeep(formattingValues) };
        if (displayItemAddToAll && SentenceCounter !== index + 1) {
          // copy to all scenes except the current scene
          if (!scene.displayItems) scene.displayItems = [];
          const displayItem = _.cloneDeep(displayItemAddToAll);
          displayItem.id = uuidv4();
          scene.displayItems.push(displayItem);
        }
        if (removeLogoFromAll) {
          if (scene.displayItems && scene.displayItems.length) {
            scene.displayItems = scene.displayItems.filter(di => !di.isLogo);
          }
        }
      }
      if (keywords !== undefined) scene.keywords = keywords;
      if (subSentence !== undefined) scene['AllSubSentences'] = [...AllSubSentences];
      sceneArray[index] = scene;
    }

    // set values unique to subScene
    if (!applyToAll) {
      sceneArray[SentenceCounter - 1] = { ...sceneArray[SentenceCounter - 1], ...formattingValues };
      if (subSentence !== undefined) {
        sceneArray[SentenceCounter - 1].sentence = subSentence;
        sceneArray[SentenceCounter - 1].subSentences = subSentence;
      }
      //if (paragraphWidth !== undefined) sceneArray[SentenceCounter - 1].paragraphWidth = paragraphWidth;
      sceneArray[SentenceCounter - 1].isOpenTextEditor = keepEditorOpen;

      isNew = sceneArray[SentenceCounter - 1]?.['isNew'] && !sceneArray[SentenceCounter - 1]?.['isNewSubScene'];
      if (sceneArray[SentenceCounter - 1]?.['isNew']) {
        sceneArray[SentenceCounter - 1]['isNew'] = false;
        if (
          sceneArray[SentenceCounter - 1]?.searchVisual &&
          sceneArray[SentenceCounter - 1]?.['AllSubSentences'].length === 1 &&
          subSentence &&
          keywords
        )
          this.getNewSceneImages(subSentence, sceneArray[SentenceCounter - 1].sceneId, 1, keywords);
      }
      if (formattingValues.leftCoordinate !== undefined)
        scenePosition[SentenceCounter - 1] = {
          SceneId,
          SubSceneId,
          leftCoordinate: formattingValues.leftCoordinate,
          topCoordinate: formattingValues.topCoordinate,
        };
    }

    startCounter = 0;
    endCounter = summaryArray.length - 1;
    if (!applyToAll) {
      const { index } = this.getSummaryFromGivenSubSentenceSceneId(SceneId);
      startCounter = index;
      endCounter = index;
      if (subSentence !== undefined) {
        summaryArray[index] = { ...summaryArray[index] };
        summaryArray[index].subsentences = [...summaryArray[index].subsentences];
        summaryArray[index].subsentences.splice(SubSceneId - 1, 1, subSentence);
        summaryArray[index].sentence = summaryArray[index].subsentences.join(' ');

        if (!summaryArray[index].settings.hideScene) {
          const updatedText = this.getVoiceOverText(
            (summaryArray[index].sentence &&
              summaryArray[index].sentence.replace(/<strong>/g, '').replace(/<\/strong>/g, '')) ||
              ''
          );
          this.props.getSentenceKeywordSuggestions(updatedText, this.state.scriptLanguage);
          // update timeframe
          if (
            !this.state.subSentencesArray.some(scene => scene.recordingApplyToAll) &&
            this.state.subSentencesArray[index].settings.voiceOver &&
            getSelectedVoiceOverTrack()
          ) {
            let sceneIds = this.state.durationUpdatedScenes?.sceneIds || [];
            let sceneIndices = this.state.durationUpdatedScenes?.sceneIndices || [];
            if (!sceneIds.includes(this.state.subSentencesArray[index].sceneId)) {
              sceneIds.push(this.state.subSentencesArray[index].sceneId);
              sceneIndices.push(index);
            }
            let updatedSceneDuration = this.state.durationUpdatedScenes?.updatedSceneDuration || [];
            const updatedSceneIndex = updatedSceneDuration.indexOf(this.state.subSentencesArray[index].sceneId);
            if (updatedSceneIndex >= 0) {
              updatedSceneDuration.splice(updatedSceneIndex, 1);
            }

            this.setState({
              generatedVoiceOvers: [],
              timePerFrame: updateEstimatedSceneDuration(
                updatedText,
                this.state.timePerFrame,
                index,
                this.state.speedValue,
                SceneId,
                this.state.durationUpdatedScenes.updatedSceneDuration
              ),
              durationUpdatedScenes: {
                loading: false,
                sceneIds,
                sceneIndices,
                isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
                updatedSceneDuration,
              },
            });
          }
        }
      }
      if (keywords !== undefined) summaryArray[index].keywords = keywords;
      //if (paragraphWidth !== undefined) summaryArray[index].paragraphWidth = paragraphWidth;
    }
    for (let index = startCounter; index <= endCounter; index++) {
      if (
        (summaryArray[index].sceneId == 'Outro Scene' && applyToAll && !applyToIntroOutro) ||
        (summaryArray[index].sceneId == 'Custom Intro Scene' && applyToAll && !applyToIntroOutro)
      )
        continue;
      let summary = { ...summaryArray[index] };
      summary.format = summary.format ? [...summary.format] : new Array(summary.subsentences.length).fill(null);
      if (applyToAll) {
        for (let subIndex = 0; subIndex <= summary.format.length - 1; subIndex++) {
          summary.format[subIndex] = { ...summary.format[subIndex], ...formattingValues };
          if (displayItemAddToAll && summary.sceneId != SceneId) {
            if (!summary.format[subIndex].displayItems) summary.format[subIndex].displayItems = [];
            const displayItem = _.cloneDeep(displayItemAddToAll);
            displayItem.id = uuidv4();
            summary.format[subIndex].displayItems.push(displayItem);
          }
          if (removeLogoFromAll) {
            if (summary.format[subIndex].displayItems && summary.format[subIndex].displayItems.length) {
              summary.format[subIndex].displayItems = summary.format[subIndex].displayItems.filter(di => !di.isLogo);
            }
          }
        }
      } else {
        summary.format[SubSceneId - 1] = { ...summary.format[SubSceneId - 1], ...formattingValues };
      }

      summaryArray[index] = summary;
    }

    await this.setState(
      {
        subSentencesArray: sceneArray,
        summaryJsonText: summaryArray,
        scenePosition,
        isOpenTextEditor: false,
        isAnyChange,
        isSaveTextError: false,
        saveTextNextSceneCounter: undefined,
      },
      () => {
        //this.componentWillMount_call(); // Is this call reqd here? this call overwrites the coordinates hence commented out
      }
    );
  };

  /**
   * Returns total of the segment values by summing up array of {start: 3, end: 7}. Also works on Array of Arrays like subSentenceSegments
   * @param {*} segmentsArray
   * @returns total
   */
  totalSegments = segmentsArray => {
    if (!segmentsArray) return 0;
    let total = 0;
    const arrayTotal = segmentsArray => {
      return segmentsArray.reduce((prev, current) => {
        if (!current) return prev;
        if (Array.isArray(current)) prev = arrayTotal(current); // recursive call for Array of Arrays
        let { start, end } = current;
        if (end > 0) {
          prev += parseFloat(end) - parseFloat(start);
        }
        return prev;
      }, 0);
    };

    if (Array.isArray(segmentsArray)) {
      total = arrayTotal(segmentsArray);
    }
    return parseFloat(total.toFixed(2));
  };

  insertSceneBefore = async (
    SentenceCounter,
    SceneId,
    SubSceneId,
    openEditor,
    sceneType,
    searchVisual,
    currentScene,
    brandLogo,
    isBrandIntro = false,
    isBrandOutro = false
  ) => {
    let pickValue = currentScene - 1;
    let logoImage = this.state.logoImage;
    let logoLocation = this.state.logoLocation;
    let ThemeStyles = this.state.animationTheme.getStyles();
    const updatedSceneDuration = this.state?.durationUpdatedScenes?.updatedSceneDuration || [];
    ThemeStyles.fontSize = this.getFontSizeForAspectRatio(ThemeStyles.fontSize);
    let fontName =
      this.state.brandSetting.hasOwnProperty('sceneStyle') &&
      this.state.brandSetting.sceneStyle['fontName'] !== undefined &&
      this.state.brandSetting.sceneStyle['fontName'] !== ''
        ? this.state.brandSetting.sceneStyle['fontName']
        : this.getFontNameWithWeight(ThemeStyles);
    let subSentencesArray = [...this.state.subSentencesArray];
    let imageArray = [...this.state.imageURL];
    let imageAssests = [...this.state.imageAssests];
    let summaryJsonText = [...this.state.summaryJsonText];
    var scenePositions = [...this.state.scenePosition];
    let refreshEditScene = this.state.refreshEditScene;
    let refreshAllStatement = this.state.refreshAllStatement;
    let refreshAllScenePanel = this.state.refreshAllScenePanel;
    let settings = subSentencesArray[0].settings;
    for (let i = 0; i < subSentencesArray.length; i++) {
      subSentencesArray[i].isActive = false;
    }

    let newUuid = uuidv4();
    var sceneData = {
      sentence: '',
      subSentences: '',
      sceneId: SceneId,
      subSceneId: 1,
      AllSubSentences: [''],
      keywords: [],
      isDeleted: false,
      isNew: true,
      settings: this.state.applyToAllScenes ? settings : this.state.defaultSceneSettings,
      isOpenTextEditor: openEditor,
      isActive: true,
      //"showSceneNumber": 'Scene ' + (SceneId),
      //"fontSize": subSentencesArray[pickValue] !== undefined ? subSentencesArray[pickValue].fontSize : this.state.brandSetting.hasOwnProperty('sceneStyle') && this.state.brandSetting.sceneStyle['fontSize'] !== "" && this.state.brandSetting.sceneStyle['fontSize'] !== undefined ? this.state.brandSetting.sceneStyle['fontSize'] : ThemeStyles.fontSize,
      //"fontColor": subSentencesArray[pickValue] !== undefined ? subSentencesArray[pickValue].fontColor : this.state.brandSetting.hasOwnProperty('sceneStyle') && this.state.brandSetting.sceneStyle['fontColor'] !== "" && this.state.brandSetting.sceneStyle['fontColor'] !== undefined ? this.state.brandSetting.sceneStyle['fontColor'] : ThemeStyles.fontColor,
      backgroundColor: DEFAULT_BG_COLOR,
      //"textBackgroundColor": subSentencesArray[pickValue] !== undefined ? subSentencesArray[pickValue].textBackgroundColor : this.state.brandSetting.hasOwnProperty('sceneStyle') && this.state.brandSetting.sceneStyle['textBackgroundColor'] !== "" && this.state.brandSetting.sceneStyle['textBackgroundColor'] !== undefined ? this.state.brandSetting.sceneStyle['textBackgroundColor'] : ThemeStyles.textBackgroundColor,
      //"keywordColor": subSentencesArray[pickValue] !== undefined ? subSentencesArray[pickValue].keywordColor : this.state.brandSetting.hasOwnProperty('sceneStyle') && this.state.brandSetting.sceneStyle['keywordColor'] !== "" && this.state.brandSetting.sceneStyle['keywordColor'] !== undefined ? this.state.brandSetting.sceneStyle['keywordColor'] : ThemeStyles.keywordColor,
      showLogo:
        subSentencesArray[pickValue] !== undefined
          ? subSentencesArray[pickValue].showLogo
          : this.state.brandSetting.hasOwnProperty('sceneStyle') &&
            this.state.brandSetting.sceneStyle['showLogo'] !== '' &&
            this.state.brandSetting.sceneStyle['showLogo'] !== undefined
          ? this.state.brandSetting.sceneStyle['showLogo']
          : false,
      logoImage: logoImage,
      logoLocation: logoLocation,
      //"fontName": subSentencesArray[pickValue] !== undefined ? subSentencesArray[pickValue].fontName : fontName,
      //"FontNameForFront": CreateVideo_Step3.getFrontFontName(fontName),
      searchVisual,
      sceneType,
      uuid: newUuid,
    };

    let textFormat = {};
    let newDisplayItem;
    let sceneIds = this.state.durationUpdatedScenes?.sceneIds || [];
    let sceneIndices = this.state.durationUpdatedScenes?.sceneIndices || [];
    this.copyTextFormatting(subSentencesArray[pickValue], textFormat, {}, false, ['displayItems']);
    newDisplayItem = this.ExtractTextFormatFromBrand(textFormat, newDisplayItem);
    if (brandLogo) {
      newDisplayItem = this.createBrandLogoDisplayElement(brandLogo);
    }
    sceneData = { ...sceneData, ...textFormat };

    if (newDisplayItem) {
      sceneData.displayItems = [];
      sceneData.displayItems.push(newDisplayItem);
    }

    if (isBrandIntro) {
      sceneData.isBrandIntro = true;
    }
    if (isBrandOutro) {
      sceneData.isBrandOutro = true;
    }

    // this.setState({
    // 	currentSceneId: SceneId
    // })

    subSentencesArray.splice(pickValue, 0, sceneData);
    const timePerFrame = [...this.state.timePerFrame];
    timePerFrame.splice(pickValue, 0, 5); // add default 5 sec on new insert
    sceneIndices.push(SentenceCounter);
    sceneIds.push(sceneData.sceneId);

    let sceneIdChanges = {};
    let lastSceneId = SceneId;
    subSentencesArray = subSentencesArray.map((row, index) => {
      if (index < pickValue) return row;
      if (index === pickValue) {
        sceneIdChanges[row.sceneId] = row.sceneId + 1;
        return row;
      }
      const previousSceneId = row.sceneId;
      if (row.subSceneId > 1) row.sceneId = lastSceneId;
      else {
        row.sceneId = lastSceneId + 1;
        sceneIdChanges[previousSceneId] = row.sceneId;
        lastSceneId = row.sceneId;
      }
      return row;
    });

    this.setShowSceneNumbersInSceneArray(summaryJsonText, subSentencesArray, SentenceCounter - 1);

    imageArray.splice(SentenceCounter - 1, 0, '');
    imageAssests.splice(SentenceCounter - 1, 0, { url: '', thumb: '', large: '' });
    scenePositions = scenePositions.map(row => {
      if (row && sceneIdChanges[row.SceneId]) row.SceneId = sceneIdChanges[row.SceneId];
      return row;
    });

    var summaryData = {
      sentence: '',
      keywords: [],
      type: 'summary',
      image: '',
      subsentences: [''],
      settings: this.state.applyToAllScenes ? settings : this.state.defaultSceneSettings,
      showLogo: subSentencesArray[SentenceCounter - 1].showLogo,
      logoImage: logoImage,
      logoLocation: logoLocation,
      //"fontSize": subSentencesArray[SentenceCounter - 1].fontSize,
      //"fontColor": subSentencesArray[SentenceCounter - 1].fontColor,
      backgroundColor: DEFAULT_BG_COLOR,
      //"textBackgroundColor": subSentencesArray[SentenceCounter - 1].textBackgroundColor,
      //"keywordColor": subSentencesArray[SentenceCounter - 1].keywordColor,
      //"fontName": subSentencesArray[SentenceCounter - 1].fontName,
      //"FontNameForFront": CreateVideo_Step3.getFrontFontName(subSentencesArray[SentenceCounter - 1].fontName),
      uuid: 'scene_' + newUuid,
      uuidArray: [newUuid],
    };

    summaryData.format = [textFormat];

    if (newDisplayItem) {
      let summaryFormat = summaryData.format;
      for (let i = 0; i < summaryFormat.length; i++) {
        let format = summaryFormat[i];
        format.displayItems = [];
        format.displayItems.push(newDisplayItem);
        summaryFormat[i] = format;
      }
      summaryData.format = summaryFormat;
    }

    if (isBrandIntro) {
      summaryData.isBrandIntro = true;
    }
    if (isBrandOutro) {
      summaryData.isBrandOutro = true;
    }

    summaryJsonText.splice(SentenceCounter - 1, 0, summaryData);
    summaryJsonText = summaryJsonText.map((row, index) => {
      if (row.sceneId == 'Outro Scene' || row.sceneId == 'Custom Intro Scene') return row;
      row.sceneId = index + 1;
      const updatedIndex = updatedSceneDuration.indexOf(row.sceneId);
      row.sceneId = index + 1;
      if (updatedIndex >= 0) {
        updatedSceneDuration[updatedIndex] = row.sceneId;
      }
      return row;
    });

    let totalLength = subSentencesArray.length;

    const newState = {
      timePerFrame,
      scenePosition: scenePositions,
      totalSentencesWithSubScenes: totalLength,
      subSentencesArray: subSentencesArray,
      imageURL: imageArray,
      imageAssests,
      summaryJsonText: summaryJsonText,
      refreshEditScene: !refreshEditScene,
      refreshAllStatement: !refreshAllStatement,
      refreshAllScenePanel: !refreshAllScenePanel,
      refreshAfterAddSceneBefore: !this.state.refreshAfterAddSceneBefore,
      isOpenTextEditor: openEditor,
      isAnyChange: !openEditor,
      durationUpdatedScenes: {
        loading: false,
        sceneIds,
        sceneIndices,
        isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
        updatedSceneDuration,
      },
    };

    await this.setState(newState);
    // this.reloadScene();
  };
  ExtractTextFormatFromBrand(textFormat, newDisplayItem) {
    let brand = this.props?.userBrands?.find(x => x.id == this.state.brandId);
    if (brand) {
      let color = brand?.colorList?.find(x => x.isDefault);
      let textBackgroundColor = color?.textBackgroundColor;
      let fontColor = color?.fontColor;
      let keywordColor = color?.keywordColor;
      let brandFont = brand?.fontList?.[0]?.fontName;
      let brandFontSize = brand?.fontSizeList?.[0]?.fontSize;
      let defaultLogo = brand?.logoList?.find(x => x.isDefault == true);
      let brandBrightness;
      let brandBackgroundColor;
      let brandTextColor;
      let brandHighlightColor;
      if (color && textBackgroundColor) {
        let brightness = lightOrDark(textBackgroundColor);
        if (!fontColor) {
          fontColor = brightness == 'dark' ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)';
        }
        if (!keywordColor) {
          keywordColor = invertRGBAColor(textBackgroundColor);
        }
      }
      if (textBackgroundColor) {
        textFormat.fontColor = fontColor;
        textFormat.textBackgroundColor = textBackgroundColor;
        textFormat.keywordColor = keywordColor;
      }
      if (brandFont) {
        textFormat.fontName = brandFont;
        textFormat.FontNameForFront = CreateVideo_Step3.getFrontFontName(brandFont);
      }
      if (brandFontSize) {
        textFormat.fontSize = parseInt(brandFontSize);
      }
      delete textFormat.styleIdObj;
      if (defaultLogo) {
        newDisplayItem = this.createBrandLogoDisplayElement(defaultLogo);
      }
    }
    return newDisplayItem;
  }

  //add new scene

  InsertNewScene = async (
    SentenceCounter,
    SceneId,
    SubSceneId,
    openEditor,
    sceneType,
    searchVisual,
    brandLogo,
    isBrandIntro = false,
    isBrandOutro = false
  ) => {
    let pickValue = SentenceCounter - 1;
    let logoImage = this.state.logoImage;
    let logoLocation = this.state.logoLocation;
    let refreshEditScene = this.state.refreshEditScene;
    let refreshAllStatement = this.state.refreshAllStatement;
    let refreshAllScenePanel = this.state.refreshAllScenePanel;
    let ThemeStyles = this.state.animationTheme.getStyles();
    const updatedSceneDuration = this.state?.durationUpdatedScenes?.updatedSceneDuration || [];
    ThemeStyles.fontSize = this.getFontSizeForAspectRatio(ThemeStyles.fontSize);
    let fontName =
      this.state.brandSetting.hasOwnProperty('sceneStyle') &&
      this.state.brandSetting.sceneStyle['fontName'] !== undefined &&
      this.state.brandSetting.sceneStyle['fontName'] !== ''
        ? this.state.brandSetting.sceneStyle['fontName']
        : this.getFontNameWithWeight(ThemeStyles);

    let subSentencesArray = [...this.state.subSentencesArray];
    let imageArray = [...this.state.imageURL];
    let imageAssests = [...this.state.imageAssests];
    let summaryJsonText = [...this.state.summaryJsonText];
    var scenePositions = [...this.state.scenePosition];

    // if (pickValue === 0) {
    //   pickValue = SentenceCounter;
    // }
    let settings = subSentencesArray[0].settings;
    for (let i = 0; i < subSentencesArray.length; i++) {
      subSentencesArray[i].isActive = false;
    }

    let newUuid = uuidv4();
    var sceneData = {
      sentence: '',
      subSentences: '',
      sceneId: SceneId + 1,
      subSceneId: 1,
      AllSubSentences: [''],
      keywords: [],
      isDeleted: false,
      isNew: true,
      settings: this.state.applyToAllScenes ? settings : this.state.defaultSceneSettings,
      isOpenTextEditor: openEditor,
      isActive: true,
      //"showSceneNumber": 'Scene ' + (SceneId + 1),
      //"fontSize": subSentencesArray[pickValue] !== undefined ? subSentencesArray[pickValue].fontSize : this.state.brandSetting.hasOwnProperty('sceneStyle') && this.state.brandSetting.sceneStyle['fontSize'] !== "" && this.state.brandSetting.sceneStyle['fontSize'] !== undefined ? this.state.brandSetting.sceneStyle['fontSize'] : ThemeStyles.fontSize,
      //"fontColor": subSentencesArray[pickValue] !== undefined ? subSentencesArray[pickValue].fontColor : this.state.brandSetting.hasOwnProperty('sceneStyle') && this.state.brandSetting.sceneStyle['fontColor'] !== "" && this.state.brandSetting.sceneStyle['fontColor'] !== undefined ? this.state.brandSetting.sceneStyle['fontColor'] : ThemeStyles.fontColor,
      backgroundColor: DEFAULT_BG_COLOR,
      //"textBackgroundColor": subSentencesArray[pickValue] !== undefined ? subSentencesArray[pickValue].textBackgroundColor : this.state.brandSetting.hasOwnProperty('sceneStyle') && this.state.brandSetting.sceneStyle['textBackgroundColor'] !== "" && this.state.brandSetting.sceneStyle['textBackgroundColor'] !== undefined ? this.state.brandSetting.sceneStyle['textBackgroundColor'] : ThemeStyles.textBackgroundColor,
      //"keywordColor": subSentencesArray[pickValue] !== undefined ? subSentencesArray[pickValue].keywordColor : this.state.brandSetting.hasOwnProperty('sceneStyle') && this.state.brandSetting.sceneStyle['keywordColor'] !== "" && this.state.brandSetting.sceneStyle['keywordColor'] !== undefined ? this.state.brandSetting.sceneStyle['keywordColor'] : ThemeStyles.keywordColor,
      showLogo:
        subSentencesArray[pickValue] !== undefined
          ? subSentencesArray[pickValue].showLogo
          : this.state.brandSetting.hasOwnProperty('sceneStyle') &&
            this.state.brandSetting.sceneStyle['showLogo'] !== '' &&
            this.state.brandSetting.sceneStyle['showLogo'] !== undefined
          ? this.state.brandSetting.sceneStyle['showLogo']
          : false,
      logoImage: logoImage,
      logoLocation: logoLocation,
      //"fontName": subSentencesArray[pickValue] !== undefined ? subSentencesArray[pickValue].fontName : fontName,
      //"FontNameForFront": CreateVideo_Step3.getFrontFontName(fontName),
      searchVisual,
      sceneType,
      uuid: newUuid,
    };
    let textFormat = {};
    let newDisplayItem;
    let sceneIds = this.state.durationUpdatedScenes?.sceneIds || [];
    let sceneIndices = this.state.durationUpdatedScenes?.sceneIndices || [];
    this.copyTextFormatting(subSentencesArray[pickValue], textFormat, {}, false, ['displayItems']);
    newDisplayItem = this.ExtractTextFormatFromBrand(textFormat, newDisplayItem);
    if (brandLogo) {
      newDisplayItem = this.createBrandLogoDisplayElement(brandLogo);
    }
    sceneData = { ...sceneData, ...textFormat };

    if (newDisplayItem) {
      sceneData.displayItems = [];
      sceneData.displayItems.push(newDisplayItem);
    }

    if (isBrandIntro) {
      sceneData.isBrandIntro = true;
    }
    if (isBrandOutro) {
      sceneData.isBrandOutro = true;
    }

    this.setState({
      currentSceneId: SceneId + 1,
    });
    subSentencesArray.splice(SentenceCounter, 0, sceneData);
    const timePerFrame = [...this.state.timePerFrame];
    timePerFrame.splice(SentenceCounter, 0, 5); // add default 5 sec on new insert
    sceneIndices.push(SentenceCounter);
    sceneIds.push(sceneData.sceneId);

    let sceneIdChanges = {};
    let lastSceneId = SceneId;
    subSentencesArray = subSentencesArray.map((row, index) => {
      if (index < SentenceCounter) return row;
      const previousSceneId = row.sceneId;
      if (row.subSceneId > 1) row.sceneId = lastSceneId;
      else {
        row.sceneId = lastSceneId + 1;
        sceneIdChanges[previousSceneId] = row.sceneId;
        lastSceneId = row.sceneId;
      }
      return row;
    });

    this.setShowSceneNumbersInSceneArray(summaryJsonText, subSentencesArray, SentenceCounter);

    imageArray.splice(SceneId, 0, '');
    imageAssests.splice(SceneId, 0, { url: '', thumb: '', large: '' });
    scenePositions = scenePositions.map(row => {
      if (row && sceneIdChanges[row.SceneId]) row.SceneId = sceneIdChanges[row.SceneId];
      return row;
    });

    var summaryData = {
      sentence: '',
      keywords: [],
      type: 'summary',
      image: '',
      subsentences: [''],
      settings: this.state.applyToAllScenes ? settings : this.state.defaultSceneSettings,
      showLogo: subSentencesArray[SentenceCounter - 1].showLogo,
      logoImage: logoImage,
      logoLocation: logoLocation,
      //"fontSize": subSentencesArray[SentenceCounter - 1].fontSize,
      //"fontColor": subSentencesArray[SentenceCounter - 1].fontColor,
      backgroundColor: DEFAULT_BG_COLOR,
      //"textBackgroundColor": subSentencesArray[SentenceCounter - 1].textBackgroundColor,
      //"keywordColor": subSentencesArray[SentenceCounter - 1].keywordColor,
      //"fontName": subSentencesArray[SentenceCounter - 1].fontName,
      //"FontNameForFront": CreateVideo_Step3.getFrontFontName(subSentencesArray[SentenceCounter - 1].fontName),
      settings: this.state.applyToAllScenes ? settings : this.state.defaultSceneSettings,
      uuid: 'scene_' + newUuid,
      uuidArray: [newUuid],
    };
    summaryData.format = [textFormat];
    if (newDisplayItem) {
      let summaryFormat = summaryData.format;
      for (let i = 0; i < summaryFormat.length; i++) {
        let format = summaryFormat[i];
        format.displayItems = [];
        format.displayItems.push(newDisplayItem);
        summaryFormat[i] = format;
      }
      summaryData.format = summaryFormat;
    }

    if (isBrandIntro) {
      summaryData.isBrandIntro = true;
    }
    if (isBrandOutro) {
      summaryData.isBrandOutro = true;
    }
    summaryJsonText.splice(SceneId, 0, summaryData);
    summaryJsonText = summaryJsonText.map((row, index) => {
      if (row.sceneId == 'Outro Scene' || row.sceneId == 'Custom Intro Scene') return row;
      const updatedIndex = updatedSceneDuration.indexOf(row.sceneId);
      row.sceneId = index + 1;
      if (updatedIndex >= 0) {
        updatedSceneDuration[updatedIndex] = row.sceneId;
      }
      return row;
    });

    let totalLength = subSentencesArray.length;

    const newState = {
      timePerFrame,
      scenePosition: scenePositions,
      totalSentencesWithSubScenes: totalLength,
      subSentencesArray: subSentencesArray,
      imageURL: imageArray,
      imageAssests,
      summaryJsonText: summaryJsonText,
      refreshEditScene: !refreshEditScene,
      refreshAllStatement: !refreshAllStatement,
      refreshAllScenePanel: !refreshAllScenePanel,
      currentActiveDiv: this.state.currentActiveDiv + 1,
      isOpenTextEditor: openEditor,
      isAnyChange: !openEditor,
      durationUpdatedScenes: {
        loading: false,
        sceneIds,
        sceneIndices,
        isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
        updatedSceneDuration,
      },
    };

    await this.setState(newState);
  };

  /**
   * Insert subscene / linked scene
   * @param {*} SentenceCounter
   * @param {*} SceneId
   * @param {*} SubSceneId
   * @param {*} startUpdateSceneId
   * @param {*} endUpdateSceneId
   */
  insertSubsceneBefore = (SentenceCounter, SceneId, SubSceneId) => {
    let sceneArray = [...this.state.subSentencesArray];
    let summaryArray = [...this.state.summaryJsonText];
    let logoImage = this.state.logoImage;
    let logoLocation = this.state.logoLocation;
    let refreshEditScene = this.state.refreshEditScene;
    let refreshAllStatement = this.state.refreshAllStatement;
    let refreshAllScenePanel = this.state.refreshAllScenePanel;
    let AllSubSentences = sceneArray[SentenceCounter - 1].AllSubSentences;
    AllSubSentences.splice(SubSceneId - 1, 0, '');
    let settings = {};
    for (let i = 0; i < sceneArray.length; i++) {
      if (sceneArray[i].isActive) {
        sceneArray[i] = { ...sceneArray[i], isActive: false };
      }
      if (sceneArray[i].sceneId == SceneId) {
        settings = sceneArray[i].settings;
        sceneArray[i].AllSubSentences = [...AllSubSentences];
      }
    }
    let newUuid = uuidv4();
    var sceneData = {
      sentence: '',
      subSentences: '',
      sceneId: SceneId,
      subSceneId: SubSceneId,
      AllSubSentences: [...AllSubSentences],
      keywords: [...sceneArray[SentenceCounter - 1].keywords],
      isDeleted: false,
      isNew: true,
      isOpenTextEditor: true,
      settings: !_.isEmpty(settings) ? { ...settings } : { ...this.state.defaultSceneSettings },
      isNewSubScene: true,
      isActive: true,
      showLogo: sceneArray[SentenceCounter - 1].showLogo,
      logoImage: logoImage,
      logoLocation: logoLocation,
      uuid: newUuid,
    };
    let { summary, index } = this.getSummaryFromGivenSubSentenceSceneId(SceneId);
    let textFormat = {};
    let newDisplayItem;
    this.copyTextFormatting(sceneArray[SentenceCounter - 1], textFormat, {}, false, ['displayItems']);
    newDisplayItem = this.ExtractTextFormatFromBrand(textFormat, newDisplayItem);
    sceneData = { ...sceneData, ...textFormat };

    if (newDisplayItem) {
      sceneData.displayItems = [];
      sceneData.displayItems.push(newDisplayItem);
    }
    summaryArray[index] = { ...summary, format: [...summary.format] };
    if (newDisplayItem) {
      textFormat.displayItems = [];
      textFormat.displayItems.push(newDisplayItem);
    }
    summaryArray[index].format.splice(SubSceneId - 1, 0, textFormat);
    summaryArray[index].uuidArray.splice(SubSceneId - 1, 0, newUuid);
    sceneData = { ...sceneData, ...textFormat };
    summaryArray[index].subsentences = [...AllSubSentences];
    sceneArray.splice(SentenceCounter - 1, 0, sceneData);
    const timePerFrame = [...this.state.timePerFrame];
    timePerFrame.splice(SentenceCounter - 1, 0, 5); // add default 5 sec on new insert

    let newSubSceneId = 1;
    for (let i = 0; i < sceneArray.length; i++) {
      if (sceneArray[i].sceneId === SceneId) {
        sceneArray[i].subSceneId = newSubSceneId;
        newSubSceneId++;
      }
    }

    this.setShowSceneNumbersInSceneArray(this.state.summaryJsonText, sceneArray, SentenceCounter - 1);

    this.setState({
      timePerFrame,
      subSentencesArray: sceneArray,
      summaryJsonText: summaryArray,
      refreshEditScene: !refreshEditScene,
      refreshAllStatement: !refreshAllStatement,
      refreshAllScenePanel: !refreshAllScenePanel,
    });
  };

  /**
   * Insert subscene / linked scene
   * @param {*} SentenceCounter
   * @param {*} SceneId
   * @param {*} SubSceneId
   * @param {*} startUpdateSceneId
   * @param {*} endUpdateSceneId
   */
  InsertNewSubScene = async (SentenceCounter, SceneId, SubSceneId) => {
    let sceneArray = [...this.state.subSentencesArray];
    let summaryArray = [...this.state.summaryJsonText];
    let logoImage = this.state.logoImage;
    let logoLocation = this.state.logoLocation;
    let refreshEditScene = this.state.refreshEditScene;
    let refreshAllStatement = this.state.refreshAllStatement;
    let refreshAllScenePanel = this.state.refreshAllScenePanel;

    var AllSubSentences = sceneArray[SentenceCounter - 1].AllSubSentences;
    AllSubSentences.splice(SubSceneId, 0, '');
    let settings = {};
    for (let i = 0; i < sceneArray.length; i++) {
      if (sceneArray[i].isActive) {
        sceneArray[i] = { ...sceneArray[i], isActive: false };
      }
      if (sceneArray[i].sceneId == SceneId) {
        settings = sceneArray[i].settings;
        sceneArray[i].AllSubSentences = [...AllSubSentences];
      }
    }

    let newUuid = uuidv4();
    var sceneData = {
      sentence: '',
      subSentences: '',
      sceneId: SceneId,
      subSceneId: SubSceneId + 1,
      AllSubSentences: [...AllSubSentences],
      keywords: [...sceneArray[SentenceCounter - 1].keywords],
      isDeleted: false,
      isNew: true,
      isOpenTextEditor: true,
      settings: !_.isEmpty(settings) ? { ...settings } : { ...this.state.defaultSceneSettings },
      isNewSubScene: true,
      isActive: true,
      showLogo: sceneArray[SentenceCounter - 1].showLogo,
      logoImage: logoImage,
      logoLocation: logoLocation,
      uuid: newUuid,
    };
    let { summary, index } = this.getSummaryFromGivenSubSentenceSceneId(SceneId);
    let textFormat = {};
    let newDisplayItem;
    this.copyTextFormatting(sceneArray[SentenceCounter - 1], textFormat, {}, false, ['displayItems']);
    newDisplayItem = this.ExtractTextFormatFromBrand(textFormat, newDisplayItem);
    sceneData = { ...sceneData, ...textFormat };

    if (newDisplayItem) {
      sceneData.displayItems = [];
      sceneData.displayItems.push(newDisplayItem);
    }
    summaryArray[index] = { ...summary, format: [...summary.format] };
    if (newDisplayItem) {
      textFormat.displayItems = [];
      textFormat.displayItems.push(newDisplayItem);
    }
    summaryArray[index].format.splice(SubSceneId, 0, textFormat);
    summaryArray[index].uuidArray.splice(SubSceneId, 0, newUuid);
    sceneData = { ...sceneData, ...textFormat };
    summaryArray[index].subsentences = [...AllSubSentences];

    sceneArray.splice(SentenceCounter, 0, sceneData);
    const timePerFrame = [...this.state.timePerFrame];
    timePerFrame.splice(SentenceCounter, 0, 5); // add default 5 sec on new insert

    let newSubSceneId = 1;
    for (let i = 0; i < sceneArray.length; i++) {
      if (sceneArray[i].sceneId === SceneId) {
        sceneArray[i].subSceneId = newSubSceneId;
        newSubSceneId++;
      }
    }

    this.setShowSceneNumbersInSceneArray(this.state.summaryJsonText, sceneArray, SentenceCounter - 1);

    await this.setState({
      timePerFrame,
      subSentencesArray: sceneArray,
      summaryJsonText: summaryArray,
      refreshEditScene: !refreshEditScene,
      refreshAllStatement: !refreshAllStatement,
      refreshAllScenePanel: !refreshAllScenePanel,
      currentActiveDiv: this.state.currentActiveDiv + 1,
    });
  };

  /**
   * Move scene including sub-scenes from old counter position to new position - the sceneId values are from subSentencesArray
   * @param {*} srcSceneId
   * @param {*} destSceneId
   */
  reorderScene = (srcSceneId, destSceneId) => {
    // if scene moved downward, insert it after the destSceneId, else insert it before the destSceneId
    let isDownwardShift = destSceneId > srcSceneId ? true : false;
    let subSentencesArray = [...this.state.subSentencesArray];
    let imageArray = [...this.state.imageURL];
    let imageAssests = [...this.state.imageAssests];
    let summaryArray = [...this.state.summaryJsonText];
    const timePerFrame = [...this.state.timePerFrame];
    let scenePositions = [...this.state.scenePosition];

    const activeDivUuid = subSentencesArray[this.state.currentActiveDiv - 1]?.uuid;
    const srcSummaryResult = this.getSummaryFromGivenSubSentenceSceneId(srcSceneId);
    let srcSummaryIndex = srcSummaryResult.index;
    let destSummaryResult = this.getSummaryFromGivenSubSentenceSceneId(destSceneId);
    let destSummaryIndex = destSummaryResult.index;
    let start = isDownwardShift ? srcSummaryIndex : destSummaryIndex;
    let end = isDownwardShift ? destSummaryIndex : srcSummaryIndex;
    let summarySceneId = summaryArray[start].sceneId;
    // subtract 1 from dest when the item is moved downward for splice fn
    summaryArray.splice(srcSummaryIndex, 1);
    summaryArray.splice(destSummaryIndex, 0, srcSummaryResult.summary);
    for (let i = start; i <= end; i++) {
      // renumber sceneId between (and including) source and destination elements
      summaryArray[i].sceneId = summarySceneId;
      summarySceneId++;
    }

    const imageUrl = imageArray[srcSummaryIndex];
    imageArray.splice(srcSummaryIndex, 1);
    imageArray.splice(destSummaryIndex, 0, imageUrl);

    const imageAsset = imageAssests[srcSummaryIndex];
    imageAssests.splice(srcSummaryIndex, 1);
    imageAssests.splice(destSummaryIndex, 0, imageAsset);

    let srcSubsentenceIndex = subSentencesArray.findIndex(scene => scene.sceneId === srcSceneId);
    let destSubsentenceIndex = subSentencesArray.findIndex(scene => scene.sceneId === destSceneId);
    // add dest subscene count count to dest when the item is moved downward
    if (destSubsentenceIndex > srcSubsentenceIndex)
      destSubsentenceIndex = destSubsentenceIndex + destSummaryResult.summary.subsentences.length;
    const srcSubscenesArray = subSentencesArray.slice(
      srcSubsentenceIndex,
      srcSubsentenceIndex + srcSummaryResult.summary.subsentences.length
    );
    start = isDownwardShift ? srcSubsentenceIndex : destSubsentenceIndex;
    end = isDownwardShift ? destSubsentenceIndex : srcSubsentenceIndex + srcSubscenesArray.length;
    //end = srcSubsentenceIndex < destSubsentenceIndex ? (destSubsentenceIndex + srcSubscenesArray.length) : (srcSubsentenceIndex + srcSubscenesArray.length);
    let subsentenceSceneId = subSentencesArray[start].sceneId;
    // subtract srcSubscenesArray count from dest when the item is moved downward, only for splice fn
    if (destSubsentenceIndex > srcSubsentenceIndex)
      destSubsentenceIndex = destSubsentenceIndex - srcSubscenesArray.length;
    subSentencesArray.splice(srcSubsentenceIndex, srcSubscenesArray.length);
    subSentencesArray.splice(destSubsentenceIndex, 0, ...srcSubscenesArray);

    let srcScenePositionArray;
    if (scenePositions && scenePositions.length > 0) {
      srcScenePositionArray = scenePositions.slice(srcSubsentenceIndex, srcSubsentenceIndex + srcSubscenesArray.length);
      scenePositions.splice(srcSubsentenceIndex, srcSubscenesArray.length);
      scenePositions.splice(destSubsentenceIndex, 0, ...srcScenePositionArray);
    }

    for (let i = start; i < end; i++) {
      // renumber sceneId between (and including) source and destination elements
      if (i !== start && subSentencesArray[i].subSceneId === 1) subsentenceSceneId++;
      subSentencesArray[i].sceneId = subsentenceSceneId;
      if (scenePositions[i]) {
        scenePositions[i].SceneId = subSentencesArray[i].sceneId;
        scenePositions[i].SubSceneId = subSentencesArray[i].subSceneId;
      }
    }
    let sceneDurationArray = timePerFrame.slice(srcSubsentenceIndex, srcSubsentenceIndex + srcSubscenesArray.length);
    let sceneIds = this.state.durationUpdatedScenes?.sceneIds || [];
    let sceneIndices = this.state.durationUpdatedScenes?.sceneIndices || [];
    let updatedSceneDurationIds = this.state.durationUpdatedScenes?.updatedSceneDuration || [];
    timePerFrame.splice(srcSubsentenceIndex, srcSubscenesArray.length);
    timePerFrame.splice(destSubsentenceIndex, 0, ...sceneDurationArray);
    const srcSceneIdIndex = sceneIndices.indexOf(srcSubsentenceIndex);
    const desSceneIdIndex = sceneIndices.indexOf(destSubsentenceIndex);

    if (sceneIds.includes(srcSceneId)) {
      sceneIndices[srcSceneIdIndex] = destSubsentenceIndex;
    } else {
      sceneIds.push(srcSceneId);
    }

    let durationUpdatedSrcSceneIndex = updatedSceneDurationIds.indexOf(srcSceneId);
    let durationUpdatedDestSceneIndex = updatedSceneDurationIds.indexOf(destSceneId);
    if (durationUpdatedSrcSceneIndex >= 0) {
      updatedSceneDurationIds[durationUpdatedSrcSceneIndex] = destSceneId;
    }
    if (durationUpdatedDestSceneIndex >= 0) {
      updatedSceneDurationIds[durationUpdatedDestSceneIndex] = srcSceneId;
    }

    if (sceneIds.includes(destSceneId)) {
      sceneIndices[desSceneIdIndex] = srcSubsentenceIndex;
    } else {
      sceneIds.push(destSceneId);
    }

    if (!sceneIndices.includes(srcSubsentenceIndex)) {
      sceneIndices.push(srcSubsentenceIndex);
    }

    if (!sceneIndices.includes(destSubsentenceIndex)) {
      sceneIndices.push(destSubsentenceIndex);
    }
    this.setShowSceneNumbersInSceneArray(summaryArray, subSentencesArray);
    let setActiveDivReorder = subSentencesArray.findIndex(item => item.uuid == activeDivUuid) + 1;
    this.setState(
      {
        subSentencesArray,
        imageURL: imageArray,
        imageAssests,
        summaryJsonText: summaryArray,
        timePerFrame,
        scenePosition: scenePositions,
        isAnyChange: true,
        setActiveDivReorder,
        durationUpdatedScenes: {
          loading: false,
          sceneIds,
          sceneIndices,
          isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
          updatedSceneDuration: this.state?.durationUpdatedScenes?.updatedSceneDuration || [],
        },
      },
      () => {
        if (this.state.setActiveDivReorder && this.state.currentActiveDiv != this.state.setActiveDivReorder) {
          this.changeActiveDiv(this.state.setActiveDivReorder);
          this.setState({ setActiveDivReorder: undefined });
        }
      }
    );
  };

  //delete complete scene
  DeleteMultipleScenes = () => {
    let sceneArray = [...this.state.subSentencesArray];
    let imageArray = [...this.state.imageURL];
    let imageAssests = [...this.state.imageAssests];
    let summaryArray = [...this.state.summaryJsonText];
    let timePerFrame = [...this.state.timePerFrame];
    let scenePosition;
    let durationUpdatedScenes = {};
    let activeSceneIndex = 0;
    const scenesToDelete = sceneArray.filter(scene => scene.isActive);
    if (sceneArray.length === scenesToDelete.length || sceneArray.length === 1) return; //Can't allow all the scenes to be deleted.
    scenesToDelete.forEach(scene => {
      const { sceneId, subSceneId, AllSubSentences, uuid } = scene;
      if (scene.AllSubSentences.length > 1) {
        let lastScene = AllSubSentences.length - subSceneId;
        if (lastScene > 0) lastScene += sceneId;
        const {
          sceneArray: scenesList,
          summaryArray: summaryList,
          activeSceneIndex: activeScene,
          durationUpdatedScenes: newSceneDurations,
          timePerFrame: frameDurationList,
        } = this.DeleteSubScene(lastScene, sceneArray, summaryArray, timePerFrame, uuid);
        sceneArray = [...scenesList];
        summaryArray = [...summaryList];
        activeSceneIndex = activeScene;
        durationUpdatedScenes = { ...durationUpdatedScenes, ...newSceneDurations };
        timePerFrame = [...frameDurationList];
      } else {
        const {
          sceneArray: scenesList,
          scenePositions: positions,
          imageArray: imgList,
          summaryArray: summaryList,
          imageAssests: imgAssestsList,
          activeSceneIndex: activeScene,
          durationUpdatedScenes: newSceneDurations,
          timePerFrame: frameDurationList,
        } = this.DeleteCompleteScene(
          sceneArray,
          imageArray,
          imageAssests,
          summaryArray,
          timePerFrame,
          durationUpdatedScenes,
          uuid
        );
        sceneArray = [...scenesList];
        summaryArray = [...summaryList];
        imageArray = [...imgList];
        imageAssests = [...imgAssestsList];
        activeSceneIndex = activeScene;
        durationUpdatedScenes = { ...durationUpdatedScenes, ...newSceneDurations };
        timePerFrame = [...frameDurationList];
        scenePosition = [...positions];
      }
    });
    if (sceneArray.length >= 1 && activeSceneIndex === 0) activeSceneIndex = 1;
    const newState = {
      totalSentencesWithSubScenes: sceneArray.length,
      subSentencesArray: sceneArray,
      imageURL: imageArray,
      summaryJsonText: summaryArray,
      refreshEditScene: !this.state.refreshEditScene,
      refreshAllStatement: !this.state.refreshAllStatement,
      refreshAllScenePanel: !this.state.refreshAllScenePanel,
      imageAssests,
      isAnyChange: true,
      currentActiveDiv: !isNaN(activeSceneIndex) ? activeSceneIndex : 1,
      durationUpdatedScenes,
      timePerFrame,
    };
    if (scenePosition) newState.scenePosition = scenePosition;

    this.setState(newState);
  };

  DeleteCompleteScene(sceneArr, imageArr, imgAssests, summaryArr, durationsList, currentSceneDurations, uuid) {
    let sceneArray = [...sceneArr];
    let imageArray = [...imageArr];
    let imageAssests = [...imgAssests];
    let summaryArray = [...summaryArr];
    if (sceneArray.length === 1) return; // dont delete if only 1 scene exists
    const deletionIndex = sceneArray.findIndex(scene => scene.uuid === uuid);
    const sceneRow = sceneArray[deletionIndex];
    const deletedSceneId = sceneArray[deletionIndex].sceneId;
    let updatedSceneIds = this.state.durationUpdatedScenes?.updatedSceneDuration || [];
    imageArray.splice(sceneRow.sceneId - 1, 1);
    imageAssests.splice(sceneRow.sceneId - 1, 1);
    summaryArray.splice(sceneRow.sceneId - 1, 1);
    updatedSceneIds = updatedSceneIds
      .filter(sceneId => sceneId !== deletedSceneId)
      .map(updatedSceneId => (updatedSceneId > deletedSceneId ? updatedSceneId - 1 : updatedSceneId));

    summaryArray = summaryArray.map((row, index) => {
      if (row.sceneId == 'Outro Scene' || row.sceneId == 'Custom Intro Scene') return row;

      row.sceneId = index + 1;
      return row;
    });

    let sceneIdChanges = {};
    let lastSceneId = sceneRow.sceneId;

    let scenePositions = [...this.state.scenePosition].filter(row => {
      return !(row && row.SceneId == sceneRow.sceneId && row.SubSceneId == sceneRow.subSceneId);
    });

    sceneArray.splice(deletionIndex, 1);
    const timePerFrame = [...durationsList];
    timePerFrame.splice(deletionIndex, 1); // delete 1 entry

    sceneArray = sceneArray.map((row, index) => {
      if (index < deletionIndex) return row;
      const previousSceneId = row.sceneId;
      if (row.subSceneId > 1) row.sceneId = lastSceneId - 1;
      else {
        row.sceneId = lastSceneId;
        sceneIdChanges[previousSceneId] = row.sceneId;
        lastSceneId = row.sceneId + 1;
      }
      return row;
    });

    this.setShowSceneNumbersInSceneArray(summaryArray, sceneArray, deletionIndex);

    scenePositions = scenePositions.map(row => {
      if (row && sceneIdChanges[row.SceneId]) row.SceneId = sceneIdChanges[row.SceneId];
      return row;
    });

    let activeSceneIndex = 0;
    if (deletionIndex >= sceneArray.length - 1) {
      if (sceneArray[sceneArray.length - 1].settings.hideScene) activeSceneIndex = sceneArray.length - 2;
      else activeSceneIndex = sceneArray.length - 1;
    } else activeSceneIndex = deletionIndex;
    sceneArray[activeSceneIndex].isActive = true;

    let refreshEditScene = this.state.refreshEditScene;
    let refreshAllStatement = this.state.refreshAllStatement;
    let refreshAllScenePanel = this.state.refreshAllScenePanel;
    let totalLength = sceneArray.length;
    let sceneIndices = this.state.durationUpdatedScenes?.sceneIndices || [];

    if (sceneIndices.length > 0) {
      sceneIndices = sceneIndices.map(sceneIndex => {
        if (sceneIndex > deletionIndex) {
          sceneIndex = sceneIndex - 1;
        }
        return sceneIndex;
      });
      const updateIndex = sceneIndices.indexOf(deletionIndex);
      if (updateIndex !== -1) {
        sceneIndices.splice(updateIndex, 1);
      }
    }
    const newState = {
      timePerFrame,
      scenePositions,
      sceneArray,
      imageArray,
      summaryArray,
      imageAssests,
      activeSceneIndex,
      durationUpdatedScenes: {
        loading: false,
        sceneIds: this.state.durationUpdatedScenes?.sceneIds || [],
        sceneIndices,
        isSceneDeleted: true,
        updatedSceneDuration: updatedSceneIds || [],
      },
    };
    return newState;
  }

  //delete sub scene
  DeleteSubScene(lastSubScene, sceneArr, summaryArr, frameDurationList, uuid) {
    const deletionIndex = sceneArr.findIndex(scene => scene.uuid === uuid);
    const SentenceCounter = sceneArr[deletionIndex].sceneId;
    let sceneArray = [...sceneArr];
    let summaryArray = [...summaryArr];
    if (sceneArray.length === 1) return; // dont delete if only 1 scene exists

    let SceneId = sceneArray[deletionIndex].sceneId;
    let SubSceneId = sceneArray[deletionIndex].subSceneId;
    var AllSubSentences = sceneArray[deletionIndex].AllSubSentences;

    AllSubSentences.splice(SubSceneId - 1, 1);

    for (let i = 0; i < sceneArray.length; i++) {
      if (sceneArray[i].isActive) sceneArray[i].isActive = false;
      if (sceneArray[i].sceneId == SceneId) {
        sceneArray[i].AllSubSentences = [...AllSubSentences];
      }
    }

    let { summary, index } = this.getSummaryFromGivenSubSentenceSceneId(SceneId);
    summaryArray[index] = { ...summary, format: [...summary.format] };
    summaryArray[index].format.splice(SubSceneId - 1, 1);
    summaryArray[index].uuidArray.splice(SubSceneId - 1, 1);
    //update sub scene array
    summaryArray[index]['subsentences'] = [...AllSubSentences];

    for (let updateCounter = 0; updateCounter < sceneArray.length; updateCounter++) {
      if (sceneArray[updateCounter].sceneId === SceneId) sceneArray[updateCounter].AllSubSentences = AllSubSentences;
    }
    let activeSceneIndex = this.state.currentActiveDiv;
    //update scene number and delete the sub scene from array
    if (lastSubScene === 0) {
      sceneArray.splice(deletionIndex, 1);
      activeSceneIndex = 0;
      if (deletionIndex >= sceneArray.length - 1) {
        if (sceneArray[sceneArray.length - 1].settings.hideScene) activeSceneIndex = sceneArray.length - 2;
        else activeSceneIndex = sceneArray.length - 1;
      } else activeSceneIndex = deletionIndex;
      sceneArray[activeSceneIndex].isActive = true;
    } else {
      for (var i = SentenceCounter; i < lastSubScene; i++) {
        if (i === SentenceCounter) sceneArray[i].isActive = true;
        let newSubSceneId = sceneArray[i].subSceneId - 1;
        sceneArray[i].subSceneId = newSubSceneId;
        if (i === lastSubScene - 1) sceneArray.splice(deletionIndex, 1);
      }
    }
    this.setShowSceneNumbersInSceneArray(summaryArray, sceneArray, SentenceCounter - 1);
    const timePerFrame = [...frameDurationList];
    timePerFrame.splice(SentenceCounter - 1, 1); // delete 1 entry

    const newState = {
      timePerFrame,
      sceneArray,
      summaryArray,
      activeSceneIndex,
      durationUpdatedScenes: {
        loading: false,
        sceneIds: summaryArray.map(scene => scene?.sceneId),
        sceneIndices: Array.from(Array(summaryArray.length - 1).keys()),
        isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
        updatedSceneDuration: this.state?.durationUpdatedScenes?.updatedSceneDuration || [],
      },
    };
    return newState;
  }
  refreshEditScene = () => {
    this.setState({ refreshEditScene: !this.state.refreshEditScene });
  };

  refreshAllScene = () => {
    this.setState({ refreshAllScene: !this.state.refreshAllScene });
  };
  UpdateAllScene = () => {
    this.refreshAllScene();
  };

  refreshAllScenePanel = () => {
    this.setState({ refreshAllScenePanel: !this.state.refreshAllScenePanel });
  };

  UpdateAllScenePanel = () => {
    this.refreshAllScenePanel();
  };

  refreshVisualLibrary = () => {
    this.setState({ refreshVisualLibrary: !this.state.refreshVisualLibrary });
  };

  UpdateVisualLibrary = () => {
    this.refreshVisualLibrary();
  };

  refreshImageFavourite = () => {
    this.setState({ refreshImageFavourite: !this.state.refreshImageFavourite });
  };

  UpdateImageFavourite = () => {
    this.refreshImageFavourite();
  };

  refreshImageRecent = () => {
    this.setState({ refreshImageRecent: !this.state.refreshImageRecent });
  };

  UpdateImageRecent = () => {
    this.refreshImageRecent();
  };

  async componentDidMount_call(isUndoRedo) {
    if (!isUndoRedo) {
      if (this.state.source != 'transcribe' && !this.state.loadProject) {
        await this.getSummaryImages();
      } else if (this.state.source == 'transcribe' && !this.state.loadProject) {
        if (this.state.isPodcast) {
          await this.getSummaryImages();
        } else {
          await this.getTranscriptionScenesVisuals();
        }
      }

      if (!this.state.loadProject) {
        this.findProjectAudios();
      } else {
        this.getProjectAudios();
      }
    }
  }

  setFavouritesOnTracks = () => {
    this.getAudioFavouritesAndRecent('', async res => {
      let favourite = [];
      let recent = [];
      for (let i = 0; i < res.length; i++) {
        const el = res[i];
        if (el.category == 'favorite' && el.type == 'track') {
          favourite.push(el);
        }
        if (el.category == 'recent' && el.type == 'track') {
          recent.push(el);
        }
      }
      this.setState({
        favouriteTracks: favourite,
        recent,
      });
      // if (AppLocalStorage.getItem('trackId') !== "" && AppLocalStorage.getItem('trackId') !== null) {
      // 	var arrayOfElements = document.getElementsByClassName('addRemoveActiveClassForTrack');
      // 	var lengthOfArray = arrayOfElements.length;

      // 	for (var i = 0; i < lengthOfArray; i++) {
      // 		arrayOfElements[i].className = 'addRemoveActiveClassForTrack';
      // 	}
      // 	// document.getElementById('track_li_' + AppLocalStorage.getItem('trackId')).className += ' active';
      // }

      recent = recent.sort((a, b) => new Date(b.date) - new Date(a.date));
      // recent = recent.filter(rec => rec.type === 'track');
      if (
        recent.length > 0 &&
        !this.state.loadProject &&
        this.state.source != 'transcribe' &&
        this.state.source != 'visuals'
      ) {
        document.getElementById('myMusicTrackPlay').src = recent[0].url;
        document.getElementById('myAudioPlay').src = recent[0].url;
        document.getElementById('myPreviewAudioPlayForEdit').src = recent[0].url;
        AppLocalStorage.setItem('activeTrack', recent[0].url);
        AppLocalStorage.setItem('trackType', recent[0].type);
        AppLocalStorage.setItem('trackId', recent[0].trackId);
        AppLocalStorage.setItem('trackName', recent[0].name);
        // document.getElementById('track_li_' + recent[0].trackId).className += ' active';
        this.setState({
          trackName: recent[0].name,
          trackId: recent[0].trackId,
          trackType: recent[0].type,
          activeTrack: recent[0].url,
        });
      } else if (
        AppLocalStorage.getItem('activeTrack') &&
        AppLocalStorage.getItem('activeTrack') !== '' &&
        AppLocalStorage.getItem('activeTrack') !== null &&
        !this.state.loadProject
      ) {
        document.getElementById('myMusicTrackPlay').src = AppLocalStorage.getItem('activeTrack');
        document.getElementById('myAudioPlay').src = AppLocalStorage.getItem('activeTrack');
        document.getElementById('myPreviewAudioPlayForEdit').src = AppLocalStorage.getItem('activeTrack');
        // document.getElementById('track_li_' + AppLocalStorage.getItem('trackId')).className += ' active';
        this.setState({
          trackName: AppLocalStorage.getItem('trackName'),
          trackId: AppLocalStorage.getItem('trackId'),
          trackType: AppLocalStorage.getItem('trackType'),
          activeTrack: AppLocalStorage.getItem('activeTrack'),
        });
      }

      this.refreshFavourite();
      this.refreshRecent();
      this.refreshVoiceOver();
    });
  };

  findProjectAudios = () => {
    this.setState({
      fetchingTracks: true,
    });
    const article = this.state.originalText && this.state.originalText.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' '); //Removes all html tags and replace them with space, removes all extra spaces and reduce them to one space,
    this.props.findProjectMusic(this.state.project_id, article);
  };

  getProjectAudios = () => {
    this.setState({
      fetchingTracks: true,
    });
    this.props.getProjectMusic(this.state.project_id);
  };

  getSavedAssets = response => {
    let allSummaryAssets = [];
    let assetsList = [];
    for (let i = 0; i < this.state.summaryJsonText.length; i++) {
      if (response && response.result && response.result[i]) {
        assetsList.push(response.result[i].data);
      }
    }
    let resourceList = [];
    for (let assets of assetsList) {
      let resources = [];
      for (let asset of assets) {
        if (asset['media_type'] === 'image') {
          if (allSummaryAssets.some(url => getCleanedUrl(url.thumb) === getCleanedUrl(asset['thumb'])) === false) {
            allSummaryAssets.push(asset);
          }
        } else if (asset['media_type'] === 'video') {
          if (allSummaryAssets.some(url => getCleanedUrl(url.preview) === getCleanedUrl(asset['preview'])) === false) {
            allSummaryAssets.push(asset);
          }
        }
      }
      resourceList.push(resources);
    }

    this.setState({
      allSummaryAssets,
    });
  };

  fetchAllVisuals = async requestBody => {
    let assetResponse;
    try {
      // await this.setState({
      //   project_id: Date.now(),
      // });

      await this.props.searchAllAssets(
        requestBody || this.state.requestBody,
        this.state.aspectRatioClass,
        this.state.project_id
      );
      if (requestBody.options.auto_visual_selection === false) return true;
      assetResponse = this.props.allVideosAndImages;
      let error;
      const assetResult = assetResponse?.data?.result;
      if (assetResponse?.status != 'success' || !assetResult) error = true;
      else {
        for (let i = 0; i < assetResult?.length; i++) {
          let asset1 = assetResult[i]?.data?.[0];
          if (
            !asset1 ||
            (asset1.media_type === 'image' && !asset1.large) ||
            (asset1.media_type === 'video' && !asset1.preview)
          ) {
            error = true;
          } else {
            error = false;
            break;
          }
        }
      }
      if (error) {
        setTimeout(() => {
          this.setState({ openVisualsFetchErrorDialog: true, requestBody });
        }, 2000);
        amplitude.getInstance().logEvent('fetch-visuals-error', {
          'project-id': this.state.project_id,
          'asset-data': assetResult,
          'response-status': assetResponse?.status,
        });
        return false;
      }
    } catch (error) {
      setTimeout(() => {
        this.setState({ openVisualsFetchErrorDialog: true, requestBody });
      }, 2000);
      amplitude.getInstance().logEvent('fetch-visuals-error', {
        'project-id': this.state.project_id,
        error: error,
      });
      return false;
    }
  };

  getSummaryImages = async reload => {
    const isTranscribe = this.state.source === 'transcribe';
    let summarySentences = this.state.summaryJsonText.map((text, i) => {
      let sentenceText = '';
      let keywords = [];
      if (reload) {
        keywords = text.keywords;
      } else {
        keywords = !this.state.url
          ? text.keywords
          : text.keywords && text.keywords.length > 0 && text.keywords[0] === '$#ArticleURLTitleAddedDynamic$#'
          ? text.keywords
          : [];
      }
      if (text.subsentences.length === 0) {
        sentenceText = text.sentence ? text.sentence.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ') : ''; //Removes all html tags and replace them with space, removes all extra spaces and reduce them to one space
      } else {
        sentenceText = text.subsentences.reduce((previousSent, currentSent) => {
          if (!currentSent) {
            currentSent = '';
          }
          return previousSent + ' ' + (currentSent ? currentSent.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ') : ''); //Removes all html tags and replace them with space, removes all extra spaces and reduce them to one space
        }, '');
      }
      let sentence = {
        text: sentenceText,
        keywords: keywords,
        image: reload ? '' : text.image,
      };
      if (isTranscribe && text.transcription) {
        sentence['transcription'] = text.transcription;
        sentence['segments'] = text.settings.videoOptions.segments;
      }
      return sentence;
    });

    let estimatedTime = this.getEstimatedTime();
    let image_search_sentence = summarySentences
      .filter(sentence => !sentence.image || (isTranscribe && sentence.transcription))
      .map((sentence, i) => {
        const searchSentence = { ...sentence };
        delete searchSentence.image;
        if (
          searchSentence.keywords &&
          searchSentence.keywords.length > 0 &&
          searchSentence.keywords[0] === '$#ArticleURLTitleAddedDynamic$#'
        ) {
          searchSentence.keywords = [];
        }
        searchSentence.duration =
          estimatedTime && estimatedTime.timeArray && estimatedTime.timeArray[i] ? estimatedTime.timeArray[i] : 5;
        if (isTranscribe && sentence.transcription) {
          searchSentence.duration = sentence['segments'].reduce((totalDuration, segment) => {
            totalDuration = totalDuration + (segment.end - segment.start);
            return totalDuration;
          }, 0);
        }
        return searchSentence;
      });
    let fullText = '';
    summarySentences = isTranscribe
      ? summarySentences.map(sentence => {
          fullText = fullText + (fullText === '' ? sentence.text : ' ' + sentence.text);
          return sentence;
        })
      : summarySentences.map(sentence => {
          if (
            sentence.keywords &&
            sentence.keywords.length > 0 &&
            sentence.keywords[0] === '$#ArticleURLTitleAddedDynamic$#'
          ) {
            sentence.text = sentence.keywords[0];
          }
          if (reload) {
            fullText = fullText + (fullText === '' ? sentence.text : ' ' + sentence.text);
          }
          return sentence;
        });

    let keywordsInSummary = image_search_sentence.some(q => q.keywords && q.keywords.length && q.keywords.length > 0);
    this.setState({
      isShowOverlay: true,
    });
    let requestBody = {};
    let addAssetsKeywords = false;
    if (isTranscribe) {
      if (!this.state.isPodcast) {
        requestBody = {
          media_url: this.state.url,
          scenes: image_search_sentence,
        };

        await this.props.getTranscriptionScenes(requestBody);
      } else {
        requestBody = {
          fullText: fullText,
          summary: image_search_sentence,
          options: {
            auto_visual_selection: true,
            auto_highlight: true,
          },
        };
        if (this.state.transcriptionLanguage) {
          let langaugeItem = SCRIPT_LANGUAGES.find(item => item.value === this.state.transcriptionLanguage);
          requestBody.language = (langaugeItem && langaugeItem.code) || 'en';
        }
        addAssetsKeywords = true;
        const result = await this.fetchAllVisuals(requestBody);
      }
    } else {
      requestBody = {
        fullText: reload ? fullText : this.state.originalText.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' '), //Removes all html tags and replace them with space, removes all extra spaces and reduce them to one space,
        summary: image_search_sentence,
        options: {
          auto_visual_selection: true,
          auto_highlight: true,
        },
      };
      if (
        this.props.location &&
        this.props.location.state &&
        (this.props.location.state.autoVisualSelection === false ||
          this.props.location.state.autoHighlightKeywords === false)
      ) {
        requestBody.options.auto_visual_selection = this.props.location.state.autoVisualSelection;
        requestBody.options.auto_highlight = this.props.location.state.autoHighlightKeywords;
      }
      if (this.state.scriptLanguage) {
        requestBody.language = this.state.scriptLanguage;
      }
      if (requestBody.options.auto_visual_selection || requestBody.options.auto_highlight) {
        const result = await this.fetchAllVisuals(requestBody);
      }
      if (requestBody.options.auto_visual_selection && requestBody.options.auto_highlight) addAssetsKeywords = true;
    }

    const allVideosAndImages = this.props.allVideosAndImages;
    const status = allVideosAndImages.status;
    if (status === 'success' || isTranscribe) {
      this.setState({
        findingVisualsMessage: 'Creating scenes...',
      });
      await sleep(100);
      const response = allVideosAndImages.data || [];
      try {
        this.setState({
          article_category: response.category,
        });

        let assetsList = [];
        let allAssets = reload ? {} : this.state.allAssets;
        let allSummaryAssets = reload ? [] : [...this.state.allSummaryAssets];
        let summaryJsonText = [...this.state.summaryJsonText];
        for (let i = 0; i < image_search_sentence.length; i++) {
          let assetData = response.result[i]['data'];
          assetsList.push(assetData);
        }
        const subSentencesArray = [...this.state.subSentencesArray];
        if (requestBody.options) {
          let responseResult = response.result;
          let j = 0; // counter for summaryJsonText
          // highlight keywords in the sentence so that sentence can be displayed as is with <strong> tags
          for (let i = 0; i < responseResult.length; i++) {
            if (!summaryJsonText[j]) break; // last item may not be there
            let assetKeywords = responseResult[i].keywords;
            if (assetKeywords && assetKeywords.length > 0) {
              summaryJsonText[j].keywords = summaryJsonText[j].keywords.concat(assetKeywords);
              summaryJsonText[j].sentence = AnimationHelper.highlightKeywords(
                summaryJsonText[j].sentence,
                summaryJsonText[j].keywords
              );
              for (let index = 0; index < summaryJsonText[j].subsentences.length; index++) {
                summaryJsonText[j].subsentences[index] = AnimationHelper.highlightKeywords(
                  summaryJsonText[j].subsentences[index],
                  summaryJsonText[j].keywords
                );
              }
              subSentencesArray[j].keywords = subSentencesArray[j].keywords.concat(assetKeywords);
              subSentencesArray[j].sentence = AnimationHelper.highlightKeywords(
                subSentencesArray[j].sentence,
                subSentencesArray[j].keywords
              );
              subSentencesArray[j].subSentences = subSentencesArray[j].sentence;
              for (let index = 0; index < subSentencesArray[j].AllSubSentences.length; index++) {
                subSentencesArray[j].AllSubSentences[index] = AnimationHelper.highlightKeywords(
                  subSentencesArray[j].AllSubSentences[index],
                  subSentencesArray[j].keywords
                );
              }
            }
            j++;
          }
        }

        let resourceList = [];
        for (let assets of assetsList) {
          let resources = [];
          for (let asset of assets) {
            if (asset['media_type'] === 'image') {
              resources.push({
                url: asset['large'],
                ...asset,
              });
              allAssets[asset['large']] = asset;
              if (allSummaryAssets.some(url => getCleanedUrl(url.thumb) === getCleanedUrl(asset['thumb'])) === false) {
                allSummaryAssets.push(asset);
              }
            } else if (asset['media_type'] === 'video') {
              resources.push({
                url: asset['preview'],
                ...asset,
              });
              allAssets[asset['preview']] = asset;
              if (
                allSummaryAssets.some(url => getCleanedUrl(url.preview) === getCleanedUrl(asset['preview'])) === false
              ) {
                allSummaryAssets.push(asset);
              }
            }
          }
          resourceList.push(resources);
        }
        await this.setState({
          isShowOverlay: false,
          allAssets,
          allSummaryAssets,
          summaryJsonText,
          subSentencesArray,
          projectMetaData: { ...this.state.projectMetaData, sentencesIncludeKeywords: true },
        });
        let resourceListIndex = 0;
        let isAnyChange = false; // change it to true on the last iteration to save the project after setting all images
        for (let index = 0; index < summarySentences.length; index++) {
          if (index === summarySentences.length - 1) {
            isAnyChange = true;
          }

          let sentenceCounter = index + 1;

          this.setState({
            findingVisualsMessage: `Creating scene ${sentenceCounter} out of ${summarySentences.length} scenes`,
          });
          await sleep(100);
          if (summarySentences[index].image && !reload) {
            await this.showSummaryImages(
              summarySentences[index],
              sentenceCounter,
              summaryJsonText[index].subsentences.length,
              resourceListIndex,
              [],
              isAnyChange,
              false,
              keywordsInSummary,
              addAssetsKeywords
            );
          } else {
            await this.showSummaryImages(
              summarySentences[index],
              sentenceCounter,
              summaryJsonText[index].subsentences.length,
              resourceListIndex,
              resourceList,
              isAnyChange,
              false,
              keywordsInSummary,
              addAssetsKeywords
            );
            resourceListIndex++;
          }
        }

        const customIntroVideo = this.setIntroVideoDurationInState(true);
        const outroVideo = this.setOutroVideoDurationInState(true);

        if (!customIntroVideo && !outroVideo) {
          this.getEstimatedTime();
          this.setState({
            isAnyChange: true,
            reFetchForAspectRatio: false,
          });
        } else {
          this.setState({ reFetchForAspectRatio: false });
        }
      } catch (error) {
        this.setState({
          isShowOverlay: false,
        });
        amplitude.getInstance().logEvent('apply-visuals-error', {
          'project-id': this.state.project_id,
          error: error,
        });
      }
    } else {
      this.setState({
        isShowOverlay: false,
      });
    }
    // this.setState({
    //   findingPodcastAutoVisuals: false,
    // });
    if (this.state.showInitialLoadingBar) {
      this.setState({
        findingVisualsMessage: `Its almost done. Please wait...`,
      });
      await sleep(100);
      // if (
      //   this.props.location.state.projectDetails.template ||
      //   this.props.location.state.projectDetails.templateMetaData
      // )
      this.setState({ loadTemplatesMainClass: true });
      setTimeout(() => {
        if (
          !this.props.location.state.projectDetails.template &&
          !this.props.location.state.projectDetails.templateMetaData
        ) {
          this.setState({ showInitialLoadingBar: false });
          this.props.resetAssetsSearchStatus();
        }
      }, 1000);
    }
    this.triggerAppcuesEvent('storyboard-opened-new-project');
  };

  setIntroVideoDurationInState = (updateTimePerFrame, elementSelector = '.intro-scene-video') => {
    let customIntro;
    let intervalCounter = 0;
    const interval1 = setInterval(() => {
      customIntro = document.querySelector(elementSelector);
      if (customIntro && !customIntro.ondurationchange) {
        customIntro.ondurationchange = () => {
          let introDuration = customIntro.duration;
          // set intro duration to 5 sec if its not uploaded video
          if (
            this.state.summaryJsonText[0].sceneId === 'Custom Intro Scene' &&
            !this.state.summaryJsonText[0].isUploadedVideo
          )
            introDuration = 5;
          // update intro video duration only if it is uploaded video
          if (
            introDuration &&
            introDuration != Infinity &&
            this.state.summaryJsonText[0].sceneId === 'Custom Intro Scene'
          ) {
            // recheck for intro-video element to work around a browser bug that returns duration for the next scene element
            if (document.querySelector(elementSelector)) {
              if (updateTimePerFrame) {
                let timePerFrame = [...this.state.timePerFrame];
                timePerFrame.splice(0, 1, introDuration);
                this.setState({ timePerFrame });
              }
            } else {
              introDuration = 0;
            }
            this.setState(
              {
                defaultCustomIntroTimeInSec: introDuration,
                defaultCustomIntroTimeInMiniSec: introDuration * 1000,
              },
              () => {
                this.getEstimatedTime();
                if (updateTimePerFrame) this.setState({ isAnyChange: true });
              }
            );
          }
        };
      }
      if (customIntro || intervalCounter > 5) clearInterval(interval1);
      intervalCounter++;
    }, 1000);

    return customIntro;
  };

  /**
   * Called only from setOutroVideoDurationInState function
   * @param {*} outroDuration
   * @param {*} updateTimePerFrame
   */
  setOutroTime = (outroDuration, updateTimePerFrame) => {
    if (outroDuration) {
      let time = [...this.state.timePerFrame];
      if (
        updateTimePerFrame &&
        this.state.subSentencesArray[this.state.subSentencesArray.length - 1].showSceneNumber === 'Outro Scene'
      ) {
        if (time.length === this.state.subSentencesArray.length) time.splice(time.length - 1, 1, outroDuration);
        else if (time.length === this.state.subSentencesArray.length - 1) time.push(outroDuration);
      } else return;
      let timePerFrame = updateTimePerFrame ? { timePerFrame: time } : {};
      this.setState(
        {
          ...timePerFrame,
          defaultOutroTimeInSec: outroDuration,
          defaultOutroTimeInMiniSec: outroDuration * 1000,
        },
        () => {
          this.getEstimatedTime();
          if (updateTimePerFrame) this.setState({ isAnyChange: true });
        }
      );
    }
  };

  /**
   * Calculate and set outro video duration in state.defaultOutroTimeInSec
   * Also set duration in state.timePerFrame array on new project creation or when outro is enabled in brand setting
   */
  setOutroVideoDurationInState = async (updateTimePerFrame, elementSelector = '.outro-scene-video') => {
    let outroVideo;
    let intervalCounter = 0;
    const interval1 = setInterval(async () => {
      outroVideo = document.querySelector(elementSelector);
      if (outroVideo && this.getOutroVideoDurationPromise) {
        let outroDuration = await this.getOutroVideoDurationPromise;
        if (outroVideo.duration && outroVideo.duration != Infinity)
          this.setOutroTime(outroDuration, updateTimePerFrame);
      }
      if (outroVideo && !outroVideo.ondurationchange) {
        outroVideo.ondurationchange = () => {
          if (
            this.state.summaryJsonText[this.state.summaryJsonText.length - 1].sceneId === 'Outro Scene' &&
            this.state.summaryJsonText[this.state.summaryJsonText.length - 1].isUploadedVideo
          ) {
            if (outroVideo.duration && outroVideo.duration != Infinity) {
              this.setOutroTime(outroVideo.duration, updateTimePerFrame);
            }
          } else {
            this.setOutroTime(5, updateTimePerFrame); // set default 5 sec if not uploaded video
          }
        };
      }
      if (outroVideo || intervalCounter > 5) clearInterval(interval1);
      intervalCounter++;
    }, 1000);
    return outroVideo;
  };

  /**
   * Set array of subScene times in state if passed as param, else calculate default values based on char count of subsentence in each subScene
   */
  setTimePerFrameArray = async (timePerFrame, applyVoiceOver = false) => {
    if (timePerFrame && timePerFrame.length > 0) {
      //set default value if null
      for (let i = 0; i < timePerFrame.length; i++) {
        if (!timePerFrame[i]) timePerFrame[i] = 5;
      }
    } else if (this.state.summaryJsonText) {
      timePerFrame = [];
      for (let index = 0; index < this.state.summaryJsonText.length; index++) {
        const text = this.state.summaryJsonText[index];
        for (let i = 0; i < text.subsentences.length; i++) {
          const subsentence = text.subsentences[i];
          let time = Math.ceil(subsentence.length * SCENE_TIME_SEC_PER_CHAR * 2) / 2; // 0.08sec per char
          if (time < 5) time = 5;
          timePerFrame.push(time);
        }
      }
    }
    await this.setState({ timePerFrame });
  };

  getTranscriptionScenesVisuals = async () => {
    let summarySentences = [];
    let image_search_sentence = [];
    let sentenceSegments = this.state.summaryJsonText.reduce((segments, text) => {
      if (text.transcription) {
        segments.push({
          segments: [
            {
              start: text.settings.videoOptions.segments[0].start,
              end: text.settings.videoOptions.segments[0].end,
            },
          ],
        });
        summarySentences.push(text);
        image_search_sentence.push(text);
      }
      return segments;
    }, []);
    let requestBody = {
      media_url: this.state.url,
      scenes: sentenceSegments,
    };
    await this.props.getTranscriptionScenes(requestBody);
    const allVideosAndImages = this.props.allVideosAndImages;
    const status = allVideosAndImages.status;
    if (status === 'success') {
      const response = allVideosAndImages.data || { result: [] };
      try {
        this.setState({
          article_category: response.category,
        });

        let assetsList = [];
        let allAssets = this.state.allAssets;
        let allSummaryAssets = [...this.state.allSummaryAssets];
        let transcriptionVisuals = [];
        for (let i = 0; i < response.result.length; i++) {
          let asset = response.result[i]['data'][0];
          allAssets[asset['large']] = asset;
          allSummaryAssets.push(asset);
          transcriptionVisuals.push({
            url: asset['large'],
            ...asset,
          });
        }
        this.setState({
          allAssets,
          allSummaryAssets,
        });
        this.showTranscriptonSceneVisuals(this.state.summaryJsonText, transcriptionVisuals);

        this.setState({
          isAnyChange: true,
          reFetchForAspectRatio: false,
          isShowOverlay: false,
        });
      } catch (err) {
        this.setState({
          isShowOverlay: false,
        });
      }

      this.setIntroVideoDurationInState(true);
      this.setOutroVideoDurationInState(true);
    } else {
      this.setState({
        isShowOverlay: false,
      });
    }

    if (this.state.showInitialLoadingBar) {
      if (
        this.props.location.state.projectDetails.template ||
        this.props.location.state.projectDetails.templateMetaData
      )
        this.setState({ loadTemplatesMainClass: true });
      setTimeout(() => {
        // If no template applied on project, hide initial loading bar here, else hide in addIntroOutroScene()
        if (
          !this.props.location.state.projectDetails.template &&
          !this.props.location.state.projectDetails.templateMetaData
        )
          this.setState({ showInitialLoadingBar: false });
        this.props.resetAssetsSearchStatus();
      }, 1000);
    }
    this.triggerAppcuesEvent('storyboard-opened-from-step2');
  };

  showTranscriptonSceneVisuals(summaryJsonText, transcriptionVisuals) {
    let imageURL = [...this.state.imageURL];
    let defaultImages = this.state.defaultImages;
    let imageAssests = [...this.state.imageAssests];
    let asset = {};
    let visualIndex = 0;
    for (let index = 0; index < summaryJsonText.length; index++) {
      let summaryText = summaryJsonText[index];
      if (summaryText.image) {
        if (this.state.allAssets[summaryText.image]) {
          asset = this.state.allAssets[summaryText.image];
        }
        if (asset && !_.isEmpty(asset)) {
          imageAssests[index] = asset;
        } else {
          imageAssests.push({ thumb: summaryText.image, url: summaryText.image, large: summaryText.image });
        }
        if (this.isOutroScene(index + 1)) {
          break;
        }
        imageURL[index] = summaryText.image;
        defaultImages[index] =
          asset && !_.isEmpty(asset)
            ? asset
            : { thumb: summaryText.image, preview: summaryText.image, large: summaryText.image };
        if (summaryText.transcription) {
          visualIndex++;
        }
      } else if (summaryText.transcription) {
        let transcriptionVisual = transcriptionVisuals[visualIndex];
        if (this.state.allAssets[transcriptionVisual.url]) {
          asset = this.state.allAssets[transcriptionVisual.url];
        }
        if (asset && !_.isEmpty(asset)) {
          imageAssests[index] = asset;
        } else {
          imageAssests.push({
            thumb: transcriptionVisual.thumb,
            url: transcriptionVisual.url,
            large: transcriptionVisual.url,
          });
        }
        if (this.isOutroScene(index + 1)) {
          break;
        }
        imageURL[index] = transcriptionVisual.url;
        defaultImages[index] =
          asset && !_.isEmpty(asset)
            ? asset
            : { thumb: transcriptionVisual.thumb, preview: transcriptionVisual.url, large: transcriptionVisual.url };
        visualIndex++;
      }
    }
    this.setState({
      imageURL: imageURL,
      defaultImages: defaultImages,
      imageAssests,
    });
  }

  getNewSceneImages = async (summarySentences, sentenceCounter, subSceneLength, keywords) => {
    let originalText = this.state.originalText.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' '); //Removes all html tags and replace them with space, removes all extra spaces and reduce them to one space
    let summarySentenceText = summarySentences.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' '); //Removes all html tags and replace them with space, removes all extra spaces and reduce them to one space
    if (originalText === '') originalText = summarySentenceText;

    let requestBody = {
      fullText: originalText,
      summary: [
        {
          text: summarySentenceText,
          keywords: keywords,
        },
      ],
    };
    if (this.state.scriptLanguage) {
      requestBody.language = this.state.scriptLanguage;
    }
    this.setState({
      showLoader: true,
      // isShowOverlay: true,
    });

    await this.props.searchAllAssets(requestBody, this.state.aspectRatioClass, this.state.project_id);
    const allVideosAndImages = this.props.allVideosAndImages;
    const status = allVideosAndImages.status;
    if (status === 'success') {
      const response = allVideosAndImages.data;
      try {
        let assetsList = [];
        let allAssets = this.state.allAssets;
        assetsList.push(response.result[0]['data']);

        let resourceList = [];
        for (let assets of assetsList) {
          let resources = [];
          for (let asset of assets) {
            if (asset['media_type'] === 'image') {
              resources.push({
                url: asset['large'],
                ...asset,
              });
              allAssets[asset['large']] = asset;
            } else if (asset['media_type'] === 'video') {
              resources.push({
                url: asset['preview'],
                ...asset,
              });
              allAssets[asset['preview']] = asset;
            }
          }

          resourceList.push(resources);
        }

        amplitude.getInstance().logEvent('search-all-assets-response', {});

        this.setState({
          isShowOverlay: false,
          showLoader: false,
          allAssets,
        });

        this.showSummaryImages(
          {
            text: summarySentences,
            image: '',
          },
          sentenceCounter,
          subSceneLength,
          0,
          resourceList,
          true,
          true
        );
      } catch {}
    } else {
      this.setState({
        isShowOverlay: false,
        showLoader: false,
      });
    }
  };

  updateAllAssets = assets => {
    const allAssets = Object.assign(this.state.allAssets, assets);
    this.setState({
      allAssets,
    });
  };

  getAudioFavouritesAndRecent = async (type, callback) => {
    if (this.state.username) {
      await this.props.getAudioFavAndRecents(this.state.username);
      const status = this.props.audioFavsAndRecentStatus;
      if (status === 'success') {
        const res = this.props.audioFavsAndRecent;
        if (callback) {
          callback(res);
        } else {
          let favourite = [];
          let recent = [];
          let upload = [];
          for (let i = 0; i < res.length; i++) {
            const el = res[i];
            if (el.category == 'favorite') {
              favourite.push(el);
            }
            if (el.category == 'recent') {
              recent.push(el);
            }
            if (el.category == 'upload') {
              upload.push(el);
            }
          }
          let favouriteList = [];
          let recentList = [];
          for (var favCounter = 0; favCounter < favourite.length; favCounter++) {
            if (favourite[favCounter].type === type) {
              favouriteList.push(favourite[favCounter]);
              // this.state.favouriteList.push(favourite[favCounter]);
            }
          }

          for (var recentCounter = 0; recentCounter < recent.length; recentCounter++) {
            if (recent[recentCounter].type === type) {
              recentList.push(recent[recentCounter]);
            }
          }
          // Lists, favourites and recents are required for further rendering
          this.setState({
            audioFavourites: favouriteList,
            audioRecent: recentList,
            recentTracks: recentList,
            uploadAudio: upload,
            lists: this.props.audioFavsAndRecent,
            favourites: favourite,
            recents: recent,
          });
        }
      } else {
      }
    }
  };

  updateRecentListForMarkActive = recent => {
    this.setState({
      recentTracks: recent,
    });
  };

  showSummaryImages = async (
    summarySentence,
    sentenceCounter,
    subSceneLength,
    imagesIndex,
    images,
    isChange = false,
    isNewScene = false,
    keywordsInSummary = false,
    addAssetsKeywords
  ) => {
    const scene = this.state.subSentencesArray[sentenceCounter - 1];
    if (summarySentence.image || (scene && scene.isCustomImage) || scene.showSceneNumber == 'Custom Intro Scene') {
      if (this.state.imageURL[sentenceCounter - 1] === '') {
        await this.hideShowOverlay(sentenceCounter, BLACK_IMAGE, isChange);
      } else {
        await this.hideShowOverlay(
          sentenceCounter,
          this.state.imageURL[sentenceCounter - 1],
          isChange,
          images[imagesIndex],
          true,
          isNewScene
        );
      }
    } else {
      if (
        this.state.imageURL[sentenceCounter - 1] !== '' &&
        this.state.imageURL[sentenceCounter - 1] !== BLACK_IMAGE &&
        this.state.imageURL[sentenceCounter - 1] !== NO_IMAGE &&
        !this.state.reFetchForAspectRatio
      ) {
        await this.hideShowOverlay(
          sentenceCounter,
          this.state.imageURL[sentenceCounter - 1],
          isChange,
          images[imagesIndex],
          false,
          isNewScene
        );
      } else {
        try {
          let assets = images[imagesIndex];
          let currentAssetsIndex = imagesIndex;
          let imageAssigned = false;
          let searchDirection = 0; //Move backward
          while (imageAssigned === false && currentAssetsIndex > -1 && currentAssetsIndex < images.length) {
            for (var imageCounter = 0; imageCounter < assets.length; imageCounter++) {
              if (
                this.state.imageURL.some(
                  imageUrl => getCleanedUrl(imageUrl) === getCleanedUrl(assets[imageCounter].url)
                ) &&
                this.state.imageURL.findIndex(
                  imageUrl => getCleanedUrl(imageUrl) === getCleanedUrl(assets[imageCounter].url)
                ) !== parseInt(sentenceCounter - 1)
              ) {
                continue;
              } else {
                const selectedKeywordForUnderline = [...this.state.selectedKeywordForUnderline];
                selectedKeywordForUnderline[sentenceCounter - 1] = summarySentence.text;
                this.setState({
                  selectedKeywordForUnderline,
                });
                await this.hideShowOverlay(
                  sentenceCounter,
                  assets[imageCounter].url,
                  isChange,
                  assets[imageCounter],
                  true,
                  isNewScene
                );
                if (addAssetsKeywords) this.addKeywords(sentenceCounter, assets[imageCounter], keywordsInSummary);
                imageAssigned = true;
                break;
              }
            }

            if (imageAssigned === false) {
              if (searchDirection == 0) {
                currentAssetsIndex -= 1;
                if (currentAssetsIndex > -1) {
                  assets = images[currentAssetsIndex];
                } else if (imagesIndex < images.length) {
                  searchDirection = 1; //move forward
                  currentAssetsIndex = imagesIndex + 1;
                  if (currentAssetsIndex < images.length) {
                    assets = images[currentAssetsIndex];
                  }
                }
              } else {
                currentAssetsIndex += 1;
                if (currentAssetsIndex < images.length) {
                  assets = images[currentAssetsIndex];
                }
              }
            }
          }

          if (imageAssigned === false) {
            this.NoImageFind(sentenceCounter, subSceneLength, isChange);
          }
        } catch (err) {
          this.NoImageFind(sentenceCounter, subSceneLength, isChange);
        }
      }
    }
  };

  addKeywords = (sentenceCounter, assets, keywordsInSummary) => {
    if (this.state.url || keywordsInSummary === false) {
      let keyword_added = false;
      for (let summmaryObj of this.state.summaryJsonText) {
        if (
          summmaryObj.keywords &&
          summmaryObj.keywords.some(keyword => keyword.toLowerCase() === assets.keyword.toLowerCase())
        ) {
          keyword_added = true;
          break;
        }
      }

      if (
        this.state.summaryJsonText[sentenceCounter - 1].keywords &&
        this.state.summaryJsonText[sentenceCounter - 1].keywords.some(
          keyword => keyword === '$#ArticleURLTitleAddedDynamic$#'
        )
      ) {
        keyword_added = true;
      }
      if (keyword_added === false) {
        let summaryJsonText = this.state.summaryJsonText;
        let summaryJson = { ...summaryJsonText[sentenceCounter - 1] };
        if (!summaryJson.keywords) {
          summaryJson.keywords = [];
        }
        if (assets.keyword) {
          summaryJson.keywords.push(assets.keyword);
        }
        summaryJsonText[sentenceCounter - 1] = summaryJson;
        this.setState({
          summaryJsonText,
        });
      }
    }
  };

  playScenePreviewNew = async (
    SceneId,
    showSceneNumber,
    generateVoiceOver = true,
    isTemplatePreview = false,
    hasVoiceOver = false
  ) => {
    if (!SceneId) {
      let activeScene = this.state.subSentencesArray.filter(x => x.isActive == true);
      SceneId = activeScene[0].sceneId;
      showSceneNumber = activeScene[0].showSceneNumber;
      hasVoiceOver =
        (activeScene[0].recordedAudio && activeScene[0].recordedAudio != '') ||
        (activeScene[0].audioSegments &&
          activeScene[0].audioSegments.length > 0 &&
          activeScene[0].audioSegments[0] &&
          activeScene[0].audioSegments[0].recordedAudio &&
          activeScene[0].audioSegments[0].recordedAudio != '') ||
        hasVoiceOver;
    } else {
      let activeScene = this.state.subSentencesArray.filter(x => x.isActive == true);
      hasVoiceOver =
        (activeScene[0].recordedAudio && activeScene[0].recordedAudio != '') ||
        (activeScene[0].audioSegments &&
          activeScene[0].audioSegments.length > 0 &&
          activeScene[0].audioSegments[0] &&
          activeScene[0].audioSegments[0].recordedAudio &&
          activeScene[0].audioSegments[0].recordedAudio != '') ||
        hasVoiceOver;
    }
    await this.OpenCloseVideoPreviewNew(
      null,
      SceneId,
      showSceneNumber,
      generateVoiceOver,
      true,
      isTemplatePreview,
      false,
      hasVoiceOver
    );
  };

  OpenCloseVideoPreviewNew = async (
    event,
    SceneId,
    showSceneNumber,
    generateVoiceOver = true,
    quickPreview = false,
    isTemplatePreview = false,
    isVoiceAdjust = false,
    hasVoiceOver = false
  ) => {
    this.cancelIntervalTimers();
    var previewPlayerHeight = 0.9 * window.innerHeight - 200;
    const resolutionBasedHeight = parseInt(this.state.VideoRes);
    if (
      this.state.aspectRatioClass !== 'nine-sixteen' &&
      resolutionBasedHeight &&
      previewPlayerHeight > resolutionBasedHeight
    )
      previewPlayerHeight = resolutionBasedHeight;
    var previewPlayerWidth = Math.floor(previewPlayerHeight * this.state.aspectRatioFractionValue);

    let previewDefaultX = (window.innerWidth - previewPlayerWidth - 40) / 2;
    previewDefaultX = previewDefaultX < 0 ? 0 : previewDefaultX;
    let previewDefaultY = (window.innerHeight - previewPlayerHeight - 170) / 2;
    previewDefaultY = previewDefaultY < 0 ? 0 : previewDefaultY;
    const subscriptionDetails = getSubscriptionDetails(this.state.user ? this.state.user.username : '');
    var brandingWatermarkUrl;
    let previewAlert = (
      <div className={'preview upgrade-to-remove'}>
        <Alert sx={{ backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex' }}>
          <Typography>
            Stock visual watermarks and audio issues in this preview will not be present in the final video.
          </Typography>
          <Box>
            <Link
              href="https://kb.pictory.ai/en/articles/8468941-why-are-there-stock-library-watermarks-or-audio-issues-in-the-preview"
              target="_blank"
              sx={{
                padding: '0 10px !important',
                margin: '0 !important',
                fontSize: 'text_sm',
                fontWeight: 'text_sm !important',
                textDecoration: 'underline',
                color: 'grey.0',
              }}
            >
              What does this mean?
            </Link>
            <Link
              href="javascript:void(0)"
              sx={{
                padding: '0 10px !important',
                margin: '0 !important',
                fontSize: 'text_sm',
                fontWeight: 'text_sm !important',
                textDecoration: 'underline',
                color: 'grey.0',
              }}
              onClick={() => {
                this.setState({ previewAlert: null });
              }}
            >
              Dismiss
            </Link>
          </Box>
        </Alert>
      </div>
    );
    // if (subscriptionDetails && subscriptionDetails.plan && subscriptionDetails.plan.plan_code) {
    //   if (subscriptionDetails.plan.plan_code === PLAN_CODES.freeTrial) {
    //     brandingWatermarkUrl = 'https://pictory-static.pictorycontent.com/brand/branding-pictory.png';
    //     previewAlert = (
    //       <div className={'preview upgrade-to-remove'}>
    //         <Alert sx={{ backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex' }}>
    //           <Typography>
    //             Stock visual watermarks and audio issues in this preview will not be present in the final video.
    //           </Typography>
    //           <Box>
    //             <UpgradeButton
    //               onClick={this.gotoPlansList}
    //               sx={{
    //                 height: '100%',
    //                 padding: '0 10px',
    //                 width: 'maxContent',
    //                 minWidth: 'unset',
    //                 display: 'none !important',
    //               }}
    //             />

    //             <Link
    //               href="https://kb.pictory.ai/en/articles/8468941-why-are-there-stock-library-watermarks-or-audio-issues-in-the-preview"
    //               target="_blank"
    //               sx={{
    //                 padding: '0 10px !important',
    //                 margin: '0 !important',
    //                 fontSize: 'text_sm',
    //                 fontWeight: 'text_sm !important',
    //                 textDecoration: 'underline',
    //                 color: 'grey.0',
    //               }}
    //             >
    //               What does this mean?
    //             </Link>
    //             <Link
    //               href="javascript:void(0)"
    //               sx={{
    //                 padding: '0 10px !important',
    //                 margin: '0 !important',
    //                 fontSize: 'text_sm',
    //                 fontWeight: 'text_sm !important',
    //                 textDecoration: 'underline',
    //                 color: 'grey.0',
    //               }}
    //               onClick={() => {
    //                 this.setState({ previewAlert: null });
    //               }}
    //             >
    //               Dismiss
    //             </Link>
    //           </Box>
    //         </Alert>
    //       </div>
    //     );
    //   }
    // }
    // set a timer based progress bar for preview call
    let previewScenesCount = SceneId
      ? 2
      : this.state.subSentencesArray.length > 1
      ? this.state.subSentencesArray.length
      : 2;
    let totalPreviewProgressSteps = 100;
    let previewProgressDelay = 1000;
    let previewProgressStep = totalPreviewProgressSteps / previewScenesCount;
    this.timerId = setInterval(() => {
      if (Math.ceil(this.state.previewProgress + previewProgressStep) < 99) {
        this.setState({ previewProgress: this.state.previewProgress + previewProgressStep });
      } else if (Math.ceil(this.state.previewProgress + 0.5) < 99) {
        this.setState({ previewProgress: this.state.previewProgress + 0.5 });
      } else {
        this.cancelIntervalTimers();
        this.setState({ previewReady: true });
      }
    }, previewProgressDelay);
    amplitude.getInstance().logEvent('preview-clicked', {
      'article-link': this.state.url,
      'project-id': this.state.project_id,
    });
    let showPreviewProgress = true;
    if (!hasVoiceOver && (isVoiceAdjust || quickPreview)) {
      showPreviewProgress = false;
    }
    if (SceneId) {
      this.setState(
        {
          previewAlert,
          showPreviewProgress,
          previewProgress: 0,
          generateCSV: false,
        },
        async () => {
          let videoCreationJson = null;
          try {
            let json = await this.generateVideoJSON(null, null, generateVoiceOver, SceneId, showSceneNumber, true);

            videoCreationJson = json.VideoCreationJson;
          } catch {
            this.setState({ showPreviewProgress: false });
          }
          if (this.state.showVoPopup) {
            return;
          }
          if (typeof videoCreationJson === 'undefined' || videoCreationJson === null || videoCreationJson === '') {
            showError('Something went wrong. Try again');
            this.setState({ showPreviewProgress: false });
          } else if (showPreviewProgress == this.state.showPreviewProgress) {
            this.setState(
              {
                previewPlayerKey: this.state.aspectRatioValue + Date.now(),
                previewPlayerWidth,
                previewPlayerHeight,
                previewDefaultX,
                previewDefaultY,
                brandingWatermarkUrl,
                isTemplatePreview,
              },
              async () => {
                let result = false;
                if (quickPreview && !hasVoiceOver) {
                  this.videoPreviewSingleSceneRef.current.LoadJsonResources(videoCreationJson, SceneId);
                  result = true;
                } else {
                  this.videoPreviewSingleSceneRef.current.LoadJsonResources(videoCreationJson, SceneId);
                  result = await this.videoPreviewSingleSceneRef.current.WaitforResourceLoading(SceneId);
                }
                this.videoPreviewSingleSceneRef.current.clearCanvas();
                if (result) {
                  this.setState(
                    {
                      showPreviewProgress: false,
                      showAutoSyncVoiceover: false,
                      showAutoSyncVoiceoverButtons: isVoiceAdjust,
                      previewProgress: 100,
                      isNewPreviewPlaying: true,
                    },
                    () => {
                      amplitude.getInstance().logEvent('preview-play-started', {});
                      this.videoPreviewSingleSceneRef.current.Play(SceneId);
                    }
                  );
                } else {
                  if (this.videoPreviewSingleSceneRef.current.props.hasVideoEndedNew) {
                    this.videoPreviewSingleSceneRef.current.props.hasVideoEndedNew(true);
                  }
                  this.setState({ showPreviewProgress: false });
                }
              }
            );
          }
        }
      );
    } else {
      this.setState(
        {
          previewAlert,
          showPreviewProgress,
          previewProgress: 0,
          generateCSV: false,
        },
        () => {
          setTimeout(async () => {
            let videoCreationJson = null;
            try {
              let json = await this.generateVideoJSON(null, null, true, SceneId, showSceneNumber, true);
              videoCreationJson = json.VideoCreationJson;
              this.sharePreview(videoCreationJson);
            } catch {
              this.setState({ showPreviewProgress: false });
            }
            if (this.state.showVoPopup) {
              return;
            }
            if (typeof videoCreationJson === 'undefined' || videoCreationJson === null || videoCreationJson === '') {
              showError('Something went wrong. Try again');
              this.setState({ showPreviewProgress: false });
            } else if (this.state.showPreviewProgress || this.state.showAutoSyncVoiceover) {
              this.setState(
                {
                  showPreviewProgress: false,
                  showAutoSyncVoiceover: false,
                  showAutoSyncVoiceoverButtons: isVoiceAdjust,
                  previewProgress: 100,
                  previewPlayerKey: this.state.aspectRatioValue + Date.now(),
                  previewPlayerWidth,
                  previewPlayerHeight,
                  previewDefaultX,
                  previewDefaultY,
                  brandingWatermarkUrl,
                },
                () => {
                  this.videoPreviewRef.current.clearCanvas();
                  this.videoPreviewRef.current.LoadJsonResources(videoCreationJson);
                  amplitude.getInstance().logEvent('preview-play-started', {});
                  this.videoPreviewRef.current.Play(SceneId);
                }
              );
            }
          }, 500);
        }
      );
    }
  };
  closePreviewNew = async () => {
    this.videoPreviewSingleSceneRef?.current?.pauseVideo();
    this.videoPreviewSingleSceneRef?.current?.handleClose();
    //amplitude.getInstance().logEvent('preview-completed', {});
  };
  pausePreview = async () => {
    this.videoPreviewSingleSceneRef?.current?.pauseVideo();
  };
  ErrorFromPreview = log => {
    //showError("Something went wrong. Try again");
    //session_info.previewRenderMode ='canvas';
    amplitude.getInstance().logEvent('preview-render-failed', log);
  };
  previewEnded = () => {
    this.setState({ isNewPreviewPlaying: false });
    //amplitude.getInstance().logEvent('preview-completed', {});
  };

  createTextAnimationContainer = (
    sentence,
    keywords,
    fontSize,
    height,
    width,
    isOutroScene,
    overrideStyles,
    logoSrc,
    layout,
    hideText = false,
    isFullWidth,
    displayItems,
    aspectRatioFontFactor
  ) => {
    var theme = this.state.animationTheme;
    overrideStyles.fontSize = AnimationHelper.convertPttoPx(overrideStyles.fontSize) + 'px';
    if (isOutroScene) {
      overrideStyles = {};
      theme = Animation1;
    }
    let animationContainerElement = document.createElement('div');
    animationContainerElement.classList.add('animation-container');
    animationContainerElement.classList.add(theme.className);
    animationContainerElement.classList.add(this.state.aspectRatioClass);
    animationContainerElement.style.width = `${width}px`;
    animationContainerElement.style.height = `${height}px`;
    animationContainerElement.style.fontSize = `${AnimationHelper.convertPttoPx(fontSize)}px`;
    animationContainerElement.style.paddingTop = '0';
    //animationContainerElement.style.visibility = "hidden";
    //animationContainerElement.style.display = "none";
    animationContainerElement.style.position = 'absolute';
    animationContainerElement.style.zIndex = 200;
    animationContainerElement = document
      .getElementsByTagName('body')[0]
      .insertBefore(animationContainerElement, document.getElementsByTagName('body')[0].firstChild);
    if (!hideText) {
      this.createSentenceContainer(
        overrideStyles,
        sentence,
        keywords,
        theme,
        isOutroScene,
        isFullWidth,
        layout,
        logoSrc,
        hideText,
        animationContainerElement,
        fontSize
      );
    }

    if (displayItems && displayItems.length > 0) {
      for (var i = 0; i < displayItems.length; i++) {
        let item = displayItems[i];
        if (item.type == 'text') {
          let itemStyle = _.cloneDeep(item.itemStyleData);
          fontSize = itemStyle.fontSize;
          if (aspectRatioFontFactor) {
            fontSize = fontSize * aspectRatioFontFactor;
          }
          itemStyle.fontSize = AnimationHelper.convertPttoPx(fontSize) + 'px';
          //let itemStyle = _.cloneDeep(overrideStyles);
          //itemStyle.preset = item.itemStyleData.preset;
          this.createSentenceContainer(
            itemStyle,
            item.textHtml,
            [],
            theme,
            isOutroScene,
            itemStyle.fullWidth,
            '',
            null,
            false,
            animationContainerElement,
            fontSize,
            item.id
          );
        }
      }
    }
    return animationContainerElement;
  };

  GetLines = (sentences, keywords, fontSize, height, width, isOutroScene) => {
    var tt = this.createTextAnimationContainer(sentences, keywords, fontSize, height, width, isOutroScene);
  };

  onPreviewProgress = progress => {
    this.setState({
      previewProgress: progress,
    });
  };

  hidePreviewProgress = () => {
    this.setState({
      showAutoSyncVoiceover: false,
      showPreviewProgress: false,
      voiceOverErrorMsgStep2: '',
      previewProgress: 0,
    });
  };

  onClosePreviewProgress = () => {
    this.setState({
      showAutoSyncVoiceover: false,
      showPreviewProgress: false,
      voiceOverErrorMsgStep2: '',
      previewProgress: 0,
      showPreview: false,
      closePreviewFlag: Date.now(),
    });
  };

  //play music on fly
  playMusic = (musicURL, musicId, trackName, event, ifPlay) => {
    if (ifPlay) this.setState({ activeAudioTrack: musicId });
    else this.setState({ activeAudioTrack: null });
    const _self = this;
    event.stopPropagation();
    if (this.state.activeAudioTrack == null) {
      // document.getElementById('musicPlay' + musicId).className = 'playStop fa fa-play';
      document.getElementById('myMusicTrackPlay').src = musicURL;
      document.getElementById('myMusicTrackPlay').play();
      document.getElementById('myMusicTrackPlay').addEventListener(
        'ended',
        function (e) {
          _self.setState({ activeAudioTrack: null });
        },
        false
      );
      //document.getElementById('myMusicTrackPlay').src = this.state.activeTrack;
    } else {
      document.getElementById('myMusicTrackPlay').pause();
      document.getElementById('myAudioPlay').pause();
      document.getElementById('myVoiceOverAudioPlay').pause();
      document.getElementById('myPreviewAudioPlayForEdit').pause();
      document.getElementById('myPreviewVoiceOverPlayForEdit').pause();
      var arrayOfElements = document.getElementsByClassName('playStop');
      var lengthOfArray = arrayOfElements.length;

      // for (var i = 0; i < lengthOfArray; i++) {
      //   arrayOfElements[i].className = 'playStop fa fa-play';
      // }

      arrayOfElements = document.getElementsByClassName('favPlayStop');
      lengthOfArray = arrayOfElements.length;

      for (var i = 0; i < lengthOfArray; i++) {
        arrayOfElements[i].className = 'favPlayStop fa fa-play';
      }

      arrayOfElements = document.getElementsByClassName('recentPlayStop');
      lengthOfArray = arrayOfElements.length;

      for (var i = 0; i < lengthOfArray; i++) {
        arrayOfElements[i].className = 'recentPlayStop fa fa-play';
      }

      arrayOfElements = document.getElementsByClassName('pausePreviewButton');
      lengthOfArray = arrayOfElements.length;

      for (var i = 0; i < lengthOfArray; i++) {
        arrayOfElements[i].className = 'pausePreviewButton icon-play-right';
      }
      arrayOfElements = document.getElementsByClassName('voiceOverMusicTrack');
      lengthOfArray = arrayOfElements.length;

      if (musicId && this.state.activeAudioTrack !== musicId) {
        // document.getElementById('musicPlay' + musicId).className = 'playStop fa fa-stop';
        document.getElementById('myMusicTrackPlay').src = musicURL;
        document.getElementById('myMusicTrackPlay').currentTime = 0;
        document.getElementById('myMusicTrackPlay').play();
      }

      document.getElementById('myMusicTrackPlay').addEventListener(
        'ended',
        function () {
          _self.setState({ activeAudioTrack: null });
        },
        false
      );
      amplitude.getInstance().logEvent('track-sample-played', {
        'track-name': trackName,
        'project-id': this.state.project_id,
      });
    }
  };

  //change active track
  makeTrackActive = async (
    trackId,
    activeTrack,
    trackType,
    trackName,
    event = null,
    updateTrack = false,
    logEvent_trackSelected = true
  ) => {
    if (trackId != AppLocalStorage.getItem('trackId') || updateTrack) {
      event && event.stopPropagation();
      // var arrayOfElements = document.getElementsByClassName('addRemoveActiveClassForTrack');
      // var lengthOfArray = arrayOfElements.length;

      // for (var i = 0; i < lengthOfArray; i++) {
      // 	arrayOfElements[i].className = 'addRemoveActiveClassForTrack';
      // }
      // document.getElementById('track_li_' + trackId).className += ' active';
      this.setState({
        activeTrack: activeTrack,
        trackType: trackType,
        trackId: trackId,
        trackName: trackName,
        activeAudioTrack: null,
      });
      AppLocalStorage.setItem('trackType', trackType);
      AppLocalStorage.setItem('activeTrack', activeTrack);
      AppLocalStorage.setItem('trackId', trackId);
      AppLocalStorage.setItem('trackName', trackName);
      document.getElementById('myAudioPlay').src = activeTrack;
      document.getElementById('myMusicTrackPlay').src = activeTrack;
      document.getElementById('myPreviewAudioPlayForEdit').src = activeTrack;

      this.getAudioFavouritesAndRecent('', async data => {
        const recent = data.filter(rec => rec.type === 'track' && rec.category === 'recent');
        for (var recCounter = 0; recCounter < recent.length; recCounter++) {
          if (recent[recCounter].type === 'track') {
            recent[recCounter].active = false;
          }
        }
        const index = recent.findIndex(
          rec => rec.trackId === trackId && rec.type === 'track' && rec.category === 'recent'
        );
        let rec = {};
        if (index < 0) {
          rec = {
            id: generateUUID(),
            trackId: trackId,
            name: trackName,
            type: 'track',
            url: activeTrack,
            category: 'recent',
            cognito_id: this.state.username,
            date: new Date(),
          };
          recent.splice(0, 0, rec);
        } else {
          const id = recent[index].id;
          recent.splice(index, 1);
          await this.props.deleteAudioFavAndRecents({ username: this.state.username, id });
          amplitude.getInstance().logEvent('track-deselected', {
            'track-name': trackName,
            'project-id': this.state.project_id,
          });
          rec = {
            id: generateUUID(),
            trackId: trackId,
            name: trackName,
            type: 'track',
            url: activeTrack,
            category: 'recent',
            cognito_id: this.state.username,
            date: new Date(),
          };
          recent.splice(0, 0, rec);
        }
        this.setState({
          recentTracks: recent,
        });
        let myInit = {
          body: rec,
        };
        await this.props.saveAudioFavAndRecents(myInit);
        const status = this.props.saveAudioStatus;
        if (status === 'success') {
          this.refreshFavourite();
          this.refreshRecent();
          this.setState({ isAnyChange: true });
          if (logEvent_trackSelected == true) {
            amplitude.getInstance().logEvent('track-selected', {
              'track-name': trackName,
              'project-id': this.state.project_id,
            });
          }
        } else {
        }
      });
    }
  };

  setFavouritesFromFavoritesTab = trackId => {
    let favourite = [...this.state.favouriteTracks];
    favourite.splice(
      favourite.findIndex(fav => fav.trackId === trackId),
      1
    );

    this.setState({
      favouriteTracks: favourite,
      updatedFromfavorite: true,
    });
  };

  resetUpdatedFrom = () => {
    this.setState({
      updatedFromfavorite: false,
    });
  };

  //Add track to Favourite
  AddTrackToFavourite = async (trackId, trackName, trackUrl, event, addFavorite) => {
    event.stopPropagation();
    // var favourite = this.state.brandSetting.hasOwnProperty("favourites") ? this.state.brandSetting["favourites"] : [];
    this.getAudioFavouritesAndRecent('', async res => {
      let favourite = res.filter(fav => fav.category === 'favorite' && fav.type === 'track');
      for (var favCounter = 0; favCounter < favourite.length; favCounter++) {
        favourite[favCounter].active = false;
      }

      if (favourite.findIndex(fav => fav.trackId === trackId) < 0 && addFavorite) {
        var fav = {
          id: generateUUID(),
          name: trackName,
          trackId: trackId,
          type: 'track',
          url: trackUrl,
          category: 'favorite',
          cognito_id: this.state.username,
          date: new Date(),
        };
        let myInit = {
          body: fav,
        };
        favourite.splice(0, 0, fav);
        await this.props.saveAudioFavAndRecents(myInit);
        const status = this.props.saveAudioStatus;
        if (status === 'success') {
          this.refreshFavourite();
          this.refreshRecent();
          this.setState({
            favouriteTracks: favourite,
          });
          amplitude.getInstance().logEvent('track-favorited', {
            'track-name': trackName,
            'project-id': this.state.project_id,
          });
        } else {
        }
      } else {
        const index = favourite.findIndex(fav => fav.trackId === trackId);
        if (index !== -1) {
          const id = favourite[index].id;
          favourite.splice(
            favourite.findIndex(fav => fav.trackId === trackId),
            1
          );
          await this.props.deleteAudioFavAndRecents({ username: this.state.username, id });
          const status = this.props.deleteAudioStatus;
          if (status === 'success') {
            this.setState({
              favouriteTracks: favourite,
            });
            this.refreshFavourite();
            this.refreshRecent();
          } else {
          }
        }
      }
    });
  };

  refreshFavourite = () => {
    this.setState({ refreshFavourite: !this.state.refreshFavourite });
  };

  UpdateFavourite = () => {
    // this.refreshFavourite();
  };

  UpdateRecent = () => {
    this.props.getAudioFavAndRecents(this.state.username);
    // this.refreshRecent();
  };

  refreshRecent = () => {
    this.setState({ refreshRecent: !this.state.refreshRecent });
  };

  UpdateVoiceOver = () => {
    // this.refreshVoiceOver();
  };

  isVoiceOverPreExisting = () => {
    let voiceOverTracks = this.state.voiceOverTracks;
    let voiceOverPreExists = false;
    for (let voiceOverCounter = 0; voiceOverCounter < voiceOverTracks.length; voiceOverCounter++) {
      if (voiceOverTracks[voiceOverCounter].active) {
        voiceOverPreExists = true;
        break;
      }
    }
    return voiceOverPreExists;
  };

  createSentenceContainer(
    overrideStyles,
    sentence,
    keywords,
    theme,
    isOutroScene,
    isFullWidth,
    layout,
    logoSrc,
    hideText,
    animationContainerElement,
    fontSize,
    itemId
  ) {
    if (overrideStyles.paragraphWidth) {
      overrideStyles['width'] = overrideStyles.paragraphWidth;
    }

    if (overrideStyles.FontNameForFront) {
      overrideStyles.fontName = overrideStyles.FontNameForFront;
    } else {
      overrideStyles.FontNameForFront = CreateVideo_Step3.getFrontFontName(overrideStyles.fontName);
      overrideStyles.fontName = overrideStyles.FontNameForFront;
    }

    let lines = [];
    if (!hideText) {
      lines = AnimationHelper.calculateHighlightedLines(sentence, undefined, theme, overrideStyles, false);
    }
    var strongTagCarryOver = false;
    for (let index = 0; index < lines.length; index++) {
      let line = lines[index];
      let countStrongStartTag = (line.match(/<strong>/g) || []).length;
      let countStrongEndTag = (line.match(/<\/strong>/g) || []).length;
      let html = '';
      if (
        countStrongStartTag === countStrongEndTag &&
        countStrongStartTag > 0 &&
        line.indexOf('</strong>') < line.indexOf('<strong>')
      ) {
        // strong start tag count same as strong end tag and end tag comes before start tag
        html += '<strong>' + line + '</strong>';
      } else if (countStrongStartTag === countStrongEndTag && countStrongStartTag === 0 && strongTagCarryOver) {
        // no strong tag but highlighted set of words continuing from previous line and into the next line
        html += '<strong>' + line + '</strong>';
      } else if (countStrongStartTag === countStrongEndTag) {
        html += line;
      } else if (countStrongStartTag > countStrongEndTag) {
        html += line + '</strong>';
        strongTagCarryOver = true;
      } else if (countStrongStartTag < countStrongEndTag) {
        html += '<strong>' + line;
        strongTagCarryOver = false;
      }
      line = html;
      lines[index] = line;
    }
    let sentenceContainerElement = document.createElement('div');
    sentenceContainerElement.classList.add('sentences');
    sentenceContainerElement.classList.add('sentences-preview');
    if (itemId) {
      sentenceContainerElement.id = 'disp' + itemId.replaceAll('-', '');
    } else {
      sentenceContainerElement.id = 'sentenceElement';
    }
    if (isOutroScene) {
      //sentenceContainerElement.classList.add("outro-scene");
    }
    //if (!isFullWidth) {
    if (overrideStyles.topCoordinate || overrideStyles.leftCoordinate) {
      sentenceContainerElement.classList.add('have-custom-coordinates');
    }
    if (overrideStyles.preset) {
      sentenceContainerElement.classList.add('position-preset');
      sentenceContainerElement.classList.add(overrideStyles.preset);
    }
    sentenceContainerElement.style.top = overrideStyles.topCoordinate;
    let textAlignClassName = '';
    if (overrideStyles.textAlign === 'left') {
      textAlignClassName = 'text-align-left';
    } else if (overrideStyles.textAlign === 'center') {
      textAlignClassName = 'text-align-center';
    } else if (overrideStyles.textAlign === 'right') {
      textAlignClassName = 'text-align-right';
    }
    if (textAlignClassName !== '' && !isOutroScene) {
      sentenceContainerElement.classList.add(textAlignClassName);
    }
    //}
    if (overrideStyles.decoration && overrideStyles.decoration.length > 0) {
      sentenceContainerElement.classList.add(overrideStyles.decoration);
    }
    if (overrideStyles.case) {
      sentenceContainerElement.classList.add(overrideStyles.case);
    }

    sentenceContainerElement.style.left = overrideStyles.leftCoordinate;
    // sentenceContainerElement.style.top = overrideStyles.topCoordinate;
    sentenceContainerElement.style.width = overrideStyles.paragraphWidth;
    if (isOutroScene) {
      sentenceContainerElement.classList.add('outro-scene');
      sentenceContainerElement.style.top = '0';
      sentenceContainerElement.style.width = '100%';
      sentenceContainerElement.style['align-items'] = 'center';
      sentenceContainerElement.style.height = '100%';
      sentenceContainerElement.style.display = 'flex';
      sentenceContainerElement.style['flex-direction'] = 'column';
      sentenceContainerElement.style['justify-content'] = 'center';
      if (layout === 'logo' || layout === 'logotext') {
        var logoElement = document.createElement('img');
        logoElement.classList.add('mr-auto');
        logoElement.src = logoSrc;
        logoElement.style.marginBottom = '20px';
        let imageContainerElement = document.createElement('div');
        imageContainerElement.classList.add('logo_box1');
        imageContainerElement.appendChild(logoElement);
        sentenceContainerElement.appendChild(imageContainerElement);
      }
      if (layout === 'logotext' || layout === 'text') {
        hideText = false;
      }
    } else {
      sentenceContainerElement.style.display = 'block';
      if (isFullWidth) {
        sentenceContainerElement.style.padding = 16 + 0.1 * fontSize + 'px';
        //sentenceContainerElement.style.minHeight = 100 / 3 + '%';
        sentenceContainerElement.style.width = '100%';
        if (overrideStyles.preset) {
          if (
            overrideStyles.preset == 'bottom-center' ||
            overrideStyles.preset == 'bottom-left' ||
            overrideStyles.preset == 'bottom-right'
          ) {
            sentenceContainerElement.classList.remove(overrideStyles.preset);
            sentenceContainerElement.classList.add('full-width-bottom');
          }
          sentenceContainerElement.classList.add('full-width-style');
        }
        //sentenceContainerElement.style.justifyContent = 'center';
        //sentenceContainerElement.style.display = 'flex';
        //sentenceContainerElement.style.flexDirection = 'column';
        //sentenceContainerElement.style.alignContent = 'center';
        //sentenceContainerElement.style.alignItems = 'center';
        //sentenceContainerElement.style.setProperty('bottom', '0', 'important');
        //sentenceContainerElement.style.setProperty('left', '10px', 'important');
      }
    }
    sentenceContainerElement = animationContainerElement.appendChild(sentenceContainerElement);
    if (!isOutroScene || (isOutroScene && layout === 'text') || layout === 'logotext') {
      if (!hideText) {
        for (let line of lines) {
          let sentenceParagraphElement = document.createElement('p');
          sentenceParagraphElement.style.fontSize = `${AnimationHelper.convertPttoPx(fontSize)}px`;
          sentenceParagraphElement.style.marginBottom = '0px';
          const fontNameParts = overrideStyles.FontNameForFront && overrideStyles.FontNameForFront.split(';');
          if (fontNameParts && fontNameParts.length >= 1) {
            sentenceParagraphElement.style.fontFamily = fontNameParts[0].trim();
            if (fontNameParts[1] && fontNameParts[1].trim().startsWith('font-weight')) {
              const fontWeight = fontNameParts[1].trim().split(':')[1].trim();
              sentenceParagraphElement.style.fontWeight = fontWeight;
            } else {
              sentenceParagraphElement.style.fontWeight = 'normal';
            }
          }
          sentenceParagraphElement = sentenceContainerElement.appendChild(sentenceParagraphElement);
          let sentenceContentElement = document.createElement('span');
          sentenceContentElement.classList.add('content-line');
          sentenceContentElement.innerHTML = line;
          sentenceParagraphElement.appendChild(sentenceContentElement);
        }
      }
    }
    return hideText;
  }

  //remove track from local storage
  removeVoiceOverTrackFromStorage = () => {
    const trackId = AppLocalStorage.getItem('voiceOverTrackId');
    const trackName = AppLocalStorage.getItem('voiceOverTrackName');
    amplitude.getInstance().logEvent('voice-deselected', {
      name: trackName,
      'project-id': this.state.project_id,
    });

    AppLocalStorage.removeItem('voiceOverTrackType');
    AppLocalStorage.removeItem('voiceOverTrackActive');
    AppLocalStorage.removeItem('voiceOverTrackId');
    AppLocalStorage.removeItem('voiceOverTrackName');
    AppLocalStorage.removeItem('voiceOverTrackCategory');
    this.UpdateIsActiveVoiceOver(trackId, false);
    this.UpdateRecent();
    this.UpdateFavourite();
    this.UpdateVoiceOver();
    this.setState({
      showAlertNotification: 'Voiceover removed',
      alertSeverity: 'success',
    });
  };

  UpdateIsActiveVoiceOver = (trackId, isActive) => {
    let voiceOverTracks = [...this.state.voiceOverTracks];
    let voiceOverPreExists = false;
    for (let voiceOverCounter = 0; voiceOverCounter < voiceOverTracks.length; voiceOverCounter++) {
      voiceOverTracks[voiceOverCounter] = { ...voiceOverTracks[voiceOverCounter], active: false };
      if (voiceOverTracks[voiceOverCounter].trackId === trackId) {
        if (isActive && voiceOverTracks[voiceOverCounter].active) voiceOverPreExists = true;
        voiceOverTracks[voiceOverCounter].active = isActive;
      }
    }
    this.reduceMusicVolume(voiceOverPreExists);
    this.setState({ isAnyChange: true, voiceOverTracks, timeChangedPostAIVO: undefined });
  };

  refreshVoiceOver = () => {
    this.setState({ refreshVoiceOver: !this.state.refreshVoiceOver });
  };

  //remove track from local storage
  removeTrackFromStorage = async (trackId, trackName, event) => {
    event.stopPropagation();
    var arrayOfElements = document.getElementsByClassName('addRemoveActiveClassForTrack');
    var lengthOfArray = arrayOfElements.length;

    for (var i = 0; i < lengthOfArray; i++) {
      arrayOfElements[i].className = 'addRemoveActiveClassForTrack on-hover-event';
    }
    var recent = this.state.brandSetting.hasOwnProperty('recent') ? this.state.brandSetting['recent'] : []; //localStorage.getItem("recent") ? JSON.parse(localStorage.getItem("recent")) : [];
    for (var recCounter = 0; recCounter < recent.length; recCounter++) {
      if (recent[recCounter].trackId === parseInt(AppLocalStorage.getItem('trackId'))) {
        recent[recCounter].active = false;
      }
    }

    var favourite = this.state.brandSetting.hasOwnProperty('favourites') ? this.state.brandSetting['favourites'] : [];
    for (var favCounter = 0; favCounter < favourite.length; favCounter++) {
      if (favourite[favCounter].trackId === parseInt(AppLocalStorage.getItem('trackId'))) {
        favourite[favCounter].active = false;
      }
    }

    var brandSetting = this.state.brandSetting;
    brandSetting['recent'] = recent;
    brandSetting['favourites'] = favourite;
    let apiName = 'brandSettings';
    let path = '/brandSettings';
    let myInit = {
      body: brandSetting,
    };
    amplitude.getInstance().logEvent('track-deselected', {
      'track-name': trackName,
      'project-id': this.state.project_id,
    });
    AppLocalStorage.removeItem('trackType');
    AppLocalStorage.removeItem('activeTrack');
    AppLocalStorage.removeItem('trackId');
    AppLocalStorage.removeItem('trackName');
    this.UpdateRecent();
    this.UpdateFavourite();
    this.setState({ isAnyChange: true });
    await this.props.saveBrandSettings(myInit);
    const status = this.props.saveSettingsStatus;
    if (status === 'success') {
    } else {
    }
  };

  //open share video popup
  shareVideoPopup = event => {
    // document.getElementById('GenerateVideo').style.display = 'none';
    this.setState({
      OverlayMessage: 'Please wait...',
      displayGenerateVideo: false,
    });
    document.getElementById('txtShareTitle').value = this.state.summaryJsonText[0].sentence
      .replace(/<strong>/g, '')
      .replace(/<\/strong>/g, '');
    this.setState({
      txtShareTitle: this.state.summaryJsonText[0].sentence.replace(/<strong>/g, '').replace(/<\/strong>/g, ''),
    });
    document.getElementById('txtShareDescription').value = this.state.metaDescription;
    this.setState({ txtShareDescription: this.state.metaDescription });
    document.getElementById('txtShareTags').value = this.state.articleKeywords;
    this.setState({ txtShareTags: this.state.articleKeywords, displayShareVideo: true });
    // document.getElementById('shareVideo').style.display = 'block';
  };

  //close share video popup
  CloseVideoShare = event => {
    this.setState({
      displayGenerateVideo: true,
      displayShareVideo: false,
    });
    // document.getElementById('shareVideo').style.display = 'none';
    // document.getElementById('GenerateVideo').style.display = 'block';
  };

  cancelIntervalTimerVoiceover = () => {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  };

  cancelIntervalTimerVideoGen = () => {
    if (this.timerIdVideoGen) {
      clearInterval(this.timerIdVideoGen);
      this.timerIdVideoGen = null;
    }
  };

  cancelIntervalTimerElements = () => {
    if (this.timerIdElements) {
      clearInterval(this.timerIdElements);
      this.timerIdElements = null;
    }
  };

  cancelIntervalTimers = () => {
    this.cancelIntervalTimerVoiceover();
    this.cancelIntervalTimerVideoGen();
    this.cancelIntervalTimerElements();
  };

  //close generate video popup
  CloseGenerateVideo = failed => {
    this.cancelIntervalTimers();
    if (this.state.videoGenerationResponseId) {
      amplitude.getInstance().logEvent('video-generation-canceled');
      this.props.deleteGeneratedVideo({
        exportId: this.state.videoGenerationResponseId,
        isCSV: this.state.generateCSV,
      });
    }
    this.props.stopVideoGeneration();
    this.props.generateVideoStatus({ step: 1 });
    this.setState(
      {
        displayGenerateVideo: false,
        showSave: true,
        copy: false,
        hasExportID: false,
      },
      () => {
        setTimeout(() => {
          if (this.state.videoId) {
            this.setState({
              videoId: null,
            });
          }
          // document.getElementById('GenerateVideo').style.display = 'none';
          const timeTakenInStepThreeInterval = setInterval(() => {
            this.timeTakenInStepThree = this.timeTakenInStepThree + 1;
          }, 1000);
          this.setState({
            timeTakenInStepThreeInterval,
          });
          if (this.state.timeTakenToGenerateVideo !== undefined) {
            clearInterval(this.state.timeTakenToGenerateVideo);
            this.setState({
              timeTakenInSeconds: 0,
            });
          }
          if (this.state.intervalGenerateVideoMessage !== undefined)
            clearInterval(this.state.intervalGenerateVideoMessage);
          if (this.state.abortController !== undefined) this.state.abortController.cancel();
          if (this.state.abortControllerGenration !== undefined) this.state.abortControllerGenration.cancel();

          setTimeout(() => {
            if (this.state.GenerateVideoHeading === 'Video generated') {
              this.setState({
                showUserQuestionnaire: true,
              });
            }
          }, 3000);
        }, 100);
      }
    );
  };

  showDeleteConfirmationDialog = () => {
    if (!this.state.restrictUsers && this.state.showQuotaExceeded) {
      return (
        <DialogWithButtonAndIcon
          icon={<WarningAmberIcon color="error" />}
          iconBgPaletteColor={'error.lighter'}
          open={this.state.showQuotaExceeded}
          title={'Unable to Generate'}
          message={
            'This request exceeds your available AI Voice Quota. To continue, select a standard voice or edit to fit within your remaining minutes.'
          }
          primaryButtonLabel={'OK'}
          primaryButtonOnClick={() => this.setState({ showQuotaExceeded: false })}
          primaryButtonColor={'primary.main'}
        />
      );
    } else {
      return <></>;
    }
  };

  showBrandSwitchConfirmationDialog = () => {
    if (this.state.showBrandSwitchConfirmationDialog) {
      return (
        <DialogWithButtonAndIcon
          icon={<QuestionMarkOutlinedIcon color="info" />}
          iconBgPaletteColor={'info.lighter'}
          open={this.state.showBrandSwitchConfirmationDialog}
          title={'Hold on!'}
          message={'Brand changes will be applied to all scenes. Do you want to go ahead?'}
          primaryButtonLabel={'Continue'}
          primaryButtonOnClick={async () => {
            let skipVO = this.state.source == 'transcribe' ? true : false;
            await this.applyBrand(this.state.showBrandSwitchConfirmationDialog, skipVO);
            this.setState({
              showBrandSwitchConfirmationDialog: false,
              showAlertNotification: 'brand applied successfully',
            });
          }}
          primaryButtonColor={'primary.main'}
          secondaryButtonLabel={'Cancel'}
          secondaryButtonOnClick={() => this.setState({ showBrandSwitchConfirmationDialog: false })}
        />
      );
    } else {
      return <></>;
    }
  };

  //get voice over url for preview and download video
  async getVoiceOverTrackURL(
    voice,
    speed,
    hasVoiceOverSelected,
    previewSceneId,
    showSceneNumber,
    options = {},
    showPreviewProgress,
    isGeneratevideo,
    eventSource = null,
    isElevenLabsVOParam = false,
    trackName
  ) {
    const selectedVOTrackId = AppLocalStorage.getItem('voiceOverTrackId');
    if (!trackName && depreciatedVoiceovers.includes(+selectedVOTrackId)) {
      this.setState({
        showVoPopup: true,
        durationUpdatedScenes: {
          loading: false,
          sceneIds: this.state.durationUpdatedScenes?.sceneIds || [],
          sceneIndices: this.state?.durationUpdatedScenes?.sceneIndices || [],
          isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
          updatedSceneDuration: this.state?.durationUpdatedScenes?.updatedSceneDuration || [],
        },
        applyingAudio: null,
        isAnyChange: true,
        voiceoverprogressStatus: 0,
      });
      return;
    }
    const voiceOverResult = {
      success: false,
      error: false,
    };

    const axios = require('axios');
    const signal = axios.CancelToken.source();
    let voiceOverData = !previewSceneId && !options.voiceOverAutoSync ? this.getGeneratedVOFromProject(voice) : null;
    this.setState({ abortController: signal, cancelingVO: null, cancelRequestSent: false, voiceoverprogressStatus: 0 });
    let isElevenLabsVO;
    if (eventSource) {
      isElevenLabsVO =
        eventSource === 'tracklist'
          ? isElevenLabsVOParam
          : AppLocalStorage.getItem('voiceOverTrackCategory') === 'Eleven Labs';
      if (isElevenLabsVO && this.state.textToSpeechDurationValue && !voiceOverData) {
        if (this.state.updatedDuration >= this.state.textToSpeechDurationValue) {
          this.setState({
            showQuotaExceeded: true,
            applyingAudio: false,
            durationUpdatedScenes: {
              loading: false,
              sceneIds: this.state?.durationUpdatedScenes?.sceneIds || [],
              sceneIndices: this.state?.durationUpdatedScenes?.sceneIndices || [],
              isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
              updatedSceneDuration: this.state?.durationUpdatedScenes?.updatedSceneDuration || [],
            },
          });
          return;
        } else {
        }
      }
    }
    let { fetchVoiceOver, VoiceOverTrackCreationJson, isOutroPlayed, timeChangedPostAIVO } =
      await this.prepareVoiceOverTrackData(
        voice,
        speed,
        hasVoiceOverSelected,
        previewSceneId,
        showSceneNumber,
        true,
        options,
        eventSource
      );
    if (VoiceOverTrackCreationJson.sentences.length == 0) fetchVoiceOver = false;

    if (this.state.videoVolume !== undefined && this.state.videoVolume !== null) {
      let baseLevel = 50;
      VoiceOverTrackCreationJson.amplify_level = ((this.state.videoVolume - baseLevel) / 100) * 2;
    }

    let voiceOverURL = null;
    if (fetchVoiceOver === true) {
      if (isGeneratevideo) {
        this.voiceOverProgress = this.videoGenProgress || 0;
        this.cancelIntervalTimerVideoGen();
        this.timerId = setInterval(() => {
          if (this.voiceOverProgress < VOICEOVER_PROGRESS_LIMIT) {
            this.props.createElementsProgress(
              this.voiceOverProgress === 0 ? 1 : this.voiceOverProgress,
              'Preprocessing audio...'
            );
            this.voiceOverProgress++;
          } else {
            this.cancelIntervalTimers();
          }
        }, 1000);
      }

      if (!voiceOverData) {
        if (eventSource === 'tracklist' || eventSource === 'duration') {
          this.setState({
            showAlertNotification: isElevenLabsVO
              ? "Generating hyper-realism for your project! We'll notify you when your premium voice is applied."
              : "Generating the voice over. We'll notify you when it is applied.",
            alertSeverity: 'info',
          });
        }
        if (!voice) VoiceOverTrackCreationJson.voice = 1005; // temporary hack as backend code expects a valid voiceover track id even when selected AI voiceover is null
        await this.props.getVoiceOverTrackForPreview({ abortController: signal, VoiceOverTrackCreationJson, options });
        if (this.props.voiceOverDataResponseID) {
          this.getVoiceOverQuota(true);
        }

        voiceOverData = this.props.voiceOverData;
      }
      if (voiceOverData && voiceOverData.error_code) {
        if (voiceOverData.error_code === 'QUOTA_EXCEEDED') {
          this.setState({
            showQuotaExceeded: true,
            applyingAudio: null,
            voiceoverprogressStatus: 0,
            durationUpdatedScenes: {
              loading: false,
              sceneIds: this.state?.durationUpdatedScenes?.sceneId || [],
              sceneIndices: this.state?.durationUpdatedScenes?.sceneIndices || [],
              isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
              updatedSceneDuration: this.state?.durationUpdatedScenes?.updatedSceneDuration || [],
            },
          });
        } else if (voiceOverData.error_code === 'VOICE_OVER_GENERATION_CANCELLED') {
          this.setState({
            durationUpdatedScenes: {
              loading: false,
              sceneIds: this.state.durationUpdatedScenes?.sceneIds || [],
              sceneIndices: this.state?.durationUpdatedScenes?.sceneIndices || [],
              isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
              updatedSceneDuration: this.state?.durationUpdatedScenes?.updatedSceneDuration || [],
            },
            applyingAudio: null,
            voiceoverprogressStatus: 0,
          });
          this.getVoiceOverQuota(true);
          this.cancelingAudioStatus(false);
          this.setState({ showAlertNotification: 'Voice over application cancelled', alertSeverity: 'error' });
        } else {
          this.setState({
            videoGenerationError: voiceOverData,
            showVideoGenerationError: true,
            videoGenerationErrorTitle: 'Voice over failed to generate',
          });
          try {
            amplitude.getInstance().logEvent('voice-generation-failure', {
              name: trackName,
              'voice-type': isElevenLabsVO ? 'Elevenlabs' : 'Standard',
            });
          } catch (error) {
            amplitude.getInstance().logEvent('voice-generation-failure', {
              'event-name': 'voice-selected',
            });
          }
        }
        voiceOverResult.success = false;
        voiceOverResult.error = true;
      } else {
        if (
          showPreviewProgress == undefined ||
          this.state.showPreviewProgress == undefined ||
          showPreviewProgress === this.state.showPreviewProgress
        ) {
          if (
            typeof voiceOverData != 'undefined' &&
            voiceOverData &&
            !_.isEmpty(voiceOverData) &&
            !voiceOverData.isCanceled &&
            typeof voiceOverData === 'object'
          ) {
            const data = voiceOverData;
            var Url = data.URL;
            var videoLength = data.total_length;
            var time = data.time_markers;
            //this.state.voiceOverURL = {
            voiceOverURL = {
              Url: Url,
              totalLength: videoLength,
              isAnyChange: true,
              timePerSceneForVoiceOver: [],
              originalTimePerFrameForEachScene: [],
            };

            if (options && options.voiceOverAutoSync) {
              amplitude.getInstance().logEvent('voiceover-autosync-response', {
                'audio-length-ms': videoLength,
                'time-markers-ms': time,
              });
              if (time?.length > 0) {
                time.map((myTime, i) => {
                  let sceneTime = myTime;
                  if (i === 0) {
                    voiceOverURL.timePerSceneForVoiceOver.push(parseInt(sceneTime));
                  } else {
                    voiceOverURL.timePerSceneForVoiceOver.push(parseInt(sceneTime - time[i - 1]));
                  }
                  voiceOverURL.originalTimePerFrameForEachScene.push(sceneTime);
                });
                voiceOverResult.error = false;
                voiceOverResult.success = true;
                let notificationMsg;
                if (this.state.cancelRequestSent) {
                  this.props.showErrorNotification('Voiceover cancellation failed');
                } else {
                  notificationMsg =
                    eventSource === 'tracklist' || eventSource === 'duration' ? 'Voiceover applied' : '';
                  if (
                    this.state.durationUpdatedScenes?.sceneIds?.length > 0 ||
                    this.state?.durationUpdatedScenes?.isSceneDeleted
                  ) {
                    notificationMsg =
                      eventSource === 'tracklist' || eventSource === 'duration' ? 'Voiceover changes applied' : '';
                    try {
                      let eventProperty;
                      if (eventSource === 'tracklist') {
                        eventProperty = 'Voice over tab';
                      } else if (eventSource === 'preview') {
                        eventProperty = 'Preview';
                      } else if (eventSource === 'duration') {
                        eventProperty = 'Duration';
                      }
                      amplitude.getInstance().logEvent('voice-changes-applied', {
                        'changes applied from': eventProperty,
                        'quota left': this.state.textToSpeechDurationValue,
                      });
                    } catch (error) {
                      amplitude.getInstance().logEvent('log-failed', {
                        'event-name': 'voice-changes-applied',
                      });
                    }
                  }
                  this.setState({
                    showAlertNotification: notificationMsg,
                    alertSeverity: 'success',
                    cancelRequestSent: false,
                  });
                }
              } else {
                voiceOverResult.error = true;
                voiceOverResult.success = false;
              }
            } else {
              time.map((myTime, i) => {
                let sceneTime = myTime;
                if (i === 0) {
                  voiceOverURL.timePerSceneForVoiceOver.push(parseInt(sceneTime));
                } else {
                  voiceOverURL.timePerSceneForVoiceOver.push(parseInt(sceneTime - time[i - 1]));
                }
                voiceOverURL.originalTimePerFrameForEachScene.push(sceneTime);
              });
              // scene duration returned from backend could be different so overwrite this.state.timePerFrame values
              let timePerFrame = [...this.state.timePerFrame];
              let subSentenceIndex = 0;
              if (previewSceneId) {
                subSentenceIndex = this.state.subSentencesArray.findIndex(scene => scene.sceneId === previewSceneId);
              }
              for (let i = 0; i < voiceOverURL.timePerSceneForVoiceOver.length; i++) {
                const subScene = this.state.subSentencesArray[i];
                if (!subScene) {
                  console.log(i);
                }
                if (subScene?.transcription) continue;
                // if ((subScene.showSceneNumber === "Custom Intro Scene" && subScene.settings && subScene.settings.hideScene) ||
                // 	(subScene.showSceneNumber === "Outro Scene" && subScene.settings && subScene.settings.hideScene)) subSentenceIndex++;

                if (timePerFrame[i + subSentenceIndex] !== undefined) {
                  timePerFrame[i + subSentenceIndex] = Math.round(voiceOverURL.timePerSceneForVoiceOver[i] / 10) / 100; // convert ms to sec & round to 2 decimal
                } else {
                  timePerFrame.push(voiceOverURL.timePerSceneForVoiceOver[i] / 1000);
                }
              }
              if (timeChangedPostAIVO === false && !previewSceneId) this.setState({ timeChangedPostAIVO: false });
              // fix to remove additional elements in timePerFrame that was caused due to a earlier bug
              if (timePerFrame.length > this.state.subSentencesArray.length)
                timePerFrame = timePerFrame.slice(0, this.state.subSentencesArray.length);
              this.setState({ timePerFrame });
              if (
                this.state.brandSetting.outroStyle &&
                this.state.brandSetting.outroStyle['showStyle'] &&
                !isOutroPlayed &&
                this.state.subSentencesArray[this.state.subSentencesArray.length - 1].showSceneNumber === 'Outro Scene'
              ) {
                let manualOutroDuration = this.state.timePerFrame[this.state.subSentencesArray.length - 1];
                let outroDuration;
                // if user has modified default outro time and time marker doesnt have outro entry, add the entry
                if (manualOutroDuration > 0 && Math.abs(manualOutroDuration - this.state.defaultOutroTimeInSec) > 0.1) {
                  outroDuration = manualOutroDuration * 1000;
                } else {
                  outroDuration = this.state.defaultOutroTimeInMiniSec;
                }
                voiceOverURL.timePerSceneForVoiceOver.push(outroDuration);
              }
              this.updateVOInProject(voiceOverData, voice);
              voiceOverResult.success = true;
              let notificationMsg;
              if (this.state.cancelRequestSent) {
                this.props.showErrorNotification('Voiceover cancellation failed');
              } else {
                notificationMsg = eventSource === 'tracklist' || eventSource === 'duration' ? 'Voiceover applied' : '';
                if (
                  this.state.durationUpdatedScenes?.sceneIds?.length > 0 ||
                  this.state?.durationUpdatedScenes?.isSceneDeleted
                ) {
                  notificationMsg =
                    eventSource === 'tracklist' || eventSource === 'duration' ? 'Voiceover changes applied' : '';
                  try {
                    let eventProperty;
                    if (eventSource === 'tracklist') {
                      eventProperty = 'Voice over tab';
                    } else if (eventSource === 'preview') {
                      eventProperty = 'Preview';
                    } else if (eventSource === 'duration') {
                      eventProperty = 'Duration';
                    }
                    amplitude.getInstance().logEvent('voice-changes-applied', {
                      'changes applied from': eventProperty,
                      'quota left': this.state.textToSpeechDurationValue,
                    });
                  } catch (error) {
                    amplitude.getInstance().logEvent('log-failed', {
                      'event-name': 'voice-changes-applied',
                    });
                  }
                }
              }

              this.setState({
                showAlertNotification: notificationMsg,
                alertSeverity: 'success',
                cancelRequestSent: false,
              });
            }
          } else {
            if (!voiceOverData || !voiceOverData.isCanceled) {
              await refreshSession();
              const filePath = this.state.username + '/project/' + this.state.project_id + '/tts-failed-backup.json';
              Storage.put(filePath, JSON.stringify(VoiceOverTrackCreationJson), {
                level: 'public',
                ACL: 'public-read',
              }).then(res => {
                amplitude.getInstance().setUserId(this.state.user.attributes.email);
                amplitude.getInstance().setUserProperties({
                  Username: this.state.user.attributes.email,
                });
                amplitude.getInstance().logEvent('tts-failed-backup', {
                  'backup-json': MediaStorage.Instance.GetUserUploadUrl(filePath, 'public'),
                });
              });
            }
            this.setState({
              // OverlayMessage: 'Please wait...',
              displayVideoProgressBar: false,
              generateError: !voiceOverData || !voiceOverData.isCanceled,
              voiceOverError: true,
              displayGenerateVideo: false,
              showSave: true,
              copy: false,
              durationUpdatedScenes: {
                loading: false,
                sceneIds: this.state.durationUpdatedScenes?.sceneIds,
                sceneIndices: his.state?.durationUpdatedScenes?.sceneIndices || [],
                isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
                updatedSceneDuration: this.state?.durationUpdatedScenes?.updatedSceneDuration || [],
              },
            });

            voiceOverResult.success = false;
            voiceOverResult.error = true;
          }
        }
      }
    } else {
      voiceOverURL = null;
      voiceOverResult.success = false;
      voiceOverResult.error = false;
    }
    if (previewSceneId) {
      this.state.voiceOverURLForScene = voiceOverURL;
    } else {
      // setting voiceOverURL in state (setState not used to avoid re-render, though state object immutability rule not followed)
      this.state.voiceOverURL = voiceOverURL;
    }
    if (voiceOverResult.success) {
      this.setState({
        durationUpdatedScenes: {
          loading: false,
          sceneIds: [],
          sceneIndices: [],
          isSceneDeleted: false,
          updatedSceneDuration: this.state.durationUpdatedScenes?.updatedSceneDuration || [],
        },
        isAnyChange: true,
        updatedDuration: 0,
      });
    }
    return voiceOverResult;
  }

  startApplyVoiceOver = async trackObj => {
    updateProgressCount(0, true);
    this.setState({
      durationUpdatedScenes: {
        loading: true,
        sceneIds: this.state.durationUpdatedScenes?.sceneIds || [],
        sceneIndices: this.state?.durationUpdatedScenes?.sceneIndices || [],
        isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
        updatedSceneDuration: this.state?.durationUpdatedScenes?.updatedSceneDuration || [],
      },
      applyingAudio: trackObj.trackId,
      isAnyChange: true,
      timeChangedPostAIVO: undefined,
    });
    const voiceOverResult = await this.getVoiceOverTrackURL(
      `${trackObj.trackId}`,
      this.state.speedValue,
      voiceOverTrackSelected(),
      null,
      null,
      {},
      false,
      false,
      'tracklist',
      trackObj.Category === 'Eleven Labs' || trackObj.service === 'elevenlabs',
      trackObj.trackName
    );
    this.setState({ applyingAudio: null, voiceoverprogressStatus: 0 });
    updateProgressCount(0, true);
    return voiceOverResult;
  };

  updateVideoduration = async trackId => {
    this.setState({
      durationUpdatedScenes: {
        loading: true,
        sceneIds: this.state.durationUpdatedScenes?.sceneIds || [],
        sceneIndices: this.state?.durationUpdatedScenes?.sceneIndices || [],
        isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
        updatedSceneDuration: this.state?.durationUpdatedScenes?.updatedSceneDuration || [],
      },
      applyingAudio: trackId,
    });
    const voiceOverResult = await this.getVoiceOverTrackURL(
      trackId || getSelectedVoiceOverTrack(),
      this.state.speedValue,
      voiceOverTrackSelected(),
      null,
      null,
      {},
      false,
      false,
      'duration'
    );
    if (voiceOverResult.success) {
      this.setState({
        durationUpdatedScenes: {
          loading: false,
          sceneIds: this.state.durationUpdatedScenes?.sceneIds || [],
          sceneIndices: this.state?.durationUpdatedScenes?.sceneIndices || [],
          isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
          updatedSceneDuration: this.state?.durationUpdatedScenes?.updatedSceneDuration || [],
        },
        applyingAudio: null,
        isAnyChange: true,
        voiceoverprogressStatus: 0,
      });
    }
  };

  prepareVoiceOverTrackData = async (
    voice,
    speed,
    hasVoiceOverSelected,
    previewSceneId,
    showSceneNumber,
    videoVoiceOver = false,
    options = {},
    eventSource = null
  ) => {
    const language =
      SCRIPT_LANGUAGES.filter(lang => lang.code === this.state.filterLanguage)[0]?.value || this.state.filterLanguage;
    const {
      summaryJsonText: summaryJsonTextIn,
      subSentencesArray: subSentencesArrayIn,
      voiceOverURL: voiceOverURLIn,
    } = previewSceneId ? this.getScenePreviewArrays(previewSceneId, showSceneNumber) : this.state;
    const VoiceOverTrackCreationJson = {
      sentences: [],
      voice: voice,
      speed: speed,
      project_id: this.state.project_id,
      user_id: this.state.username,
      language,
    };

    let isOutroPlayed = false;
    let fetchVoiceOver = false;
    let subSentencesArrayIndex = 0;
    let timePerFrameIndex = 0;
    const isVoiceOverOnEntireVideo = this.voiceOverOnEntireVideo();
    const isTransitionApplied =
      options &&
      options.videoGeneration &&
      this.state.isTransitions &&
      this.state.transitionId &&
      this.state.transitionId != '' &&
      this.state.transitionId != 'none' &&
      typeof this.state.transitionId != 'number';
    let timeChangedPostAIVO;

    if (previewSceneId !== undefined) {
      let subSentenceIndex = this.state.subSentencesArray.findIndex(scene => scene.sceneId === previewSceneId);
      if (subSentenceIndex > -1) timePerFrameIndex = subSentenceIndex;
    }

    for (let i = 0; i < summaryJsonTextIn.length; i++) {
      let text = summaryJsonTextIn[i];
      let subSentencesArray = subSentencesArrayIn.slice(
        subSentencesArrayIndex,
        subSentencesArrayIndex + text.subsentences.length
      );
      let timePerFrameArrayForText = this.state.timePerFrame.slice(
        timePerFrameIndex + subSentencesArrayIndex,
        timePerFrameIndex + subSentencesArrayIndex + text.subsentences.length
      );
      subSentencesArrayIndex = subSentencesArrayIndex + text.subsentences.length;

      for (let j = 0; j < subSentencesArray.length; j++) {
        let subScene = subSentencesArray[j];
        //if (subScene.showSceneNumber === "Custom Intro Scene" && subScene.settings && subScene.settings.hideScene) continue;
        //if (subScene.showSceneNumber === "Outro Scene" && subScene.settings && subScene.settings.hideScene) continue;
        let nextSubScene = subSentencesArray[j + 1];
        let manualSceneDuration = timePerFrameArrayForText[j];
        let muteOverlayAudio = false;
        if (subScene.settings && !subScene.settings.muteClipAudio) {
          muteOverlayAudio = true;
        }

        let isRecordedVoiceover =
          subScene.recordedAudio ||
          (!subScene.recordingApplyToAll && subScene.audioSegments && subScene.audioSegments[0]);
        let isAIVoiceover = (hasVoiceOverSelected || eventSource === 'tracklist') && subScene.settings.voiceOver;

        let scene = {};
        let skipScene = false;
        if (subScene.transcription) scene.transcription = true;

        if (options && options.voiceOverAutoSync) {
          if ((text.sceneId === 'Custom Intro Scene' || text.sceneId == 'Outro Scene') && !options.hasIntroOutroInVO) {
            skipScene = true;
          } else {
            let sentenceData = this.removeBOMChar(this.getVoiceOverText(subScene.sentence));
            scene.sentence = sentenceData;
            scene['sub-sentences'] = [sentenceData];
          }
        } else if (isRecordedVoiceover) {
          if (subScene.recordedAudio) {
            // entire video recordedAudio
            scene.audio = subScene.recordedAudio;
          } else if (subScene.audioSegments && subScene.audioSegments[0]) {
            // subscene level recordedAudio
            scene.audio = subScene.audioSegments[0].recordedAudio;
          }
          if (subScene.audioSegments && subScene.audioSegments[0]) {
            scene.segments = [{ start: subScene.audioSegments[0].start, end: subScene.audioSegments[0].end }];
          }
          scene.duration = manualSceneDuration;
          if (text.sceneId === 'Outro Scene') isOutroPlayed = true;
        } else if (isAIVoiceover) {
          scene.voice_over = true;
          scene.sentence = this.removeBOMChar(this.getVoiceOverText(subScene.sentence));
          if (nextSubScene && nextSubScene.subSceneId > 1) scene.linkToNextScene = true;
          scene.duration = Math.round(manualSceneDuration * 100) / 100;
          if (
            !subScene.transcription &&
            (!this.state.timeChangedPostAIVO ||
              eventSource === 'tracklist' ||
              this.state.durationUpdatedScenes?.sceneIds?.length > 0 ||
              this.state?.durationUpdatedScenes?.isSceneDeleted) &&
            !text.isUploadedVideo &&
            scene.sentence.trim().length > 0
          ) {
            scene.duration =
              subSentencesArray[j].sceneId &&
              this.state.durationUpdatedScenes?.updatedSceneDuration?.includes(subSentencesArray[j].sceneId)
                ? scene.duration
                : 0; // set to 0 so that backend call returns the AI scene time
            timeChangedPostAIVO = false;
          }
        } else if (subScene.bRoll) {
          scene.audio = subScene.bRollUrl;
          scene.duration = manualSceneDuration;
          scene.segments = subScene.bRollSubSceneSegment;
        } else {
          scene.duration = manualSceneDuration;
          scene.mute = true;
        }
        // entire video recordedAudio & single subScene in the scene & scene duration less than 0.5sec & [1st or last scene]
        if (
          isVoiceOverOnEntireVideo &&
          text.subsentences.length === 1 &&
          scene.duration < MIN_SCENE_DURATION &&
          (i === 0 || i === summaryJsonTextIn.length - 1)
        ) {
          scene.duration = 5;
        }
        if (subScene.showSceneNumber === 'Custom Intro Scene' && subScene.settings && subScene.settings.hideScene) {
          scene.duration = 0;
          scene.segments = [];
          scene.sentence = '';
          scene.audio = '';
        }
        if (subScene.showSceneNumber === 'Outro Scene' && subScene.settings && subScene.settings.hideScene) {
          scene.duration = 0;
          scene.segments = [];
          scene.sentence = '';
          scene.audio = '';
        }
        //Add 0.033 seconds of mute outro effect duration in voice over audio on the last linked scene
        //This will only increase the total audio duration to handle the outro effect animation
        //But the time markers would remain same for each scene.
        if (isTransitionApplied && j === subSentencesArray.length - 1) {
          scene.outroEffectDuration = 0.033;
        }
        if (!skipScene) VoiceOverTrackCreationJson.sentences.push(scene);
        if (isRecordedVoiceover || isAIVoiceover || subScene.bRoll || eventSource === 'tracklist')
          fetchVoiceOver = true;
      }
    }

    return { fetchVoiceOver, VoiceOverTrackCreationJson, isOutroPlayed, timeChangedPostAIVO };
  };

  getVoiceOverText = text => {
    if (text) {
      let textElement = document.createElement('span');
      textElement.innerHTML = text;
      return (textElement.textContent || textElement.innerText).replace(/(<([^>]+)>)/gi, '');
    }
    return text;
  };

  OpenSaveProjectPopup = async (type, isRedirect = false, event) => {
    this.setState({ type: type, isRedirect: isRedirect });
    document.getElementById('myMusicTrackPlay').pause();
    document.getElementById('myAudioPlay').pause();
    document.getElementById('myPreviewAudioPlayForEdit').pause();
    document.getElementById('myPreviewVoiceOverPlayForEdit').pause();

    this.setState({
      hasErrorProjectCategory: false,
      hasErrorProjectCategoryDDL: false,
      hasErrorProjectName: false,
      popupVisibleProjectCategoryError: false,
      popupVisibleProjectDDLCategoryError: false,
      popupVisibleProjectNameError: false,
    });

    var arrayOfElements = document.getElementsByClassName('voicePlayStop');
    var lengthOfArray = arrayOfElements.length;

    for (var i = 0; i < lengthOfArray; i++) {
      arrayOfElements[i].className = 'voicePlayStop fa fa-play';
    }

    arrayOfElements = document.getElementsByClassName('playStop');
    lengthOfArray = arrayOfElements.length;

    for (var i = 0; i < lengthOfArray; i++) {
      arrayOfElements[i].className = 'playStop fa fa-play';
    }

    arrayOfElements = document.getElementsByClassName('recentPlayStop');
    lengthOfArray = arrayOfElements.length;

    for (var i = 0; i < lengthOfArray; i++) {
      arrayOfElements[i].className = 'recentPlayStop fa fa-play';
    }

    arrayOfElements = document.getElementsByClassName('pausePreviewButton');
    lengthOfArray = arrayOfElements.length;

    for (var i = 0; i < lengthOfArray; i++) {
      arrayOfElements[i].className = 'pausePreviewButton icon-play-right';
    }

    arrayOfElements = document.getElementsByClassName('voiceOverMusicTrack');
    lengthOfArray = arrayOfElements.length;

    for (var i = 0; i < lengthOfArray; i++) {
      arrayOfElements[i].className = 'voiceOverMusicTrack fa fa-play';
    }
    if (!this.state.loadProject && this.state.project_id === '') {
      this.setState({ projectName: '', projectCategory: '', ddlCategory: 'Select category' });
    }
    if (
      this.state.projectName === '' ||
      this.state.projectName === null ||
      this.state.projectName === undefined ||
      this.state.projectCategory === '' ||
      this.state.projectCategory === null ||
      this.state.projectCategory === undefined
    ) {
      this.setState({
        openSavePopup: true,
        displayDdlCategory: true,
        displayOuterDdlCategory: true,
        displayTextProjectCategory: false,
      });
      document.getElementById('saveProject').style.display = 'block';
      document.getElementById('ddlCategory').style.display = 'block';
      document.getElementById('outerDDLCategory').style.display = 'block';
      document.getElementById('txtProjectCategory').style.display = 'none';

      let saveProjectList = [];
      let distinctprojectCategory = [];
      distinctprojectCategory.push('Select category');
      var sortByProperty = function (property) {
        return function (x, y) {
          return x[property] === y[property] ? 0 : x[property] > y[property] ? 1 : -1;
        };
      };

      if (this.state.user && this.state.user.attributes.email === GlobalJs.superAdminEmail) {
        await this.props.getMyVideos('all');
      } else {
        await this.props.getMyVideos(this.state.user.username);
      }

      const status = this.props.allVideosStatus;
      if (status === 'success') {
        const response = this.props.allVideos;
        saveProjectList = response;
        let projectDetailBasedOnEachCategory = [];

        let categoryList = response.filter(
          (response, index, self) => index === self.findIndex(t => t.projectCategory === response.projectCategory)
        );
        categoryList.map((category, index) => {
          distinctprojectCategory.push(category.projectCategory);
        });
        distinctprojectCategory.push('Add new category');
        distinctprojectCategory.sort(sortByProperty('projectCategory'));
        this.setState({
          distinctprojectCategory,
          saveProjectList,
        });
      } else {
      }
    } else this.saveProjectDetail_debounce(type);
  };

  saveProjectDetail_debounce = _.debounce(async () => {
    await this.saveProjectDetail('video');
  }, 2000);

  //save project details
  saveProjectDetail = async (type, event) => {
    await this.setState({ type: type, SaveButtonText: 'Saving...', disableSaveButton: true });
    const uniqueRandom = require('unique-random');
    const random = uniqueRandom(1, 999999999);
    let voiceOverApplied = false;
    var step3Json = {
      audio: {},
      scenes: [],
      projectName: this.state.projectName,
      projectCategory: this.state.projectCategory,
      saveDate: new Date(),
      generatedVoiceOvers: [],
      animationTheme: this.state.animationTheme.themeName,
    };
    if (this.state.scriptTxtData) {
      step3Json.scriptTxtData = this.state.scriptTxtData;
    }
    if (this.state.step2TxtData) {
      step3Json.step2TxtData = this.state.step2TxtData;
    }
    if (this.state.currentState) {
      step3Json.currentState = this.state.currentState;
    }

    if (this.state.elevenLabTrackID) {
      step3Json.elevenLabTrackID = this.state.elevenLabTrackID;
    }

    if (this.state.generatedVoiceOvers) {
      step3Json.generatedVoiceOvers = this.state.generatedVoiceOvers;
    }

    if (this.state.projectStates && this.state.projectStates.length > 0) {
      if (this.state.generatingAsyncVideo) {
        //Filter out all existing video generating or video generation states
        //As this will be the new video generation
        let states = this.state.projectStates.reduce((prev, current) => {
          if (current.name !== PROJECT_STATES.VIDEO_GENERATED && current.name !== PROJECT_STATES.VIDEO_GENERATING) {
            prev.push(current);
          }
          return prev;
        }, []);
        states.splice(0, 0, {
          responseId: this.state.videoGenerationResponseId,
          name: PROJECT_STATES.VIDEO_GENERATING,
        });
        step3Json.states = states;
        step3Json.currentState = PROJECT_STATES.VIDEO_GENERATING; // transient state
        step3Json.inProgress = true; // showing the process is started
        this.setState({
          projectStates: states,
        });
      } else {
        if (isValidValue(this.state.videoURL)) {
          const index = this.state.projectStates.findIndex(
            state => state.name == PROJECT_STATES.VIDEO_GENERATING && this.state.isGeneratedAsyncVideo
          );
          if (index != -1) {
            let states = [...this.state.projectStates];
            states[index] = {
              ...states[index],
              name: PROJECT_STATES.VIDEO_GENERATED,
            };
            step3Json.states = states;
            step3Json.currentState = PROJECT_STATES.VIDEO_GENERATED;
            this.setState({
              projectStates: states,
              isGeneratedAsyncVideo: false,
            });
          } else {
            step3Json.states = this.state.projectStates;
          }
        } else {
          step3Json.states = this.state.projectStates;
        }
      }
    } else if (this.state.generatingAsyncVideo) {
      let states = [];
      states.push({
        responseId: this.state.videoGenerationResponseId,
        name: PROJECT_STATES.VIDEO_GENERATING,
      });
      step3Json.states = states;
      step3Json.currentState = PROJECT_STATES.VIDEO_GENERATING;
      step3Json.inProgress = true;
      this.setState({
        projectStates: states,
      });
    }
    if (this.state.project_id === '' || this.state.project_id === null || this.state.project_id === undefined) {
      step3Json['cognito_id'] = this.state.user.username;
      this.setState({ cognito_id: this.state.user.username });
    } else if (this.state.cognito_id !== '' && this.state.cognito_id !== null && this.state.cognito_id !== undefined) {
      step3Json['cognito_id'] = this.state.cognito_id;
    }
    if (
      (this.state.project_id === '' || this.state.project_id === null || this.state.project_id === undefined) &&
      this.state.user &&
      this.state.user.attributes.email !== null &&
      this.state.user.attributes.email !== ''
    ) {
      step3Json['email'] = this.state.user.attributes.email;
      this.setState({ email: this.state.user.attributes.email });
    } else if (this.state.email !== '' && this.state.email !== null && this.state.email !== undefined) {
      step3Json['email'] = this.state.email;
    }
    if (
      (this.state.project_id === '' || this.state.project_id === null || this.state.project_id === undefined) &&
      getUserDisplayname(this.state.username) != ''
    ) {
      step3Json['name'] = getUserDisplayname(this.state.username);
      this.setState({ name: getUserDisplayname(this.state.username) });
    } else if (this.state.name !== '' && this.state.name !== null && this.state.name !== undefined) {
      step3Json['name'] = this.state.name;
    }
    if (this.state.url !== null && this.state.url !== '') {
      step3Json['articleUrl'] = this.state.url;
    }
    if (this.state.metaDescription !== null && this.state.metaDescription !== '') {
      step3Json['metaDescription'] = this.state.metaDescription;
    }
    if (this.state.articleKeywords !== null && this.state.articleKeywords !== '') {
      step3Json['articleKeywords'] = this.state.articleKeywords;
    }
    if (this.state.project_id !== '') {
      step3Json['project_id'] = parseInt(this.state.project_id);
      if (this.state.askBrandSettingChange || this.state.isNewProject) {
        if (this.state.brandSetting.hasOwnProperty('logoFilePath')) {
          step3Json['logoImage'] = this.state.brandSetting['logoFilePath'];
        }
      } else if (this.state.logoImage !== '') {
        step3Json['logoImage'] = this.state.logoImage;
      }
      if (this.state.askBrandSettingChange || this.state.isNewProject) {
        if (this.state.brandSetting.hasOwnProperty('logoLocation')) {
          step3Json['logoLocation'] = this.state.brandSetting['logoLocation'];
        }
      } else if (this.state.logoLocation !== '') {
        step3Json['logoLocation'] = this.state.logoLocation;
      }
    } else {
      step3Json['project_id'] = Date.now();
      this.state.project_id = step3Json['project_id'];

      if (this.state.brandSetting.hasOwnProperty('logoFilePath')) {
        step3Json['logoImage'] = this.state.brandSetting['logoFilePath'];
      }

      if (this.state.brandSetting.hasOwnProperty('logoLocation')) {
        step3Json['logoLocation'] = this.state.brandSetting['logoLocation'];
      }
    }
    if (
      this.state.videoURL !== '' &&
      this.state.videoURL !== null &&
      type === 'video' &&
      !this.state.generatingAsyncVideo
    )
      step3Json['videoURL'] = this.state.videoURL;

    if (this.state.shareVideoURL != '' && this.state.shareVideoURL !== null && !this.state.generatingAsyncVideo) {
      step3Json['shareVideoURL'] = this.state.shareVideoURL;
    }
    if (this.state.srtFile != '' && this.state.srtFile !== null && !this.state.generatingAsyncVideo) {
      step3Json['srtFile'] = this.state.srtFile;
    }
    if (this.state.txtFile != '' && this.state.txtFile !== null && !this.state.generatingAsyncVideo) {
      step3Json['txtFile'] = this.state.txtFile;
    }
    if (this.state.vttFile != '' && this.state.vttFile !== null && !this.state.generatingAsyncVideo) {
      step3Json['vttFile'] = this.state.vttFile;
    }

    if (
      this.state.previewJson &&
      this.state.previewJson != '' &&
      this.state.previewJson !== null &&
      !this.state.generatingAsyncVideo
    ) {
      step3Json['preview'] = this.state.previewJson;
    }

    if (
      this.state.videoThumbnail &&
      this.state.videoThumbnail != '' &&
      this.state.videoThumbnail !== null &&
      !this.state.generatingAsyncVideo
    ) {
      step3Json['thumbnail'] = this.state.videoThumbnail;
    }

    if (
      this.state.audioURL &&
      this.state.audioURL != '' &&
      this.state.audioURL !== null &&
      !this.state.generatingAsyncVideo
    ) {
      step3Json['audioURL'] = this.state.audioURL;
    }

    if (
      this.state.outputVideoDuration !== undefined &&
      this.state.outputVideoDuration != '' &&
      this.state.outputVideoDuration !== null &&
      !this.state.generatingAsyncVideo
    ) {
      step3Json['videoDuration'] = this.state.outputVideoDuration;
    }

    if (this.state.scriptLanguage) {
      step3Json['scriptLanguage'] = this.state.scriptLanguage;
    }

    var index = this.state.voiceOverTracks.findIndex(voice => voice.active === true);
    var selectedVoiceOverTrack = '';
    var selectedVoiceOverCategory = '';
    var selectedVoiceOverTrackUrl = '';
    var selectedVoiceOverTrackId = '';
    if (index >= 0) {
      selectedVoiceOverTrack = this.state.voiceOverTracks[index].name + ', ' + this.state.voiceOverTracks[index].gender;
      selectedVoiceOverCategory = this.state.voiceOverTracks[index].category;
      selectedVoiceOverTrackUrl = this.state.voiceOverTracks[index].trackUrl;
      selectedVoiceOverTrackId = this.state.voiceOverTracks[index].trackId;
      voiceOverApplied = true;
    }
    var audioToLoad = {};

    if (AppLocalStorage.getItem('trackId') !== '' && AppLocalStorage.getItem('trackId') !== null)
      audioToLoad['selectedTrackId'] = AppLocalStorage.getItem('trackId');
    if (AppLocalStorage.getItem('trackName') !== '' && AppLocalStorage.getItem('trackName') !== null)
      audioToLoad['selectedTrackName'] = AppLocalStorage.getItem('trackName');
    if (AppLocalStorage.getItem('activeTrack') !== '' && AppLocalStorage.getItem('activeTrack') !== null)
      audioToLoad['selectedTrackUrl'] = AppLocalStorage.getItem('activeTrack');
    if (AppLocalStorage.getItem('trackType') !== '' && AppLocalStorage.getItem('trackType') !== null)
      audioToLoad['selectedTrackType'] = AppLocalStorage.getItem('trackType');
    if (selectedVoiceOverCategory !== '' && selectedVoiceOverCategory !== null)
      audioToLoad['selectedVoiceOverCategory'] = selectedVoiceOverCategory;
    if (selectedVoiceOverTrack !== '' && selectedVoiceOverTrack !== null)
      audioToLoad['selectedVoiceOverTrack'] = selectedVoiceOverTrack;
    if (selectedVoiceOverTrackUrl !== '' && selectedVoiceOverTrackUrl !== null)
      audioToLoad['selectedVoiceOverTrackUrl'] = selectedVoiceOverTrackUrl;
    if (selectedVoiceOverTrackId !== '' && selectedVoiceOverTrackId !== null)
      audioToLoad['selectedVoiceOverTrackId'] = selectedVoiceOverTrackId;
    if (this.state.speedValue !== '' && this.state.speedValue !== null)
      audioToLoad['voiceOverTextSpeed'] = this.state.speedValue;

    step3Json.audio = audioToLoad;

    let ThemeStyles = this.state.animationTheme.getStyles();
    ThemeStyles.fontSize = this.getFontSizeForAspectRatio(ThemeStyles.fontSize);
    let subSentenceId = 0;
    let fontsize = ThemeStyles.fontSize;
    let fontColor = ThemeStyles.fontColor;
    let textBackColor = ThemeStyles.textBackgroundColor;
    let backcolorFullwidth = ThemeStyles.backcolorFullwidth;
    let keywordColor = ThemeStyles.keywordColor;
    let backColor = DEFAULT_BG_COLOR;
    let fontName = this.getFontNameWithWeight(ThemeStyles);
    let customIntro = {};
    let sceneArray = [...this.state.summaryJsonText];

    sceneArray.map((text, i) => {
      if (
        i === 0 &&
        this.state.brandSetting.hasOwnProperty('introStyle') &&
        this.state.brandSetting.introStyle['showStyle']
      ) {
        if (this.state.brandSetting.introStyle.hasOwnProperty('fontName'))
          fontName = this.state.brandSetting.introStyle['fontName'];

        let color = this.state.brandSetting.introStyle.hasOwnProperty('fontColor')
          ? this.state.brandSetting.introStyle['fontColor'].split(',')
          : fontColor.split(',');
        fontColor = (color[0].replace('rgba(', 'rgb(') + ',' + color[1] + ',' + color[2]).trim();

        textBackColor = this.state.brandSetting.introStyle.hasOwnProperty('textBackgroundColor')
          ? this.state.brandSetting.introStyle['textBackgroundColor']
          : textBackColor;

        color = this.state.brandSetting.introStyle.hasOwnProperty('keywordColor')
          ? this.state.brandSetting.introStyle['keywordColor'].split(',')
          : keywordColor.split(',');
        keywordColor = (color[0].replace('rgba(', 'rgb(') + ',' + color[1] + ',' + color[2]).trim();
      } else if (
        i > 0 &&
        this.state.brandSetting.hasOwnProperty('sceneStyle') &&
        this.state.brandSetting.sceneStyle['showStyle']
      ) {
        if (this.state.brandSetting.sceneStyle.hasOwnProperty('fontName'))
          fontName = this.state.brandSetting.sceneStyle['fontName'];

        let color = this.state.brandSetting.sceneStyle.hasOwnProperty('fontColor')
          ? this.state.brandSetting.sceneStyle['fontColor'].split(',')
          : fontColor.split(',');
        fontColor = (color[0].replace('rgba(', 'rgb(') + ',' + color[1] + ',' + color[2]).trim();

        textBackColor = this.state.brandSetting.sceneStyle.hasOwnProperty('textBackgroundColor')
          ? this.state.brandSetting.sceneStyle['textBackgroundColor']
          : textBackColor;

        color = this.state.brandSetting.sceneStyle.hasOwnProperty('keywordColor')
          ? this.state.brandSetting.sceneStyle['keywordColor'].split(',')
          : keywordColor.split(',');
        keywordColor = (color[0].replace('rgba(', 'rgb(') + ',' + color[1] + ',' + color[2]).trim();
      }
      let sceneSentence = '';

      //console.log("text.sentence: ", text.sceneId, text.sentence);

      let scene = {
        sceneId: text.sceneId ? text.sceneId : parseInt(i) + 1,
        sentence: text.sentence || '',
        backColor: text.backgroundColor || backColor,
        image: this.state.imageURL[i],
        lines: [],
        showLogo: text.showLogo || false,
      };

      if (this.state.allAssets[this.state.imageURL[i]]) {
        scene['imageMetadata'] = JSON.stringify(this.state.allAssets[this.state.imageURL[i]]);
      }

      if (text.isBrandIntro) {
        scene.isBrandIntro = true;
      }
      if (text.isBrandOutro) {
        scene.isBrandOutro = true;
      }

      /* if (this.state.selectedKeywordForUnderline[i] !== '')
        scene['selectedKeywords'] = this.state.selectedKeywordForUnderline[i]; */

      scene['transcription'] = text.transcription || false;
      if (text.transition) {
        scene['transition'] = text.transition;
      }
      if (text.recordedAudio) {
        scene.recordedAudio = text.recordedAudio;
        scene.recordedAudioDuration = text.recordedAudioDuration;
        scene.recordedAudioDurationMiniSec = text.recordedAudioDurationMiniSec;
        scene.recordingApplyToAll = text.recordingApplyToAll;
        scene.playbackRate = text.playbackRate;
        scene.audioSegments = text.audioSegments;
        voiceOverApplied = true;
      } else if (text.audioSegments) {
        scene.audioSegments = text.audioSegments;
        let validAudioSegments = text.audioSegments.filter(segment => segment);
        if (validAudioSegments.length > 0) {
          voiceOverApplied = true;
        }
      }
      if (text.bRoll) {
        scene.bRoll = text.bRoll;
        scene.bRollUrl = text.bRollUrl;
        scene.bRollSubSceneSegments = text.bRollSubSceneSegments;
      }

      for (let j = 0; j < text.subsentences.length; j++) {
        let subSentence = this.state.subSentencesArray[subSentenceId];
        var ClipText = document.createElement('span');
        if (subSentence.isDeleted === false) {
          ClipText.innerHTML = subSentence.sentence;
          var lines = {
            subSceneId: subSentence.subSceneId,
            time: Math.ceil((ClipText.innerText.replace(/\n/g, ' ').split(' ').length + 1) * 0.3),
            text: ClipText.innerText.replace(/\n/g, ' ') || '',
            html: ClipText.innerHTML,
            format: { hideText: subSentence.settings.hideText },
          };
          this.copyTextFormatting(subSentence, lines.format, ThemeStyles);

          if (this.state.source === 'transcribe') {
            let videoOptions = subSentence.settings && subSentence.settings.videoOptions;
            lines.settings = {
              transcribeVideoLength: parseFloat(subSentence.transcribeVideoLength),
              //segments: videoOptions && videoOptions.segments,
              subSentenceSegments: videoOptions && videoOptions.subSentenceSegments,
            };
            //if (text.audioSegments && text.audioSegments.length > 0 && text.audioSegments[j]) { // entire video as well scene-level recorded audio
            //	lines.settings.audioSegments = [text.audioSegments[j]];
            //}
          }

          if (subSentence.topCoordinate) lines.topCoordinate = subSentence.topCoordinate;
          if (subSentence.leftCoordinate) lines.leftCoordinate = subSentence.leftCoordinate;
          if (subSentence.paragraphWidth) lines.paragraphWidth = subSentence.paragraphWidth;

          scene.lines.push(lines);
          if (subSentence && subSentence.keywords && subSentence.keywords.length > 0) {
            scene['keywords'] = removeNullFromArray(subSentence.keywords);
          }
        }
        if (subSentence.isCustomImage) {
          scene['isCustomImage'] = subSentence.isCustomImage;
        }

        if (subSentence.isUploadedVideo) {
          scene['isUploadedVideo'] = subSentence.isUploadedVideo;
        }

        if (subSentence.isArticleImage) {
          scene['isArticleImage'] = subSentence.isArticleImage;
        }

        if (subSentence.settings) {
          const settings = subSentence.settings;
          scene.settings = settings;
        } else {
          scene.settings = this.state.defaultSceneSettings;
        }

        subSentenceId++;
      }
      sceneSentence = text.subsentences.join(' ');
      scene.settings = text.settings;
      if (text.sceneId != 'Outro Scene' && text.sceneId != 'Custom Intro Scene') {
        if (text.transcribeVideoLength && parseFloat(text.transcribeVideoLength) > 0) {
          scene['transcribeVideoLength'] = text.transcribeVideoLength;
        } else {
          const segments = ((text.settings || {}).videoOptions || {}).segments || [];
          let duration = 0;
          segments.map(time => {
            if (time.start != time.end) {
              duration += parseFloat(time.end) - parseFloat(time.start);
            }
          });
          scene['transcribeVideoLength'] = duration;
        }
      }
      if (scene['sceneId'] !== 'Outro Scene') {
        scene['sentence'] = sceneSentence;
      } else {
        scene['backColor'] = text.backgroundColor;
        if (text.layout !== undefined && text.layout) scene['layout'] = text.layout;
      }
      if (scene.lines.length > 0) {
        if (scene.keywords && scene.keywords.length) {
          scene.keywords = removeNullFromArray(scene.keywords);
        }
        if (scene.subsentences && scene.subsentences.length > 0) {
          scene.subsentences = removeNullFromArray(scene.subsentences);
          if (scene.subsentences.length < 1) {
            scene.subsentences = [''];
          }
        } else {
          scene.subsentences = [''];
        }
        step3Json.scenes.push(scene);
      }
    });
    if (this.state.saveFromGenerate) {
      this.setState({
        oldOverlayMessage: this.state.OverlayMessage,
        OverlayMessage: 'Saving Video...',
        isShowOverlay: true,
      });
    }
    //outro scene
    if (
      this.state.brandSetting.hasOwnProperty('outroStyle') &&
      this.state.brandSetting.outroStyle['showStyle'] &&
      !this.state.loadProject &&
      subSentenceId + 1 === this.state.subSentencesArray.length &&
      this.state.subSentencesArray[subSentenceId].showSceneNumber === 'Outro Scene'
    ) {
      let outroSubSentence = this.state.subSentencesArray[subSentenceId];
      let scene = {
        sceneId: 'Outro Scene',
        sentence: '',
        image: this.state.brandSetting.outroStyle.hasOwnProperty('backgroundFilePath')
          ? this.state.brandSetting.outroStyle['backgroundFilePath']
          : DUMMY_IMAGE,
        backColor: this.state.brandSetting.outroStyle.hasOwnProperty('backgroundColor')
          ? this.state.brandSetting.outroStyle['backgroundColor'].replace('rgba(', 'rgb(').replace(', 1)', ')')
          : backColor,
        lines: [],
        layout: this.state.brandSetting.outroStyle.hasOwnProperty('layout')
          ? this.state.brandSetting.outroStyle['layout']
          : '',
      };
      /* if (
        this.state.selectedKeywordForUnderline[outroSubSentence.sceneId] !== '' &&
        this.state.selectedKeywordForUnderline[outroSubSentence.sceneId] !== null &&
        this.state.selectedKeywordForUnderline[outroSubSentence.sceneId] !== undefined
      ) {
        scene['selectedKeywords'] = [this.state.selectedKeywordForUnderline[outroSubSentence.sceneId]];
      } */

      var ClipText = document.createElement('span');
      ClipText.innerHTML = outroSubSentence.sentence;

      var lines = {
        subSceneId: outroSubSentence.subSceneId,
        time: this.state.timePerFrame[subSentenceId],
        text: ClipText.innerText.replace(/\n/g, ' ') || '',
      };
      lines.format = {
        fontsize: fontsize === '' ? 32 : fontsize,
        fontName: this.state.brandSetting.outroStyle.hasOwnProperty('fontName')
          ? this.state.brandSetting.outroStyle['fontName']
          : fontName,
        fontColor: this.state.brandSetting.outroStyle.hasOwnProperty('fontColor')
          ? this.state.brandSetting.outroStyle['fontColor'].replace('rgba(', 'rgb(').replace(', 1)', ')')
          : fontColor,
        keywordColor: this.state.brandSetting.outroStyle.hasOwnProperty('keywordColor')
          ? this.state.brandSetting.outroStyle['keywordColor'].replace('rgba(', 'rgb(').replace(', 1)', ')')
          : keywordColor,
        hideText: outroSubSentence.settings.hideText,
      };
      this.copyTextFormatting(outroSubSentence, lines.format, ThemeStyles);
      if (outroSubSentence.topCoordinate !== undefined) lines.topCoordinate = outroSubSentence.topCoordinate;
      if (outroSubSentence.leftCoordinate !== undefined) lines.leftCoordinate = outroSubSentence.leftCoordinate;
      if (outroSubSentence.paragraphWidth !== undefined) lines.paragraphWidth = outroSubSentence.paragraphWidth;

      scene.sentence = ClipText.innerText || '';
      scene.lines.push(lines);
      if (scene.lines.length > 0) {
        if (scene.keywords && scene.keywords.length) {
          scene.keywords = removeNullFromArray(scene.keywords);
        }
        step3Json.scenes.push(scene);
      }
      if (outroSubSentence.keywords > 0) {
        scene['keywords'] = outroSubSentence.keywords;
      }
    }

    if (!_.isEmpty(customIntro)) {
      // step3Json.scenes.unshift(customIntro)
    }

    step3Json.timePerFrame = this.state.timePerFrame;
    step3Json.hasOneSubPerSentence = this.state.hasOneSubPerSentence;
    step3Json.durationUpdatedScenes = this.state.durationUpdatedScenes;

    const projectMetaData = { ...this.state.projectMetaData, aspectRatioFontSizeFixed: true };
    this.setState({ projectMetaData });
    step3Json.projectMetaData = projectMetaData;

    if (!this.state.templateMetaData && allowTemplates(this.state.username) && devOnlyFeature()) {
      console.log('\nTemplate is NULL\n');
      //this.props.showErrorNotification('No Template applied on this project');
    }
    step3Json.templateMetaData = this.state.templateMetaData;

    step3Json.aspectRatioClass = this.state.aspectRatioClass;
    step3Json.aspectRatioValue = this.state.aspectRatioValue;
    step3Json.aspectRatioFractionValue = this.state.aspectRatioFractionValue;
    step3Json.frameAspectRatio = this.state.frameAspectRatio;
    step3Json.videoResolution = this.state.VideoRes;
    if (this.state.source === 'transcribe') {
      if (this.state.transcriptionDuration) {
        step3Json.transcriptionDuration = this.state.transcriptionDuration;
      }
      if (this.state.transcriptionLanguage) {
        step3Json.transcriptionLanguage = this.state.transcriptionLanguage;
      }
      if (this.state.isPodcast !== undefined) {
        step3Json.isPodcast = this.state.isPodcast;
      }
      if (this.state.editingVideoHeight) {
        step3Json.editingVideoHeight = this.state.editingVideoHeight;
      }
      if (this.state.editingVideoWidth) {
        step3Json.editingVideoWidth = this.state.editingVideoWidth;
      }
      if (this.state.subtitlesLineCount) {
        step3Json.subtitlesLineCount = this.state.subtitlesLineCount;
      }
    }
    AppLocalStorage.removeItem('step3Json');
    AppLocalStorage.setItem('step3Json', JSON.stringify(step3Json));
    AppLocalStorage.removeItem('backup-save-json');
    AppLocalStorage.setItem('backup-save-json', JSON.stringify(step3Json));

    // if (this.state.allSummaryAssets.length) {
    // 	step3Json.allSummaryAssets = JSON.stringify(this.state.allSummaryAssets);
    // }
    if (this.state.assetResponseId) {
      step3Json.assetResponseId = this.state.assetResponseId;
    }

    if (this.state.article_category) {
      step3Json.textCategory = this.state.article_category;
    } else {
      step3Json.textCategory = '';
    }
    step3Json.applyToAllScenes = this.state.applyToAllScenes;
    step3Json.currentActiveDiv = this.state.currentActiveDiv;
    step3Json.timeChangedPostAIVO = this.state.timeChangedPostAIVO;

    step3Json.isImportedFromPersonalWorkspace = this.state.isImportedFromPersonalWorkspace;
    step3Json.audioImportStatus = this.state.audioImportStatus;
    step3Json.visualImportStatus = this.state.visualImportStatus;

    if (this.state.transitionId && this.state.isTransitions) {
      step3Json.transitionId = this.state.transitionId;
    }
    if (this.state.title) {
      step3Json.title = this.state.title;
    }

    if (this.state.source) {
      step3Json.source = this.state.source;
    }

    if (this.state.isSavingForEmailNotification) {
      step3Json.videoGenerationResponseId = this.state.videoGenerationResponseId;
    }

    if (this.state.bgMusicVolPercent) {
      step3Json.bgMusicVolPercent = this.state.bgMusicVolPercent;
    }

    if (this.state.videoVolume !== undefined && this.state.videoVolume !== null) {
      step3Json.videoVolume = this.state.videoVolume;
    }

    if (this.state.brandId) {
      step3Json.brandId = this.state.brandId;
    }

    if (this.state.loadProjectDetails?.withSummaryAnalysis) {
      step3Json.withSummaryAnalysis = this.state.loadProjectDetails.withSummaryAnalysis;
    }

    if (!this.state.actionTaken && !this.state.isGeneratedAsyncVideo) {
      await this.storeUndoableData(step3Json);
    }

    this.setState({
      loadProjectDetails: step3Json,
      saveDate: step3Json.saveDate,
      voiceOverApplied,
    });

    this.getListOfRecordedAudio(step3Json.scenes);
    let myInit = {
      body: step3Json,
    };
    if (this.state.generatingAsyncVideo) {
      myInit.generatingAsyncVideo = true;
    }

    this.props.projectOpened({
      projectOpenError: false,
      project: step3Json,
      projectAction: PROJECT_OPEN_ACTIONS.OpenProject,
    });
    await this.props.saveProject(myInit);
    const saveProjectStatus = this.props.saveProjectStatus;
    if (saveProjectStatus === 'success') {
      // this.CloseSavePopup(false);
      //document.getElementById('savingInProgress').style.display = 'block';
      if (this.state.saveFromGenerate) {
        this.setState(
          {
            OverlayMessage: 'Video Saved...',
          },
          () => {
            setTimeout(() => {
              this.setState({
                isShowOverlay: false,
                showSave: false,
              });
            }, 500);
          }
        );
      }
      this.setState({ saveFromGenerate: false });
      AppLocalStorage.removeItem('backup-save-json');
      if (document.getElementById('btnSave')) {
        document.getElementById('btnSave').className = 'btn btn-outline-default btn--prevs2 mr-2 success-btn';
      }
      if (document.getElementById('spanForErrorSave')) {
        document.getElementById('spanForErrorSave').className = 'spanForSavingAndSaved alert alert-success';
      }
      /*  Removed video-saved event, as it is duplicate of project-saved-api event
			amplitude.getInstance().logEvent("video-saved", {
				"project-name": this.state.projectName,
				"project-category": this.state.projectCategory,
				"save-type": this.state.isFirstTimeSaved ? "New Video" : "Saved Video",
				"project-id": this.state.project_id
			}) */
      // $('#btnSave').removeAttr("disabled");
      this.setState({ SaveButtonText: 'Saved', isAnyChange: false, disableSaveButton: false, isFirstTimeSaved: false });

      if (this.state.isRedirect) {
        let locationProps = this.props.location && this.props.location.state ? this.props.location.state : {};
        if (this.state.gotoUrl === 'brand') {
          this.props.history.push({
            pathname: GlobalJs.BaseURL + CustomURLs.brandSettings,
            state: {
              ...locationProps,
              project_id: this.state.project_id,
              loadProject: true,
              isAnyChange: true,
              projectDetails: step3Json,
              projectList: this.state.saveProjectList,
            },
          });
          this.setState({ isAnyUpdate: false });
        } else if (this.state.gotoUrl === 'video') {
          this.props.history.push({
            pathname: GlobalJs.BaseURL + CustomURLs.myProjects,
            state: {
              project_id: this.state.project_id,
              loadProject: true,
              isAnyChange: true,
            },
          });
          this.setState({ isAnyUpdate: false });
        } else if (this.state.gotoUrl === 'logout') {
          Auth.signOut();
          AppLocalStorage.clear();
          this.props.history.push(GlobalJs.BaseURL);
          event.preventDefault();
        }
      } else {
        setTimeout(() => {
          this.setState({ SaveButtonText: 'Save' });
          if (document.getElementById('btnSave')) {
            document.getElementById('btnSave').className = 'btn btn-outline-default btn--prevs2 mr-2';
          }
        }, 100);
      }
    } else if (saveProjectStatus != 'version_conflict') {
      this.props.showErrorNotification('Save project failed');
      saveProjectBackup();
      this.setState({ SaveButtonText: 'Save', disableSaveButton: false, displaySaveInprogress: false });
      if (document.getElementById('btnSave')) {
        document.getElementById('btnSave').className = 'btn btn-outline-default btn--prevs2 mr-2';
      }
      if (this.state.isRedirect) {
        let locationProps = this.props.location && this.props.location.state ? this.props.location.state : {};
        if (this.state.gotoUrl === 'brand') {
          this.props.history.push({
            pathname: GlobalJs.BaseURL + CustomURLs.brandSettings,
            state: {
              ...locationProps,
              project_id: this.state.project_id,
              loadProject: true,
              isAnyChange: true,
              projectDetails: step3Json,
              projectList: this.state.saveProjectList,
            },
          });
          this.setState({ isAnyUpdate: false });
        } else if (this.state.gotoUrl === 'video') {
          this.props.history.push({
            pathname: GlobalJs.BaseURL + CustomURLs.myProjects,
            state: {
              project_id: this.state.project_id,
              loadProject: true,
              isAnyChange: true,
            },
          });
          this.setState({ isAnyUpdate: false });
        } else if (this.state.gotoUrl === 'logout') {
          Auth.signOut();
          AppLocalStorage.clear();
          this.props.history.push(GlobalJs.BaseURL);
          event.preventDefault();
        }
      } else {
        setTimeout(() => {
          this.setState({
            OverlayMessage: 'Please wait...',
            displaySaveInprogress: false,
          });
        }, 1000);
      }
      // this.CloseSavePopup();
    }
    if (this.state.actionTaken) {
      this.setState({
        actionTaken: false,
      });
    }
    if (allowReelFastVideo(this.state.username)) {
      try {
        // //Load Resources for preview
        //let videoCreationJson = await this.generateVideoJSON(null, null, false, null, null, true);
        //this.videoPreviewRef.current.LoadJsonResources(videoCreationJson);
        // //
      } catch (e) {}
    }
    return step3Json;
  };

  safelySetClassname = (elId, classname) => {
    const el = document.getElementById(elId);
    if (el) el.className = classname;
  };

  onSelectingVideoResolutionValue = value => {
    this.setState({ VideoRes: value, isAnyChange: true });
    amplitude.getInstance().logEvent('format-updated', { resolution: value });
  };

  onSelectingVideoResolution = event => {
    this.setState({ VideoRes: event.target.value, isAnyChange: true });
  };

  gotoPlansList = () => {
    this.props.history.push('/' + CustomURLs.plansList);
  };

  /**
   * sometimes <img> tag shows up in the sentence, so adding it to image and removing it from sentence
   * @param {*} summary
   */
  extractImageFromSummarySentence = (summary = {}, step3JsonItem = {}) => {
    let sceneSentence = summary.sentence;
    let sceneImage = summary.image;
    if (sceneSentence && sceneSentence.replace(/<[^>]*>?/gm, '').length === 0) {
      if (sceneSentence.startsWith('<img')) {
        let imageTag = ReactHtmlParser(sceneSentence);
        sceneImage = (imageTag && imageTag[0]?.props?.src) || '';
        summary.image = sceneImage;
        step3JsonItem.image = sceneImage;
      }
      summary.sentence = '';
      step3JsonItem.sentence = '';
    }
  };

  loadProjectFromJson = async isUndoRedo => {
    let projectJSON;
    let step3Json;
    let voiceOverApplied = false;
    const isAllowTemplates = allowTemplates(this.state.username);
    let animationTheme =
      this.state.animationTheme || (this.state.source === 'transcribe' ? SubtitleTheme1 : Animation1);
    if (this.state.isNewProject && !isUndoRedo) {
      this.setState({
        showInitialLoadingBar: true,
      });
    }
    /* if (
      this.props.brandSettings &&
      !_.isEmpty(this.props.brandSettings) &&
      ((this.props.location && this.props.location.state && this.props.location.state.isCanceled) || isUndoRedo)
    ) {
      let response = this.props.brandSettings;
      if (response && response.outroStyle) {
        if (response.outroStyle.backgroundFilePath) {
          if (response.outroStyle.backgroundFilePath != '') {
            if (response.outroStyle.customOutro == false) {
              delete response.outroStyle.backgroundFilePath;
              delete response.outroStyle.backgroundFileName;
            }
          }
        }
      }

      await this.setState({ brandSetting: response });
      if (
        this.state.project_id === '' ||
        this.state.project_id === null ||
        this.state.isNewProject ||
        this.state.askBrandSettingChange
      ) {
        if (response.hasOwnProperty('logoLocation')) await this.setState({ logoLocation: response['logoLocation'] });
        if (response.hasOwnProperty('logoFilePath')) {
          await this.setState({ logoImage: response['logoFilePath'] });
        }
      }
    } else {
      await this.props.getBrandSettings(this.state.user.username);
      let response = this.props.brandSettings;
      if (response) {
        if (response && response.outroStyle) {
          if (response.outroStyle.backgroundFilePath) {
            if (response.outroStyle.backgroundFilePath != '') {
              if (response.outroStyle.customOutro == false) {
                delete response.outroStyle.backgroundFilePath;
                delete response.outroStyle.backgroundFileName;
              }
            }
          }
        }

        await this.setState({ brandSetting: response, brandName: response.brandName });
        if (
          this.state.project_id === '' ||
          this.state.project_id === null ||
          this.state.isNewProject ||
          this.state.askBrandSettingChange
        ) {
          if (response.hasOwnProperty('logoLocation')) await this.setState({ logoLocation: response['logoLocation'] });
          if (response.hasOwnProperty('logoFilePath')) {
            await this.setState({ logoImage: response['logoFilePath'] });
          }
        }
      } else {
      }
    } */
    if (isAllowTemplates) {
      await this.setState({ brandSetting: {} });
    }
    //let prevSavedValues = { intro: false, outro: false };
    if (this.state.loadProject || isUndoRedo) {
      if (
        this.props.location && this.props.location.state && this.props.location.state.step2Data
          ? false
          : true && !isUndoRedo
      ) {
        document.getElementById('previous_button').className = 'btn-disabled';
        document.getElementById('previous_button').disabled = true;
      }
      this.setState({
        isFirstTimeSaved: false,
      });
      // projectJSON = saveProjectList.filter(proj => proj.project_id === this.state.project_id);
      projectJSON = this.state.loadProjectDetails;

      //removing intro outro scenes
      if (projectJSON.scenes[0].sceneId == 'Custom Intro Scene') {
        if (!projectJSON.scenes[0].settings.hideScene) {
          projectJSON.scenes[0].isBrandIntro = true;
          for (let i = 0; i < projectJSON.scenes.length; i++) {
            if (projectJSON.scenes[i].sceneId != 'Outro Scene') {
              projectJSON.scenes[i].sceneId = i + 1;
            }
          }
        } else {
          projectJSON.scenes.splice(0, 1);
          projectJSON.timePerFrame.splice(0, 1);
          projectJSON.generatedVoiceOvers = [];
        }
      }
      if (projectJSON.scenes[projectJSON.scenes.length - 1].sceneId == 'Outro Scene') {
        if (!projectJSON.scenes[projectJSON.scenes.length - 1].settings.hideScene) {
          projectJSON.scenes[projectJSON.scenes.length - 1].sceneId = projectJSON.scenes.length;
          projectJSON.scenes[projectJSON.scenes.length - 1].isBrandOutro = true;
        } else {
          projectJSON.scenes.splice(projectJSON.scenes.length - 1, 1);
          projectJSON.timePerFrame.splice(projectJSON.timePerFrame.length - 1, 1);
          projectJSON.generatedVoiceOvers = [];
        }
      }
      //
      if (this.state.isImportedFromPersonalWorkspace && !this.state.isAssetImportRunning) {
        this.setState(
          {
            isAssetImportRunning: true,
            audioImportStatus: projectJSON.audioImportStatus,
            visualImportStatus: projectJSON.visualImportStatus,
          },
          async () => {
            await this.handleImportAssets(projectJSON);
          }
        );
      }
      let brandSetting = this.state.brandSetting;
      if (projectJSON.brandId) {
        this.setState({ brandId: projectJSON.brandId });
      }
      /* if (projectJSON.scenes.length > 0 && projectJSON.scenes[0].sceneId == 'Custom Intro Scene') {
        prevSavedValues.intro = true;
        prevSavedValues.introChanged =
          brandSetting.customIntro &&
          brandSetting.customIntro.image &&
          projectJSON.scenes[0].image !== brandSetting.customIntro.image;
      }
      if (
        projectJSON.scenes.length > 0 &&
        projectJSON.scenes[projectJSON.scenes.length - 1].sceneId === 'Outro Scene'
      ) {
        prevSavedValues.outro = true;
        prevSavedValues.outroChanged =
          brandSetting.outroStyle &&
          brandSetting.outroStyle.backgroundFilePath &&
          projectJSON.scenes[projectJSON.scenes.length - 1].image !== brandSetting.outroStyle.backgroundFilePath;
      } */
      this.getListOfRecordedAudio(projectJSON.scenes);
      if (!isUndoRedo) {
        //this.props.storeUndoableData({ ...projectJSON, currentActiveDiv: this.state.currentActiveDiv })
        // why was props.storeUndoableData called here?
        if (projectJSON.scenes && projectJSON.scenes.length) {
          if (projectJSON.scenes[0].recordedAudio) {
            voiceOverApplied = true;
            // 1st scene has recorded audio
            AppLocalStorage.setItem('recordedAudio', projectJSON.scenes[0].recordedAudio);
          } else if (projectJSON.scenes[0].audioSegments && projectJSON.scenes[0].audioSegments[0]) {
            // 1st subscene has recorded audio
            voiceOverApplied = true;
            AppLocalStorage.setItem('recordedAudio', projectJSON.scenes[0].audioSegments[0].recordedAudio);
          } else {
            AppLocalStorage.setItem('recordedAudio', '');
          }
        } else {
          AppLocalStorage.setItem('recordedAudio', '');
        }
        if (projectJSON.elevenLabTrackID) {
          this.setState({ elevenLabTrackID: projectJSON.elevenLabTrackID });
        }
      } else {
        // if (typeof projectJSON.currentActiveDiv != "undefined") {
        // 	this.setState({
        // 		currentActiveDiv: projectJSON.currentActiveDiv
        // 	}, () => {
        // 		this.reloadScene()
        // 	})
        // }
      }
      this.setState({
        templateMetaData: projectJSON.templateMetaData,
      });
      if (projectJSON.source) {
        this.setState({
          source: projectJSON.source,
        });
      }
      if (projectJSON.step2TxtData) {
        this.setState({
          step2TxtData: projectJSON.step2TxtData,
        });
      }

      this.setState({ timeChangedPostAIVO: projectJSON.timeChangedPostAIVO });

      if (projectJSON.source === 'transcribe') {
        if (projectJSON.transcriptionDuration) {
          this.setState({
            transcriptionDuration: projectJSON.transcriptionDuration,
          });
        }
        if (projectJSON.transcriptionLanguage) {
          this.setState({
            transcriptionLanguage: projectJSON.transcriptionLanguage,
          });
        }

        if (projectJSON.isPodcast !== undefined) {
          this.setState({
            isPodcast: projectJSON.isPodcast,
          });
        }

        if (projectJSON.editingVideoHeight) {
          this.setState({
            editingVideoHeight: projectJSON.editingVideoHeight,
          });
        }
        if (projectJSON.editingVideoWidth) {
          this.setState({
            editingVideoWidth: projectJSON.editingVideoWidth,
          });
        }
        if (projectJSON.subtitlesLineCount) {
          this.setState({
            subtitlesLineCount: projectJSON.subtitlesLineCount,
          });
        }
      }
      // For videos having custom aspectRatio, check if aspect ratio is within a certain range
      // of the existing aspect ratio fraction value (diff within 0.01).
      // If yes then switch over to the nearest matching aspect ratio.
      // If not, then remove spaces from the aspect ratio value and store it in the state via updateAspectRatio()
      if (projectJSON.aspectRatioClass && projectJSON.aspectRatioValue) {
        let fractionValue = projectJSON.aspectRatioFractionValue;
        if (fractionValue) {
          const aspectRatio = AllAspectRatios.find(ratio => Math.abs(ratio.fractionValue - fractionValue) <= 0.01);
          if (aspectRatio) {
            this.updateAspectRatio(
              { value: aspectRatio.value, class: aspectRatio.class, fractionValue: aspectRatio.fractionValue },
              true,
              null,
              projectJSON.frameAspectRatio
            );
          } else {
            let customValue = findAndReplaceAll(projectJSON.aspectRatioValue, ' ', '-');
            this.updateAspectRatio(
              { value: customValue, class: customValue, fractionValue: fractionValue },
              true,
              null,
              projectJSON.frameAspectRatio
            );
          }
        } else {
          const aspectRatio = AllAspectRatios.find(ratio => ratio.class === projectJSON.aspectRatioClass);
          if (aspectRatio) {
            fractionValue = aspectRatio.fractionValue;
          } else {
            fractionValue = ASPECT_RATIO_DEFAULT_FRACTION_VALUE;
          }
          this.updateAspectRatio(
            { value: projectJSON.aspectRatioValue, class: projectJSON.aspectRatioClass, fractionValue },
            true,
            null,
            projectJSON.frameAspectRatio
          );
        }
      } else {
        this.updateAspectRatio(
          {
            value: ASPECT_RATIO_DEFAULT_OPTION,
            class: ASPECT_RATIO_DEFAULT_CLASS,
            fractionValue: ASPECT_RATIO_DEFAULT_FRACTION_VALUE,
          },
          true,
          null,
          projectJSON.frameAspectRatio
        );
      }

      if (projectJSON.videoResolution) {
        let videoResolutions = [...this.state.videoResolutions];
        if (videoResolutions.includes(projectJSON.videoResolution) === false) {
          videoResolutions.push(projectJSON.videoResolution);
        }
        this.setState({
          VideoRes: projectJSON.videoResolution,
          videoResolutions,
        });
      }

      if (projectJSON.brandId) {
        this.setState({ brandId: projectJSON.brandId });
      }

      if (projectJSON.textCategory) {
        this.setState({
          article_category: projectJSON.textCategory,
        });
      }

      if (projectJSON.transitionId && this.state.isTransitions) {
        this.setState({
          transitionId: projectJSON.transitionId,
        });
      }
      if (projectJSON.shareVideoURL) {
        this.setState({
          shareVideoURL: projectJSON.shareVideoURL,
        });
      }

      if (projectJSON.srtFile) {
        this.setState({
          srtFile: projectJSON.srtFile,
        });
      }

      if (projectJSON.txtFile) {
        this.setState({
          txtFile: projectJSON.txtFile,
        });
      }

      if (projectJSON.vttFile) {
        this.setState({
          vttFile: projectJSON.vttFile,
        });
      }

      if (projectJSON.preview) {
        this.setState({
          previewJson: projectJSON.preview,
        });
      }

      if (projectJSON.thumbnail) {
        this.setState({
          videoThumbnail: projectJSON.thumbnail,
        });
      }

      if (projectJSON.audioURL) {
        this.setState({
          audioURL: projectJSON.audioURL,
        });
      }

      if (projectJSON.videoDuration) {
        this.setState({
          outputVideoDuration: projectJSON.videoDuration,
        });
      }

      if (projectJSON.scriptLanguage) {
        this.setState({
          scriptLanguage: projectJSON.scriptLanguage,
          filterLanguage: projectJSON.scriptLanguage,
        });
      }

      if (projectJSON.bgMusicVolPercent) {
        this.setState({ bgMusicVolPercent: projectJSON.bgMusicVolPercent });
      } else {
        // pre-existing project (bgMusicVolPercent wasn't saved)
        if (this.state.source == 'transcribe' || this.isVoiceOverPreExisting() || this.isRecordedAudioPreExisting())
          this.setState({ bgMusicVolPercent: REDUCED_BG_MUSIC_VOL_PERCENT });
      }

      if (projectJSON.videoVolume !== undefined && projectJSON.videoVolume !== null) {
        this.setState({ videoVolume: projectJSON.videoVolume });
      }

      if (projectJSON.hasOwnProperty('animationTheme'))
        animationTheme = AnimationHelper.getThemeByName(projectJSON.animationTheme);
      let email = '';
      if (projectJSON.hasOwnProperty('email')) email = projectJSON.email;
      let name = '';
      if (projectJSON.hasOwnProperty('name')) name = projectJSON.name;
      if (projectJSON.applyToAllScenes) {
        this.setState({
          applyToAllScenes: projectJSON.applyToAllScenes,
        });
      }
      if (projectJSON.assetResponseId) {
        this.setState({
          assetResponseId: projectJSON.assetResponseId,
        });
        this.props.getSavedAssets(projectJSON.assetResponseId);
      }
      this.setState({
        projectName: projectJSON.projectName,
        projectCategory: projectJSON.projectCategory,
        cognito_id: projectJSON.cognito_id,
        email: email,
        name: name,
      });
      this.state.imageURL = [];
      step3Json = projectJSON;
      let allAssets = this.state.allAssets;
      let keywords = [];
      let message = '';
      // let keywords = [];
      if (brandSetting.outroStyle && brandSetting.outroStyle.hasOwnProperty('message')) {
        message = brandSetting.outroStyle['message'];
        var span = document.createElement('span');
        span.innerHTML = message;
        let strongTags = span.querySelectorAll('strong');
        for (var keywordCounter = 0; keywordCounter < strongTags.length; keywordCounter++) {
          keywords.push(strongTags[keywordCounter].innerHTML.trim());
        }
      }
      let outroBgImage =
        brandSetting.outroStyle && brandSetting.outroStyle.hasOwnProperty('backgroundFilePath')
          ? brandSetting.outroStyle['backgroundFilePath']
          : DUMMY_IMAGE;
      let ThemeStyles = animationTheme.getStyles();
      ThemeStyles.fontSize = this.getFontSizeForAspectRatio(ThemeStyles.fontSize);
      if (this.state.askBrandSettingChange) {
        if (step3Json.scenes.length > 0 && step3Json.scenes[step3Json.scenes.length - 1].sceneId === 'Outro Scene') {
          step3Json.scenes.pop();
        }
        if (brandSetting.outroStyle && brandSetting.outroStyle.showStyle) {
          let outroScene = {
            sceneId: 'Outro Scene',
            sentence: message,
            keywords: keywords,
            type: 'summary',
            lines: [
              {
                subSceneId: 1,
                text: message,
                time: 2,
              },
            ],
            logoImage: this.state.logoImage,
            logoLocation: this.state.logoLocation,
            image: outroBgImage,
            // "fontSize": brandSetting.outroStyle['fontSize'] !== "" && brandSetting.outroStyle['fontSize'] !== undefined ? brandSetting.outroStyle['fontSize'] : ThemeStyles.fontSize,
            // "fontName": fontName,
            // "fontColor": brandSetting.outroStyle['fontColor'] !== "" && brandSetting.outroStyle['fontColor'] !== undefined ? brandSetting.outroStyle['fontColor'] : 'rgb(0, 0 , 0)',
            backgroundColor:
              brandSetting.outroStyle['backgroundColor'] !== '' &&
              brandSetting.outroStyle['backgroundColor'] !== undefined
                ? brandSetting.outroStyle['backgroundColor']
                : 'rgb(255, 255 , 255)',
            keywordColor:
              brandSetting.outroStyle['keywordColor'] !== '' && brandSetting.outroStyle['keywordColor'] !== undefined
                ? brandSetting.outroStyle['keywordColor']
                : 'rgb(32, 148, 243)',
            subsentences: [message],
            // "FontNameForFront":CreateVideo_Step3.getFrontFontName(fontName),
            showLogo: brandSetting.outroStyle['showLogo'],
            addArticleLink: brandSetting.outroStyle['addArticleLink'] ? true : false,
            // "layout" : brandSetting.outroStyle["layout"] ? brandSetting.outroStyle["layout"]: "text"
            uuidArray: [uuidv4()],
          };
          if (getResourceType(outroBgImage) === 'video') {
            outroScene.settings = {};
            outroScene.settings.muteClipAudio = false;
            outroScene.settings.voiceOver = false;
            outroScene.settings.music = false;
          }
          step3Json.scenes.push(outroScene);
        }

        const isIntroAllowed = getFeatures(this.state.user ? this.state.user.username : '')[features.customIntroClip];
        if (step3Json.scenes.length > 0 && step3Json.scenes[0].sceneId === 'Custom Intro Scene') {
          step3Json.scenes.shift();
        }

        let scenesLength = step3Json.scenes.length;
        if (step3Json.scenes[step3Json.scenes.length - 1].sceneId === 'Outro Scene') {
          scenesLength -= 1;
        }
        if (brandSetting.customIntro && brandSetting.customIntro.showStyle && isIntroAllowed) {
          let customIntroImage = brandSetting.customIntro.image;
          let customIntroScene = {
            sceneId: 'Custom Intro Scene',
            showSceneNumber: 'Custom Intro Scene',
            keywords: [],
            type: 'summary',
            logoImage: '',
            logoLocation: '',
            image: customIntroImage,
            fontSize: this.getFontSizeForAspectRatio(24).toString(),
            fontName: 'Calibri',
            fontColor: 'rgba(244, 78, 59, 1)',
            backgroundColor: '',
            keywordColor: 'rgba(204, 204, 204, 1)',
            subsentences: [''],
            FontNameForFront: '',
            showLogo: false,
            addArticleLink: '',
            sentence: '',
            lines: [
              {
                subSceneId: 1,
                text: '',
                time: 2,
              },
            ],
            settings: _.cloneDeep(this.state.defaultSceneSettings),
            uuidArray: [uuidv4()],
          };
          if (getResourceType(customIntroImage) === 'video') {
            customIntroScene.settings.muteClipAudio = false;
            customIntroScene.settings.voiceOver = false;
            customIntroScene.settings.music = false;
          }
          //The scene after Custom Intro Scene starts with sceneId 1
          for (let i = 0; i < scenesLength; i++) {
            step3Json.scenes[i].sceneId = i + 1;
          }
          step3Json.scenes.unshift(customIntroScene);
        } else {
          //The first scene sceneId starts with 1
          for (let i = 0; i < scenesLength; i++) {
            step3Json.scenes[i].sceneId = i + 1;
          }
        }
      }

      if (step3Json.hasOwnProperty('logoImage'))
        await this.setState({
          logoImage: this.state.askBrandSettingChange ? brandSetting.logoFilePath : step3Json['logoImage'],
        });
      if (step3Json.hasOwnProperty('logoLocation'))
        await this.setState({
          logoLocation: this.state.askBrandSettingChange ? brandSetting.logoLocation : step3Json['logoLocation'],
        });

      if (step3Json.hasOwnProperty('metaDescription'))
        await this.setState({ metaDescription: step3Json['metaDescription'] });

      if (step3Json.hasOwnProperty('articleKeywords'))
        await this.setState({ articleKeywords: step3Json['articleKeywords'] });

      if (step3Json.audio && step3Json.audio.hasOwnProperty('selectedTrackName')) {
        await this.setState({ trackName: step3Json.audio['selectedTrackName'] });
        AppLocalStorage.setItem('trackName', step3Json.audio['selectedTrackName']);
      }

      if (step3Json.audio && step3Json.audio.hasOwnProperty('selectedTrackUrl')) {
        await this.setState({ activeTrack: step3Json.audio['selectedTrackUrl'] });
        AppLocalStorage.setItem('activeTrack', step3Json.audio['selectedTrackUrl']);
        document.getElementById('myAudioPlay').src = step3Json.audio['selectedTrackUrl'];
      }

      if (step3Json.audio && step3Json.audio.hasOwnProperty('selectedTrackType')) {
        await this.setState({ trackType: step3Json.audio['selectedTrackType'] });
        AppLocalStorage.setItem('trackType', step3Json.audio['selectedTrackType']);
      }

      if (step3Json.audio && step3Json.audio.hasOwnProperty('selectedTrackId')) {
        await this.setState({ trackId: step3Json.audio['selectedTrackId'] });
        AppLocalStorage.setItem('trackId', step3Json.audio['selectedTrackId']);
      }

      if (step3Json.audio && step3Json.audio.hasOwnProperty('selectedVoiceOverTrack')) {
        this.setState({ selectedVoiceOverTrack: step3Json.audio['selectedVoiceOverTrack'] });
        AppLocalStorage.setItem('voiceOverTrackName', step3Json.audio['selectedVoiceOverTrack']);
      }
      if (step3Json.audio && step3Json.audio.hasOwnProperty('selectedVoiceOverCategory')) {
        this.setState({ selectedVoiceOverCategory: step3Json.audio['selectedVoiceOverCategory'] });
        AppLocalStorage.setItem('voiceOverTrackCategory', step3Json.audio['selectedVoiceOverCategory']);
      }
      if (step3Json.audio && step3Json.audio.hasOwnProperty('selectedVoiceOverTrackUrl')) {
        this.setState({ selectedVoiceOverTrackUrl: step3Json.audio['selectedVoiceOverTrackUrl'] });
        AppLocalStorage.setItem('voiceOverTrackActive', step3Json.audio['selectedVoiceOverTrackUrl']);
      }
      if (step3Json.audio && step3Json.audio.hasOwnProperty('selectedVoiceOverTrackId')) {
        this.setState({ selectedVoiceOverTrackId: step3Json.audio['selectedVoiceOverTrackId'] });
        AppLocalStorage.setItem('voiceOverTrackId', step3Json.audio['selectedVoiceOverTrackId']);

        let voiceOverTracks = [...this.state.voiceOverTracks];
        for (let voiceOverCounter = 0; voiceOverCounter < voiceOverTracks.length; voiceOverCounter++) {
          voiceOverTracks[voiceOverCounter] = { ...voiceOverTracks[voiceOverCounter], active: false };
          if (voiceOverTracks[voiceOverCounter].trackId === step3Json.audio['selectedVoiceOverTrackId']) {
            voiceOverApplied = true;
            voiceOverTracks[voiceOverCounter].active = true;
          }
        }
        this.setState({ voiceOverTracks });
      }
      if (step3Json.audio && step3Json.audio.hasOwnProperty('voiceOverTextSpeed'))
        this.setState({ speedValue: step3Json.audio['voiceOverTextSpeed'] });

      var summaryJsonText = [];
      let scenePosition = [];
      let imageAssests = [];
      let unSupportedVisualsWarningVisible = false;
      for (var step3SceneCounter = 0; step3SceneCounter < step3Json.scenes.length; step3SceneCounter++) {
        step3Json.scenes[step3SceneCounter].image =
          step3Json.scenes[step3SceneCounter].image === 'dummy.png'
            ? DUMMY_IMAGE
            : step3Json.scenes[step3SceneCounter].image;
        var summary = {
          sceneId: step3Json.scenes[step3SceneCounter].sceneId,
          sentence: step3Json.scenes[step3SceneCounter].sentence || '',
          keywords:
            step3Json.scenes[step3SceneCounter].keywords === undefined
              ? []
              : step3Json.scenes[step3SceneCounter].keywords,
          type: 'summary',
          showLogo: this.state.askBrandSettingChange
            ? brandSetting.sceneStyle && brandSetting.showLogo
            : step3Json.scenes[step3SceneCounter].showLogo,
          logoImage: this.state.logoImage,
          logoLocation: this.state.logoLocation,
          image: step3Json.scenes[step3SceneCounter].image,
          subsentences: [],
          backgroundColor: step3Json.scenes[step3SceneCounter].backColor,
        };
        // highlight keywords in the sentence with <strong> tags for old projects that used keywords array
        if (!step3Json.projectMetaData || !step3Json.projectMetaData.sentencesIncludeKeywords)
          summary.sentence = AnimationHelper.highlightKeywords(summary.sentence, summary.keywords);
        this.extractImageFromSummarySentence(summary, step3Json.scenes[step3SceneCounter]);
        let textFormat = step3Json.scenes[step3SceneCounter].fontName
          ? {
              fontName: step3Json.scenes[step3SceneCounter].fontName,
              fontSize: step3Json.scenes[step3SceneCounter].fontsize,
              fontColor: step3Json.scenes[step3SceneCounter].fontColor,
              keywordColor: step3Json.scenes[step3SceneCounter].keywordColor,
              textAlign: step3Json.scenes[step3SceneCounter].textAlign,
              //"backgroundColor": step3Json.scenes[step3SceneCounter].backColor, // this is related to visual and not text-format
              backcolorFullwidth: step3Json.scenes[step3SceneCounter].backcolorFullwidth,
              textBackgroundColor: step3Json.scenes[step3SceneCounter].textBackColor,
            }
          : {};

        if (this.state.source === 'transcribe') {
          summary.subSentenceSegments = [];
        }
        if (step3Json.scenes[step3SceneCounter].fontName)
          summary['FontNameForFront'] = CreateVideo_Step3.getFrontFontName(
            step3Json.scenes[step3SceneCounter].fontName
          );

        if (step3Json.scenes[step3SceneCounter].sceneId !== 'Outro Scene' || isAllowTemplates) {
          if (step3Json.scenes[step3SceneCounter].imageMetadata) {
            imageAssests.push(JSON.parse(step3Json.scenes[step3SceneCounter].imageMetadata));
          } else {
            imageAssests.push({
              thumb: summary.image,
              preview: summary.image,
              large: summary.image,
              url: summary.image,
            });
          }
        }

        if (step3Json.scenes[step3SceneCounter].layout) {
          summary['layout'] = step3Json.scenes[step3SceneCounter]['layout'];
        }

        if (step3Json.scenes[step3SceneCounter].isCustomImage) {
          summary['isCustomImage'] = step3Json.scenes[step3SceneCounter]['isCustomImage'];
        }

        if (step3Json.scenes[step3SceneCounter].isUploadedVideo) {
          summary['isUploadedVideo'] = step3Json.scenes[step3SceneCounter]['isUploadedVideo'];
        }

        if (step3Json.scenes[step3SceneCounter].isArticleImage) {
          summary['isArticleImage'] = step3Json.scenes[step3SceneCounter]['isArticleImage'];
        }

        if (step3Json.scenes[step3SceneCounter].transcribeVideoLength) {
          summary['transcribeVideoLength'] = step3Json.scenes[step3SceneCounter]['transcribeVideoLength'];
        }

        summary['transcription'] = step3Json.scenes[step3SceneCounter].transcription || false;
        summary['transition'] = step3Json.scenes[step3SceneCounter].transition;
        if (step3Json.scenes[step3SceneCounter].recordedAudio) {
          voiceOverApplied = true;
          summary['recordedAudio'] = step3Json.scenes[step3SceneCounter]['recordedAudio'];
          summary['audioSegments'] = step3Json.scenes[step3SceneCounter]['audioSegments'];
          summary['recordedAudioDuration'] = step3Json.scenes[step3SceneCounter]['recordedAudioDuration'] || 0;
          summary['recordedAudioDurationMiniSec'] =
            step3Json.scenes[step3SceneCounter]['recordedAudioDurationMiniSec'] || 0;
          summary['recordingApplyToAll'] = step3Json.scenes[step3SceneCounter]['recordingApplyToAll'];
          summary['playbackRate'] = step3Json.scenes[step3SceneCounter]['playbackRate'];
        } else if (step3Json.scenes[step3SceneCounter].audioSegments) {
          summary['audioSegments'] = step3Json.scenes[step3SceneCounter]['audioSegments'];
          if (summary['audioSegments'] && summary['audioSegments'].length && summary['audioSegments'].length > 0) {
            let validAudioSegments = summary['audioSegments'].filter(segment => segment);
            if (validAudioSegments.length > 0) {
              voiceOverApplied = true;
            }
          }
        }

        if (step3Json.scenes[step3SceneCounter].bRoll) {
          summary.bRoll = step3Json.scenes[step3SceneCounter].bRoll;
          summary.bRollUrl = step3Json.scenes[step3SceneCounter].bRollUrl;
          summary.bRollSubSceneSegments = step3Json.scenes[step3SceneCounter].bRollSubSceneSegments;
        }

        if (step3Json.scenes[step3SceneCounter].settings) {
          summary['settings'] = step3Json.scenes[step3SceneCounter]['settings'];
        } else {
          summary['settings'] = this.state.defaultSceneSettings;
        }
        let isBrandSettingAppliedOnScene = false;
        if (step3Json.scenes[step3SceneCounter].sceneId === 'Outro Scene' && this.state.askBrandSettingChange) {
          if (brandSetting.hasOwnProperty('outroStyle') && brandSetting.outroStyle['showStyle']) {
            brandSetting.outroStyle.fontColor = brandSetting.outroStyle.fontColor || 'rgb(0,0,0)';
            this.copyTextFormatting(brandSetting.outroStyle, textFormat, ThemeStyles, true);
            isBrandSettingAppliedOnScene = true;
            summary['backgroundColor'] =
              brandSetting.outroStyle['backgroundColor'] !== '' &&
              brandSetting.outroStyle['backgroundColor'] !== undefined
                ? brandSetting.outroStyle['backgroundColor']
                : 'rgb(255, 255, 255)';
            summary['showLogo'] =
              brandSetting.outroStyle['showLogo'] !== '' && brandSetting.outroStyle['showLogo'] !== undefined
                ? brandSetting.outroStyle['showLogo']
                : false;
            summary['logoImage'] = this.state.askBrandSettingChange
              ? brandSetting.hasOwnProperty('logoFilePath')
                ? brandSetting['logoFilePath']
                : ''
              : summary['logoImage'];
            summary['logoLocation'] = this.state.askBrandSettingChange
              ? brandSetting.hasOwnProperty('logoLocation')
                ? brandSetting['logoLocation']
                : ''
              : summary['logoLocation'];
            summary['layout'] = brandSetting.outroStyle.hasOwnProperty('layout')
              ? brandSetting.outroStyle['layout']
              : 'text';
            summary['sentence'] = this.state.askBrandSettingChange
              ? brandSetting.outroStyle['message']
              : summary['sentence'];
            summary['keywords'] = this.state.askBrandSettingChange ? keywords : summary['keywords'];
          }
        } else if (step3SceneCounter === 0 && this.state.askBrandSettingChange) {
          if (brandSetting.hasOwnProperty('introStyle') && brandSetting.introStyle['showStyle']) {
            this.copyTextFormatting(brandSetting.introStyle, textFormat, ThemeStyles, true);
            isBrandSettingAppliedOnScene = true;
            //summary["backgroundColor"] = brandSetting.introStyle['backgroundColor'] !== "" && brandSetting.introStyle['backgroundColor'] !== undefined ? brandSetting.introStyle['backgroundColor'] : "rgb(255, 255, 255)";
            summary['showLogo'] =
              brandSetting.introStyle['showLogo'] !== '' && brandSetting.introStyle['showLogo'] !== undefined
                ? brandSetting.introStyle['showLogo']
                : false;
            summary['logoImage'] = brandSetting.hasOwnProperty('logoFilePath')
              ? brandSetting['logoFilePath']
              : summary['logoImage']; // is extra in if condition
            summary['logoLocation'] = brandSetting.hasOwnProperty('logoLocation')
              ? brandSetting['logoLocation']
              : summary['logoLocation']; // is extra in if condition
          } else {
            this.copyTextFormatting({}, textFormat, ThemeStyles);
            if (!summary.backgroundColor) summary['backgroundColor'] = ThemeStyles.backgroundColor;
            if (!summary.showLogo)
              summary['showLogo'] =
                brandSetting.hasOwnProperty('introStyle') && brandSetting.introStyle['showLogo']
                  ? brandSetting.introStyle['showLogo']
                  : ThemeStyles.showLogo;
          }
        } else if (step3SceneCounter > 0 && this.state.askBrandSettingChange) {
          if (brandSetting.hasOwnProperty('sceneStyle') && brandSetting.sceneStyle['showStyle']) {
            this.copyTextFormatting(brandSetting.sceneStyle, textFormat, ThemeStyles, true);
            isBrandSettingAppliedOnScene = true;
            //summary["backgroundColor"] = brandSetting.sceneStyle['backgroundColor'] !== "" && brandSetting.sceneStyle['backgroundColor'] !== undefined ? brandSetting.sceneStyle['backgroundColor'] : "rgb(255, 255, 255)";
            summary['showLogo'] =
              brandSetting.sceneStyle['showLogo'] !== '' && brandSetting.sceneStyle['showLogo'] !== undefined
                ? brandSetting.sceneStyle['showLogo']
                : false;
            summary['logoImage'] = brandSetting.hasOwnProperty('logoFilePath')
              ? brandSetting['logoFilePath']
              : summary['logoImage'];
            summary['logoLocation'] = brandSetting.hasOwnProperty('logoLocation')
              ? brandSetting['logoLocation']
              : summary['logoLocation'];
          } else {
            this.copyTextFormatting({}, textFormat, ThemeStyles);
            if (!summary.backgroundColor) summary['backgroundColor'] = ThemeStyles.backgroundColor;
            if (!summary.showLogo)
              summary['showLogo'] =
                brandSetting.hasOwnProperty('sceneStyle') && brandSetting.sceneStyle['showLogo']
                  ? brandSetting.sceneStyle['showLogo']
                  : ThemeStyles.showLogo;
          }
        }

        if (step3Json.scenes[step3SceneCounter]['imageMetadata'] && step3Json.scenes[step3SceneCounter].image) {
          allAssets[step3Json.scenes[step3SceneCounter].image] = JSON.parse(
            step3Json.scenes[step3SceneCounter]['imageMetadata']
          );
        }

        if (
          step3Json.scenes[step3SceneCounter].sceneId === 'Outro Scene' &&
          step3Json.scenes[step3SceneCounter].hasOwnProperty('addArticleLink')
        ) {
          summary['addArticleLink'] = step3Json.scenes[step3SceneCounter].addArticleLink;
        } else if (step3Json.scenes[step3SceneCounter].sceneId === 'Outro Scene') {
          summary['addArticleLink'] = false;
        }

        summary.format = [];
        for (
          var subSentenceCounter = 0;
          subSentenceCounter < step3Json.scenes[step3SceneCounter].lines.length;
          subSentenceCounter++
        ) {
          let subsentence =
            step3Json.scenes[step3SceneCounter].lines[subSentenceCounter].html ||
            step3Json.scenes[step3SceneCounter].lines[subSentenceCounter].text ||
            '';
          // highlight keywords in the subsentence with <strong> tags for old projects that used keywords array
          if (!step3Json.projectMetaData || !step3Json.projectMetaData.sentencesIncludeKeywords)
            subsentence = AnimationHelper.highlightKeywords(subsentence, summary.keywords);
          summary.subsentences.push(subsentence);
          if (this.state.source === 'transcribe') {
            if (step3Json.scenes[step3SceneCounter].lines[subSentenceCounter].settings) {
              if (
                step3Json.scenes[step3SceneCounter].lines[subSentenceCounter].settings.subSentenceSegments &&
                step3Json.scenes[step3SceneCounter].lines[subSentenceCounter].settings.subSentenceSegments.length > 0
              ) {
                summary.subSentenceSegments.push(
                  step3Json.scenes[step3SceneCounter].lines[subSentenceCounter].settings.subSentenceSegments
                );
              }
            }
          }

          let subsceneTextFormat = step3Json.scenes[step3SceneCounter].lines[subSentenceCounter].format;
          if (subsceneTextFormat && !isBrandSettingAppliedOnScene) {
            // For old project with aspect ratio other than 16:9, correct the fontSize
            if (!step3Json.projectMetaData || !step3Json.projectMetaData.aspectRatioFontSizeFixed) {
              if (step3Json.aspectRatioClass !== 'sixteen-nine') {
                let font = optionsFontSize.find(
                  font => font.value >= subsceneTextFormat.fontSize / ASPECT_RATIO_FACTOR
                );
                if (!font) font = optionsFontSize[optionsFontSize.length - 1];
                subsceneTextFormat.fontSize = font.value;
              }
            }
            this.copyTextFormatting(subsceneTextFormat, textFormat, {}, true);
          }
          const textFormatCopy = _.cloneDeep(textFormat);
          // Change CDN url for old projects that used maxcdn
          textFormatCopy.displayItems = textFormatCopy.displayItems?.map(dispItem => {
            let displayUrl = dispItem.visualData?.url;
            if (
              dispItem.type === 'visual' &&
              getElementsVisualType(displayUrl) === 'emoji' &&
              displayUrl.indexOf('https://twemoji.maxcdn.com/2/svg/') === 0
            ) {
              let unifiedCode = dispItem.visualData.unified;
              dispItem.visualData.url =
                'https://cdn.jsdelivr.net/npm/@svgmoji/twemoji@2.0.0/svg/' +
                (unifiedCode || '2753').toUpperCase() +
                '.svg';
            }
            return dispItem;
          });
          if (textFormatCopy?.visual?.isLogo) {
            let newDisplayItem = {
              type: 'visual',
              id: uuidv4(),
              visualData: { url: textFormatCopy?.visual.visualUrl },
              itemStyleData: {
                paragraphWidth: textFormatCopy?.visual?.position?.width,
                preset: textFormatCopy?.visual?.position?.preset,
              },
            };
            newDisplayItem.isLogo = true;
            if (!textFormatCopy.displayItems) {
              textFormatCopy.displayItems = [];
            }
            textFormatCopy.displayItems.push(newDisplayItem);
            textFormatCopy.visual = {};
          }
          summary.format.push(textFormatCopy);

          var subSentenceSceneId =
            step3Json.scenes[step3SceneCounter].sceneId == 'Custom Intro Scene' ? 1 : step3SceneCounter + 1;
          let position = {
            SceneId: subSentenceSceneId,
            SubSceneId: step3Json.scenes[step3SceneCounter].lines[subSentenceCounter].subSceneId,
            topCoordinate: step3Json.scenes[step3SceneCounter].lines[subSentenceCounter].topCoordinate,
            leftCoordinate: step3Json.scenes[step3SceneCounter].lines[subSentenceCounter].leftCoordinate,
            paragraphWidth: step3Json.scenes[step3SceneCounter].lines[subSentenceCounter].paragraphWidth,
          };
          scenePosition.push(position);
        }
        if (step3Json.scenes[step3SceneCounter].isBrandIntro) {
          summary.isBrandIntro = true;
        }
        if (step3Json.scenes[step3SceneCounter].isBrandOutro) {
          summary.isBrandOutro = true;
        }

        summaryJsonText.push(summary);
        if (step3Json.scenes[step3SceneCounter].image !== '') {
          if (step3Json.scenes[step3SceneCounter].sceneId === 'Outro Scene' && this.state.askBrandSettingChange) {
            let outroBgImage = brandSetting.outroStyle.hasOwnProperty('backgroundFilePath')
              ? brandSetting.outroStyle['backgroundFilePath']
              : DUMMY_IMAGE;
            this.state.imageURL.push(outroBgImage);
          } else {
            this.state.imageURL.push(step3Json.scenes[step3SceneCounter].image);
          }
        } else {
          this.state.imageURL.push('');
        }
      }

      if (this.state.askBrandSettingChange) {
        if (step3Json.scenes[0].sceneId == 'Custom Intro Scene') {
          summaryJsonText[0].showLogo = false;
          summaryJsonText[0].image =
            brandSetting.hasOwnProperty('customIntro') && brandSetting.customIntro['showStyle']
              ? brandSetting.customIntro.image
              : summaryJsonText[0].image;
          if (brandSetting.hasOwnProperty('introStyle') && brandSetting.introStyle['showStyle']) {
            summaryJsonText[1].format[0] = summaryJsonText[1].format[0] || {};
            this.copyTextFormatting(brandSetting.introStyle, summaryJsonText[1].format[0], ThemeStyles, true);
            summaryJsonText[1]['showLogo'] =
              brandSetting.introStyle['showLogo'] !== '' && brandSetting.introStyle['showLogo'] !== undefined
                ? brandSetting.introStyle['showLogo']
                : false;
            summaryJsonText[1]['logoImage'] = brandSetting.hasOwnProperty('logoFilePath')
              ? brandSetting['logoFilePath']
              : summaryJsonText[0]['logoImage'];
            summaryJsonText[1]['logoLocation'] = brandSetting.hasOwnProperty('logoLocation')
              ? brandSetting['logoLocation']
              : summaryJsonText[0]['logoLocation'];
          }
        } else {
          // When no intro scene and 1st/title scene is linked all linked scenes have introStyle brand settings,
          // As only 1st sub-scene should be introStyle, copy sceneStyle brand settings to all subscenes after the first sub-scene in title scene
          if (brandSetting.hasOwnProperty('sceneStyle') && brandSetting.sceneStyle['showStyle']) {
            for (let i = 1; i < summaryJsonText[0].format.length; i++) {
              summaryJsonText[0].format[i] = summaryJsonText[0].format[i] || {};
              this.copyTextFormatting(brandSetting.sceneStyle, summaryJsonText[0].format[i], ThemeStyles, true);
            }
          }
        }
      }

      await this.setState({ url: step3Json.articleUrl, allAssets, scenePosition: scenePosition });

      this.state.summaryJsonText = summaryJsonText;

      var totalSentence = 0;
      var totalSentencesWithSubScenes = 0;

      AppLocalStorage.setItem('voiceSpeechSpeed', this.state.speedValue);
      // if(this.state.brandSetting.outroStyle["showStyle"])
      // totalSentencesWithSubScenes = 1;
      projectJSON.imageAssests = imageAssests;
      if (projectJSON.imageAssests) {
        if (typeof projectJSON.imageAssests == 'string') {
          projectJSON.imageAssests = JSON.parse(projectJSON.imageAssests);
        }
      }
      let allSummaryAssets = [];
      if (projectJSON.allSummaryAssets && typeof projectJSON.allSummaryAssets == 'string') {
        allSummaryAssets = [...JSON.parse(projectJSON.allSummaryAssets)];
      }
      let defaultImages = [...this.state.defaultImages];
      imageAssests = [...this.state.imageAssests];
      if (this.state.summaryJsonText && this.state.summaryJsonText.length > 0) {
        this.state.summaryJsonText.map((text, i) => {
          /*if (text.transcription) {
						this.state.timePerFrame.push(text.transcribeVideoLength);
					}*/

          if (text.image !== '') {
            this.state.imageURL.push(text.image);
          } else {
            this.state.imageURL.push('');
          }
          this.state.selectedKeywordForUnderline.push('');
          totalSentence = parseInt(totalSentence) + 1;
          totalSentencesWithSubScenes = parseInt(totalSentencesWithSubScenes) + parseInt(text.subsentences.length);
          if (!projectJSON.imageAssests) {
            defaultImages = [
              defaultImages,
              {
                thumb: text.image ? text.image : '',
                large: text.image ? text.image : '',
                preview: text.image ? text.image : '',
                url: text.image ? text.image : '',
              },
            ];
          }
          if (!projectJSON.imageAssests) {
            imageAssests = [
              imageAssests,
              {
                thumb: text.image ? text.image : '',
                large: text.image ? text.image : '',
                preview: text.image ? text.image : '',
                url: text.image ? text.image : '',
              },
            ];
          }
        });
        /* if (brandSetting.customIntro && brandSetting.customIntro.showStyle) {
          if (
            !prevSavedValues.intro &&
            projectJSON.timePerFrame &&
            projectJSON.timePerFrame.length < totalSentencesWithSubScenes
          )
            projectJSON.timePerFrame.unshift(5); // add default 5sec intro timing
          if (prevSavedValues.introChanged)
            // intro type changed from pic to video or vice versa, so reset to default time
            projectJSON.timePerFrame[0] = 5;
        } else {
          if (
            prevSavedValues.intro &&
            projectJSON.timePerFrame &&
            projectJSON.timePerFrame.length > totalSentencesWithSubScenes
          )
            projectJSON.timePerFrame.shift(); // remove intro timing
        }
        if (brandSetting.outroStyle && brandSetting.outroStyle.showStyle) {
          if (
            !prevSavedValues.outro &&
            projectJSON.timePerFrame &&
            projectJSON.timePerFrame.length < totalSentencesWithSubScenes
          )
            projectJSON.timePerFrame.push(5); // add default 5sec outro timing
          if (prevSavedValues.outroChanged)
            // outro type changed from pic to video or vice versa, so reset to default time
            projectJSON.timePerFrame[projectJSON.timePerFrame.length - 1] = 5;
        } else {
          if (
            prevSavedValues.outro &&
            projectJSON.timePerFrame &&
            projectJSON.timePerFrame.length > totalSentencesWithSubScenes
          )
            projectJSON.timePerFrame.pop(); // remove outro timing
        } */
        await this.setTimePerFrameArray(projectJSON.timePerFrame);

        this.setState({
          allSummaryAssets,
          hasOneSubPerSentence: projectJSON.hasOneSubPerSentence,
          projectMetaData: projectJSON.projectMetaData,
          defaultImages: projectJSON.imageAssests ? [...projectJSON.imageAssests] : defaultImages,
          sentences: totalSentence,
          totalSentencesWithSubScenes: totalSentencesWithSubScenes,
          imageAssests: projectJSON.imageAssests ? [...projectJSON.imageAssests] : imageAssests,
          durationUpdatedScenes: projectJSON?.durationUpdatedScenes
            ? {
                loading: false,
                sceneIds: projectJSON.durationUpdatedScenes?.sceneIds || [],
                sceneIndices: projectJSON.durationUpdatedScenes?.sceneIndices || [],
                isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
                updatedSceneDuration: this.state?.durationUpdatedScenes?.updatedSceneDuration || [],
              }
            : { loading: false, sceneIds: [], sceneIndices: [], isSceneDeleted: false, updatedSceneDuration: [] },
          generatedVoiceOvers: projectJSON?.generatedVoiceOvers || [],
        });
      }
      if (projectJSON.videoURL) {
        this.setState({
          videoURL: projectJSON.videoURL,
        });
      }
    } else {
      if (this.state.loadProjectDetails) {
        this.setState({
          templateMetaData: this.state.loadProjectDetails.templateMetaData,
          projectMetaData: { aspectRatioFontSizeFixed: true }, // Maintain same fontSize on changing aspectRatio
        });
        if (this.state.loadProjectDetails.source === 'transcribe') {
          if (this.state.loadProjectDetails.transcriptionDuration) {
            this.setState({
              transcriptionDuration: this.state.loadProjectDetails.transcriptionDuration,
            });
          }
          if (this.state.loadProjectDetails.transcriptionLanguage) {
            this.setState({
              transcriptionLanguage: this.state.loadProjectDetails.transcriptionLanguage,
            });
          }

          if (this.state.loadProjectDetails.isPodcast !== undefined) {
            this.setState({
              isPodcast: this.state.loadProjectDetails.isPodcast,
            });
          }

          if (this.state.loadProjectDetails.editingVideoHeight) {
            this.setState({
              editingVideoHeight: this.state.loadProjectDetails.editingVideoHeight,
            });
          }
          if (this.state.loadProjectDetails.editingVideoWidth) {
            this.setState({
              editingVideoWidth: this.state.loadProjectDetails.editingVideoWidth,
            });
          }
          if (this.state.loadProjectDetails.subtitlesLineCount) {
            this.setState({
              subtitlesLineCount: this.state.loadProjectDetails.subtitlesLineCount,
            });
          }
        }
        if (this.state.loadProjectDetails.bgMusicVolPercent !== undefined)
          this.setState({ bgMusicVolPercent: this.state.loadProjectDetails.bgMusicVolPercent });

        if (
          this.state.loadProjectDetails.videoVolume !== undefined &&
          this.state.loadProjectDetails.videoVolume !== null
        ) {
          this.setState({ videoVolume: this.state.loadProjectDetails.videoVolume });
        }

        if (this.state.loadProjectDetails.aspectRatioClass && this.state.loadProjectDetails.aspectRatioValue) {
          let fractionValue = this.state.loadProjectDetails.aspectRatioFractionValue;
          if (fractionValue) {
            const aspectRatio = AllAspectRatios.find(ratio => Math.abs(ratio.fractionValue - fractionValue) <= 0.01);
            if (aspectRatio) {
              this.updateAspectRatio(
                { value: aspectRatio.value, class: aspectRatio.class, fractionValue: aspectRatio.fractionValue },
                true,
                null,
                this.state.loadProjectDetails.frameAspectRatio
              );
            } else {
              let customValue = this.state.loadProjectDetails.aspectRatioValue.replace(/\s/g, '-');
              this.updateAspectRatio(
                { value: customValue, class: customValue, fractionValue: fractionValue },
                true,
                null,
                this.state.loadProjectDetails.frameAspectRatio
              );
            }
          } else {
            const aspectRatio = AllAspectRatios.find(
              ratio => ratio.class === this.state.loadProjectDetails.aspectRatioClass
            );
            if (aspectRatio) {
              fractionValue = aspectRatio.fractionValue;
            } else {
              fractionValue = ASPECT_RATIO_DEFAULT_FRACTION_VALUE;
            }
            this.updateAspectRatio(
              {
                value: this.state.loadProjectDetails.aspectRatioValue,
                class: this.state.loadProjectDetails.aspectRatioClass,
                fractionValue,
              },
              true,
              null,
              this.state.loadProjectDetails.frameAspectRatio
            );
          }
        }

        if (this.state.loadProjectDetails.videoResolution) {
          let videoResolutions = [...this.state.videoResolutions];
          if (videoResolutions.includes(this.state.loadProjectDetails.videoResolution) === false) {
            videoResolutions.push(this.state.loadProjectDetails.videoResolution);
          }
          this.setState({
            VideoRes: this.state.loadProjectDetails.videoResolution,
            videoResolutions,
          });
        }
      }

      let summaryJson = [];
      let imageAssets = [];
      for (let i = 0; i < this.state.summaryJsonText.length; i++) {
        let summary = this.state.summaryJsonText[i];
        this.extractImageFromSummarySentence(summary);
        if (summary.image && summary.image != '') {
          summary.settings = { ...this.state.defaultSceneSettings, imageZoomPan: false };
          summary.isArticleImage = true;

          if (this.state.source == 'visuals') {
            if (getResourceType(summary.image) == 'video') {
              summary.isUploadedVideo = true;
              summary.settings = {
                ...summary.settings,
                muteClipAudio: false,
                videoOptions: { segments: [{ start: summary.startTime, end: summary.endTime }], isCropped: true },
              };
            }
            imageAssets.push({
              large: summary.image,
              url: summary.image,
              preview: summary.image,
              thumb: summary.image,
            });
          }
        } else {
          summary.settings = this.state.defaultSceneSettings;
        }
        if (this.state.source == 'transcribe') {
          summary.isUploadedVideo = true;
          summary.settings = {
            ...summary.settings,
            muteClipAudio: false,
            videoOptions: { segments: [...summary.timeSegments], isCropped: true },
          };
          if (!this.props.location.state.isSubtitleEnabled) {
            summary.settings.hideText = true;
          }
          // summary.settings.voiceOver = false;
          summary.transcribeVideoLength = this.state.timePerFrame[i];
        }
        summary.sceneId = i + 1;
        summaryJson.push(summary);
      }
      if (imageAssets.length && this.state.source == 'visuals') {
        this.setState({
          imageAssests: imageAssets,
        });
      }
      await this.setState({
        summaryJsonText: summaryJson,
      });
      AppLocalStorage.setItem('recordedAudio', '');
      let imageURL = await this.updatesummaryJSONTextArray(true);
      this.state.imageURL = [...imageURL];
      this.state.defaultImages = [...this.state.imageURL];
      if (this.state.loadProjectDetails.source !== 'transcribe') this.setTimePerFrameArray();
      if (this.state.source == 'visuals') {
        document.getElementById('visuals').click();
        document.getElementById('visual-uploads').click();
      }
    }

    this.setState({
      animationTheme: animationTheme,
      currentThemeName: animationTheme.themeName,
      voiceOverApplied,
    });
    this.addUuidToSummaryJsonText();
    await this.componentWillMount_call();
    await this.componentDidMount_call(isUndoRedo);
    this.getEstimatedTime();
    if (this.state.askBrandSettingChange || isUndoRedo) {
      if (isUndoRedo && !this.state.isOpenTextEditor) {
        this.reloadScene(this.state.currentActiveDiv);
      }
      this.setState({
        isAnyChange: true,
        askBrandSettingChange: false,
      });
    }
    // dont call the code inside this on new project creation, as it gets called from getSummaryImages() after loading images
    if (this.state.loadProject || isUndoRedo) {
      // Add intro & outro when old project without intro/outro is opened
      let setIntroOutroVideoDuration = false;
      // set actual intro outro video time in timePerFrame if no scene duration retrieved from stored data
      if (!projectJSON || !projectJSON.timePerFrame) setIntroOutroVideoDuration = true;
      this.setIntroVideoDurationInState(setIntroOutroVideoDuration);
      this.setOutroVideoDurationInState(setIntroOutroVideoDuration);
      this.triggerAppcuesEvent('storyboard-opened-existing-project');
    }

    //if (this.state.subSentencesArray?.length < 500)
    setTimeout(() => {
      this.setState({ showSceneStrip: true });
    }, 100);
    //else this.setState({ showSceneStrip: false });

    if (this.state.isGeneratedAsyncVideo) {
      this.setState({
        isAnyChange: true,
      });
    }
    if (this.state.actionTaken && !isUndoRedo) {
      this.setState({ actionTaken: false });
    }
    if (
      this.state.isNewProject &&
      this.props?.userBrands?.length > 0 &&
      !this.state.brandId &&
      this.state.brandId != 'none' &&
      this.state?.subSentencesArray?.length
    ) {
      //set default brand
      let defaultBrand = this.props?.userBrands?.find(x => x.isDefault);
      let skipVO = this.state.source == 'transcribe' ? true : false;
      if (defaultBrand) {
        await this.applyBrand(defaultBrand.id, skipVO, true);
      }
    }

    if (
      this.state.isNewProject &&
      this.props?.userBrands &&
      this.state.loadProjectDetails.source == 'transcribe' &&
      this.state?.subSentencesArray?.length
    ) {
      //set default brand
      let brandId = this.state.loadProjectDetails.brandId;
      let defaultBrand = this.props?.userBrands?.find(x => x.id == brandId);
      let skipVO = this.state.source == 'transcribe' ? true : false;
      if (defaultBrand) {
        await this.applyBrand(defaultBrand.id, skipVO, true);
      } else if (this.state.loadProjectDetails.step2BrandDetails) {
        await this.applyBrand(null, skipVO, true, this.state.loadProjectDetails.step2BrandDetails);
      }
      if (this.state?.loadProjectDetails?.appliedStyle) {
        await this.applyStyleToScene(this.state.loadProjectDetails.appliedStyle, 'scenes', null, true);
      }
    }

    if (allowReelFastVideo(this.state.username)) {
      try {
        // //Load Resources for preview
        //let videoCreationJson = await this.generateVideoJSON(null, null, false, null, null, true);
        //this.videoPreviewRef.current.LoadJsonResources(videoCreationJson);
        // //
      } catch (e) {}
    }
  };

  addUuidToSummaryJsonText = () => {
    const summaryJsonText = [...this.state.summaryJsonText];
    for (let i = 0; i < summaryJsonText.length; i++) {
      if (summaryJsonText[i].uuidArray) continue;
      summaryJsonText[i].uuid = 'scene_' + uuidv4();
      summaryJsonText[i].uuidArray = [];
      for (let j = 0; j < summaryJsonText[i].subsentences.length; j++) {
        summaryJsonText[i].uuidArray.push(uuidv4());
      }
    }
    this.setState({ summaryJsonText });
  };

  getFontNameWithWeight = ThemeStyles => {
    return (
      ThemeStyles.fontName.replace(/\'/g, '').replace(' ', '') +
      (ThemeStyles.fontWeight ? '-' + ThemeStyles.fontWeight : '')
    );
  };

  static getFrontFontName(fontName) {
    //console.log('fontname step3: ' + fontName);
    if (fontName === 'Arial-Bold') {
      fontName = 'Arial; font-weight: bold';
    } else if (fontName === 'Calibri-Bold') {
      fontName = 'Calibri; font-weight: bold';
    } else if (fontName === 'Helvetica') {
      fontName = "'Helvetica'; font-weight: normal";
    } else if (fontName === 'Helvetica-Regular') {
      fontName = "'Helvetica'; font-weight: normal";
    } else if (fontName === 'HelveticaNeue-Medium') {
      fontName = 'Helvetica Neue; font-weight: bold';
    } else if (fontName === 'Lato-Bold') {
      fontName = 'Lato; font-weight: bold';
    } else if (fontName === 'Lato-Black') {
      fontName = 'Lato; font-weight: 900';
    } else if (fontName === 'Lato') {
      fontName = 'Lato';
    } else if (fontName === 'Merriweather-Bold') {
      fontName = 'Merriweather; font-weight: bold';
    } else if (fontName === 'Montserrat-Bold') {
      fontName = 'Montserrat; font-weight: bold';
    } else if (fontName === 'NotoSans') {
      fontName = 'Noto Sans';
    } else if (fontName === 'NotoSans-Bold') {
      fontName = 'Noto Sans; font-weight: bold';
    } else if (fontName === 'OpenSans') {
      fontName = 'Open Sans';
    } else if (fontName === 'OpenSans-Bold') {
      fontName = 'Open Sans; font-weight: bold';
    } else if (fontName === 'Poppins') {
      fontName = 'Poppins';
    } else if (fontName === 'Poppins-Bold') {
      fontName = 'Poppins; font-weight: bold';
    } else if (fontName === 'Poppins-ExtraBold') {
      fontName = 'Poppins; font-weight: 900';
    } else if (fontName === 'Quicksand') {
      fontName = 'Quicksand';
    } else if (fontName === 'Quicksand-Bold') {
      fontName = 'Quicksand; font-weight: bold';
    } else if (fontName === 'Roboto') {
      fontName = 'Roboto';
    } else if (fontName === 'Roboto-Bold') {
      fontName = 'Roboto; font-weight: bold';
    } else if (fontName === 'Rokkitt') {
      fontName = 'Rokkitt';
    } else if (fontName === 'Rokkitt-Bold') {
      fontName = 'Rokkitt; font-weight: bold';
    } else if (fontName === 'SourceSansPro') {
      fontName = 'Source Sans Pro';
    } else if (fontName === 'SourceSansPro-Bold') {
      fontName = 'Source Sans Pro; font-weight: bold';
    } else if (fontName === 'Ubuntu') {
      fontName = 'Ubuntu';
    } else if (fontName === 'Ubuntu-Bold') {
      fontName = 'Ubuntu; font-weight: bold';
    } else if (fontName === 'ProximaNova') {
      fontName = 'ProximaNova; font-weight: normal';
    } else if (fontName === 'Anton') {
      fontName = 'Anton';
    } else if (fontName === 'Barlow') {
      fontName = 'Barlow';
    } else if (fontName === 'BarlowBlack' || fontName === 'Barlow Black') {
      fontName = 'Barlow; font-weight: 900';
    } else if (fontName === 'BebasNeue') {
      fontName = 'Bebas Neue';
    } else if (fontName === 'Caprasimo') {
      fontName = 'Caprasimo';
    } else if (fontName === 'Capriola') {
      fontName = 'Capriola';
    } else if (fontName === 'CarterOne') {
      fontName = 'Carter One';
    } else if (fontName === 'ChakraPetch') {
      fontName = 'Chakra Petch';
    } else if (fontName === 'Chewy') {
      fontName = 'Chewy';
    } else if (fontName === 'Comfortaa') {
      fontName = 'Comfortaa';
    } else if (fontName === 'Dangrek') {
      fontName = 'Dangrek';
    } else if (fontName === 'DeliusUnicase') {
      fontName = 'Delius Unicase';
    } else if (fontName === 'Gruppo') {
      fontName = 'Gruppo';
    } else if (fontName === 'JuliusSansOne' || fontName === 'Julius Sans One' || fontName === 'JuliusSans One') {
      fontName = 'Julius Sans One';
    } else if (fontName === 'PatuaOne') {
      fontName = 'Patua One';
    } else if (fontName === 'Raleway') {
      fontName = 'Raleway';
    } else if (fontName === 'RalewayBlack' || fontName === 'Raleway Black') {
      fontName = 'Raleway; font-weight: 900';
    } else if (fontName === 'RalewayThin' || fontName === 'Raleway Thin') {
      fontName = 'Raleway; font-weight: 100';
    } else if (fontName === 'RussoOne') {
      fontName = 'Russo One';
    } else if (fontName === 'Satisfy') {
      fontName = 'Satisfy';
    } else if (fontName === 'SpecialElite') {
      fontName = 'Special Elite';
    } else if (fontName === 'TitilliumWeb') {
      fontName = 'Titillium Web';
    } else if (fontName === 'TitilliumWebBlack' || fontName === 'Titillium Web Black') {
      fontName = 'Titillium Web; font-weight: 900';
    } else if (fontName === 'Unbounded') {
      fontName = 'Unbounded';
    }

    return fontName;
  }

  /**
   * Copy formatting from fromStyle to toObject. If fromStyle doesn't have that attribute, copy from ThemeStyles
   * @param {*} fromStyle
   * @param {*} toObject
   * @param {*} ThemeStyles
   * @param {*} overwrite if true overwrite toObject value with fromStyle value if fromStyle value exists, else retain toObject value
   * @param {*} skipAttributesList to skip copying some attributes, pass the attribute names as an array
   */
  copyTextFormatting = (fromStyle, toObject, ThemeStyles, overwrite, skipAttributesList) => {
    if (!fromStyle) fromStyle = {};
    if (!ThemeStyles) ThemeStyles = {};
    const copyData = attr => {
      if (fromStyle[attr] && typeof fromStyle[attr] === 'object') fromStyle[attr] = _.cloneDeep(fromStyle[attr]);
      toObject[attr] = overwrite ? fromStyle[attr] || toObject[attr] : toObject[attr] || fromStyle[attr];
      if (!toObject[attr]) {
        let themeAttr;
        if (attr === 'fontName' && ThemeStyles.fontName) themeAttr = this.getFontNameWithWeight(ThemeStyles);
        else if (attr === 'textAlign')
          themeAttr = ThemeStyles.textRightAlign ? 'right' : ThemeStyles.textHCenterAlign ? 'center' : 'left';
        else themeAttr = ThemeStyles[attr];
        toObject[attr] = themeAttr;
      }
    };
    for (let i = 0; i < textFormatAttributes.length; i++) {
      const attr = textFormatAttributes[i];
      if (attr === 'preset' && !fromStyle.preset && fromStyle.leftCoordinate) toObject['preset'] = null;
      else if (skipAttributesList?.includes(attr)) continue;
      else copyData(attr);
    }
    toObject['FontNameForFront'] = CreateVideo_Step3.getFrontFontName(toObject['fontName']);
  };

  updatesummaryJSONTextArray = async (isAppendOutro = false) => {
    const isAllowTemplates = allowTemplates(this.state.username);
    var totalSentence = 0;
    var totalSentencesWithSubScenes = 0;
    let ThemeStyles = this.state.animationTheme.getStyles();
    ThemeStyles.fontSize = this.getFontSizeForAspectRatio(ThemeStyles.fontSize);
    let imageURL = [];
    AppLocalStorage.setItem('voiceSpeechSpeed', this.state.speedValue);
    if (this.state.brandSetting !== '' && this.state.brandSetting !== null && this.state.brandSetting.length > 0)
      if (this.state.brandSetting.hasOwnProperty('outroStyle') && this.state.brandSetting.outroStyle['showStyle'])
        totalSentencesWithSubScenes = 1;

    const summaryJsonText = [...this.state.summaryJsonText];
    for (let i = 0; i < summaryJsonText.length; i++) {
      let introTextFormat;
      let textFormat = {};
      if (
        i === 0 &&
        this.state.brandSetting.hasOwnProperty('introStyle') &&
        this.state.brandSetting.introStyle['showStyle']
      ) {
        introTextFormat = {};
        this.copyTextFormatting(this.state.brandSetting.introStyle, introTextFormat, ThemeStyles);
      }
      if (
        summaryJsonText[i].sceneId !== 'Outro Scene' &&
        this.state.brandSetting.hasOwnProperty('sceneStyle') &&
        this.state.brandSetting.sceneStyle['showStyle']
      ) {
        this.copyTextFormatting(this.state.brandSetting.sceneStyle, textFormat, ThemeStyles);
      } else if (summaryJsonText[i].sceneId === 'Outro Scene' && this.state.brandSetting.hasOwnProperty('outroStyle')) {
        this.copyTextFormatting(this.state.brandSetting.outroStyle, textFormat, ThemeStyles);
      } else {
        this.copyTextFormatting({}, textFormat, ThemeStyles);
      }
      let subsceneCount = summaryJsonText[i].subsentences.length;
      summaryJsonText[i].format = new Array(subsceneCount).fill(_.cloneDeep(textFormat));
      if (i === 0 && introTextFormat) summaryJsonText[0].format[0] = introTextFormat;

      if (i === 0 && this.state.brandSetting.hasOwnProperty('introStyle')) {
        summaryJsonText[i]['showLogo'] =
          this.state.isNewProject || this.state.askBrandSettingChange
            ? this.state.brandSetting.introStyle['showLogo'] !== '' &&
              this.state.brandSetting.introStyle['showLogo'] !== undefined
              ? this.state.brandSetting.introStyle['showLogo']
              : false
            : summaryJsonText[i].showLogo;
      }
      if (
        i !== 0 &&
        summaryJsonText[i].sceneId !== 'Outro Scene' &&
        this.state.brandSetting.hasOwnProperty('sceneStyle')
      ) {
        summaryJsonText[i]['showLogo'] =
          this.state.isNewProject || this.state.askBrandSettingChange
            ? this.state.brandSetting.sceneStyle['showLogo'] !== '' &&
              this.state.brandSetting.sceneStyle['showLogo'] !== undefined
              ? this.state.brandSetting.sceneStyle['showLogo']
              : false
            : summaryJsonText[i].showLogo;
      }

      summaryJsonText[i]['logoImage'] = this.state.logoImage;
      summaryJsonText[i]['logoLocation'] = this.state.logoLocation;
      if (summaryJsonText[i].image !== '') {
        imageURL.push(summaryJsonText[i].image);
      } else {
        imageURL.push('');
      }
      this.state.selectedKeywordForUnderline.push('');
      totalSentence = parseInt(totalSentence) + 1;
      totalSentencesWithSubScenes =
        parseInt(totalSentencesWithSubScenes) + parseInt(summaryJsonText[i].subsentences.length);
      this.state.sentences = totalSentence;
      this.state.totalSentencesWithSubScenes = totalSentencesWithSubScenes;
    }

    const timePerFrame = [...this.state.timePerFrame];
    var brandSetting = this.state.brandSetting;

    /* if (isAllowTemplates && isAppendOutro) {
			var summary = {
				"sceneId": 'Outro Scene',
				"sentence": '',
				"keywords": [],
				"type": "summary",
				"subsentences": [''],
				"showLogo": true,
				"settings": _.cloneDeep(this.state.defaultSceneSettings),
				uuidArray: [uuidv4()]
			};
			summary.settings.hideScene = true;

			summaryJsonText.push(summary);
			timePerFrame.push(5); // add default duration for outro scene
			imageURL.push(DUMMY_IMAGE);
		} */
    // brandSetting is {} when allowTemplates is true
    if (brandSetting.hasOwnProperty('outroStyle') && brandSetting.outroStyle['showStyle'] && isAppendOutro) {
      let message = '';
      let keywords = [];
      if (brandSetting.outroStyle.hasOwnProperty('message')) {
        message = brandSetting.outroStyle['message'];
        var span = document.createElement('span');
        span.innerHTML = message;
        let strongTags = span.querySelectorAll('strong');
        for (var keywordCounter = 0; keywordCounter < strongTags.length; keywordCounter++) {
          keywords.push(strongTags[keywordCounter].innerHTML.trim());
        }
      }
      let outroBgImage = brandSetting.outroStyle.hasOwnProperty('backgroundFilePath')
        ? brandSetting.outroStyle['backgroundFilePath']
        : DUMMY_IMAGE;
      let ThemeStyles = this.state.animationTheme.getStyles();
      ThemeStyles.fontSize = this.getFontSizeForAspectRatio(ThemeStyles.fontSize);
      let fontName =
        brandSetting.outroStyle['fontName'] !== '' && brandSetting.outroStyle['fontName'] !== undefined
          ? brandSetting.outroStyle['fontName']
          : this.getFontNameWithWeight(ThemeStyles);

      var summary = {
        sceneId: 'Outro Scene',
        sentence: message,
        keywords: keywords,
        type: 'summary',
        logoImage: this.state.logoImage,
        logoLocation: this.state.logoLocation,
        image: outroBgImage,
        fontSize:
          brandSetting.outroStyle['fontSize'] !== '' && brandSetting.outroStyle['fontSize'] !== undefined
            ? brandSetting.outroStyle['fontSize']
            : ThemeStyles.fontSize,
        fontName: fontName,
        fontColor:
          brandSetting.outroStyle['fontColor'] !== '' && brandSetting.outroStyle['fontColor'] !== undefined
            ? brandSetting.outroStyle['fontColor']
            : 'rgb(0,0,0)',
        backgroundColor:
          brandSetting.outroStyle['backgroundColor'] !== '' && brandSetting.outroStyle['backgroundColor'] !== undefined
            ? brandSetting.outroStyle['backgroundColor']
            : 'rgb(255, 255 , 255)',
        keywordColor:
          brandSetting.outroStyle['keywordColor'] !== '' && brandSetting.outroStyle['keywordColor'] !== undefined
            ? brandSetting.outroStyle['keywordColor']
            : ThemeStyles.keywordColor,
        subsentences: [message],
        FontNameForFront: CreateVideo_Step3.getFrontFontName(fontName),
        showLogo: brandSetting.outroStyle['showLogo'],
        addArticleLink: brandSetting.outroStyle['addArticleLink'] ? true : false,
        layout: brandSetting.outroStyle['layout'] ? brandSetting.outroStyle['layout'] : 'text',
        settings: _.cloneDeep(this.state.defaultSceneSettings),
        uuidArray: [uuidv4()],
      };
      if (getResourceType(outroBgImage) === 'video') {
        summary.settings.muteClipAudio = false;
        summary.settings.voiceOver = false;
        summary.settings.music = false;
      }
      summaryJsonText.push(summary);
      timePerFrame.push(5); // add default duration for outro scene
      imageURL.push(outroBgImage);
    }

    const isIntroAllowed = getFeatures(this.state.user ? this.state.user.username : '')[features.customIntroClip];
    /* if (isAllowTemplates && isAppendOutro && isIntroAllowed) {
			let customIntro = {
				"sceneId": 'Custom Intro Scene',
				"showSceneNumber": "Custom Intro Scene",
				"keywords": [],
				"type": "summary",
				"subsentences": [""],
				"showLogo": true,
				"settings": _.cloneDeep(this.state.defaultSceneSettings),
				uuidArray: [uuidv4()]
			};
			customIntro.settings.hideScene = true;

			summaryJsonText.unshift(customIntro);
			timePerFrame.unshift(5); // add default duration for intro scene
			imageURL.unshift(DUMMY_IMAGE);
		} */
    if (brandSetting && brandSetting.customIntro && isAppendOutro && isIntroAllowed) {
      if (brandSetting.customIntro.showStyle) {
        let customIntroImage = brandSetting.customIntro.image;
        let customIntro = {
          sceneId: 'Custom Intro Scene',
          showSceneNumber: 'Custom Intro Scene',
          keywords: [],
          type: 'summary',
          logoImage: '',
          logoLocation: '',
          image: brandSetting.customIntro.image,
          fontSize: this.getFontSizeForAspectRatio(24).toString(),
          fontName: 'Calibri',
          fontColor: 'rgba(244, 78, 59, 1)',
          backgroundColor: '',
          keywordColor: 'rgba(204, 204, 204, 1)',
          subsentences: [''],
          FontNameForFront: '',
          showLogo: false,
          addArticleLink: '',
          sentence: '',
          settings: _.cloneDeep(this.state.defaultSceneSettings),
          uuidArray: [uuidv4()],
        };
        if (getResourceType(customIntroImage) === 'video') {
          customIntro.settings.muteClipAudio = false;
          customIntro.settings.voiceOver = false;
          customIntro.settings.music = false;
        }
        summaryJsonText.unshift(customIntro);
        timePerFrame.unshift(5); // add default duration for intro scene
        imageURL.unshift(customIntroImage);
      }
    }
    await this.setState({ summaryJsonText: summaryJsonText, timePerFrame });
    return imageURL;
  };

  setTheme = themeName => {
    let theme = AnimationHelper.getThemeByName(themeName);

    // now also resetting, the position
    const subSentencesArray = this.state.subSentencesArray.map(row => {
      delete row.fontName;
      delete row.fontSize;
      delete row.fontColor;
      delete row.backcolorFullwidth;
      delete row.textBackgroundColor;
      delete row.keywordColor;
      delete row.textAlign;
      delete row.topCoordinate;
      delete row.leftCoordinate;
      delete row.paragraphWidth;
      return row;
    });

    const summaryJsonText = this.state.summaryJsonText.map(row => {
      delete row.fontName;
      delete row.fontSize;
      delete row.fontColor;
      delete row.backcolorFullwidth;
      delete row.textBackgroundColor;
      delete row.keywordColor;
      delete row.textAlign;
      delete row.topCoordinate;
      delete row.leftCoordinate;
      delete row.paragraphWidth;
      return row;
    });

    const scenePosition = [];

    //the states must be in the same positions

    this.setState(
      {
        animationTheme: theme,
        subSentencesArray,
        summaryJsonText,
        scenePosition,
        previousThemeName: this.state.currentThemeName,
        currentThemeName: theme.themeName,
      },
      () => {
        this.updatesummaryJSONTextArray(false);
        this.componentWillMount_call();
        this.setState({ isAnyChange: true });
        amplitude.getInstance().logEvent('theme-changed', {
          'current-theme': this.state.currentThemeName,
          'previous-theme': this.state.previousThemeName,
          'article-link': this.state.url,
          'project-id': this.state.project_id,
        });
      }
    );

    this.setDefaultPosition();
  };

  setDefaultPosition = () => {
    this.setState({ themeChange: !this.state.themeChange });
  };

  /*changeParagraphWidth(SceneCounter, paragraphWidth) {
		let sceneArray = [...this.state.subSentencesArray];
		sceneArray[SceneCounter - 1]['paragraphWidth'] = paragraphWidth;

    if (sceneArray[SceneCounter - 1].styleIdObj) sceneArray[SceneCounter - 1].styleIdObj.modified = true;

    const theScene = sceneArray[SceneCounter - 1];
    let positions = this.state.scenePosition;

    if (
      positions.filter(position => {
        return position.SceneId == theScene.sceneId && position.SubSceneId == theScene.subSceneId;
      }).length
    )
      positions = positions.map(position => {
        if (position.SceneId == theScene.sceneId && position.SubSceneId == theScene.subSceneId) {
          position.paragraphWidth = paragraphWidth;
        }

        return position;
      });
    else
      positions.push({
        SceneId: theScene.sceneId,
        SubSceneId: theScene.subSceneId,
        topCoordinate: undefined,
        leftCoordinate: undefined,
        paragraphWidth: paragraphWidth,
      });

    let refreshEditScene = this.state.refreshEditScene;
    let refreshAllScenePanel = this.state.refreshAllScenePanel;

    this.setState({
      subSentencesArray: sceneArray,
      scenePosition: positions,
      refreshEditScene: !refreshEditScene,
      refreshAllScenePanel: !refreshAllScenePanel,
      isAnyChange: true,
    });
  }

  changePosition(SceneCounter, leftCoordinate, topCoordinate, copyPositionToAll) {
    let sceneArray = [...this.state.subSentencesArray];
    if (copyPositionToAll) {
      // copy only the coordinates to all
      for (let i = 0; i < sceneArray.length; i++) {
        if (sceneArray[i].showSceneNumber === 'Outro Scene') continue;
        sceneArray[i].topCoordinate = topCoordinate;
        sceneArray[i].leftCoordinate = leftCoordinate;
      }
    } else {
      sceneArray[SceneCounter - 1]['leftCoordinate'] = leftCoordinate;
      sceneArray[SceneCounter - 1]['topCoordinate'] = topCoordinate;
    }
    let refreshEditScene = this.state.refreshEditScene;
    let refreshAllScenePanel = this.state.refreshAllScenePanel;
    this.setState({
      subSentencesArray: sceneArray,
      refreshEditScene: !refreshEditScene,
      refreshAllScenePanel: !refreshAllScenePanel,
      isAnyChange: true,
    });
  } */

  getDefaultAssets = (defaultImages, allSummaryAssets) => {
    const defaultAssets = [...defaultImages];
    if (
      this.props.location &&
      this.props.location.state &&
      this.props.location.state.articleImages &&
      this.props.location.state.articleImages.length > 0
    ) {
      for (let articleImage of this.props.location.state.articleImages) {
        if (
          defaultAssets.some(defaultAsset => {
            if (Object.keys(defaultAsset).length > 0) {
              return (
                getCleanedUrl(defaultAsset.thumb) === getCleanedUrl(articleImage) ||
                getCleanedUrl(defaultAsset.preview) === getCleanedUrl(articleImage) ||
                getCleanedUrl(defaultAsset.large) === getCleanedUrl(articleImage)
              );
            }
            return false;
          }) === false
        ) {
          defaultAssets.push({
            large: articleImage,
            preview: articleImage,
            thumb: articleImage,
          });
        }
      }
    }

    for (let assetUrl of allSummaryAssets) {
      if (
        defaultAssets.some(
          url =>
            getCleanedUrl(url && url.thumb ? url.thumb : '') ===
            getCleanedUrl(assetUrl && assetUrl.thumb ? assetUrl.thumb : '')
        ) === false
      ) {
        if (assetUrl && !_.isEmpty(assetUrl)) {
          defaultAssets.push(assetUrl);
        }
      }
    }

    this.setState({
      defaultAssets,
    });
  };

  getActionForAnalytics = (actionName, actionSource, activeAudioTab) => {
    if (activeAudioTab) {
      this.setState({
        activeAudioTab,
        audioTabsActivationStatus: { ...this.state.audioTabsActivationStatus, [activeAudioTab]: true },
      });
    }
    amplitude.getInstance().logEvent(actionName, {
      source: actionSource,
      'project-id': this.state.project_id,
    });
  };

  stopRecentLoader = () => {
    this.setState({
      recentLoading: false,
    });
  };

  stopImageFavouriteLoader = favLoading => {
    this.setState({
      favLoading,
    });
  };

  onVolumeChangeComplete = assetName => {
    this.setState({ isAnyChange: true });

    let useCase = 'video-editing';

    // log volumn changed event
    if (this.state.source) {
      let source = this.state.source.toLowerCase();
      if (source === 'url') {
        useCase = 'article-to-video';
      } else if (source === 'script') {
        useCase = 'script-to-video';
      } else if (source === 'visuals') {
        useCase = 'visuals-to-video';
      }
    }
    let aiVoiceOverTrackUrl = this.getAIVoiceOverTrackUrl();
    let bgMusicTrackUrl = this.getBgMusicTrackUrl();

    amplitude.getInstance().logEvent('volume-updated', {
      asset: assetName,
      'project-id': this.state.project_id,
      'use-case': useCase,
      'AI-voice-over-id': aiVoiceOverTrackUrl ? aiVoiceOverTrackUrl : 'NA',
      'music-id': bgMusicTrackUrl ? bgMusicTrackUrl : 'NA',
    });
  };

  getAIVoiceOverTrackUrl = () => {
    let retValue = 'NA';
    var index = this.state.voiceOverTracks.findIndex(voice => voice.active === true);
    if (index >= 0) {
      retValue = this.state.voiceOverTracks[index].trackUrl;
    }

    return retValue;
  };

  getBgMusicTrackUrl = () => {
    let retValue = 'NA';

    if (AppLocalStorage.getItem('activeTrack') !== '' && AppLocalStorage.getItem('activeTrack') !== null)
      retValue = AppLocalStorage.getItem('activeTrack');

    return retValue;
  };

  updateAspectRatio = async (row, shouldNotUpdate, prevAspectRatioValue, frameAspectRatioFromSavedJson) => {
    AppLocalStorage.setItem('aspectRatio', AnimationHelper.calculateDefaultWidth(row.fractionValue));
    AppLocalStorage.setItem('aspectRatioValue', row.value);
    let prevAspectRatio = AllAspectRatios.find(row => row.value == prevAspectRatioValue);
    if ((prevAspectRatio || frameAspectRatioFromSavedJson) && !this.state.frameAspectRatio) {
      const frameAspectRatio = prevAspectRatio || frameAspectRatioFromSavedJson;
      // when frameAspectRatio is set,  user is allowed to set frame. It is reset to undefined after user successfully sets the frame x, y
      await this.setState({ frameAspectRatio });
    }

    await this.setState(
      { aspectRatioClass: row.class, aspectRatioValue: row.value, aspectRatioFractionValue: row.fractionValue },
      () => {
        if (!shouldNotUpdate) {
          this.setState(
            {
              reFetchForAspectRatio: true,
            },
            () => {
              const subSentencesArray = this.state.subSentencesArray.map(subSentence => {
                /* if (prevAspectRatioValue && prevAspectRatioValue !== row.value) {
							if (prevAspectRatioValue == "facebook-newsfeed-16-9") { // change from 16:9 to any other smaller aspectRatio
								subSentence.fontSize = Math.round(subSentence.fontSize * ASPECT_RATIO_FACTOR);
							} else if (row.value == "facebook-newsfeed-16-9") { // change from any other smaller aspectRatio to 16:9
								subSentence.fontSize = Math.round(subSentence.fontSize / ASPECT_RATIO_FACTOR);
							}
						} */
                delete subSentence.settings.frame;
                //delete subSentence.topCoordinate;
                //delete subSentence.leftCoordinate;
                //delete subSentence.paragraphWidth;

                return subSentence;
              });
              /* const summaryJsonText = this.state.summaryJsonText.map(text => {
						if (prevAspectRatioValue && prevAspectRatioValue !== row.value) {
							if (prevAspectRatioValue == "facebook-newsfeed-16-9") { // change from 16:9 to any other smaller aspectRatio
								text.fontSize = Math.round(text.fontSize * ASPECT_RATIO_FACTOR);
							} else if (row.value == "facebook-newsfeed-16-9") { // change from any other smaller aspectRatio to 16:9
								text.fontSize = Math.round(text.fontSize / ASPECT_RATIO_FACTOR);
							}
						}
						return text;
					}); */

              const scenePosition = [];
              this.setState({
                subSentencesArray: subSentencesArray,
                //summaryJsonText: summaryJsonText,
                scenePosition: scenePosition,
              });
              this.setDefaultPosition();
              //if (this.state.source != "visuals" && this.state.source != "transcribe") {
              //	this.getSummaryImages(true);
              //} else {
              this.setState({
                isAnyChange: true,
              });
              //}
            }
          );
        }
      }
    );

    if (row && row.value) {
      amplitude.getInstance().logEvent('aspect-ratio-updated', {
        'aspect-ratio': row.value,
      });
    }
  };

  showUpgradeModal = (event, isQuotaExceeded, res) => {
    if (event) event.stopPropagation();

    if (isQuotaExceeded) {
      fixMorethanOnePopup('step-3-modal');

      $('#step-3-modal').modal('show');
      document.body.appendChild(document.getElementById('step-3-modal'));
    } else {
      let options = [];
      options = getFeatures(this.state.username)[features.videoResolution];

      let isHDVideosAllowed = false;
      for (let i = 0; i < options.length; i++) {
        const res = options[i];
        if (res === '1080p') {
          isHDVideosAllowed = true;
        }
      }
      if (!isHDVideosAllowed) {
        this.closeQuotaPopup();
        fixMorethanOnePopup('step-3-modal');
        $('#step-3-modal').modal('show');
        //document.body.appendChild(document.getElementById('step-3-modal'));

        $('.select-video-quality input[type=checkbox]').prop('checked', false);
        $('.select-video-quality input[value=720p]').prop('checked', true);
      } else {
        this.onSelectingVideoResolutionValue(res);
      }
    }
  };

  hideUpgradeModal = (event, isRedirect) => {
    event.stopPropagation();
    $('.modal').modal('hide');
    this.closeQuotaPopup();
    if (isRedirect) this.props.history.push('/' + CustomURLs.plansList);
  };

  trimVideoNotAllowed = () => {
    this.setState(
      {
        trimVideoNotAllowed: true,
      },
      () => {
        fixMorethanOnePopup('step-3-modal');
        $('#step-3-modal').modal('show');
        document.body.appendChild(document.getElementById('step-3-modal'));
      }
    );
  };

  transitionsNotAllowed = () => {
    this.setState(
      {
        transitionsNotAllowed: true,
      },
      () => {
        fixMorethanOnePopup('step-3-modal');
        $('#step-3-modal').modal('show');
        document.body.appendChild(document.getElementById('step-3-modal'));
      }
    );
  };

  musicTrackNotAllowed = () => {
    this.setState(
      {
        musicTrackNotAllowed: true,
      },
      () => {
        fixMorethanOnePopup('step-3-modal');
        $('#step-3-modal').modal('show');
        //document.body.appendChild(document.getElementById('step-3-modal'));
      }
    );
  };

  getVideoPreviewData = (previewSceneId, showSceneNumber) => {
    const {
      summaryJsonText: summaryJsonTextIn,
      subSentencesArray: subSentencesArrayIn,
      voiceOverURL: voiceOverURLIn,
      imageURL: imageURLIn,
      timePerFrame,
    } = previewSceneId ? this.getScenePreviewArrays(previewSceneId, showSceneNumber) : this.state;
    const subscriptionDetails = getSubscriptionDetails(this.state.username);
    const planCode = subscriptionDetails && subscriptionDetails.plan ? subscriptionDetails.plan.plan_code : '';
    const isFreeTrial = planCode === PLAN_CODES.freeTrial || planCode === PLAN_CODES.teamsFreeTrial; //true if free trial else false
    let hasRecordedVoice = false;
    let playBgClipAudio = false;
    let bRollSceneAudio = false;
    for (let i = 0; i < summaryJsonTextIn.length; i++) {
      const summary = summaryJsonTextIn[i];

      if (summary && summary.settings && playBgClipAudio == false) {
        playBgClipAudio = !summary.settings.muteClipAudio;
      }

      if (
        !hasRecordedVoice &&
        (summary.recordedAudio ||
          (summary.audioSegments && summary.audioSegments.some(segment => segment && segment.recordedAudio)))
      ) {
        hasRecordedVoice = true;
      }

      if (summary.bRoll) {
        bRollSceneAudio = true;
      }
    }
    let subSentencesArray = [...subSentencesArrayIn];
    let voiceOverURL = null;
    if (voiceOverURLIn) {
      voiceOverURL = { ...voiceOverURLIn };
    }

    if (this.state.source === 'transcribe') {
      if (!voiceOverURL || !voiceOverURL.timePerSceneForVoiceOver) {
        voiceOverURL = {
          Url: '',
          timePerSceneForVoiceOver: Array(subSentencesArray.length).fill(5000),
          originalTimePerFrameForEachScene: [],
        };
        for (let i = 0; i < subSentencesArray.length; i++) {
          let subSentence = { ...subSentencesArray[i] };
          //let prevSubSentence = subSentencesArray[i - 1];
          subSentencesArray[i] = subSentence;
          if (subSentence.transcription) {
            voiceOverURL.timePerSceneForVoiceOver[i] = subSentence.transcribeVideoLength * 1000;
          }
        }
      }
    }

    //Don't add Pictory branding when there are no scenes or user is a paid user or its a scene level preview
    if (subSentencesArray.length === 0 || !isFreeTrial || previewSceneId) {
      return {
        subSentencesArray,
        imagesArray: imageURLIn,
        voiceOverURL,
        hasRecordedVoice,
        playBgClipAudio,
        bRollSceneAudio,
        timePerFrame,
      };
    }

    //Pictory Branding Section - Begin
    const imagesArray = [...imageURLIn];

    if (voiceOverURL && voiceOverURL.timePerSceneForVoiceOver) {
      let timePerSceneForVoiceOver = [...voiceOverURL.timePerSceneForVoiceOver];
      timePerSceneForVoiceOver.push(5000); //Added branding video animation time in seconds
      voiceOverURL.timePerSceneForVoiceOver = timePerSceneForVoiceOver;
    }

    let brandingVideo = AnimationHelper.PICTORY_BRANDING_VIDEO_16_9;
    if (this.state.aspectRatioClass == 'sixteen-nine') {
      brandingVideo = AnimationHelper.PICTORY_BRANDING_VIDEO_16_9;
    } else if (this.state.aspectRatioClass == 'one-one') {
      brandingVideo = AnimationHelper.PICTORY_BRANDING_VIDEO_1_1;
    } else if (this.state.aspectRatioClass == 'nine-sixteen') {
      brandingVideo = AnimationHelper.PICTORY_BRANDING_VIDEO_9_16;
    }
    const lastScene = subSentencesArray[subSentencesArray.length - 1];

    let brandingSceneNumber = subSentencesArray.length + 1; //Branding scene would always comes at last

    subSentencesArray.push({
      sentence: '',
      keywords: [],
      type: 'summary',
      image: brandingVideo,
      AllSubSentences: [''],
      subsentences: [''],
      showLogo: lastScene.showLogo,
      logoImage: this.state.logoImage,
      logoLocation: this.state.logoLocation,
      fontSize: lastScene.fontSize,
      fontColor: lastScene.fontColor,
      backgroundColor: lastScene.backgroundColor,
      textBackgroundColor: lastScene.textBackgroundColor,
      keywordColor: lastScene.keywordColor,
      fontName: lastScene.fontName,
      FontNameForFront: CreateVideo_Step3.getFrontFontName(lastScene.fontName),
      sceneId: brandingSceneNumber,
      showSceneNumber: `Scene ${brandingSceneNumber}`,
      isBranding: true,
      subSceneId: 1,
      subSentences: '',
    });
    timePerFrame.push(6);

    imagesArray[brandingSceneNumber - 1] = brandingVideo;

    return {
      subSentencesArray,
      imagesArray,
      voiceOverURL,
      hasRecordedVoice,
      playBgClipAudio,
      bRollSceneAudio,
      timePerFrame,
    };
    //Pictory Branding Section - Completed
  };

  getScenePreviewArrays = (previewSceneId, showSceneNumber) => {
    if (!previewSceneId) {
      return {};
    }

    let summarySceneId = previewSceneId;

    let voiceOverURL = null;
    if (this.state.voiceOverURLForScene) {
      voiceOverURL = { ...this.state.voiceOverURLForScene };
    } else {
      voiceOverURL = {
        Url: '',
        timePerSceneForVoiceOver: [],
        originalTimePerFrameForEachScene: [],
      };
    }

    let timePerSceneForVoiceOver = [];
    let subSentencesArray = [];
    let timePerFrame = [];
    let summarySceneIndex = 0;
    let summarySceneIndexFound = false;
    for (let i = 0; i < this.state.subSentencesArray.length; i++) {
      let subSentence = this.state.subSentencesArray[i];
      let prevSubSentence = i > 0 ? this.state.subSentencesArray[i - 1] : null;
      if (prevSubSentence && !summarySceneIndexFound && subSentence.sceneId !== prevSubSentence.sceneId) {
        summarySceneIndex += 1;
      }
      if (previewSceneId === subSentence.sceneId) {
        summarySceneIndexFound = true;
        subSentencesArray.push(subSentence);
        if (subSentence.transcription) {
          let subSceneLength = subSentence.transcribeVideoLength;
          if (!subSceneLength || subSceneLength === 0) subSceneLength = 5; // default to 5 secs
          timePerSceneForVoiceOver.push(subSceneLength * 1000);
        }
        timePerFrame.push(this.state.timePerFrame[i]);
      }
    }

    let summaryJsonText = [];
    let previewImagesArray = [];
    for (let i = 0; i < this.state.summaryJsonText.length; i++) {
      const summary = this.state.summaryJsonText[i];
      if (i === summarySceneIndex) {
        summaryJsonText.push(summary);
        previewImagesArray.push(this.state.imageURL[i]);
      } else {
        previewImagesArray.push(null);
      }
    }

    if (timePerSceneForVoiceOver.length > 0) voiceOverURL.timePerSceneForVoiceOver = timePerSceneForVoiceOver;

    return {
      summaryJsonText,
      subSentencesArray,
      voiceOverURL: voiceOverURL,
      imageURL: previewImagesArray,
      timePerFrame,
    };
  };

  getSummaryFromGivenSubSentenceSceneId = subSentenceSceneId => {
    let summarySceneIndex = 0;
    // if (this.state.subSentencesArray[0].sceneId === subSentenceSceneId) {
    //   return { summary: this.state.summaryJsonText[summarySceneIndex], index: summarySceneIndex };
    // }

    for (let i = 0; i < this.state.subSentencesArray.length; i++) {
      let subSentence = this.state.subSentencesArray[i];
      let prevSubSentence = this.state.subSentencesArray[i - 1];
      if (subSentence.sceneId !== prevSubSentence?.sceneId && subSentence.sceneId != subSentenceSceneId) {
        summarySceneIndex += 1;
      }
      if (subSentenceSceneId === subSentence.sceneId) {
        return { summary: this.state.summaryJsonText[summarySceneIndex], index: summarySceneIndex };
      }
    }
    return { summary: undefined, index: -1 };
  };

  setOpenConfirmDeleteDialog = bool => this.setState({ ...this.state, showDeletePopup: bool });

  getAssetsLoader = () => {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          position: 'absolute',
          left: '46%',
          zIndex: '2',
          top: '100px',
        }}
      >
        <ClipLoader size={35} loading={true} color="#ADB4B3" />
      </div>
    );
  };

  resizeTimer = null;

  handleMouseClick = e => {
    if (!(e.ctrlKey || e.metaKey) && !this.sceneContainerRef.current.contains(e.target)) {
      if (
        e.target?.parentElement?.id === 'edit-video-delete-button-icon' ||
        e.target?.id === 'edit-video-delete-button-icon'
      )
        this.setState({ ...this.state, showDeletePopup: true });
      else {
        const sceneArray = [...this.state.subSentencesArray];
        sceneArray.forEach(scene => (scene.isActive = false));
        if (sceneArray.length > 0) {
          sceneArray[this.state.currentActiveDiv - 1].isActive = true;
        }
        this.setState({ ...this.state, subSentencesArray: sceneArray });
      }
    }
  };

  handleMenutabChange = (selectedMenuTabValue: number) => {
    switch (selectedMenuTabValue) {
      case menuTabEnum.story:
        this.setState({
          activeThemeTab: false,
          activeAudioTab: false,
          activeVisualTab: false,
          activeAspectRatioTab: false,
          activeDisplayTextTab: false,
          selectedMenuTabValue,
        });
        break;
      case menuTabEnum.visuals:
        this.setState({
          activeThemeTab: false,
          activeVisualTab: this.state.activeVisualTab || 'Library',
          selectedVisualTabValue: this.state.selectedVisualTabValue,
          visualTabsActivationStatus: {
            ...this.state.visualTabsActivationStatus,
            Library: true,
            activeThemeTab: false,
            activeAudioTab: false,
            activeAspectRatioTab: false,
          },
          activeDisplayTextTab: false,
          selectedMenuTabValue,
        });
        this.handleVisualtabChange(null, this.state.selectedVisualTabValue);
        break;
      case menuTabEnum.audio:
        this.setFavouritesOnTracks();
        this.setState({
          activeAudioTab: this.state.activeAudioTab || 'track',
          selectedAudioTabValue: this.state.selectedAudioTabValue,
          activeThemeTab: false,
          activeVisualTab: false,
          audioTabsActivationStatus: {
            ...this.state.audioTabsActivationStatus,
            track: true,
            activeAspectRatioTab: false,
          },
          activeDisplayTextTab: false,
          selectedMenuTabValue,
        });
        this.handleAudiotabChange(null, this.state.selectedAudioTabValue);
        break;
      case menuTabEnum.styles:
        this.setState({
          activeThemeTab: true,
          activeSubThemeTab: false,
          activeAudioTab: false,
          activeVisualTab: false,
          activeAspectRatioTab: false,
          activeDisplayTextTab: false,
          selectedMenuTabValue,
        });
        break;
      case menuTabEnum.text:
        this.setState({
          activeThemeTab: false,
          activeSubThemeTab: false,
          activeAudioTab: false,
          activeVisualTab: false,
          activeAspectRatioTab: false,
          activeDisplayTextTab: true,
          selectedMenuTabValue,
        });
        break;
      case menuTabEnum.elements:
        this.setState({
          activeThemeTab: false,
          activeSubThemeTab: false,
          activeAudioTab: false,
          activeVisualTab: false,
          activeAspectRatioTab: false,
          activeDisplayTextTab: false,
          activeDisplayElementsTab: true,
          selectedMenuTabValue,
        });
        break;
      case menuTabEnum.branding:
        this.setState({
          activeThemeTab: false,
          activeSubThemeTab: false,
          activeAudioTab: false,
          activeVisualTab: false,
          activeAspectRatioTab: false,
          activeDisplayTextTab: false,
          activeBrandingTab: true,
          selectedMenuTabValue: menuTabEnum.branding,
        });
        break;
      case menuTabEnum.format:
        this.setState({
          activeAspectRatioTab: true,
          activeThemeTab: false,
          activeAudioTab: false,
          activeVisualTab: false,
          activeDisplayTextTab: false,
          selectedMenuTabValue,
        });
        break;
      default:
        break;
    }
  };

  handleAudiotabChange = (event: React.SyntheticEvent, selectedAudioTabValue: number) => {
    switch (selectedAudioTabValue) {
      case 0:
        // this.setState({ activeAudioTab: 'track' });
        this.getActionForAnalytics('background-music-clicked', 'background music track tab', 'track');
        break;
      case 1:
        this.getActionForAnalytics('voice-over-clicked', 'voice over tab', 'voiceOver');
        break;
      case 2:
        this.getActionForAnalytics('upload-clicked', 'upload', 'upload');
        break;
      case 3:
        this.getActionForAnalytics('recent-clicked', 'recent tab', 'recent');
        break;
      case 4:
        this.getActionForAnalytics('favorite-clicked', 'favorite tab', 'favourite');
        break;
      case 5:
        this.getActionForAnalytics('settings-clicked', 'Audio settings tab', 'settings');
        break;
      default:
        break;
    }
    this.setState({ selectedAudioTabValue });
  };

  handleVisualtabChange = (event: React.SyntheticEvent, selectedVisualTabValue: number) => {
    switch (selectedVisualTabValue) {
      case 0:
        let libraryType;
        if (allowTextToImages(this.state.username)) {
          libraryType = { ReelArt: true };
        } else {
          libraryType = { Library: true };
        }
        this.setState({
          activeVisualTab: 'Library',
          visualTabsActivationStatus: {
            ...this.state.visualTabsActivationStatus,
            ...libraryType,
            Recent: true,
            Uploads: true,
            Favourite: true,
          },
        });
        break;
      case 1:
        this.setState({
          activeVisualTab: 'Textures',
          visualTabsActivationStatus: {
            ...this.state.visualTabsActivationStatus,
            Textures: true,
          },
        });
        this.getActionForAnalytics('Textures-clicked');
        break;
      case 2:
        this.setState({
          activeVisualTab: 'Uploads',
          visualTabsActivationStatus: {
            ...this.state.visualTabsActivationStatus,
            Uploads: true,
          },
        });
        this.getActionForAnalytics('upload-clicked');
        break;
      case 3:
        this.setState({
          activeVisualTab: 'Recent',
          visualTabsActivationStatus: {
            ...this.state.visualTabsActivationStatus,
            Recent: true,
          },
        });
        this.getActionForAnalytics('recent-clicked', 'Visuals');
        break;
      case 4:
        this.setState({
          activeVisualTab: 'Favourite',
          visualTabsActivationStatus: {
            ...this.state.visualTabsActivationStatus,
            Favourite: true,
          },
        });
        this.getActionForAnalytics('favorite-clicked', 'Visuals');
        break;
      default:
        break;
    }
    this.setState({ selectedVisualTabValue });
  };

  windowDidResized = () => {
    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      // Run code here, resizing has "stopped"
      this.forceUpdate();
    }, 250);
  };

  getAspectRatioCss() {
    let editVideoAnimationContainerHeight = window.innerHeight * 0.88 - 300;
    if (editVideoAnimationContainerHeight < 200) editVideoAnimationContainerHeight = 200;
    // calculate height based on 16:9 aspect ratio considering width to be half of browser width
    const maxHeightCalculatedByWidth = 0.49 * 0.5625 * window.innerWidth;
    if (editVideoAnimationContainerHeight > maxHeightCalculatedByWidth)
      editVideoAnimationContainerHeight = maxHeightCalculatedByWidth;

    const showcaseAnimationContainerHeight = editVideoAnimationContainerHeight * 0.12;
    // factor used to take into consideration the border around the preview container including the Upgrade msg
    let videoPreviewAnimationContainerHeight = window.innerHeight - 200;
    let videoResolution = parseInt(this.state.VideoRes);
    if (videoResolution > 0 && videoPreviewAnimationContainerHeight > videoResolution)
      videoPreviewAnimationContainerHeight = videoResolution;
    let videoPreviewAnimationContainerWidth =
      videoPreviewAnimationContainerHeight * this.state.aspectRatioFractionValue;
    if (videoPreviewAnimationContainerWidth > window.innerWidth) {
      videoPreviewAnimationContainerWidth = window.innerWidth - 40;
      videoPreviewAnimationContainerHeight = videoPreviewAnimationContainerWidth / this.state.aspectRatioFractionValue;
    }
    let editVideoAnimationContainerWidth;
    let editVideoAspectRatioClass;
    //if (this.state.frameAspectRatio && this.state.frameAspectRatio.fractionValue) {
    //	editVideoAnimationContainerWidth = editVideoAnimationContainerHeight * this.state.frameAspectRatio.fractionValue;
    //	editVideoAspectRatioClass = this.state.frameAspectRatio.class;
    //} else {
    editVideoAnimationContainerWidth = editVideoAnimationContainerHeight * this.state.aspectRatioFractionValue;
    if (editVideoAnimationContainerWidth > window.innerWidth * 0.49) {
      // recalculate width and height if aspect ratio > 16:9
      editVideoAnimationContainerWidth = window.innerWidth * 0.49;
      editVideoAnimationContainerHeight = editVideoAnimationContainerWidth / this.state.aspectRatioFractionValue;
    }
    editVideoAspectRatioClass = this.state.aspectRatioClass;
    //}
    const footerWidth =
      editVideoAnimationContainerWidth > editVideoAnimationContainerHeight * ASPECT_RATIO_DEFAULT_FRACTION_VALUE
        ? editVideoAnimationContainerWidth
        : editVideoAnimationContainerHeight * ASPECT_RATIO_DEFAULT_FRACTION_VALUE;
    const frameSize = { height: editVideoAnimationContainerHeight, width: editVideoAnimationContainerWidth };
    // let zoomValue = footerWidth / 600;
    // if (zoomValue > 1) zoomValue = 1;
    const dynamicCss = `.step-3 .btm-headbox, .step-3 figure.animation-container.${editVideoAspectRatioClass}, .step-3 figure.animation-container.${
      this.state.aspectRatioClass
    }, .step-3 .showcase #AllSceneSection .${
      this.state.aspectRatioClass
    }, #main-div-step-3 div#previewDiv .modal-content .${
      this.state.aspectRatioClass
    } { padding-top: 0; margin-left: auto; margin-right: auto;}
		.step-3 .btm-headbox.fit-visual, .step-3 figure.animation-container.${
      this.state.aspectRatioClass
    } { height: ${editVideoAnimationContainerHeight}px; width: ${
      editVideoAnimationContainerHeight * this.state.aspectRatioFractionValue
    }px;}
		.step-3 .block-footer {width: ${footerWidth}px;}
		.step-3 .showcase #AllSceneSection .animation-container.${this.state.aspectRatioClass} { height: 100%; aspect-ratio: ${
      this.state.aspectRatioFractionValue
    };}
		#main-div-step-3 div#previewDiv .modal-content .animation-container.${
      this.state.aspectRatioClass
    } { height: ${videoPreviewAnimationContainerHeight}px; width: ${videoPreviewAnimationContainerWidth}px;}
		.wrap-ovcontent-noframe { height: 100%; }
		.wrap-ovcontent-noframe .animation-container.${this.state.aspectRatioClass} { height: 100%; width: 100%;}`;
    return { frameSize, dynamicCss };
  }

  applyImageZoomPanToAllSceneFn = (checked, applyImageZoomPanToAllScene) => {
    let summaryJsonText = this.state.summaryJsonText.map((scene, i) => {
      let scenes = { ...scene };
      if (!scenes.settings) {
        scenes.settings = this.state.defaultSceneSettings;
      }
      scenes.settings = {
        ...scenes.settings,
        imageZoomPan: applyImageZoomPanToAllScene ? checked : scene.settings.imageZoomPan,
        videoOptions: scenes.settings.videoOptions,
        applyImageZoomPanToAllScene,
      };
      const image = this.state.imageURL[i];
      if (image && image != '' && image != DUMMY_IMAGE) {
        scenes.settings.imageZoomPan = image.includes('/textures')
          ? this.state.defaultSceneSettings.imageZoomPan
          : applyImageZoomPanToAllScene
          ? checked
          : scene.settings.imageZoomPan;
      }
      return scenes;
    });

    let subSentencesArray = this.state.subSentencesArray.map(scene => {
      let scenes = { ...scene };
      if (!scenes.settings) {
        scenes.settings = this.state.defaultSceneSettings;
      }
      scenes.settings = {
        ...scenes.settings,
        imageZoomPan: applyImageZoomPanToAllScene ? checked : scene.settings.imageZoomPan,
        videoOptions: scenes.settings.videoOptions,
        applyImageZoomPanToAllScene,
      };
      if (scene.sceneId) {
        const { index } = this.getSummaryFromGivenSubSentenceSceneId(scene.sceneId); //this.state.summaryJsonText.findIndex(el => el.sceneId == scene.sceneId);
        if (index != -1) {
          const image = this.state.imageURL[index];
          if (image && image != '' && image != DUMMY_IMAGE) {
            scenes.settings.imageZoomPan = image.includes('/textures')
              ? this.state.defaultSceneSettings.imageZoomPan
              : applyImageZoomPanToAllScene
              ? checked
              : scene.settings.imageZoomPan;
          }
        }
      }
      return scenes;
    });

    this.setState({
      subSentencesArray,
      summaryJsonText,
      isAnyChange: true,
    });
  };

  checkImageZoom = async (checked, sceneId, setting, applyImageZoomPanToAllScene, noSave) => {
    let sentenceArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    if (applyImageZoomPanToAllScene) {
      summaryJsonText.map((scene, i) => {
        let scenes = scene;
        if (scene.settings) {
          scenes.settings = { ...scene.settings, imageZoomPan: checked, videoOptions: scenes.settings.videoOptions };
          const image = this.state.imageURL[i];
          if (image && image != '' && image != DUMMY_IMAGE) {
            scenes.settings.imageZoomPan = image.includes('/textures')
              ? this.state.defaultSceneSettings.imageZoomPan
              : checked;
          }
        }
        return scenes;
      });

      sentenceArray.map(scene => {
        let scenes = scene;
        if (scene.settings) {
          scenes.settings = { ...scene.settings, imageZoomPan: checked, videoOptions: scenes.settings.videoOptions };
          if (scene.sceneId) {
            const { index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId); //this.state.summaryJsonText.findIndex(el => el.sceneId == scene.sceneId);
            if (index != -1) {
              const image = this.state.imageURL[index];
              if (image && image != '' && image != DUMMY_IMAGE) {
                scenes.settings.imageZoomPan = image.includes('/textures')
                  ? this.state.defaultSceneSettings.imageZoomPan
                  : checked;
              }
            }
          }
        }
        return scenes;
      });
    } else {
      const { index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId); //summaryJsonText.findIndex(el => el.sceneId == sceneId);
      if (index != -1) {
        let scene = summaryJsonText[index];
        scene.settings = { ...scene.settings, imageZoomPan: checked };
        //summaryJsonText.splice(index, 1, scene)
      }
      sentenceArray.map(scene => {
        if (scene.sceneId == sceneId) {
          let scenes = scene;
          scenes.settings = { ...scene.settings, imageZoomPan: checked };
          return scenes;
        } else {
          return scene;
        }
      });
    }
    await this.setState({
      subSentencesArray: sentenceArray,
      summaryJsonText,
      isAnyChange: !noSave,
    });
  };

  applyVoiceOverToAllScene = (checked, applyVoiceOverToAllScene) => {
    let sentenceArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    summaryJsonText.map((scene, i) => {
      let scenes = scene;
      if (scene.settings) {
        scenes.settings = {
          ...scene.settings,
          voiceOver: applyVoiceOverToAllScene ? checked : scene.settings.voiceOver,
          videoOptions: scenes.settings.videoOptions,
          applyVoiceOverToAllScene,
        };
        const image = this.state.imageURL[i];
        if (image && image != '' && image != DUMMY_IMAGE) {
          scenes.settings.imageZoomPan =
            getResourceType(image) == 'video'
              ? this.state.defaultSceneSettings.imageZoomPan
              : scenes.settings.imageZoomPan;
        }
      }
      return scenes;
    });

    sentenceArray.map(scene => {
      let scenes = scene;
      if (scene.settings) {
        scenes.settings = {
          ...scene.settings,
          voiceOver: applyVoiceOverToAllScene ? checked : scene.settings.voiceOver,
          videoOptions: scenes.settings.videoOptions,
          applyVoiceOverToAllScene,
        };
        if (scene.sceneId) {
          const { index } = this.getSummaryFromGivenSubSentenceSceneId(scene.sceneId); // const index = this.state.summaryJsonText.findIndex(el => el.sceneId == scene.sceneId);
          let summary = {};
          if (index != -1) {
            const image = this.state.imageURL[index];
            if (image && image != '' && image != DUMMY_IMAGE) {
              scenes.settings.imageZoomPan =
                getResourceType(image) == 'video'
                  ? this.state.defaultSceneSettings.imageZoomPan
                  : scenes.settings.imageZoomPan;
            }
          }
        }
      }
      return scenes;
    });
    this.setState({
      subSentencesArray: sentenceArray,
      summaryJsonText,
      isAnyChange: true,
    });
  };

  checkVoiceOver = (checked, sceneId, setting, applyVoiceOverToAllScene) => {
    let sentenceArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    if (applyVoiceOverToAllScene) {
      summaryJsonText.map((scene, i) => {
        let scenes = scene;
        if (scene.settings) {
          scenes.settings = { ...scene.settings, voiceOver: checked, videoOptions: scenes.settings.videoOptions };
          const image = this.state.imageURL[i];
          if (image && image != '' && image != DUMMY_IMAGE) {
            scenes.settings.imageZoomPan =
              getResourceType(image) == 'video'
                ? this.state.defaultSceneSettings.imageZoomPan
                : scenes.settings.imageZoomPan;
          }
        }
        return scenes;
      });
      const sceneIds = this.state.durationUpdatedScenes?.sceneIds || [];
      const sceneIndices = this.state.durationUpdatedScenes?.sceneIndices || [];
      sentenceArray.map((scene, index) => {
        let scenes = scene;
        if (scene.settings) {
          if (scenes.settings.voiceOver !== checked && checked) {
            sceneIds.push(scene.sceneId);
            sceneIndices.push(index);
          }
          scenes.settings = { ...scene.settings, voiceOver: checked, videoOptions: scenes.settings.videoOptions };
          if (scene.sceneId) {
            const { index } = this.getSummaryFromGivenSubSentenceSceneId(scene.sceneId); //const index = this.state.summaryJsonText.findIndex(el => el.sceneId == scene.sceneId);
            let summary = {};
            if (index != -1) {
              const image = this.state.imageURL[index];
              if (image && image != '' && image != DUMMY_IMAGE) {
                scenes.settings.imageZoomPan =
                  getResourceType(image) == 'video'
                    ? this.state.defaultSceneSettings.imageZoomPan
                    : scenes.settings.imageZoomPan;
              }
            }
          }
        }
        return scenes;
      });
      this.setState({
        durationUpdatedScenes: {
          loading: false,
          sceneIds,
          sceneIndices,
          isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
          updatedSceneDuration: this.state?.durationUpdatedScenes?.updatedSceneDuration || [],
        },
      });
    } else {
      const { index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId); //const index = summaryJsonText.findIndex(el => el.sceneId == sceneId);

      if (index != -1) {
        let scene = summaryJsonText[index];
        scene.settings = { ...scene.settings, voiceOver: checked };
        summaryJsonText.splice(index, 1, scene);
      }
      sentenceArray.map((scene, index) => {
        let scenes = scene;
        if (scene.sceneId == sceneId) {
          if (scenes.settings.voiceOver !== checked && checked) {
            this.setState({
              durationUpdatedScenes: {
                loading: false,
                sceneIds: [scene.sceneId],
                sceneIndices: [index],
                isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
                updatedSceneDuration: this.state?.durationUpdatedScenes?.updatedSceneDuration || [],
              },
            });
          }
          scenes.settings = { ...scene.settings, voiceOver: checked };
          return scenes;
        } else {
          return scene;
        }
      });
    }
    this.setState({
      generatedVoiceOvers: [],
      subSentencesArray: sentenceArray,
      summaryJsonText,
      isAnyChange: true,
    });
  };

  applyMusicToAllScene = (checked, applyMusicToAllScene) => {
    let sentenceArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    summaryJsonText.map((scene, i) => {
      let scenes = scene;
      if (scene.settings) {
        scenes.settings = {
          ...scene.settings,
          music: applyMusicToAllScene ? checked : scene.settings.music,
          videoOptions: scenes.settings.videoOptions,
          applyMusicToAllScene,
        };
        const image = this.state.imageURL[i];
        if (image && image != '' && image != DUMMY_IMAGE) {
          scenes.settings.imageZoomPan =
            getResourceType(image) == 'video'
              ? this.state.defaultSceneSettings.imageZoomPan
              : scenes.settings.imageZoomPan;
        }
      }
      return scenes;
    });

    sentenceArray.map(scene => {
      let scenes = scene;
      if (scene.settings) {
        scenes.settings = {
          ...scene.settings,
          music: applyMusicToAllScene ? checked : scene.settings.music,
          videoOptions: scenes.settings.videoOptions,
          applyMusicToAllScene,
        };
        if (scene.sceneId) {
          const { index } = this.getSummaryFromGivenSubSentenceSceneId(scene.sceneId); //const index = this.state.summaryJsonText.findIndex(el => el.sceneId == scene.sceneId);
          let summary = {};
          if (index != -1) {
            const image = this.state.imageURL[index];
            if (image && image != '' && image != DUMMY_IMAGE) {
              scenes.settings.imageZoomPan =
                getResourceType(image) == 'video'
                  ? this.state.defaultSceneSettings.imageZoomPan
                  : scenes.settings.imageZoomPan;
            }
          }
        }
      }
      return scenes;
    });

    this.setState({
      subSentencesArray: sentenceArray,
      summaryJsonText,
      isAnyChange: true,
    });
  };

  checkMusic = (checked, sceneId, settings, applyMusicToAllScene, noSave) => {
    let sentenceArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    if (applyMusicToAllScene) {
      summaryJsonText.map((scene, i) => {
        let scenes = scene;
        if (scene.settings) {
          scenes.settings = { ...scene.settings, music: checked, videoOptions: scenes.settings.videoOptions };
          const image = this.state.imageURL[i];
          if (image && image != '' && image != DUMMY_IMAGE) {
            scenes.settings.imageZoomPan =
              getResourceType(image) == 'video'
                ? this.state.defaultSceneSettings.imageZoomPan
                : scenes.settings.imageZoomPan;
          }
        }
        return scenes;
      });

      sentenceArray.map(scene => {
        let scenes = scene;
        if (scene.settings) {
          scenes.settings = { ...scene.settings, music: checked, videoOptions: scenes.settings.videoOptions };
          if (scene.sceneId) {
            const { index } = this.getSummaryFromGivenSubSentenceSceneId(scene.sceneId); //const index = this.state.summaryJsonText.findIndex(el => el.sceneId == scene.sceneId);
            let summary = {};
            if (index != -1) {
              const image = this.state.imageURL[index];
              if (image && image != '' && image != DUMMY_IMAGE) {
                scenes.settings.imageZoomPan =
                  getResourceType(image) == 'video'
                    ? this.state.defaultSceneSettings.imageZoomPan
                    : scenes.settings.imageZoomPan;
              }
            }
          }
        }
        return scenes;
      });
    } else {
      const { index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId); //const index = summaryJsonText.findIndex(el => el.sceneId == sceneId);
      if (index != -1) {
        let scene = summaryJsonText[index];
        scene.settings = { ...scene.settings, music: checked };
        summaryJsonText.splice(index, 1, scene);
      }
      sentenceArray.map(scene => {
        if (scene.sceneId == sceneId) {
          let scenes = scene;
          scenes.settings = { ...scene.settings, music: checked };
          return scenes;
        } else {
          return scene;
        }
      });
    }

    this.setState({
      subSentencesArray: sentenceArray,
      summaryJsonText,
      isAnyChange: !noSave,
    });
  };

  checkLoopVideo = (checked, sceneId, loopVideoAllScene) => {
    let sentenceArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    if (loopVideoAllScene) {
      summaryJsonText.map((scene, i) => {
        if (scene.settings) {
          scene.settings = { ...scene.settings, loopVideo: checked };
        }
      });

      sentenceArray.map(scene => {
        if (scene.settings) {
          scene.settings = { ...scene.settings, loopVideo: checked };
        }
      });
    } else {
      const { index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId); //const index = summaryJsonText.findIndex(el => el.sceneId == sceneId);
      if (index != -1) {
        let scene = { ...summaryJsonText[index] };
        scene.settings = { ...scene.settings, loopVideo: checked };
        summaryJsonText[index] = scene;
      }
      sentenceArray.map(scene => {
        if (scene.sceneId == sceneId) {
          scene.settings = { ...scene.settings, loopVideo: checked };
        }
      });
    }
    this.setState({
      subSentencesArray: sentenceArray,
      summaryJsonText,
      isAnyChange: true,
    });
  };

  applyLoopVideoToAllScene = (checked, loopVideoAllScene) => {
    let sentenceArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    summaryJsonText.map((scene, i) => {
      if (scene.settings) {
        scene.settings = {
          ...scene.settings,
          loopVideo: loopVideoAllScene ? checked : scene.settings.loopVideo,
          loopVideoAllScene,
        };
      }
    });

    sentenceArray.map(scene => {
      if (scene.settings) {
        scene.settings = {
          ...scene.settings,
          loopVideo: loopVideoAllScene ? checked : scene.settings.loopVideo,
          loopVideoAllScene,
        };
      }
    });

    this.setState({
      subSentencesArray: sentenceArray,
      summaryJsonText,
      isAnyChange: true,
    });
  };

  checkMuteClipAudio = (checked, sceneId, muteClipAudioAllScene) => {
    let sentenceArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    if (muteClipAudioAllScene) {
      summaryJsonText.map((scene, i) => {
        if (scene.settings) {
          scene.settings = { ...scene.settings, muteClipAudio: checked };
        }
      });

      sentenceArray.map(scene => {
        if (scene.settings) {
          scene.settings = { ...scene.settings, muteClipAudio: checked };
        }
      });
    } else {
      const { index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId); //const index = summaryJsonText.findIndex(el => el.sceneId == sceneId);
      if (index != -1) {
        let scene = { ...summaryJsonText[index] };
        scene.settings = { ...scene.settings, muteClipAudio: checked };
        summaryJsonText[index] = scene;
      }
      sentenceArray.map(scene => {
        if (scene.sceneId == sceneId) {
          scene.settings = { ...scene.settings, muteClipAudio: checked };
        }
      });
    }
    this.setState({
      subSentencesArray: sentenceArray,
      summaryJsonText,
      isAnyChange: true,
    });
  };

  applyMuteClipAudioToAllScene = (checked, muteClipAudioAllScene) => {
    let sentenceArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    summaryJsonText.map((scene, i) => {
      if (scene.settings) {
        scene.settings = {
          ...scene.settings,
          muteClipAudio: muteClipAudioAllScene ? checked : scene.settings.muteClipAudio,
          muteClipAudioAllScene,
        };
      }
    });

    sentenceArray.map(scene => {
      if (scene.settings) {
        scene.settings = {
          ...scene.settings,
          muteClipAudio: muteClipAudioAllScene ? checked : scene.settings.muteClipAudio,
          muteClipAudioAllScene,
        };
      }
    });

    this.setState({
      generatedVoiceOvers: [],
      subSentencesArray: sentenceArray,
      summaryJsonText,
      isAnyChange: true,
    });
  };

  applyHideTextToAllScene = (checked, applyHideTextToAllScene) => {
    let sentenceArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    summaryJsonText.map((scene, i) => {
      let scenes = scene;
      if (scene.settings) {
        scenes.settings = {
          ...scene.settings,
          hideText: applyHideTextToAllScene ? checked : scene.settings.hideText,
          videoOptions: scenes.settings.videoOptions,
          applyHideTextToAllScene: applyHideTextToAllScene,
        };
        // const image = this.state.imageURL[i];
        // if (image && image != '' && image != DUMMY_IMAGE) {
        //   scenes.settings.imageZoomPan =
        //     getResourceType(image) == 'video'
        //       ? this.state.defaultSceneSettings.imageZoomPan
        //       : scenes.settings.imageZoomPan;
        // }
      }
      return scenes;
    });

    sentenceArray.map(scene => {
      let scenes = scene;
      if (scene.settings) {
        scenes.settings = {
          ...scene.settings,
          hideText: applyHideTextToAllScene ? checked : scene.settings.hideText,
          videoOptions: scenes.settings.videoOptions,
          applyHideTextToAllScene,
        };
        // if (scene.sceneId) {
        //   const { index } = this.getSummaryFromGivenSubSentenceSceneId(scene.sceneId); //const index = this.state.summaryJsonText.findIndex(el => el.sceneId == scene.sceneId);
        //   let summary = {};
        //   if (index != -1) {
        //     const image = this.state.imageURL[index];
        //     if (image && image != '' && image != DUMMY_IMAGE) {
        //       scenes.settings.imageZoomPan =
        //         getResourceType(image) == 'video'
        //           ? this.state.defaultSceneSettings.imageZoomPan
        //           : scenes.settings.imageZoomPan;
        //     }
        //   }
        // }
      }
      return scenes;
    });

    this.setState({
      subSentencesArray: sentenceArray,
      summaryJsonText,
      isAnyChange: true,
    });
  };

  checkHideText = (checked, sceneId, subSceneId, settings, applyHideTextToAllScene) => {
    let sentenceArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    if (applyHideTextToAllScene) {
      summaryJsonText.map((scene, i) => {
        let scenes = scene;
        if (scene.settings) {
          scenes.settings = { ...scene.settings, hideText: checked, videoOptions: scenes.settings.videoOptions };
          const image = this.state.imageURL[i];
          if (image && image != '' && image != DUMMY_IMAGE) {
            scenes.settings.imageZoomPan =
              getResourceType(image) == 'video'
                ? this.state.defaultSceneSettings.imageZoomPan
                : scenes.settings.imageZoomPan;
          }
        }
        return scenes;
      });

      sentenceArray.map(scene => {
        let scenes = scene;
        if (scene.settings) {
          scenes.settings = { ...scene.settings, hideText: checked, videoOptions: scenes.settings.videoOptions };
          if (scene.sceneId) {
            const { index } = this.getSummaryFromGivenSubSentenceSceneId(scene.sceneId); //this.state.summaryJsonText.findIndex(el => el.sceneId == scene.sceneId);
            let summary = {};
            if (index != -1) {
              const image = this.state.imageURL[index];
              if (image && image != '' && image != DUMMY_IMAGE) {
                scenes.settings.imageZoomPan =
                  getResourceType(image) == 'video'
                    ? this.state.defaultSceneSettings.imageZoomPan
                    : scenes.settings.imageZoomPan;
              }
            }
          }
        }
        return scenes;
      });
    } else {
      const { index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId); // const index = summaryJsonText.findIndex(el => el.sceneId == sceneId);

      if (index != -1) {
        let scene = summaryJsonText[index];
        scene.settings = { ...scene.settings, hideText: checked };
        summaryJsonText.splice(index, 1, scene);
      }
      sentenceArray.map(scene => {
        //if ((this.state.source === "transcribe" && scene.sceneId == sceneId) || (this.state.source !== "transcribe" && scene.sceneId == sceneId && scene.subSceneId == subSceneId)) {
        if (scene.sceneId == sceneId && scene.subSceneId == subSceneId) {
          let scenes = scene;
          scenes.settings = { ...scene.settings, hideText: checked };
          return scenes;
        } else {
          return scene;
        }
      });
    }
    this.setState({
      subSentencesArray: sentenceArray,
      summaryJsonText,
      isAnyChange: true,
    });
  };

  checkAllScene = (checked, settings) => {
    if (checked) {
      let sentenceArray = [...this.state.subSentencesArray];
      let summaryJsonText = [...this.state.summaryJsonText];

      summaryJsonText.map((scene, i) => {
        let scenes = scene;
        if (scene.settings) {
          scenes.settings = { ...settings, videoOptions: scenes.settings.videoOptions };
          const image = this.state.imageURL[i];
          if (image && image != '' && image != DUMMY_IMAGE) {
            scenes.settings.imageZoomPan =
              getResourceType(image) == 'video' || image.includes('/textures')
                ? this.state.defaultSceneSettings.imageZoomPan
                : scenes.settings.imageZoomPan;
          }
        }
        return scenes;
      });

      sentenceArray.map(scene => {
        let scenes = scene;
        if (scene.settings) {
          scenes.settings = { ...settings, videoOptions: scenes.settings.videoOptions };
          if (scene.sceneId) {
            const { index } = this.getSummaryFromGivenSubSentenceSceneId(scene.sceneId); // const index = this.state.summaryJsonText.findIndex(el => el.sceneId == scene.sceneId);
            let summary = {};
            if (index != -1) {
              const image = this.state.imageURL[index];
              if (image && image != '' && image != DUMMY_IMAGE) {
                scenes.settings.imageZoomPan =
                  getResourceType(image) == 'video' || image.includes('/textures')
                    ? this.state.defaultSceneSettings.imageZoomPan
                    : scenes.settings.imageZoomPan;
              }
            }
          }
        }
        return scenes;
      });

      this.setState({
        sentenceArray,
        summaryJsonText,
      });
    }

    this.setState({
      applyToAllScenes: checked,
      isAnyChange: true,
    });
  };

  updateSettings = async (sceneId, subSceneId, updatedSettings, isAnyChange = true) => {
    let subSentencesArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    const sceneIndex = subSentencesArray.findIndex(el => el.sceneId == sceneId && el.subSceneId == subSceneId);
    if (sceneIndex > -1) {
      let updateVideoDuration = updatedSettings.hideScene !== subSentencesArray[sceneIndex].settings.hideScene;
      subSentencesArray[sceneIndex] = { ...subSentencesArray[sceneIndex] };
      subSentencesArray[sceneIndex].settings = { ...subSentencesArray[sceneIndex].settings, ...updatedSettings };
      const { index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId);
      if (index > -1) {
        summaryJsonText[index] = { ...summaryJsonText[index] };
        summaryJsonText[index].settings = { ...summaryJsonText[index].settings, ...updatedSettings };
      }
      await this.setState({ subSentencesArray, summaryJsonText, isAnyChange });
      if (
        index > -1 &&
        updateVideoDuration &&
        (summaryJsonText[index]?.sceneId === 'Custom Intro Scene' || summaryJsonText[index]?.sceneId === 'Outro Scene')
      ) {
        // when intro / outro enabled or disabled, on next voiceover call fetch updated voiceover from backend
        // If voiceover enabled on intro / outro then recreate voiceover in backend call
        this.setState({ timeChangedPostAIVO: true });
        if (summaryJsonText[index]?.settings?.voiceOver) {
          this.setState({
            durationUpdatedScenes: {
              loading: false,
              sceneIds: [summaryJsonText[index].sceneId],
              sceneIndices: [index],
              isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted,
              updatedSceneDuration: this.state?.durationUpdatedScenes?.updatedSceneDuration || [],
            },
          });
        }
      }
      // if hideScene is false, this action is to enable intro / outro,
      // so update scene duration in timePerFrame if it is 0 (could be due to autoSync call)
      if (updatedSettings.hideScene === false) {
        if (
          summaryJsonText[index].sceneId === 'Custom Intro Scene' ||
          summaryJsonText[index].sceneId === 'Outro Scene'
        ) {
          const timePerFrame = [...this.state.timePerFrame];
          if (timePerFrame[sceneIndex] === 0) {
            let sceneDuration = 5;
            if (summaryJsonText[index].isUploadedVideo)
              sceneDuration = await this.getVideoDuration(summaryJsonText[index].image, 5);
            timePerFrame[sceneIndex] = sceneDuration;
            this.setState({ timePerFrame });
          }
        }
      }
    }
  };

  updateUpload = () => {
    this.props.getImageList(this.state.username, this.state.getImageFilter);
  };

  getMoreUploadedImages = pageKey => {
    this.props.getMoreImages(this.state.username, pageKey, this.state.getImageFilter);
  };

  setImageFilter = value => {
    this.setState({ getImageFilter: value }, () => {
      this.props.getImageList(this.state.username, this.state.getImageFilter);
    });
  };

  trimScene = async (start, end, isCropped, sceneId, settings, isUploadedVideo, noSave) => {
    let isCustomIntroSceneId = sceneId;
    let sentenceArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    let timePerFrame = [...this.state.timePerFrame];

    if (summaryJsonText[0].sceneId == 'Custom Intro Scene' && summaryJsonText[1].sceneId == 1) {
      isCustomIntroSceneId = sceneId - 1;
    }

    let { index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId);

    let summaryScene;
    if (index != -1) {
      summaryScene = summaryJsonText[index];
      //if(!summaryScene.transcription && end !== Infinity && end > start) summaryScene.transcribeVideoLength = end - start;
      summaryScene.settings = { ...summaryScene.settings, videoOptions: { segments: [{ start, end }], isCropped } };
      if (isUploadedVideo) {
        summaryScene.isUploadedVideo = isUploadedVideo;
      }
      summaryJsonText.splice(index, 1, summaryScene);
    }

    index = sentenceArray.findIndex(scene => scene.sceneId == sceneId);
    if (index > -1) {
      let totalSubSceneDuration = 0;
      for (let i = index; i < index + summaryScene.subsentences.length; i++) {
        sentenceArray[i].settings = {
          ...sentenceArray[i].settings,
          videoOptions: { segments: [{ start, end }], isCropped },
        };
        totalSubSceneDuration += timePerFrame[i];
        //if (!summaryScene.transcription && end !== Infinity && end > start) {
        //	sentenceArray[i].transcribeVideoLength = end - start;
        //}
      }
      // set scene duration (timePerFrame) equal to uploaded video duration if video duration is more
      if (isUploadedVideo && timePerFrame && timePerFrame[index] !== undefined && end !== Infinity && end > start) {
        let videoDuration = end - start;
        if (videoDuration > totalSubSceneDuration) {
          // add excess video duration to the last subscene
          timePerFrame[index + summaryScene.subsentences.length - 1] += videoDuration - totalSubSceneDuration;
        }
      }
      /* if ((isUploadedVideo || (isCropped && summaryScene.isUploadedVideo)) && timePerFrame && timePerFrame[index] !== undefined && end !== Infinity && end > start) {
				let videoDuration = end - start;
				if (videoDuration > totalSubSceneDuration) { // add excess video duration to the last subscene
					timePerFrame[index + summaryScene.subsentences.length - 1] += videoDuration - totalSubSceneDuration;
				} else if (isCropped && summaryScene.isUploadedVideo) { // if trimmed video (isCropped) is user uploaded video, set scene duration equal to trimmed video duration
					timePerFrame[index + summaryScene.subsentences.length - 1] += videoDuration - totalSubSceneDuration;
					if(timePerFrame[index + summaryScene.subsentences.length - 1] < 5) timePerFrame[index + summaryScene.subsentences.length - 1] = 5;
				}
			} */
    }

    await this.setState({
      subSentencesArray: sentenceArray,
      timePerFrame,
      summaryJsonText,
      isAnyChange: !noSave,
    });
  };

  openTextures = openVisual => {
    // document.getElementById('visuals').click();
    this.handleMenutabChange(menuTabEnum.visuals);
    if (openVisual) {
      // open visual tab
      this.handleVisualtabChange(null, 0);
      // this.setState({ activeVisualTab: 'Library' });
    } else {
      // open textures tab
      this.handleVisualtabChange(null, 1);
    }

    this.setState({ showFocusOverlay: true });
  };

  changeBgColor = async (color, sceneId) => {
    if (this.state.selectTemplateVisual) {
      this.selectTemplateVisualSelected('backgroundColor', color);
      //return;
    }
    // for edit video scenario, set transcription bRoll
    if (this.state.source === 'transcribe') {
      await this.setTranscriptionScenebRoll(sceneId, false, false);
    }

    let sentenceArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    let imageAssests = [...this.state.imageAssests];
    let imageURL = [...this.state.imageURL];
    const { index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId);

    if (index != -1) {
      let scene = summaryJsonText[index];
      scene.backgroundColor = color;
      scene.image = '';
      summaryJsonText.splice(index, 1, scene);
      imageURL.splice(index, 1, '');
      imageAssests.splice(index, 1, { url: '', thumb: '', large: '' });

      sentenceArray.map(scene => {
        if (scene.sceneId == sceneId) {
          let scenes = scene;
          scenes.backgroundColor = color;
          return scenes;
        } else {
          return scene;
        }
      });
    }

    let visualChanged = {};
    if (color) {
      visualChanged = {
        changedVisualUrl: '',
        changedVisualAsset: null,
        changedBackgroundColor: color,
        enableApplyVisualToAll: 1,
      };
    }

    this.setState({
      subSentencesArray: sentenceArray,
      summaryJsonText,
      imageURL,
      imageAssests,
      ...visualChanged,
      isAnyChange: true,
    });
  };

  muteClipAudio = async (checked, sceneId, isUpdated, noSave) => {
    //let isCustomIntroSceneId = sceneId
    let sentenceArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];

    //if (summaryJsonText[0].sceneId == "Custom Intro Scene" && summaryJsonText[1].sceneId == 1) {
    //	isCustomIntroSceneId = sceneId - 1
    //}

    const { index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId); //const index = summaryJsonText.findIndex(el => el.sceneId == isCustomIntroSceneId);

    if (index != -1) {
      let scene = summaryJsonText[index];
      scene.settings = { ...scene.settings, muteClipAudio: checked };
      summaryJsonText.splice(index, 1, scene);
    }
    sentenceArray.map(scene => {
      if (scene.sceneId == sceneId) {
        let scenes = scene;
        scenes.settings = { ...scene.settings, muteClipAudio: checked };
        return scenes;
      } else {
        return scene;
      }
    });

    await this.setState({
      subSentencesArray: sentenceArray,
      summaryJsonText,
      isAnyChange: !noSave,
    });
  };

  setFrameCoordinates = (frame, sceneId) => {
    const subSentencesArray = [...this.state.subSentencesArray];
    const summaryJsonText = [...this.state.summaryJsonText];
    subSentencesArray.forEach((scene, index) => {
      if (scene.sceneId == sceneId) {
        subSentencesArray[index] = { ...subSentencesArray[index] };
        subSentencesArray[index].settings = { ...subSentencesArray[index].settings, frame };
      }
    });
    const { index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId);
    summaryJsonText[index] = { ...summaryJsonText[index] };
    summaryJsonText[index].settings = { ...summaryJsonText[index].settings, frame };
    this.setState({
      subSentencesArray,
      summaryJsonText,
      isAnyChange: true,
    });
  };

  setTranscriptionScenebRoll = async (sceneId, applyToAll, isAnyChange = true) => {
    let subSentencesArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];

    let { index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId);
    if (index > -1 || applyToAll) {
      let start = 0;
      let end = summaryJsonText.length;
      if (index > -1) {
        start = index;
        end = index + 1;
      }
      for (let i = start; i < end; i++) {
        summaryJsonText[i] = { ...summaryJsonText[i] };
        if (summaryJsonText[i].transcription) {
          if (!summaryJsonText[i].bRoll) {
            summaryJsonText[i].bRollSubSceneSegments = _.cloneDeep(summaryJsonText[i].subSentenceSegments);
          }
          summaryJsonText[i].bRoll = true;
          summaryJsonText[i].bRollUrl = this.state.url;
          summaryJsonText[i].settings = { ...summaryJsonText[i].settings, muteClipAudio: true };
        }
      }

      for (let i = 0; i < subSentencesArray.length; i++) {
        subSentencesArray[i] = { ...subSentencesArray[i] };
        if (
          subSentencesArray[i].showSceneNumber === 'Custom Intro Scene' ||
          subSentencesArray[i].showSceneNumber === 'Outro Scene'
        )
          continue;
        if (applyToAll || subSentencesArray[i].sceneId === sceneId) {
          if (subSentencesArray[i].transcription) {
            if (!subSentencesArray[i].bRoll) {
              subSentencesArray[i].bRollSubSceneSegment = _.cloneDeep(
                subSentencesArray[i].settings.videoOptions.subSentenceSegments
              );
            }
            subSentencesArray[i].bRoll = true;
            subSentencesArray[i].bRollUrl = this.state.url;
            subSentencesArray[i].settings = { ...subSentencesArray[i].settings, muteClipAudio: true };
          }
        }
      }

      await this.setState({
        subSentencesArray,
        summaryJsonText,
        isAnyChange,
      });
      return true;
    } else return false;
  };

  removeTranscriptionScenebRoll = async sceneId => {
    let subSentencesArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    const { summary, index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId);
    if (index > -1) {
      let scene = { ...summaryJsonText[index] };
      if (scene.transcription && scene.bRoll) {
        delete scene.bRoll;
        delete scene.bRollUrl;
        scene.subSentenceSegments = _.cloneDeep(scene.bRollSubSceneSegments);
        let segments = [];
        for (let i = 0; i < scene.bRollSubSceneSegments.length; i++) {
          const segmentArray = _.cloneDeep(scene.bRollSubSceneSegments[i]);
          segments = segments.concat(segmentArray);
        }
        for (let i = 0; i < segments.length; i++) {
          if (segments[i + 1] && segments[i].end === segments[i + 1].start) {
            segments[i].end = segments[i + 1].end;
            segments.splice(i + 1, 1);
          }
        }
        scene.settings.videoOptions.segments = segments;
        scene.settings.videoOptions.isCropped = true;
        delete scene.bRollSubSceneSegments;
        scene.settings = { ...scene.settings, muteClipAudio: false, frame: null };
        summaryJsonText[index] = scene;
      }
      let sentenceCounter = -1;
      let sceneFound = false;
      for (let i = 0; i < subSentencesArray.length; i++) {
        let subScene = subSentencesArray[i];
        if (subScene.sceneId === sceneId) {
          sentenceCounter = i + 1;
          if (subScene.transcription && subScene.bRoll) {
            delete subScene.bRoll;
            delete subScene.bRollUrl;
            subScene.settings.videoOptions.segments = _.cloneDeep(scene.settings.videoOptions.segments);
            subScene.settings.videoOptions.subSentenceSegments = _.cloneDeep(subScene.bRollSubSceneSegment);
            subScene.settings.videoOptions.isCropped = true;
            delete subScene.bRollSubSceneSegment;
            subScene.settings = { ...subScene.settings, muteClipAudio: false, frame: null };
            subSentencesArray[i] = subScene;
            sceneFound = true;
          }
        } else if (sceneFound === true) {
          break;
        }
      }
      const imageAssests = [...this.state.imageAssests];
      const imageURL = [...this.state.imageURL];
      let timeSegmentStart =
        summaryJsonText[index].subSentenceSegments && summaryJsonText[index].subSentenceSegments[0];
      timeSegmentStart = timeSegmentStart && timeSegmentStart[0];
      let timeSegmentEnd =
        summaryJsonText[index].subSentenceSegments &&
        summaryJsonText[index].subSentenceSegments[summaryJsonText[index].subSentenceSegments.length - 1];
      timeSegmentEnd = timeSegmentEnd && timeSegmentEnd[timeSegmentEnd.length - 1];
      let urlWithTimings = this.state.url;
      if (timeSegmentStart && timeSegmentEnd)
        urlWithTimings += '#t=' + timeSegmentStart.start + ',' + timeSegmentEnd.end;
      imageAssests.splice(parseInt(sceneId - 1), 1, {
        thumb: urlWithTimings,
        url: urlWithTimings,
        large: urlWithTimings,
      }); // replace with source video url
      imageURL.splice(parseInt(sceneId - 1), 1, urlWithTimings); // replace with source url along with timeSegment secs
      await this.setState({ subSentencesArray, summaryJsonText, imageAssests, imageURL, isAnyChange: true });
      return true;
    } else return false;
  };

  selectTemplateVisual = sceneType => {
    this.openTab(TAB_VISUALS);
    this.setState({ selectTemplateVisual: true, selectTemplateVisualSceneType: sceneType });
  };

  selectTemplateVisualSelected = (visualType, visualOrBgColor, isUploadedVideo) => {
    let updatedVisual;
    if (visualType === 'visual') {
      updatedVisual = {
        visualUrl: visualOrBgColor,
        visualType: getResourceType(visualOrBgColor),
        isUploadedVideo: isUploadedVideo,
      };
    } else if (visualType === 'backgroundColor') {
      updatedVisual = { backgroundColor: visualOrBgColor, visualType: 'backgroundColor' };
    }
    this.openTab(TAB_TEMPLATES);
    this.setState({
      selectTemplateVisual: false,
      templatesAction: TEMPLATES_ACTION.setVisual,
      templatesActionData: {
        updatedVisual,
        sceneType: this.state.selectTemplateVisualSceneType,
        skipApplyToScene: true,
      },
    });
  };

  openTab = (tabName, subTabName) => {
    switch (tabName) {
      case TAB_VOICEOVER_UPLOADS:
        this.setState(
          {
            audioUploadScreenType: 'voiceover',
            activeAudioTab: 'upload',
            activeThemeTab: false,
            activeVisualTab: false,
            activeAspectRatioTab: false,
            audioTabsActivationStatus: { ...this.state.audioTabsActivationStatus, upload: true },
            activeDisplayTextTab: false,
          },
          () => {
            this.handleMenutabChange(menuTabEnum.audio);
            this.handleAudiotabChange(null, 2);
            this.refreshVoiceOver();
          }
        );
        break;
      case TAB_VISUALS:
        this.setState(
          {
            activeAudioTab: false,
            activeThemeTab: false,
            activeVisualTab: true,
            activeAspectRatioTab: false,
            visualTabsActivationStatus: {
              ...this.state.visualTabsActivationStatus,
              Library: true,
              activeThemeTab: false,
              activeAudioTab: false,
              activeAspectRatioTab: false,
            },
            activeDisplayTextTab: false,
          },
          () => {
            this.handleMenutabChange(menuTabEnum.visuals);
          }
        );
        break;
      case TAB_TEMPLATE_STYLES:
        this.setState(
          {
            audioUploadScreenType: false,
            activeAudioTab: false,
            activeThemeTab: true,
            activeSubThemeTab: false,
            activeVisualTab: false,
            activeAspectRatioTab: false,
            audioTabsActivationStatus: { ...this.state.audioTabsActivationStatus, upload: false },
            activeDisplayTextTab: false,
          },
          () => {
            this.handleMenutabChange(menuTabEnum.styles);
            if (subTabName)
              setTimeout(() => {
                $('button#' + subTabName).trigger('click');
              }, 100);
          }
        );
        break;
      case TAB_TEMPLATES:
        this.setState(
          {
            audioUploadScreenType: false,
            activeAudioTab: false,
            activeThemeTab: true,
            activeSubThemeTab: true,
            activeVisualTab: false,
            activeAspectRatioTab: false,
            audioTabsActivationStatus: {
              ...this.state.audioTabsActivationStatus,
              upload: this.state.audioTabsActivationStatus?.upload,
            },
            activeDisplayTextTab: false,
          },
          () => {
            this.handleMenutabChange(menuTabEnum.branding);
          }
        );
        break;
      case TAB_AI_VOICEOVER:
        // , voiceOver: true
        this.getActionForAnalytics('voice-over-clicked', 'scene bar', 'voiceOver');
        this.setState(
          {
            audioUploadScreenType: 'voiceover',
            activeAudioTab: true,
            activeThemeTab: false,
            activeVisualTab: false,
            activeAspectRatioTab: false,
            audioTabsActivationStatus: { ...this.state.audioTabsActivationStatus, upload: false, voiceOver: true },
            activeDisplayTextTab: false,
          },
          () => {
            this.handleMenutabChange(menuTabEnum.audio);
            this.handleAudiotabChange(null, 1);
          }
        );
      default:
        break;
    }
  };

  recordingApplyToAll = async (recordedAudioUrl, durationOfUploadedAudio) => {
    if (
      (this.state.summaryJsonText[0].sceneId == 'Custom Intro Scene' &&
        !this.state.summaryJsonText[0].settings.hideScene) ||
      (this.state.summaryJsonText[this.state.summaryJsonText.length - 1].sceneId == 'Outro Scene' &&
        !this.state.summaryJsonText[this.state.summaryJsonText.length - 1].settings.hideScene)
    ) {
      this.setState({ showIntroOutroVOConfirm: true, recordedAudioUrl, durationOfUploadedAudio });
    } else {
      this.recordingVOApplyToAll(recordedAudioUrl, durationOfUploadedAudio);
    }
  };

  introOutroVOConfirm = hasIntroOutroInVO => {
    this.setState({ showIntroOutroVOConfirm: false });
    this.recordingVOApplyToAll(this.state.recordedAudioUrl, this.state.durationOfUploadedAudio, hasIntroOutroInVO);
  };

  recordingVOApplyToAll = async (recordedAudioUrl, durationOfUploadedAudio, hasIntroOutroInVO) => {
    amplitude.getInstance().logEvent('voiceover-autosync-init', {
      'voiceover-url': recordedAudioUrl,
      'project-id': this.state.project_id,
    });

    await this.setState({
      durationUpdatedScenes: {
        loading: this.state.durationUpdatedScenes?.loading || false,
        sceneIds: this.state.subSentencesArray.map(scene => scene.sceneId) || [],
        sceneIndices: this.state.durationUpdatedScenes?.sceneIndices || [],
        isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted || false,
        updatedSceneDuration: this.state.durationUpdatedScenes?.updatedSceneDuration || [],
      },
      autoSyncProgress: 0,
      previewProgress: 0,
      showAutoSyncVoiceover: true,
      voiceOverErrorMsgStep1: '',
      voiceOverErrorMsgStep2: '',
    });
    //this.loadAudioTrimmer(true, recordedAudioUrl);
    // set a timer based progress bar for auto-sync call
    const timerID = setInterval(() => {
      if (this.state.autoSyncProgress < 99) this.setState({ autoSyncProgress: this.state.autoSyncProgress + 1 });
      else clearInterval(timerID);
    }, 800);
    // auto-sync voiceover - make automatic voiceover call to fetch the audio timelines based on sentences for each scene
    const voiceOverResult = await this.getVoiceOverTrackURL(null, 100, true, undefined, undefined, {
      voiceOverAutoSync: true,
      recordedAudioUrl,
      hasIntroOutroInVO,
      language: this.state.scriptLanguage,
    });
    if (voiceOverResult.error) {
      clearInterval(timerID);
      this.setState({
        autoSyncProgress: 0,
        previewProgress: 0,
        voiceOverErrorMsgStep1: 'Auto sync failure! Please try again later',
        voiceoverButtonText: 'Ok',
      });
      return;
    }
    if (voiceOverResult.success && this.state.voiceOverURL && this.state.showAutoSyncVoiceover) {
      let durationArray = this.state.voiceOverURL.timePerSceneForVoiceOver.map(duration => duration / 1000);
      const timePerFrame = [...this.state.timePerFrame];
      let durationArrayCounter = 0;
      for (let i = 0; i < timePerFrame.length; i++) {
        let scene = this.state.subSentencesArray[i];
        if (
          !hasIntroOutroInVO &&
          scene &&
          (scene.showSceneNumber === 'Custom Intro Scene' || scene.showSceneNumber === 'Outro Scene')
        )
          continue;
        if (
          hasIntroOutroInVO &&
          scene &&
          ((scene.showSceneNumber === 'Custom Intro Scene' && scene.settings.hideScene) ||
            (scene.showSceneNumber === 'Outro Scene' && scene.settings.hideScene))
        )
          continue;
        if (durationArray[durationArrayCounter] !== undefined) timePerFrame[i] = durationArray[durationArrayCounter];
        durationArrayCounter++;
      }
      this.setState({ timePerFrame });
      let segmentsArray = [];
      let start = 0;
      let end = 0;
      durationArray.forEach(time => {
        end += time;
        let segment = { start: parseFloat(start.toFixed(3)), end: parseFloat(end.toFixed(3)) };
        segmentsArray.push(segment);
        start = end;
      });
      this.recordAudio(recordedAudioUrl, 0, 0, 0, 1, true, durationArray, segmentsArray, hasIntroOutroInVO);
    }
  };

  /**
   * Reduce bgMusicVolPercent to 10 for only the 1st recorded audio / voiceOver
   * @param {Boolean} voiceOverPreExists
   */
  reduceMusicVolume = voiceOverPreExists => {
    if (!voiceOverPreExists && this.state.bgMusicVolPercent > REDUCED_BG_MUSIC_VOL_PERCENT)
      this.setState({ bgMusicVolPercent: REDUCED_BG_MUSIC_VOL_PERCENT });
  };

  isRecordedAudioPreExisting = () => {
    const subSentencesArray = this.state.subSentencesArray;
    let recordedAudioPreExists = false;
    for (let i = 0; i < subSentencesArray.length; i++) {
      if (subSentencesArray[i].recordedAudio) recordedAudioPreExists = true;
    }
    return recordedAudioPreExists;
  };

  recordAudio = async (
    recordedAudio,
    duration,
    sceneId,
    subSceneId,
    playbackRate,
    applyToAll,
    durationArray,
    segmentsArray,
    hasIntroOutroInVO
  ) => {
    if (!applyToAll) {
      let userDenied = await this.removeRecordedAudio(); // if user agrees to overwrite voice-over that was appplied-to-all, then clean-up the objects and proceed, else return
      if (userDenied) return;
    }
    AppLocalStorage.setItem('recordedAudio', recordedAudio);
    duration = duration / playbackRate;
    if (!applyToAll) {
      this.recordAudioSubscene(recordedAudio, duration, sceneId, subSceneId, playbackRate);
      return;
    }
    //let isCustomIntroSceneId = sceneId;
    let subSentencesArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    /* if (summaryJsonText[0].sceneId == "Custom Intro Scene" && summaryJsonText[1].sceneId == 1 && sceneId != "Outro Scene" && sceneId != "Custom Intro Scene") {
			isCustomIntroSceneId = sceneId - 1
		}
		let index = -1;
		if (sceneId == "Custom Intro Scene") {
			index = 0;
		} else {
			index = summaryJsonText.findIndex(el => el.sceneId == isCustomIntroSceneId);
		} */
    let { index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId);

    if (index != -1) {
      let scene = { ...summaryJsonText[index] };
      scene.recordedAudio = recordedAudio;
      scene.recordedAudioDuration = duration;
      scene.recordedAudioDurationMiniSec = duration * 1000;
      scene.playbackRate = playbackRate;
      scene.audioSegments = [];
      let start = 0;
      let end = 0;
      let subSceneDuration = parseFloat((scene.recordedAudioDuration / scene.subsentences.length).toFixed(2));
      for (let i = 0; i < scene.subsentences.length; i++) {
        end += subSceneDuration;
        scene.audioSegments.push({ start, end });
        start = end;
      }
      summaryJsonText[index] = scene;
    }
    let recordedAudioPreExists = false;
    index = 0;
    let durationSegmentCounter = 0;
    for (let i = 0; i < subSentencesArray.length; i++) {
      let scene = {};
      if (
        applyToAll ||
        subSentencesArray[i].sceneId == sceneId ||
        (sceneId == 'Outro Scene' && subSentencesArray[i].showSceneNumber == sceneId) ||
        (sceneId == 'Custom Intro Scene' && subSentencesArray[i].showSceneNumber == sceneId)
      ) {
        if (subSentencesArray[i].recordedAudio) recordedAudioPreExists = true;
        scene.recordedAudio = recordedAudio;
        if (applyToAll) {
          if (
            (subSentencesArray[i].showSceneNumber == 'Custom Intro Scene' && subSentencesArray[i].settings.hideScene) ||
            (subSentencesArray[i].showSceneNumber == 'Outro Scene' && subSentencesArray[i].settings.hideScene)
          )
            continue;
          if (
            !hasIntroOutroInVO &&
            (subSentencesArray[i].showSceneNumber == 'Custom Intro Scene' ||
              subSentencesArray[i].showSceneNumber == 'Outro Scene')
          )
            continue;
          duration = durationArray[durationSegmentCounter] || 0;
          scene.recordingApplyToAll = true;
          if (segmentsArray[durationSegmentCounter])
            scene.audioSegments = [{ ...segmentsArray[durationSegmentCounter] }];
          else scene.audioSegments = [];
        }
        scene.recordedAudioDuration = duration;
        scene.recordedAudioDurationMiniSec = duration * 1000;
        scene.playbackRate = playbackRate;
        subSentencesArray[i] = { ...subSentencesArray[i], ...scene };
        if (applyToAll) {
          scene.audioSegments = [...scene.audioSegments];
          scene = { ...scene };
          if (index == 0 && i == 0) {
            summaryJsonText[index] = { ...summaryJsonText[index], ...scene };
          } else {
            let prevSubSentence = subSentencesArray[i - 1];
            if (subSentencesArray[i].sceneId === prevSubSentence.sceneId) {
              // implies subscene
              let audioSegments = summaryJsonText[index].audioSegments;
              if (segmentsArray[durationSegmentCounter])
                audioSegments.push({ ...segmentsArray[durationSegmentCounter] });
              summaryJsonText[index] = { ...summaryJsonText[index], audioSegments };
            } else {
              index++;
              summaryJsonText[index] = { ...summaryJsonText[index], ...scene };
            }
          }
        }
      }
      durationSegmentCounter++;
    }
    this.reduceMusicVolume(recordedAudioPreExists);
    this.setState(
      {
        subSentencesArray,
        summaryJsonText,
        autoSyncProgress: applyToAll ? 100 : 0,
        previewProgress: 0,
        showAutoSyncVoiceoverButtons: applyToAll && this.state.showAutoSyncVoiceover ? true : false,
        isAnyChange: true,
      },
      () => {
        if (applyToAll && this.state.showAutoSyncVoiceover) {
          //this.loadAudioTrimmer(true, recordedAudio);
          this.saveTrimmedAudio();
          this.OpenCloseVideoPreviewNew(null, null, null, null, null, null, true);
        }
      }
    );
  };

  /**
   * Record audio for one of the scene (subScene) in linked scenes
   * @param {*} recordedAudio
   * @param {*} duration
   * @param {*} sceneId
   * @param {*} subSceneId
   * @param {*} playbackRate
   */
  recordAudioSubscene = (recordedAudio, duration, sceneId, subSceneId, playbackRate) => {
    const summaryJsonText = [...this.state.summaryJsonText];
    const sceneIds = this.state.durationUpdatedScenes?.sceneIds || [];
    if (!sceneIds.includes(sceneId)) {
      sceneIds.push(sceneId);
    }
    const { summary, index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId);
    let summaryData = { ...summary };
    if (recordedAudio) {
      delete summaryData.recordedAudio;
      delete summaryData.recordedAudioDuration;
      delete summaryData.recordedAudioDurationMiniSec;
      delete summaryData.playbackRate;
    }
    let subSceneCount = summaryData.subsentences.length;
    if (!summaryData.audioSegments || summaryData.audioSegments.length !== subSceneCount)
      summaryData.audioSegments = new Array(subSceneCount).fill(null);
    let audioSegment = {};
    audioSegment.recordedAudio = recordedAudio;
    audioSegment.recordedAudioDuration = duration;
    audioSegment.recordedAudioDurationMiniSec = duration * 1000;
    audioSegment.start = 0;
    audioSegment.end = duration;
    //audioSegment.playbackRate = playbackRate;
    summaryData.audioSegments[subSceneId - 1] = audioSegment;
    summaryJsonText[index] = summaryData;

    const subSentencesArray = [...this.state.subSentencesArray];
    const timePerFrame = [...this.state.timePerFrame];
    let sceneIndex = subSentencesArray.findIndex(scene => scene.sceneId === sceneId && scene.subSceneId === subSceneId);
    let sceneData = { ...subSentencesArray[sceneIndex] };
    if (recordedAudio) {
      delete sceneData.recordedAudio;
      delete sceneData.recordedAudioDuration;
      delete sceneData.recordedAudioDurationMiniSec;
      delete sceneData.playbackRate;
    }
    sceneData.audioSegments = [{ ...audioSegment }];
    subSentencesArray[sceneIndex] = sceneData;
    timePerFrame[sceneIndex] = duration;

    let recordedAudioPreExists = false;
    for (let i = 0; i < subSentencesArray.length; i++) {
      const scene = subSentencesArray[i];
      if (
        scene.recordedAudio ||
        (scene.audioSegments && scene.audioSegments[0] && scene.audioSegments[0].recordedAudio)
      )
        recordedAudioPreExists = true;
    }

    this.reduceMusicVolume(recordedAudioPreExists);
    this.setState({
      durationUpdatedScenes: {
        loading: this.state.durationUpdatedScenes?.loading || false,
        sceneIds,
        sceneIndices: this.state.durationUpdatedScenes?.sceneIndices || [],
        isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted || false,
        updatedSceneDuration: this.state.durationUpdatedScenes?.updatedSceneDuration || [],
      },
      subSentencesArray,
      timePerFrame,
      summaryJsonText,
      isAnyChange: true,
    });
  };

  /**
   * Used to remove recorded audio whether on a scene, or subscene (in one of the linked scenes) or full project voiceover
   * @param {*} sceneId
   * @param {*} subSceneId
   * @param {*} isAnyChange save to backend only if true
   * @returns
   */
  removeRecordedAudio = async (sceneId, subSceneId, isAnyChange) => {
    sceneId = parseInt(sceneId);
    subSceneId = parseInt(subSceneId);
    let isRecordingApplyToAll = this.state.subSentencesArray.some(scene => scene.recordingApplyToAll);
    if (isRecordingApplyToAll && !sceneId && !isAnyChange) {
      // if user agrees to overwrite voice-over that was appplied-to-all, then clean-up the objects and proceed, else return true
      // For now, show a msg and dont allow user to proceed
      await this.setState({ showEntireVideoRemoveConfirmation: true });
      return true;
    }
    let sentenceArray = [...this.state.subSentencesArray];
    let summaryJsonText = [...this.state.summaryJsonText];
    if (isRecordingApplyToAll) {
      summaryJsonText.map(scene => {
        delete scene.recordedAudio;
        delete scene.recordedAudioDuration;
        delete scene.recordedAudioDurationMiniSec;
        delete scene.playbackRate;
        delete scene.audioSegments;
        delete scene.recordingApplyToAll;
        return scene;
      });
    } else {
      const { summary, index } = this.getSummaryFromGivenSubSentenceSceneId(sceneId);
      if (index != -1) {
        let scene = summaryJsonText[index];
        delete scene.recordedAudio;
        delete scene.recordedAudioDuration;
        delete scene.recordedAudioDurationMiniSec;
        delete scene.playbackRate;
        delete scene.audioSegments;
        AppLocalStorage.removeItem('');
        if (subSceneId > 0 && scene.audioSegments && scene.audioSegments[subSceneId - 1]) {
          scene.audioSegments[subSceneId - 1] = null;
        }
        summaryJsonText.splice(index, 1, scene);
      }
    }
    AppLocalStorage.setItem('recordedAudio', '');
    // If subSceneId is not given delete all subscenes matching the scene id else delete only the specific subscene
    sentenceArray.map(scene => {
      if (
        isRecordingApplyToAll ||
        (scene.sceneId === sceneId && subSceneId === undefined) ||
        (subSceneId > 0 && scene.sceneId === sceneId && scene.subSceneId === subSceneId)
      ) {
        delete scene.recordedAudio;
        delete scene.recordedAudioDuration;
        delete scene.recordedAudioDurationMiniSec;
        delete scene.playbackRate;
        delete scene.audioSegments;
        delete scene.recordingApplyToAll;
      }
      return scene;
    });
    this.removeAudioTrimmer();
    await this.setState({
      durationUpdatedScenes: {
        loading: this.state.durationUpdatedScenes?.loading || false,
        sceneIds: this.state.durationUpdatedScenes?.sceneIds || [],
        sceneIndices: this.state.durationUpdatedScenes?.sceneIndices || [],
        isSceneDeleted: true,
        updatedSceneDuration: this.state.durationUpdatedScenes?.updatedSceneDuration || [],
      },
      generatedVoiceOvers: [],
      subSentencesArray: sentenceArray,
      summaryJsonText,
      showAudioTrimmer: false,
      isAnyChange,
    });
    return false;
  };

  changeTransitions = transitionId => {
    if (getFeatures(this.state.username)[features.sceneTransitions]) {
      this.setState({
        transitionId,
        isAnyChange: true,
      });
    } else {
      this.transitionsNotAllowed();
    }
  };

  loadMoreScenes = () => {
    this.setState({
      loadMoreScenes: !this.state.loadMoreScenes,
    });
  };

  loadMoreSentences = () => {
    this.setState({
      loadMoreSentences: !this.state.loadMoreSentences,
    });
  };

  minimizeVideoGeneration = event => {
    this.cancelIntervalTimers();
    setTimeout(() => {
      showInfo(`Video generation is in-progress.`);
    }, 100);
    //Stop sync video generation progress
    this.props.stopVideoGeneration();
    this.props.generateAsyncVideo({
      projectId: this.state.project_id,
      projectName: this.state.projectName,
      responseId: this.state.videoGenerationResponseId,
      username: this.state.username,
    });
    this.setState({
      displayVideoProgressBar: false,
      displayGenerateVideo: false,
      isMinimized: true,
      generatingAsyncVideo: true,
      isAnyChange: true,
      openNotificationPanel: !this.state.openNotificationPanel,
      isSavingForEmailNotification: false,
    });
    this.props.generateVideoStatus({ step: 1 });

    $('body').on('click', e => {
      if (this.state.openNotificationPanel) {
        this.setState({ openNotificationPanel: !this.state.openNotificationPanel });

        var dropdown = document.querySelector('#notification-bell-dropdown.show');
        if (dropdown) dropdown.classList.remove('show');

        var dropdownMenu = document.querySelector('#notification-bell-dropdown .dropdown-menu.show');
        if (dropdownMenu) dropdownMenu.classList.remove('show');
      }
    });
  };

  markEditorOpen = () => {
    this.setState({
      isOpenTextEditor: true,
    });
  };

  onSceneDurationUpdate = sceneId => {
    if (sceneId) {
      const sceneIds = this.state.durationUpdatedScenes?.updatedSceneDuration || [];
      if (!sceneIds.includes(sceneId)) {
        sceneIds.push(sceneId);
      }
      this.setState({
        generatedVoiceOvers: [],
        durationUpdatedScenes: {
          loading: this.state.durationUpdatedScenes?.loading || false,
          sceneIds: this.state.durationUpdatedScenes?.sceneIds || [],
          sceneIndices: this.state.durationUpdatedScenes?.sceneIndices || [],
          isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted || false,
          updatedSceneDuration: sceneIds,
        },
      });
    }
  };

  splitScene = async (SentenceCounter, sentencePart1, sentencePart2) => {
    //sentencePart1 = findAndReplaceAll(sentencePart1, '<strong>|</strong>', '');
    //sentencePart2 = findAndReplaceAll(sentencePart2, '<strong>|</strong>', '');
    let SceneId = this.state.subSentencesArray[SentenceCounter - 1].sceneId;
    let SubSceneId = this.state.subSentencesArray[SentenceCounter - 1].subSceneId;

    // set scene time of existing scene and newly inserted scene to be split in same ratio as the text on each scene
    const calculateSceneTime = (subsentence, factor = 1) => {
      let time = Math.ceil(subsentence.length * factor * SCENE_TIME_SEC_PER_CHAR * 2) / 2; // 0.08sec per char
      if (time < 5) time = 5;
      return time;
    };
    const origSceneTime = this.state.timePerFrame[SentenceCounter - 1];
    const origSubsentence = this.state.subSentencesArray[SentenceCounter - 1].subSentences;
    const origCalculatedSceneTime = calculateSceneTime(this.state.subSentencesArray[SentenceCounter - 1].subSentences);
    const factor = origSceneTime / origCalculatedSceneTime;

    await this.InsertNewSubScene(SentenceCounter, SceneId, SubSceneId);
    const timePerFrame = [...this.state.timePerFrame];
    timePerFrame[SentenceCounter - 1] = calculateSceneTime(sentencePart1, factor);
    timePerFrame[SentenceCounter] = calculateSceneTime(sentencePart2, factor);
    await this.setState({ timePerFrame });

    let { summary } = this.getSummaryFromGivenSubSentenceSceneId(SceneId);
    let formatNewScene = summary.format[SubSceneId - 1];
    await this.saveTextEditorValue(
      SentenceCounter,
      sentencePart1,
      this.state.subSentencesArray[SentenceCounter - 1].keywords,
      {},
      SceneId,
      SubSceneId,
      undefined,
      false,
      false,
      false
    );
    await this.saveTextEditorValue(
      SentenceCounter + 1,
      sentencePart2,
      this.state.subSentencesArray[SentenceCounter].keywords,
      formatNewScene,
      SceneId,
      SubSceneId + 1,
      undefined,
      false,
      false,
      true
    );

    this.setState({ setActiveDivReorder: SentenceCounter + 1 });
  };

  /**
   * Link scene with the previous scene - delete scene, add it as sub-scene to the previous scene.
   * Unlink scene - insert a new scene after the scene and move the sub-scene to the new scene. If there are other subscenes after the current one, move them as well to the new scene
   * @param {number} sentenceCounter
   * @param {boolean} link link if true, else unlink
   */
  linkScene = async (sentenceCounter, link) => {
    const subSentencesArray = [...this.state.subSentencesArray];
    const imageURL = [...this.state.imageURL];
    const imageAssests = [...this.state.imageAssests];
    const subSentence = subSentencesArray[sentenceCounter - 1];
    const hideTextArray = [];
    let updatedSceneIds = this.state?.durationUpdatedScenes?.sceneIds || [];
    for (let i = 0; i < subSentencesArray.length; i++) {
      const hideText = subSentencesArray[i].settings.hideText;
      hideTextArray.push(hideText);
    }
    const { summary, index } = this.getSummaryFromGivenSubSentenceSceneId(subSentence.sceneId);
    let summaryJsonText;
    const linkedSceneId = subSentencesArray[index].sceneId;
    if (link) {
      summaryJsonText = this.copySubsceneData(index, index - 1);
      if (!summaryJsonText) return;
      summaryJsonText.splice(index, 1);
      imageURL.splice(index, 1);
      imageAssests.splice(index, 1);
    } else {
      const summaryCopy = _.cloneDeep(summary);
      const imageURLCopy = _.cloneDeep(imageURL[index]);
      const imageAssestCopy = _.cloneDeep(imageAssests[index]);
      summaryJsonText = [...this.state.summaryJsonText];
      const refreshVideoOptions = summaryObj => {
        if (summaryObj.subSentenceSegments) {
          let videoOptionsSegments = [];
          for (let i = 0; i < summaryObj.subSentenceSegments.length; i++) {
            let segments = summaryObj.subSentenceSegments[i];
            if (!segments) segments = [{ start: 0, end: 0 }];
            videoOptionsSegments = videoOptionsSegments.concat(segments);
          }
          summaryObj.settings.videoOptions.segments = videoOptionsSegments;
          summaryObj.transcribeVideoLength = this.totalSegments(videoOptionsSegments);
        } else {
          summaryObj.settings.videoOptions.segments = [{ start: 0, end: 0 }];
        }
      };
      // delete all subsentences items from subScene onward
      this.deleteSubsceneData(
        summary,
        subSentence.subSceneId - 1,
        summary.subsentences.length - (subSentence.subSceneId - 1)
      );
      refreshVideoOptions(summary);
      // delete all subsentences items upto subScene
      this.deleteSubsceneData(summaryCopy, 0, subSentence.subSceneId - 1);
      refreshVideoOptions(summaryCopy);
      summaryJsonText.splice(index + 1, 0, summaryCopy);
      imageURL.splice(index, 0, imageURLCopy);
      imageAssests.splice(index, 0, imageAssestCopy);
    }
    if (!updatedSceneIds.includes(linkedSceneId)) {
      updatedSceneIds.push(linkedSceneId);
    }
    for (let i = 0; i < summaryJsonText.length; i++) {
      if (summaryJsonText[i].sceneId == 'Outro Scene' || summaryJsonText[i].sceneId == 'Custom Intro Scene') continue;
      if (summaryJsonText[0].sceneId == 'Custom Intro Scene') summaryJsonText[i].sceneId = i;
      else summaryJsonText[i].sceneId = i + 1;
    }

    await this.setState({ summaryJsonText, imageURL, imageAssests }, async () => {
      await this.componentWillMount_call(false, false);
      // update settings.hideText in subSentencesArray
      const subSentencesArray = [...this.state.subSentencesArray];
      for (let i = 0; i < subSentencesArray.length; i++) {
        subSentencesArray[i].settings = { ...subSentencesArray[i].settings, hideText: hideTextArray[i] };
      }
      await this.setState({ subSentencesArray, isAnyChange: true }); // save the changes after recreating subSentencesArray
    });
    this.setState({
      durationUpdatedScenes: {
        loading: false,
        sceneIds: updatedSceneIds,
        sceneIndices: this.state.durationUpdatedScenes?.sceneIndices || [],
        isSceneDeleted: this.state.durationUpdatedScenes?.isSceneDeleted || [],
        updatedSceneDuration: this.state.durationUpdatedScenes?.updatedSceneDuration || [],
      },
    });
  };

  deleteSubsceneData = (summary, startIndex, deleteCount) => {
    // inline function to delete segments array from scene. just provide the segment name
    const deleteSegments = segmentName => {
      if (summary[segmentName] && summary[segmentName].length > 0) {
        summary[segmentName] = [...summary[segmentName]];
        summary[segmentName].splice(startIndex, deleteCount);
        if (summary[segmentName].length > subsceneCount) {
          // in case there are extra elements in the segment array, remove them
          summary[segmentName].splice(subsceneCount - 1, summary[segmentName].length - subsceneCount);
        }
      }
    };
    summary.subsentences = [...summary.subsentences];
    summary.subsentences.splice(startIndex, deleteCount);
    summary.sentence = summary.subsentences.join(' ');
    const subsceneCount = summary.subsentences.length;
    deleteSegments('subSentenceSegments');
    deleteSegments('audioSegments');
    deleteSegments('bRollSubSceneSegments');
    deleteSegments('format');
    deleteSegments('uuidArray');
  };

  /**
   * Copy subscene data from a scene to another scene, append subscene data to existing subscene data
   * @param {*} fromSceneIndex
   * @param {*} toSceneIndex
   */
  copySubsceneData = (fromSceneIndex, toSceneIndex) => {
    const summaryJsonText = [...this.state.summaryJsonText];
    const fromScene = { ...summaryJsonText[fromSceneIndex] };
    let toScene = { ...summaryJsonText[toSceneIndex] };
    const toSceneSubsceneCount = toScene.subsentences.length; //existing subsentences count before merge from scene
    toScene = { ...toScene, subsentences: [...toScene.subsentences, ...fromScene.subsentences] };
    toScene.sentence = toScene.subsentences.join(' ');
    toScene.keywords = toScene.keywords.concat(fromScene.keywords);
    if (toScene.keywords && toScene.keywords.length > 1) toScene.keywords = [...new Set([...toScene.keywords])];
    summaryJsonText[toSceneIndex] = toScene;
    const fromSceneSubsceneCount = fromScene.subsentences.length;

    // inline function to copy segments array from one scene to another. just provide the segment name
    const copySegments = (segmentName, fromObject, toObject, blankValue) => {
      let segmentsCount = toObject[segmentName] ? toObject[segmentName].length : 0;
      if (segmentsCount < toSceneSubsceneCount) {
        if (!toObject[segmentName]) toObject[segmentName] = [];
        for (let i = 0; i < toSceneSubsceneCount - segmentsCount; i++) toObject[segmentName].push(blankValue); // add blank segment to make it equal to the subscene count
      }
      if (fromObject[segmentName] && fromObject[segmentName].length > 0) {
        toObject[segmentName] = [...toObject[segmentName], ...fromObject[segmentName]];
      } else {
        for (let i = 0; i < fromSceneSubsceneCount; i++) toObject[segmentName].push(blankValue); // add blank segment to make it equal to the subscene count
      }
    };

    copySegments('audioSegments', fromScene, toScene, null);
    copySegments('format', fromScene, toScene, null);
    copySegments('uuidArray', fromScene, toScene, null);
    let fromSceneSegmentsObject = {};
    if (fromScene.bRoll) {
      fromSceneSegmentsObject.subSentenceSegments = _.cloneDeep(fromScene.bRollSubSceneSegments);
      fromSceneSegmentsObject.bRollSubSceneSegments = fromSceneSegmentsObject.subSentenceSegments;
    } else {
      fromSceneSegmentsObject.bRollSubSceneSegments = _.cloneDeep(fromScene.subSentenceSegments);
      fromSceneSegmentsObject.subSentenceSegments = fromSceneSegmentsObject.bRollSubSceneSegments;
    }
    if (toScene.bRoll) {
      copySegments('bRollSubSceneSegments', fromSceneSegmentsObject, toScene, null);
    } else {
      // when toScene doesnt have bRoll, copy over subSentenceSegments
      // and if fromScene has bRoll, copy bRollSubSceneSegments else copy fromScene.settings.videoOptions.segments to toScene.settings.videoOptions
      copySegments('subSentenceSegments', fromSceneSegmentsObject, toScene, null);
      if (fromScene.bRoll) {
        let bRollSubSceneSegmentArray = [];
        let bRollSubSceneSegments = fromSceneSegmentsObject.bRollSubSceneSegments;
        for (let i = 0; i < bRollSubSceneSegments.length; i++) {
          const bRollSubSceneSegment = bRollSubSceneSegments[i];
          bRollSubSceneSegmentArray = bRollSubSceneSegmentArray.concat(bRollSubSceneSegment);
        }
        copySegments('segments', { segments: bRollSubSceneSegmentArray }, toScene.settings.videoOptions, {
          start: 0,
          end: 0,
        });
      } else {
        copySegments('segments', fromScene.settings.videoOptions, toScene.settings.videoOptions, { start: 0, end: 0 });
      }
    }

    //Show error if any of bRollSubSceneSegments is null
    if (toScene.bRoll && toScene.bRollSubSceneSegments.some(segment => !segment)) {
      showError('Unable to link scene. Please contact support.');
      amplitude.getInstance().logEvent('link-scene-error', {
        bRollSubSceneSegments: toScene.bRollSubSceneSegments.toString(),
        sceneId: toScene.sceneId,
        'project-id': this.state.project_id,
      });
      return;
    }

    return summaryJsonText;
  };

  getListOfRecordedAudio = scenes => {
    const isAllowTemplates = allowTemplates(this.state.username);
    let listOfRecordedAudio = [];
    for (let i = 0; i < scenes.length; i++) {
      const scene = scenes[i];
      if (scene.recordingApplyToAll) {
        listOfRecordedAudio.push({ url: scene.recordedAudio, recordingApplyToAll: true });
        break;
      } else if (scene.recordedAudio && scene.recordedAudio != '') {
        listOfRecordedAudio.push({ url: scene.recordedAudio, sceneNumber: i + 1 });
      } else if (!scene.recordedAudio && scene.audioSegments) {
        for (let j = 0; j < scene.audioSegments.length; j++) {
          const segment = scene.audioSegments[j];
          if (segment) {
            let audioElement = {
              url: segment.recordedAudio,
              sceneNumber: this.getShowSceneNumber(scenes, scene.sceneId, j + 1, true),
            };
            if (isAllowTemplates) {
              audioElement.showSceneNumber = this.getShowSceneNumber(scenes, scene.sceneId, j + 1, false, true);
            }
            listOfRecordedAudio.push(audioElement);
          }
        }
      }
    }
    this.setState({
      listOfRecordedAudio,
    });
  };

  getShowSceneNumber = (summaryArray, summarySceneId, subSceneId, showNumberOnly = false, isAllowTemplates) => {
    let sceneId = 0;
    for (let i = 0; i < summaryArray.length; i++) {
      const summary = summaryArray[i];
      sceneId++;
      let subSceneArray = summary.lines || summary.subsentences;
      for (let j = 0; j < subSceneArray.length; j++) {
        if (j > 0) sceneId++;
        if (summarySceneId === summary.sceneId && subSceneId === j + 1) {
          let showSceneNumber;
          if (isAllowTemplates) {
            if (summary.sceneId === 'Custom Intro Scene') {
              showSceneNumber = 'Intro scene';
            } else if (summary.sceneId === 'Outro Scene') {
              showSceneNumber = 'Outro scene';
            } else {
              if (summaryArray[0].sceneId === 'Custom Intro Scene') showSceneNumber = 'Scene ' + (sceneId - 1);
              else showSceneNumber = 'Scene ' + sceneId;
            }
          } else {
            showSceneNumber = showNumberOnly ? sceneId : 'Scene ' + sceneId;
          }
          return showSceneNumber;
        }
      }
    }
  };

  setShowSceneNumbersInSceneArray = (summaryArray, subSentencesArray, startIndex = 0) => {
    const isAllowTemplates = allowTemplates(this.state.username);
    subSentencesArray = subSentencesArray.map((row, index) => {
      if (index < startIndex) return row;
      if (index === 0 && summaryArray[0].sceneId === 'Custom Intro Scene') {
        row.showSceneNumber = 'Custom Intro Scene';
      } else if (
        index === subSentencesArray.length - 1 &&
        summaryArray[summaryArray.length - 1].sceneId === 'Outro Scene'
      ) {
        row.showSceneNumber = 'Outro Scene';
      } else if (isAllowTemplates) {
        if (summaryArray[0].sceneId === 'Custom Intro Scene') row.showSceneNumber = 'Scene ' + index;
        else row.showSceneNumber = 'Scene ' + (index + 1);
      } else {
        row.showSceneNumber = 'Scene ' + (index + 1);
      }
      return row;
    });
  };

  searchValueChangedTimer = null;

  searchValueChanged = value => {
    clearTimeout(this.searchValueChangedTimer);
    this.searchValueChangedTimer = setTimeout(() => {
      if (!value) {
        this.clearSearchValue();
        return;
      }
      const searchSceneText = {
        query: value.toLowerCase(),
        activeElIndex: -1,
        matches: [],
      };

      const matches = [];
      this.state.subSentencesArray.forEach((row, rowindex) => {
        let sentence = row.sentence;
        sentence = sentence.toLowerCase();

        let coreSentence = sentence;
        let indexOffset = 0;
        const localMatches = [];

        while (sentence.indexOf(searchSceneText.query) > -1) {
          let index = sentence.search(searchSceneText.query);
          let strongStartTagIndex = sentence.search('<strong>');
          let strongEndTagIndex = sentence.search('</strong>');
          if (strongStartTagIndex > -1 && index >= strongStartTagIndex && index < strongStartTagIndex + 8) {
            let firstChar = searchSceneText.query.charAt(0);
            let queryIndexInStrongTag = '<strong>'.search(firstChar);
            indexOffset = indexOffset + index + 8 - queryIndexInStrongTag;
            sentence = coreSentence.substring(indexOffset);
            continue;
          } else if (strongEndTagIndex > -1 && index >= strongEndTagIndex && index < strongEndTagIndex + 9) {
            let firstChar = searchSceneText.query.charAt(0);
            let queryIndexInStrongTag = '</strong>'.search(firstChar);
            indexOffset = indexOffset + index + 9 - queryIndexInStrongTag;
            sentence = coreSentence.substring(indexOffset);
            continue;
          }
          index = indexOffset + index;
          const uniqueId = row.sceneId + '-' + row.subSceneId + '-' + index + '-' + searchSceneText.query.length;

          if (matches.map(row => row.uniqueId).indexOf(uniqueId) === -1) {
            const matchRow = {
              startIndex: index,
              endIndex: index + searchSceneText.query.length,
              word: searchSceneText.query,
              sceneId: row.sceneId,
              subSceneId: row.subSceneId,
              uniqueId: uniqueId,
              rowindex: rowindex,
            };

            matches.push(matchRow);
            localMatches.push(matchRow);
          }

          indexOffset = index + searchSceneText.query.length;
          sentence = coreSentence.substring(indexOffset);
        }
      });

      if (matches.length) {
        searchSceneText.matches = matches;
        searchSceneText.activeElIndex = 0;
      }

      this.setState({ searchSceneText, activeSearchElIndex: searchSceneText.activeElIndex });
      this.bringSearchedElementToFocus();
    }, 200);
  };

  search = _.debounce(value => {
    this.searchValueChanged(value);
  }, 500);

  clearSearchValue = () => {
    const searchSceneText = {
      query: '',
      activeEl: null,
      activeElIndex: -1,
      matches: [],
      consecutiveMatchedWords: 1,
    };

    this.searchBarRef.value = '';

    return this.setState({ searchSceneText, activeSearchElIndex: searchSceneText.activeElIndex });
  };

  bringSearchedElementToFocus = (increment = 0) => {
    const searchSceneText = this.state.searchSceneText;
    searchSceneText.activeElIndex += increment;

    const match = searchSceneText.matches[searchSceneText.activeElIndex];
    if (!match) return;

    this.setState({ searchSceneText, activeSearchElIndex: searchSceneText.activeElIndex });
  };

  selectSubtitle = value => {
    this.downloadFile(value, 'subtitle');
    try {
      let extension = value.substr(value.lastIndexOf('.'));
      amplitude.getInstance().logEvent('asset-downloaded', {
        'downloaded-from': 'download-modal',
        asset: 'text',
        'asset-type': extension,
        link: value,
      });
    } catch {}
  };

  sendToComposer = () => {
    let secret = 'pictoryHootsuite2021';
    let url = this.state.videoURL;
    let fileName = this.state.summaryJsonText[0].sentence + '.mp4';
    let timestamp = Math.floor(Date.now() / 1000);
    let mediaId =
      'aHR0cHM6Ly9ob290c3VpdGUtdmlkZW8uczMuYW1hem9uYXdzLmNvbS9wcm9kdWN0aW9uLzIyOTE1ODIyX2EyNDk3MzI1LTIwODMtNGQzMi04YTNlLTJjZjRmNjg4NDM5MC5tcDQ=';
    window.hsp.attachMedia({
      mediaId: mediaId,
      timestamp: timestamp,
      token: sha512(this.props.hostApp.user_id + timestamp + mediaId + secret),
    });
  };

  openGoToPreviousConfirm = () => {
    let dialogWithButtonAndIcon;
    dialogWithButtonAndIcon = {
      icon: <InfoOutlinedIcon color="warning" />,
      iconBgPaletteColor: 'warning.lighter',
      title: 'Please Confirm!',
      message: (
        <>
          All storyboard changes will be lost. <br />
          Are you sure you want to continue?
        </>
      ),
      primaryButtonLabel: 'Yes',
      secondaryButtonLabel: 'No',
      primaryButtonOnClick: () => this.gotoCreateVideoStep2(),
      secondaryButtonOnClick: () => this.closeGoToPreviousConfirm(),
    };

    this.setState({
      goToPreviousConfirm: true,
      dialogWithButtonAndIcon: dialogWithButtonAndIcon,
    });
  };

  closeGoToPreviousConfirm = () => {
    this.setState({
      goToPreviousConfirm: false,
    });
  };

  generateVideoPosts = () => {
    const selectedVOTrackId = AppLocalStorage.getItem('voiceOverTrackId');
    if (depreciatedVoiceovers.includes(+selectedVOTrackId)) {
      this.setState({ showVoPopup: true });
      return;
    }
    try {
      let { invalidStockVisuals, invalidSceneIds } = this.validateVideoStockVisuals();
      if (invalidStockVisuals) {
        this.setState({
          videoStockVisualsNotSupport: true,
          notSupportedScenes: invalidSceneIds,
        });
        return;
      }
      this.isOverlayShown(true, 'Validating Hootsuite credentials...');
      this.props.initiateVideoPostsLogin(this.state.username);
    } catch {
      this.isOverlayShown(false);
    } finally {
      amplitude.getInstance().logEvent('generate-video-posts-hootsuite', {
        'project-id': this.state.project_id,
      });
    }
  };

  generateVideoPostsCSV = async () => {
    const selectedVOTrackId = AppLocalStorage.getItem('voiceOverTrackId');
    if (depreciatedVoiceovers.includes(+selectedVOTrackId)) {
      this.setState({ showVoPopup: true });
      return;
    }
    try {
      let { invalidStockVisuals, invalidSceneIds } = this.validateVideoStockVisuals();
      if (invalidStockVisuals) {
        this.setState({
          videoStockVisualsNotSupport: true,
          notSupportedScenes: invalidSceneIds,
        });
        return;
      }
      this.isOverlayShown(true, 'Preparing video posts....');
      await this.goToVideoPosts(false);
    } catch {
      this.isOverlayShown(false);
    } finally {
      amplitude.getInstance().logEvent('generate-video-posts-csv', {
        'project-id': this.state.project_id,
      });
    }
  };

  goToVideoPosts = async schedulePosts => {
    try {
      let project = await this.saveProjectDetail('video');
      this.setState({
        generateCSV: false,
      });
      setTimeout(async () => {
        let videoCreationJson = null;
        try {
          let locationProps = this.props.location && this.props.location.state ? this.props.location.state : {};
          let json = await this.generateVideoJSON(true);
          videoCreationJson = json.VideoCreationJson;
          videoCreationJson.video_post = schedulePosts;
          this.props.history.push({
            pathname: GlobalJs.BaseURL + CustomURLs.videoPosts,
            state: {
              ...locationProps,
              loadProject: true,
              isAnyChange: false,
              projectDetails: project,
              videoCreationJson,
              prevPath: CustomURLs.stepThree,
            },
          });
        } catch (error) {
          showError('Error while creating video posts');
        } finally {
          this.isOverlayShown(false);
        }
      }, 1000);
    } catch {
      this.isOverlayShown(false);
    }
  };

  videoPreviewComponentNew = (isSingleScene, height, hasVideoEndedNew) => {
    let forceCanvas = false;
    if (session_info.previewRenderMode !== 'webGL') {
      forceCanvas = true;
    }
    const subscriptionDetails = getSubscriptionDetails(this.state.username ? this.state.username : '');
    const noOfVideosGenerated = subscriptionDetails?.data?.featureUsage?.numberOfVideos;
    if (isSingleScene === false) {
      return (
        <VideoPlayback
          key={this.state.previewPlayerKey}
          ref={this.videoPreviewRef}
          setPreviewReady={this.setPreviewReady}
          forceCanvas={false}
          width={this.state.previewPlayerWidth}
          height={this.state.previewPlayerHeight}
          defaultX={this.state.previewDefaultX}
          defaultY={this.state.previewDefaultY}
          videoJson={this.Payload2}
          recordVideo={false}
          GetLines={this.GetLines.bind(this)}
          previewAlert={this.state.previewAlert}
          user={this.state.user}
          history={this.props.history}
          ApiRequest={ApiRequest}
          playbackStartSceneNumber={0}
          brandingWatermarkUrl={this.state.brandingWatermarkUrl}
          ErrorFromPreview={this.ErrorFromPreview.bind(this)}
          showAutoSyncVoiceoverButtons={this.state.showAutoSyncVoiceoverButtons}
          toggleAudioTrimmer={this.toggleAudioTrimmer}
          noOfVideosGenerated={noOfVideosGenerated}
          sharePreviewContent={
            <Button variant="text" sx={{ width: '40px !important', pointerEvents: 'none' }}>
              <LinkIcon color="primary" sx={{ color: 'grey.9999' }} />
            </Button>
          }
          sharedPreviewUrl={this.props.sharedPreviewUrl}
        />
      );
    } else {
      var Width = Math.floor(height * this.state.aspectRatioFractionValue);
      return (
        <VideoPlayback
          key={this.state.previewPlayerKey}
          ref={this.videoPreviewSingleSceneRef}
          setPreviewReady={this.setPreviewReady}
          forceCanvas={false}
          width={Width}
          height={height}
          defaultX={this.state.previewDefaultX}
          defaultY={this.state.previewDefaultY}
          videoJson={this.Payload2}
          recordVideo={false}
          GetLines={this.GetLines.bind(this)}
          previewAlert={this.state.previewAlert}
          user={this.state.user}
          history={this.props.history}
          ApiRequest={ApiRequest}
          playbackStartSceneNumber={0}
          singleScenePreview={true}
          hasVideoEndedNew={hasVideoEndedNew}
          brandingWatermarkUrl={this.state.brandingWatermarkUrl}
          ErrorFromPreview={this.ErrorFromPreview.bind(this)}
          isTemplatePreview={this.state.isTemplatePreview}
          previewEnded={this.previewEnded.bind(this)}
          noOfVideosGenerated={noOfVideosGenerated}
        />
      );
    }
  };

  sharePreview = videoJson => {
    this.props.sharePreview(`${this.state.username.replace(/\D/g, '')}${this.state.project_id}`, videoJson);
  };

  applyVisualToAll = async () => {
    // for edit video scenario, set transcription bRoll to all scenes
    if (this.state.source === 'transcribe') {
      await this.setTranscriptionScenebRoll(null, true, false);
    }
    const summaryJsonText = [...this.state.summaryJsonText];
    const subSentencesArray = [...this.state.subSentencesArray];
    const imageURL = [...this.state.imageURL];
    const imageAssests = [...this.state.imageAssests];
    let url = this.state.changedVisualUrl;
    let asset = this.state.changedVisualAsset;
    let color = this.state.changedBackgroundColor;
    let imageZoomPan =
      subSentencesArray[this.state.currentActiveDiv - 1] &&
      subSentencesArray[this.state.currentActiveDiv - 1].settings.imageZoomPan;
    for (let i = 0; i < summaryJsonText.length; i++) {
      if (summaryJsonText[i].sceneId === 'Custom Intro Scene' || summaryJsonText[i].sceneId === 'Outro Scene') continue;
      if (url) {
        summaryJsonText[i].image = url;
        imageURL.splice(i, 1, url);
        if (asset) imageAssests.splice(i, 1, asset);
        else imageAssests.splice(i, 1, { url: '', thumb: '', large: '' });
        summaryJsonText[i].settings = { ...summaryJsonText[i].settings, imageZoomPan, frame: null };
      } else {
        summaryJsonText[i].backgroundColor = color;
        imageURL.splice(i, 1, '');
        imageAssests.splice(i, 1, { url: '', thumb: '', large: '' });
      }
    }
    for (let i = 0; i < subSentencesArray.length; i++) {
      if (
        subSentencesArray[i].showSceneNumber === 'Custom Intro Scene' ||
        subSentencesArray[i].showSceneNumber === 'Outro Scene'
      )
        continue;
      if (url) {
        subSentencesArray[i].image = url;
        subSentencesArray[i].settings = { ...subSentencesArray[i].settings, imageZoomPan, frame: null };
      } else subSentencesArray[i].backgroundColor = color;
    }
    this.setState({
      enableApplyVisualToAll: false,
      summaryJsonText,
      subSentencesArray,
      imageURL,
      imageAssests,
      isAnyChange: true,
    });
    amplitude.getInstance().logEvent('apply-visual-to-all', {
      visual: url || color,
      'project-id': this.state.project_id,
    });
  };

  changeActiveScene = async (sceneType = 'scene') => {
    let currentSubScene = this.state.subSentencesArray[this.state.currentActiveDiv - 1];
    if (sceneType === 'intro') {
      if (currentSubScene.showSceneNumber !== 'Custom Intro Scene') await this.changeActiveDiv(1);
    } else if (sceneType === 'outro') {
      if (currentSubScene.showSceneNumber !== 'Outro Scene')
        await this.changeActiveDiv(this.state.subSentencesArray.length);
    } else {
      if (currentSubScene.showSceneNumber === 'Custom Intro Scene') {
        await this.changeActiveDiv(this.state.currentActiveDiv + 1);
      } else if (currentSubScene.showSceneNumber === 'Outro Scene') {
        await this.changeActiveDiv(this.state.currentActiveDiv - 1);
      }
    }
  };

  /**
   * Apply text style to scene
   * @param {*} style
   * @param {*} noSave if true, do not save the changes
   * @param {*} applyToAll if true, apply to all scenes (including intro & outro), else apply to current scene
   */
  applyStyleToScene = async (style, sceneType, noSave, applyToAll, applyToIntroOutro, runPreview = true) => {
    if (style) {
      style = _.cloneDeep(style);
      style.styleData.format.textBackgroundRadius = style.styleData.format?.textBackgroundRadius
        ? style.styleData.format.textBackgroundRadius
        : 0;
      delete style.styleData.position.leftCoordinate;
      delete style.styleData.position.topCoordinate;
      delete style.styleData.position.paragraphWidth;
      delete style.styleData.position.preset;
      if (style.styleData.position.fullWidth) {
        style.styleData.position.leftCoordinate = '0%';
      }
      //delete style.styleData.format.textAlign;
      let formattingValues = {
        ...style.styleData.format,
        ...style.styleData.position,
        fullWidth: style.styleData.position.fullWidth === true,
        animation: style.styleData.animation,
        styleIdObj: { id: style.metaData.styleId, scope: style.metaData.scope },
      };
      let currentSubScene = this.state.subSentencesArray[this.state.currentActiveDiv - 1];
      let displayItemIndex;

      if (applyToAll) {
        this.saveTextEditorValue(
          this.state.currentActiveDiv,
          undefined,
          undefined,
          formattingValues,
          undefined,
          undefined,
          undefined,
          true,
          false,
          !noSave,
          applyToIntroOutro
        );
      } else {
        let SentenceCounter = this.state.currentActiveDiv;
        if (sceneType === 'intro') {
          currentSubScene = this.state.subSentencesArray[0];
          SentenceCounter = 1;
        } else if (sceneType === 'outro') {
          currentSubScene = this.state.subSentencesArray[this.state.subSentencesArray.length - 1];
          SentenceCounter = this.state.subSentencesArray.length;
        }
        if (this.state.editorFocusItem && this.state.editorFocusItem !== ELEMENT_TYPE.sceneText) {
          displayItemIndex = currentSubScene.displayItems?.findIndex(
            displayItem => this.state.editorFocusItem === displayItem.id
          );
          const updatedDisplayItems = _.cloneDeep(currentSubScene.displayItems);
          updatedDisplayItems[displayItemIndex].itemStyleData = {
            ...updatedDisplayItems[displayItemIndex].itemStyleData,
            ...formattingValues,
          };
          formattingValues = { displayItems: updatedDisplayItems };
        }
        this.saveTextEditorValue(
          SentenceCounter,
          undefined,
          undefined,
          formattingValues,
          currentSubScene.sceneId,
          currentSubScene.subSceneId,
          undefined,
          null,
          false,
          !noSave,
          applyToIntroOutro
        );
        if (runPreview) {
          //await this.playScenePreviewNew(null, null, false, true);
        }
      }
      // amplitude.getInstance().logEvent('style-applied', {
      //   status: 'applied',
      //   'style-name': style.metaData.name,
      //   'style-type': style.metaData.scope,
      //   step: 'step3',
      //   'use-case': this.state.source,
      //   project_id: this.state.project_id,
      //   ...(applyToAll ? { 'scene-number': 'All scenes' } : { 'scene-number': currentSubScene.showSceneNumber }),
      //   ...(displayItemIndex > -1
      //     ? { 'decorative-text': currentSubScene.displayItems[displayItemIndex].textHtml }
      //     : { 'scene-text': currentSubScene.sentence }),
      // });
    }
  };

  applyVisualToScene = async (updatedVisual, sceneType, noSave, applyToAll, changeActiveScene, sceneObjectName) => {
    updatedVisual = _.cloneDeep(updatedVisual);
    if (
      (sceneType === 'intro' && this.state.subSentencesArray[0].showSceneNumber !== 'Custom Intro Scene') ||
      (sceneType === 'outro' &&
        this.state.subSentencesArray[this.state.subSentencesArray.length - 1].showSceneNumber !== 'Outro Scene')
    ) {
      await this.addIntroOutroScene(updatedVisual);
    }
    await this.closePreviewNew();
    if (changeActiveScene) await this.changeActiveScene(sceneType);
    updatedVisual.visualUrl = updatedVisual.visualUrl || '';
    const subSentencesArray = [...this.state.subSentencesArray];
    if (sceneObjectName === 'visual') {
      if (sceneType === 'intro' || sceneType === 'outro') {
        const imageURL = [...this.state.imageURL];
        const imageAssests = [...this.state.imageAssests];
        const summaryJsonText = [...this.state.summaryJsonText];
        let imageAssestsVisual = {
          thumb: updatedVisual.visualUrl,
          preview: updatedVisual.visualUrl,
          large: updatedVisual.visualUrl,
          url: updatedVisual.visualUrl,
        };
        if (sceneType === 'intro') {
          if (this.state.introSceneAdded) {
            imageURL.unshift(updatedVisual.visualUrl);
            imageAssests.unshift(imageAssestsVisual);
            this.setState({ introSceneAdded: false });
          } else {
            imageURL[0] = updatedVisual.visualUrl;
            imageAssests[0] = imageAssestsVisual;
          }
          summaryJsonText[0].image = updatedVisual.visualUrl;
          subSentencesArray[0].image = updatedVisual.visualUrl;
          summaryJsonText[0].backgroundColor = updatedVisual.backgroundColor;
          subSentencesArray[0].backgroundColor = updatedVisual.backgroundColor;
          if (updatedVisual.isUploadedVideo) {
            subSentencesArray[0].settings.music = false;
            summaryJsonText[0].settings.music = false;
          } else {
            subSentencesArray[0].settings.music = true;
            summaryJsonText[0].settings.music = true;
          }
          summaryJsonText[0].isUploadedVideo = updatedVisual.isUploadedVideo;
          subSentencesArray[0].isUploadedVideo = updatedVisual.isUploadedVideo;
          if (updatedVisual.isUploadedVideo) {
            subSentencesArray[0].settings.voiceOver = false;
            subSentencesArray[0].settings.muteClipAudio = false;
            summaryJsonText[0].settings.voiceOver = false;
            summaryJsonText[0].settings.muteClipAudio = false;
          } else {
            if (voiceOverTrackSelected() == true) {
              subSentencesArray[0].settings.voiceOver = true;
              summaryJsonText[0].settings.voiceOver = true;
            }
          }
        } else if (sceneType === 'outro') {
          if (this.state.outroSceneAdded) {
            imageURL.push(updatedVisual.visualUrl);
            imageAssests.push(imageAssestsVisual);
            this.setState({ outroSceneAdded: false });
          } else {
            imageURL[summaryJsonText.length - 1] = updatedVisual.visualUrl;
            imageAssests[summaryJsonText.length - 1] = imageAssestsVisual;
          }
          summaryJsonText[summaryJsonText.length - 1].image = updatedVisual.visualUrl;
          subSentencesArray[subSentencesArray.length - 1].image = updatedVisual.visualUrl;
          summaryJsonText[summaryJsonText.length - 1].backgroundColor = updatedVisual.backgroundColor;
          subSentencesArray[subSentencesArray.length - 1].backgroundColor = updatedVisual.backgroundColor;
          if (updatedVisual.isUploadedVideo) {
            subSentencesArray[subSentencesArray.length - 1].settings.music = false;
            summaryJsonText[summaryJsonText.length - 1].settings.music = false;
          } else {
            subSentencesArray[subSentencesArray.length - 1].settings.music = true;
            summaryJsonText[summaryJsonText.length - 1].settings.music = true;
          }
          summaryJsonText[summaryJsonText.length - 1].isUploadedVideo = updatedVisual.isUploadedVideo;
          subSentencesArray[subSentencesArray.length - 1].isUploadedVideo = updatedVisual.isUploadedVideo;
          if (updatedVisual.isUploadedVideo) {
            subSentencesArray[subSentencesArray.length - 1].settings.voiceOver = false;
            subSentencesArray[subSentencesArray.length - 1].settings.muteClipAudio = false;
            summaryJsonText[summaryJsonText.length - 1].settings.voiceOver = false;
            summaryJsonText[summaryJsonText.length - 1].settings.muteClipAudio = false;
          } else {
            if (voiceOverTrackSelected() == true) {
              subSentencesArray[subSentencesArray.length - 1].settings.voiceOver = true;
              summaryJsonText[summaryJsonText.length - 1].settings.voiceOver = true;
            }
          }
        }
        await this.setState({ imageURL, imageAssests, summaryJsonText, subSentencesArray, isAnyChange: !noSave });
        if (getResourceType(updatedVisual.visualUrl) === 'video' && updatedVisual.isUploadedVideo) {
          if (sceneType === 'intro') this.setIntroVideoDurationInState(true);
          // outro
          else this.setOutroVideoDurationInState(true);
        } else {
          if (sceneType === 'intro') this.SetTimePerFrame(0, 5, 0, true);
          // outro
          else this.SetTimePerFrame(subSentencesArray.length - 1, 5, 0, true);
        }
      }
    } else {
      // Save the logo details
      let formattingValues = sceneObjectName === 'logo' ? { visual: { ...updatedVisual } } : {};
      if (applyToAll) {
        await this.saveTextEditorValue(
          this.state.currentActiveDiv,
          undefined,
          undefined,
          formattingValues,
          undefined,
          undefined,
          undefined,
          true,
          false,
          !noSave
        );
      } else {
        let currentSubScene = this.state.subSentencesArray[this.state.currentActiveDiv - 1];
        let SentenceCounter = this.state.currentActiveDiv;
        if (sceneType === 'intro') {
          currentSubScene = this.state.subSentencesArray[0];
          SentenceCounter = 1;
        } else if (sceneType === 'outro') {
          currentSubScene = this.state.subSentencesArray[this.state.subSentencesArray.length - 1];
          SentenceCounter = this.state.subSentencesArray.length;
        }
        // set sentence and keywords for intro / outro scene text if exists
        if (updatedVisual.html === null) updatedVisual.html = undefined;
        let sentence = updatedVisual.html;
        let keywords = updatedVisual.keywords;
        await this.saveTextEditorValue(
          SentenceCounter,
          sentence,
          keywords,
          formattingValues,
          currentSubScene.sceneId,
          currentSubScene.subSceneId,
          undefined,
          null,
          false,
          !noSave
        );
      }
    }
  };

  setTemplate = (template, isAnyChange) => {
    // if (!template || !template.metaData) {
    //   console.log('\nERROR::: Template is NULL: ', template, '\n');
    //   this.props.showErrorNotification('Invalid template data. Please contact support.');
    //   return;
    // }
    // //const aspectRatio = AllAspectRatios.find(ar => ar.class === template.metaData.aspectRatio);
    // //if (!aspectRatio) aspectRatio = { value: ASPECT_RATIO_DEFAULT_OPTION, class: ASPECT_RATIO_DEFAULT_CLASS, fractionValue: ASPECT_RATIO_DEFAULT_FRACTION_VALUE };
    // //this.updateAspectRatio({ value: aspectRatio.value, class: aspectRatio.class, fractionValue: aspectRatio.fractionValue }, true, this.state.aspectRatioValue, this.state.loadProjectDetails.frameAspectRatio);
    // this.setState({
    //   templateMetaData: template.metaData,
    //   isAnyChange,
    // });
  };

  addIntroOutroScene = async updatedVisual => {
    const summaryJsonText = [...this.state.summaryJsonText];
    const timePerFrame = [...this.state.timePerFrame];
    let introSceneAdded = false;
    let outroSceneAdded = false;
    if (summaryJsonText && summaryJsonText[summaryJsonText.length - 1]?.sceneId !== 'Outro Scene') {
      var outroScene = {
        sceneId: 'Outro Scene',
        sentence: '',
        keywords: [],
        type: 'summary',
        subsentences: [''],
        showLogo: true,
        backgroundColor: DEFAULT_BG_COLOR,
        settings: _.cloneDeep(this.state.defaultSceneSettings),
        uuidArray: [uuidv4()],
      };
      outroScene.settings.hideScene = true;
      if (updatedVisual?.visualType === 'video') {
        outroScene.settings.muteClipAudio = false;
        outroScene.settings.voiceOver = true;
        outroScene.settings.music = true;
      }
      summaryJsonText.push(outroScene);
      timePerFrame.push(5);
      outroSceneAdded = true;
    }
    if (summaryJsonText && summaryJsonText[0]?.sceneId !== 'Custom Intro Scene') {
      let customIntro = {
        sceneId: 'Custom Intro Scene',
        sentence: '',
        keywords: [],
        type: 'summary',
        subsentences: [''],
        showLogo: true,
        backgroundColor: DEFAULT_BG_COLOR,
        settings: _.cloneDeep(this.state.defaultSceneSettings),
        uuidArray: [uuidv4()],
      };
      if (updatedVisual?.visualType === 'video') {
        customIntro.settings.muteClipAudio = false;
        customIntro.settings.voiceOver = true;
        customIntro.settings.music = true;
      }
      customIntro.settings.hideScene = true;
      summaryJsonText.unshift(customIntro);
      timePerFrame.unshift(5);
      introSceneAdded = true;
    }
    if (introSceneAdded || outroSceneAdded)
      await this.setState({ summaryJsonText, timePerFrame, introSceneAdded, outroSceneAdded }, async () => {
        await this.componentWillMount_call(true);
      });
  };

  /**
   * Pick visual from currently open scene and apply to the sceneType in currentTemplate
   * @param {*} sceneType
   */
  pickVisualFromScene = sceneType => {
    const currentActiveSceneId = this.state.subSentencesArray[this.state.currentActiveDiv - 1].sceneId;
    const { index, summary } = this.getSummaryFromGivenSubSentenceSceneId(currentActiveSceneId);
    let updatedVisual;
    if (summary) {
      if (summary.image) {
        updatedVisual = {
          visualUrl: summary.image,
          visualType: getResourceType(summary.image),
          isUploadedVideo: summary.isUploadedVideo,
        };
      } else if (summary.backgroundColor) {
        updatedVisual = { backgroundColor: summary.backgroundColor, visualType: 'backgroundColor' };
      }
      this.setState({
        templatesAction: TEMPLATES_ACTION.setVisual,
        templatesActionData: { updatedVisual, sceneType, skipApplyToScene: true },
      });
    }
  };

  /**
   * Open scene based on sub tab value clicked in Templates Branding tab
   * @param {*} templatesSubTabValue
   */
  openScene = templatesSubTabValue => {
    switch (templatesSubTabValue) {
      case 0:
        if (
          this.state.subSentencesArray[0].showSceneNumber === 'Custom Intro Scene' &&
          !this.state.subSentencesArray[0].settings.hideScene &&
          this.state.subSentencesArray[this.state.currentActiveDiv - 1].showSceneNumber !== 'Custom Intro Scene'
        )
          this.changeActiveDiv(1);
        break;
      case 1:
        if (
          this.state.subSentencesArray[0].showSceneNumber === 'Custom Intro Scene' &&
          this.state.subSentencesArray[this.state.currentActiveDiv - 1].showSceneNumber === 'Custom Intro Scene'
        )
          this.changeActiveDiv(2);
        else if (
          this.state.subSentencesArray[this.state.subSentencesArray.length - 1].showSceneNumber === 'Outro Scene' &&
          this.state.subSentencesArray[this.state.currentActiveDiv - 1].showSceneNumber === 'Outro Scene'
        )
          this.changeActiveDiv(this.state.subSentencesArray.length - 1);
        break;
      case 2:
        if (
          this.state.subSentencesArray[this.state.subSentencesArray.length - 1].showSceneNumber === 'Outro Scene' &&
          !this.state.subSentencesArray[this.state.subSentencesArray.length - 1].settings.hideScene &&
          this.state.subSentencesArray[this.state.currentActiveDiv - 1].showSceneNumber !== 'Outro Scene'
        )
          this.changeActiveDiv(this.state.subSentencesArray.length);
        break;
      default:
        break;
    }
  };

  addStyleToTemplate = style => {
    this.openTab(TAB_TEMPLATE_STYLES);
    this.setState({
      templatesAction: TEMPLATES_ACTION.addStyleToTemplate,
      templatesActionData: { style },
    });
  };

  addDisplayText = style => {
    // add element to displayItems array in the currently open scene
    if (!style) return;
    style = _.cloneDeep(style);
    let styleDataValues = {
      ...style.styleData.format,
      ...style.styleData.position,
      fullWidth: style.styleData.position?.fullWidth === true,
      animation: style.styleData.animation,
      styleIdObj: { id: style.metaData.styleId, scope: style.metaData.scope },
    };

    let currentSubScene = this.state.subSentencesArray[this.state.currentActiveDiv - 1];
    let SentenceCounter = this.state.currentActiveDiv;
    let newDisplayItem = {
      type: 'text',
      textHtml: DEFAULT_DISPLAY_TEXT,
      id: uuidv4(),
      itemStyleData: styleDataValues,
    };
    let displayItems = _.cloneDeep(currentSubScene.displayItems || []);
    displayItems.push(newDisplayItem);
    let formattingValues = { displayItems };
    this.copyTextFormatting(currentSubScene, formattingValues);
    this.saveTextEditorValue(
      SentenceCounter,
      undefined,
      undefined,
      formattingValues,
      currentSubScene.sceneId,
      currentSubScene.subSceneId,
      undefined,
      null,
      false,
      true,
      false
    );

    amplitude.getInstance().logEvent('text-box-added', {
      type: style.metaData.name,
      'scene-number': currentSubScene.showSceneNumber,
      'use-case': this.state.source,
      project_id: this.state.project_id,
    });
  };

  addDisplayElement = (visualData, type = 'visual', preset = 'center-center', isLogo = false) => {
    // add element to displayItems array in the currently open scene
    if (!visualData) return;

    let currentSubScene = this.state.subSentencesArray[this.state.currentActiveDiv - 1];
    let SentenceCounter = this.state.currentActiveDiv;
    let newDisplayItem = {
      type: type,
      id: uuidv4(),
      visualData,
      itemStyleData: {
        paragraphWidth: isLogo ? '10%' : '20%',
        preset: preset,
      },
    };
    let displayItems = _.cloneDeep(currentSubScene.displayItems || []);
    if (isLogo) {
      newDisplayItem.isLogo = true;
      if (visualData.preset) {
        newDisplayItem.itemStyleData.preset = visualData.preset;
      }
      if (visualData.paragraphWidth) {
        newDisplayItem.itemStyleData.paragraphWidth = visualData.paragraphWidth;
      }
      if (visualData.opacity) {
        newDisplayItem.itemStyleData.opacity = visualData.opacity;
      }
      if (visualData.topCoordinate) {
        newDisplayItem.itemStyleData.topCoordinate = visualData.topCoordinate;
        newDisplayItem.itemStyleData.preset = null;
      }
      if (visualData.leftCoordinate) {
        newDisplayItem.itemStyleData.leftCoordinate = visualData.leftCoordinate;
        newDisplayItem.itemStyleData.preset = null;
      }
      let visualDataObj = {
        fileName: visualData.fileName,
        url: visualData.url,
      };
      newDisplayItem.visualData = visualDataObj;
      if (!visualData.paragraphWidth && visualData.heightPx > visualData.widthPx) {
        let expectedHeight = AnimationHelper.defaultHeight * 0.1;
        let expectedWidth = (visualData.widthPx * expectedHeight) / visualData.heightPx;
        let widthPercent = (expectedHeight * 100) / AnimationHelper.defaultWidth;
        newDisplayItem.itemStyleData.paragraphWidth = widthPercent + '%';
      }
      displayItems.push(newDisplayItem);
    } else {
      let logoIndex = displayItems.findIndex(displayItem => displayItem.isLogo);
      displayItems.splice(logoIndex, 0, newDisplayItem);
    }
    let formattingValues = { displayItems };
    this.copyTextFormatting(currentSubScene, formattingValues);
    this.saveTextEditorValue(
      SentenceCounter,
      undefined,
      undefined,
      formattingValues,
      currentSubScene.sceneId,
      currentSubScene.subSceneId,
      undefined,
      null,
      false,
      true,
      false
    );

    amplitude.getInstance().logEvent('element-added', {
      type: getElementsVisualType(visualData?.url),
      visual: visualData,
      'scene-number': currentSubScene.showSceneNumber,
      'use-case': this.state.source,
      project_id: this.state.project_id,
    });
  };

  getActiveTextStyleIdObj = () => {
    const currentSubScene = this.state.subSentencesArray[this.state.currentActiveDiv - 1];
    if (!this.state.editorFocusItem || this.state.editorFocusItem === ELEMENT_TYPE.sceneText) {
      return currentSubScene?.styleIdObj;
    } else {
      // displayText
      if (!currentSubScene?.displayItems || !currentSubScene?.displayItems[0]) return;
      const currentDisplayItem = currentSubScene?.displayItems?.find(item => item.id === this.state.editorFocusItem);
      if (currentDisplayItem) {
        return currentDisplayItem?.itemStyleData?.styleIdObj;
      }
    }
  };

  triggerAppcuesEvent = eventName => {
    setTimeout(() => {
      window.Appcues.track(eventName);
    }, 2000);
  };

  elevateStoryboardScriptTab = show => {
    this.setState({ elevateStoryboardScriptTab: show });
  };

  displaySceneStripDummy = () => {
    return (
      <Box sx={{ px: 3, py: 5 }}>
        <Box sx={{ display: 'flex', height: '100px', overflowY: 'auto', position: 'relative' }}>
          {_.times(5, () => (
            <Box component="span" sx={{ aspectRatio: '1.67', m: 2 }}>
              <Box sx={{ width: '100%', height: '100%', borderRadius: '5px', backgroundColor: 'grey.100' }} />
            </Box>
          ))}
          <Box className="absolute-fill flex-centered" sx={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>
            <Typography variant="text_base">
              Unable to load scenes as it exceeds 500 scenes. Go to Story tab on the left to navigate the scenes
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  };

  applyBrandingColor(color) {
    const sceneArray = [...this.state.subSentencesArray];
    const summaryArray = [...this.state.summaryJsonText];
    let startCounter = 0;
    let endCounter = sceneArray.length - 1;
    let brightness = lightOrDark(color.textBackgroundColor);
    let textBackgroundColor = color.textBackgroundColor;
    let fontColor = brightness == 'dark' ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)';
    let keywordColor = invertRGBAColor(textBackgroundColor, 1);
    if (color.fontColor) {
      fontColor = color.fontColor;
    }
    if (color.keywordColor) {
      keywordColor = color.keywordColor;
    }
    for (let index = startCounter; index <= endCounter; index++) {
      let scene = sceneArray[index];
      scene.fontColor = fontColor;
      scene.textBackgroundColor = textBackgroundColor;
      scene.keywordColor = keywordColor;
      sceneArray[index] = scene;
    }
    for (let j = 0; j <= endCounter; j++) {
      let summaryScene = summaryArray[j];
      let summaryFormat = summaryScene.format;
      for (let i = 0; i < summaryFormat.length; i++) {
        let format = summaryFormat[i];
        format.fontColor = fontColor;
        format.textBackgroundColor = textBackgroundColor;
        format.keywordColor = keywordColor;
        summaryFormat[i] = format;
      }
      summaryScene.format = summaryFormat;
      summaryArray[j] = summaryScene;
    }
    this.setState(
      {
        subSentencesArray: sceneArray,
        summaryJsonText: summaryArray,
        isAnyChange: true,
      },
      async () => {
        await this.saveProjectDetail_debounce();
      }
    );
  }

  async applyBrand(brandId, skipVO = false, isNewProject = false, overrideBrand) {
    let brand = this.props?.userBrands.find(x => x.id == brandId);
    if (!brand && overrideBrand) {
      brand = overrideBrand;
    }
    const rgbaObj =
      brand?.colorList?.length > 0
        ? getRgbaObject(brand?.colorList[0].textBackgroundColor)
        : getRgbaObject('rgba(0,0,0,0)');
    const defaultTextBackgroundColor = getRGBAString({
      rgb: { r: rgbaObj?.r, g: rgbaObj?.g, b: rgbaObj?.b, a: 0 },
    });
    rgbaObj.textBackgroundColor = defaultTextBackgroundColor;
    let defaultLogo = brand?.logoList?.find(x => x.isDefault == true);
    let color = brand?.colorList?.find(x => x.isDefault) || rgbaObj;
    let textBackgroundColor = color?.textBackgroundColor || defaultTextBackgroundColor;
    let fontColor = color?.fontColor;
    let keywordColor = color?.keywordColor;
    let font = brand?.fontList?.[0]?.fontName;
    let fontSize = brand?.fontSizeList?.[0]?.fontSize;
    let decoration = brand?.textFormatData?.decoration;
    let Case = brand?.textFormatData?.case;
    let textAlign = brand?.textFormatData?.textAlign;
    let preset = brand?.textFormatData?.preset;
    let paragraphWidth = brand?.textFormatData?.paragraphWidth;
    let fullWidth = brand?.textFormatData?.fullWidth;
    let leftCoordinate = brand?.textFormatData?.leftCoordinate;
    let introVisual = brand?.visualList?.find(x => x.isDefaultForIntro);
    let outroVisual = brand?.visualList?.find(x => x.isDefaultForOutro);
    //visual to be implemented
    let bgMusic = brand?.bgMusicList?.find(x => x.isDefault == true);
    let aivoiceOver = brand?.AIVoiceoverList?.filter(voice => !depreciatedVoiceovers?.includes(voice?.trackId))?.find(
      x => x.isDefault == true
    );
    const sceneArray = [...this.state.subSentencesArray];
    const summaryArray = [...this.state.summaryJsonText];
    let startCounter = 0;
    let endCounter = sceneArray.length - 1;
    if (color && textBackgroundColor) {
      let brightness = lightOrDark(textBackgroundColor);
      if (!fontColor) {
        fontColor = brightness == 'dark' ? 'rgba(255,255,255,1)' : 'rgba(0,0,0,1)';
      }
      if (!keywordColor) {
        keywordColor = invertRGBAColor(textBackgroundColor);
      }
    }
    if (!brand) {
      //let Theme = this.state.animationTheme;
      //let ThemeStyle = Theme.getStyles();
      textBackgroundColor = 'rgba(0,0,0,0.77)';
      fontColor = 'rgb(255,255,255)';
      keywordColor = 'rgb(245,240,162)';
      font = 'Lato';
      fontSize = DEFAULT_FONT_SIZE;
    }

    let logoDisplayElement = {};
    if (defaultLogo) {
      logoDisplayElement = this.createBrandLogoDisplayElement(defaultLogo);
    }

    for (let index = startCounter; index <= endCounter; index++) {
      let scene = sceneArray[index];
      if (color || !brand) {
        scene.fontColor = fontColor;
        scene.textBackgroundColor = textBackgroundColor;
        scene.keywordColor = keywordColor;
        scene.decoration = decoration;
        scene.case = Case;
        scene.textAlign = textAlign;
        scene.paragraphWidth = paragraphWidth;
        scene.fullWidth = fullWidth;
        scene.preset = preset;
        scene.leftCoordinate = leftCoordinate;
      }
      if (font) {
        scene.fontName = font;
        scene.FontNameForFront = CreateVideo_Step3.getFrontFontName(font);
      }
      if (fontSize) {
        scene.fontSize = parseInt(fontSize);
      }
      if (defaultLogo) {
        if (!scene.displayItems || scene.displayItems.length === 0) {
          scene.displayItems = [];
          let newDisplayItem = logoDisplayElement;
          scene.displayItems.push(newDisplayItem);
        } else if (!scene.displayItems.find(x => x.isLogo)) {
          let newDisplayItem = logoDisplayElement;
          scene.displayItems.push(newDisplayItem);
        }
        for (var i = 0; i < scene.displayItems?.length; i++) {
          let displayItem = scene.displayItems[i];
          if (displayItem.isLogo) {
            displayItem.visualData = defaultLogo;
          }
        }
      } else {
        scene.displayItems = scene.displayItems?.filter(displayItem => !displayItem.isLogo);
      }
      delete scene.styleIdObj;
      sceneArray[index] = scene;
    }
    for (let j = 0; j < summaryArray.length; j++) {
      let summaryScene = summaryArray[j];
      let summaryFormat = summaryScene.format;
      for (let i = 0; i < summaryFormat.length; i++) {
        let format = summaryFormat[i];
        if (color || !brand) {
          format.fontColor = fontColor;
          format.textBackgroundColor = textBackgroundColor;
          format.keywordColor = keywordColor;
        }
        if (font) {
          format.fontName = font;
          format.FontNameForFront = CreateVideo_Step3.getFrontFontName(font);
        }
        if (fontSize) {
          format.fontSize = parseInt(fontSize);
        }
        if (defaultLogo) {
          if (!format.displayItems || format.displayItems.length === 0) {
            format.displayItems = [];
            let newDisplayItem = logoDisplayElement;
            format.displayItems.push(newDisplayItem);
          } else if (!format.displayItems.find(x => x.isLogo)) {
            let newDisplayItem = logoDisplayElement;
            format.displayItems.push(newDisplayItem);
          }
          for (var t = 0; t < format.displayItems?.length; t++) {
            let displayItem = format.displayItems[t];
            if (displayItem.isLogo) {
              displayItem.visualData = defaultLogo;
            }
          }
        } else {
          format.displayItems = format.displayItems?.filter(displayItem => !displayItem.isLogo);
        }
        delete format.styleIdObj;
        summaryFormat[i] = format;
      }
      summaryScene.format = summaryFormat;
      summaryArray[j] = summaryScene;
    }
    let customMusicTrack = getFeatures(this.state?.username)[features.customMusicTrack];
    if (bgMusic && ((customMusicTrack && bgMusic.source == 'music') || bgMusic.source != 'music')) {
      await this.makeTrackActive(
        bgMusic.audio_id,
        bgMusic.url,
        bgMusic.source,
        bgMusic.fileName || bgMusic.title,
        null,
        true
      );
    }
    this.setState(
      {
        subSentencesArray: sceneArray,
        summaryJsonText: summaryArray,
        isAnyChange: true,
        brandId: brandId,
        brand: brand,
      },
      async () => {
        if (isNewProject) {
          if (introVisual) {
            await this.insertSceneBefore(1, 1, 1, false, 'visual', false, 1, defaultLogo, true, false);
            introVisual.large = introVisual.large || introVisual.url;
            introVisual.thumb = introVisual.thumb || introVisual.url;
            await this.hideShowOverlay(1, introVisual.url, true, introVisual, 'isUploadImage', true);
          }
          if (outroVisual) {
            let sentenceCount = this.state?.subSentencesArray?.length;
            let sceneId = this.state?.subSentencesArray?.[this.state?.subSentencesArray?.length - 1]?.sceneId;
            let subSentenceId =
              this.state?.subSentencesArray?.[this.state?.subSentencesArray?.length - 1]?.AllSubSentences?.length;
            await this.InsertNewScene(
              sentenceCount,
              sceneId,
              subSentenceId,
              false,
              'visual',
              false,
              defaultLogo,
              false,
              true
            );
            outroVisual.large = outroVisual.large || outroVisual.url;
            outroVisual.thumb = outroVisual.thumb || outroVisual.url;
            await this.hideShowOverlay(sceneId + 1, outroVisual.url, true, outroVisual, 'isUploadImage', true);
          }
        } else {
          let introScene = sceneArray.find(x => x.isBrandIntro);
          if (introScene) {
            if (introVisual) {
              introVisual.large = introVisual.large || introVisual.url;
              introVisual.thumb = introVisual.thumb || introVisual.url;
              await this.hideShowOverlay(introScene.sceneId, introVisual.url, true, introVisual, 'isUploadImage', true);
            } else {
              // set white background
              await this.changeBgColor('rgba(255,255,255,1)', introScene.sceneId);
            }
          } else {
            if (introVisual) {
              await this.insertSceneBefore(1, 1, 1, false, 'visual', false, 1, defaultLogo, true, false);
              introVisual.large = introVisual.large || introVisual.url;
              introVisual.thumb = introVisual.thumb || introVisual.url;
              await this.hideShowOverlay(1, introVisual.url, true, introVisual, 'isUploadImage', true);
            }
          }
          let outroScene = sceneArray.find(x => x.isBrandOutro);
          if (outroScene) {
            if (outroVisual) {
              outroVisual.large = outroVisual.large || outroVisual.url;
              outroVisual.thumb = outroVisual.thumb || outroVisual.url;
              await this.hideShowOverlay(outroScene.sceneId, outroVisual.url, true, outroVisual, 'isUploadImage', true);
            } else {
              // set white background
              await this.changeBgColor('rgba(255,255,255,1)', outroScene.sceneId);
            }
          } else {
            if (outroVisual) {
              let sentenceCount = this.state?.subSentencesArray?.length;
              let sceneId = this.state?.subSentencesArray?.[this.state?.subSentencesArray?.length - 1]?.sceneId;
              let subSentenceId =
                this.state?.subSentencesArray?.[this.state?.subSentencesArray?.length - 1]?.AllSubSentences?.length;
              await this.InsertNewScene(
                sentenceCount,
                sceneId,
                subSentenceId,
                false,
                'visual',
                false,
                defaultLogo,
                false,
                true
              );
              outroVisual.large = outroVisual.large || outroVisual.url;
              outroVisual.thumb = outroVisual.thumb || outroVisual.url;
              await this.hideShowOverlay(sceneId + 1, outroVisual.url, true, outroVisual, 'isUploadImage', true);
            }
          }
        }
        // if (aivoiceOver && !skipVO) {
        //   const voiceOverResult = await this.startApplyVoiceOver(aivoiceOver);
        //   if (voiceOverResult?.success) {
        //     await this.makeActiveVoiceTrack(
        //       aivoiceOver.trackId,
        //       aivoiceOver.trackUrl,
        //       aivoiceOver.trackType,
        //       aivoiceOver.trackName,
        //       aivoiceOver.gender,
        //       aivoiceOver.Category
        //     );
        //   }
        // }
        await this.saveProjectDetail_debounce();
      }
    );
  }

  createBrandLogoDisplayElement(defaultLogo) {
    let logoDisplayElement;
    let itemStyleData = {
      paragraphWidth: '10%',
      preset: 'top-right',
    };

    if (defaultLogo.paragraphWidth) {
      itemStyleData.paragraphWidth = defaultLogo.paragraphWidth;
    }
    if (defaultLogo.opacity) {
      itemStyleData.opacity = defaultLogo.opacity;
    }
    if (defaultLogo.preset) {
      itemStyleData.preset = defaultLogo.preset;
    } else {
      if (defaultLogo.topCoordinate) {
        itemStyleData.topCoordinate = defaultLogo.topCoordinate;
        itemStyleData.preset = null;
      }
      if (defaultLogo.leftCoordinate) {
        itemStyleData.leftCoordinate = defaultLogo.leftCoordinate;
        itemStyleData.preset = null;
      }
    }
    let visualData = {
      fileName: defaultLogo.fileName,
      url: defaultLogo.url,
    };
    logoDisplayElement = {
      type: 'visual',
      id: uuidv4(),
      visualData: visualData,
      itemStyleData: itemStyleData,
    };
    logoDisplayElement.isLogo = true;
    if (!defaultLogo.paragraphWidth && defaultLogo.heightPx > defaultLogo.widthPx) {
      let expectedHeight = AnimationHelper.defaultHeight * 0.1;
      let expectedWidth = (defaultLogo.widthPx * expectedHeight) / defaultLogo.heightPx;
      let widthPercent = (expectedHeight * 100) / AnimationHelper.defaultWidth;
      logoDisplayElement.itemStyleData.paragraphWidth = widthPercent + '%';
    }
    return logoDisplayElement;
  }

  async makeActiveVoiceTrack(trackId, trackUrl, trackType, trackName, gender, Category, trackLanguage = 'en') {
    if (trackId != AppLocalStorage.getItem('voiceOverTrackId')) {
      AppLocalStorage.setItem('voiceOverTrackType', trackType);
      AppLocalStorage.setItem('voiceOverTrackActive', trackUrl);
      AppLocalStorage.setItem('voiceOverTrackId', trackId);
      AppLocalStorage.setItem('voiceOverTrackName', trackName + ', ' + gender);
      AppLocalStorage.setItem('voiceOverTrackCategory', Category);
      this.reloadScene();
      let recent = [...this.state.recentTracks];

      for (var recCounter = 0; recCounter < recent.length; recCounter++) {
        if (recent[recCounter].type === trackType) {
          recent[recCounter].active = false;
          if (recent[recCounter].type == 'voiceover') {
          }
        }
      }
      let rec = {};
      const index = recent.findIndex(rec => rec.trackId === trackId && rec.type === trackType);

      if (index < 0) {
        rec = {
          id: generateUUID(),
          trackId: trackId,
          name: trackName + ', ' + gender,
          type: 'voiceover',
          url: trackUrl,
          category: 'recent',
          library: Category,
          cognito_id: this.state.username,
          date: new Date(),
          // "active":true
        };
        recent.splice(0, 0, rec);
      } else {
        const id = recent[index].id;
        recent.splice(index, 1);
        this.deleteAudioFavAndRecents({ username: this.state.username, id });
        amplitude.getInstance().logEvent('voice-deselected', {
          name: trackName,
          country: Category,
          'project-id': this.state.project_id,
        });
        rec = {
          id: generateUUID(),
          date: new Date(),
          trackId: trackId,
          name: trackName + ', ' + gender,
          type: 'voiceover',
          url: trackUrl,
          library: Category,
          category: 'recent',
          cognito_id: this.state.username,
        };
        recent.splice(0, 0, rec);
      }
      this.setState({
        recentTracks: recent,
      });
      let myInit = {
        body: rec,
      };
      await this.props.saveAudioFavAndRecents(myInit);
      const status = this.props.saveAudioStatus;
      if (status === 'success') {
        this.UpdateIsActiveVoiceOver(trackId, true);
        this.UpdateRecent();
        this.UpdateFavourite();
        this.UpdateVoiceOver();
        this.getVoiceOverQuota(true);
        amplitude.getInstance().logEvent('voice-selected', {
          name: trackName,
          country: Category,
          'project-id': this.state.project_id,
          language: trackLanguage,
        });
      } else {
      }
    }
  }

  render() {
    let logoImage;
    if (this.state.logoImage !== '' && this.state.logoLocation !== '') {
      if (this.state.logoLocation === '1') {
        logoImage = (
          <img
            className="mr-auto sml-brand"
            id="image"
            src={this.state.logoImage}
            style={{ float: 'left', left: '7px', top: '7px' }}
          />
        );
      } else if (this.state.logoLocation === '2') {
        logoImage = (
          <img
            className="mr-auto sml-brand"
            id="image"
            src={this.state.logoImage}
            style={{ float: 'right', right: '7px', top: '7px' }}
          />
        );
      }
    } else {
      logoImage = '';
    }

    const currentSubScene = this.state.subSentencesArray[this.state.currentActiveDiv - 1];
    const currentSubscription = getSubscriptionDetails(this.state?.username);
    const { dynamicCss, frameSize } = this.getAspectRatioCss();

    const subscriptionDetails = getSubscriptionDetails(this.state.username ? this.state.username : '');
    const planCode = subscriptionDetails?.plan?.plan_code || '';
    const planName = subscriptionDetails?.plan?.name || '';

    let restrictUsers = false;
    let hideElevenLabs =
      planName.includes('Tier 1') ||
      planName.includes('Tier 2') ||
      planName.includes('Tier 3') ||
      planCode == 'app_sumo_pictory_tier1' ||
      planCode == 'app_sumo_pictory_tier2' ||
      planCode == 'app_sumo_pictory_tier3';

    if (
      planName.includes('Starter') ||
      planName.includes('Standard') ||
      planCode === PLAN_CODES.freeTrial ||
      planCode === PLAN_CODES.teamsFreeTrial
    ) {
      restrictUsers = true;
    }

    return (
      <div>
        {allowReelFastVideo(this.state.username) && this.videoPreviewComponentNew(false)}
        {/* <VideoPlayback key={this.state.previewPlayerKey} ref={this.videoPreviewRef} forceCanvas={false}
					width={this.state.previewPlayerWidth} height={this.state.previewPlayerHeight}
					defaultX={this.state.previewDefaultX} defaultY={this.state.previewDefaultY}
					videoJson={this.Payload2} recordVideo={false} GetLines={this.GetLines.bind(this)}
					user={this.state.user} history={this.props.history} ApiRequest={ApiRequest} playbackStartSceneNumber={0} /> */}
        <VideoGenerationErrorModal
          title={this.state.videoGenerationErrorTitle}
          history={this.props.history}
          show={this.state.showVideoGenerationError}
          error={this.state.videoGenerationError}
          onClose={() => {
            this.setState({
              videoGenerationErrorTitle: null,
              showVideoGenerationError: false,
              videoGenerationError: null,
            });
          }}
        ></VideoGenerationErrorModal>
        {/* <ConfirmationModalWithImage
          show={this.state.videoStockVisualsNotSupport}
          title="Oops! Something went wrong."
          //msg={`We upgraded to a new stock library! Due to this change, visuals in scene(s) ${this.state.notSupportedScenes && this.state.notSupportedScenes.join(',')} are not supported in video. Please replace them from the new library.`} buttonText="Ok"
          msgHtml={
            <>
              Shutterstock visuals are no longer available.
              <br /> Please replace them and try again.
            </>
          }
          buttonText="Ok"
          onButtonClick={() => this.setState({ videoStockVisualsNotSupport: false, notSupportedScenes: [] })}
          imageElement={
            <span
              title={`Scene number ${this.state.notSupportedScenes && this.state.notSupportedScenes.join(', ')}`}
              className="fa-stack fa-4x"
            >
              {
               // TODO: high priority
               // Remove this style tag and global/important overrides as we can't control what else this overrides accross the app.
              }
              <style>{`i.font-size-4x{font-size: 4rem !important;} i.font-size-2x{font-size: 2rem !important;}`}</style>
              <i className="fa fa-comment fa-flip-horizontal red fa-stack-4x font-size-4x"></i>
              <i className="fa fa-exclamation fa-stack-1x font-size-2x"></i>
            </span>
          }
          showCloseIcon={false}
        /> */}

        {/* TODO: the image used in the ConfirmationModalWithImage above need to be replaced with a regular SVG */}
        <AlertDialog
          open={this.state.videoStockVisualsNotSupport}
          title="Oops! Something went wrong."
          onClose={() => this.setState({ videoStockVisualsNotSupport: false, notSupportedScenes: [] })}
        >
          <Stack direction="row" spacing={2}>
            <div>
              <span
                title={`Scene number ${this.state.notSupportedScenes && this.state.notSupportedScenes.join(', ')}`}
                className="fa-stack fa-4x"
              >
                <i className="fa fa-comment fa-flip-horizontal red fa-stack-4x font-size-4x"></i>
                <i className="fa fa-exclamation fa-stack-1x font-size-2x"></i>
              </span>
            </div>
            <div>
              Shutterstock visuals are no longer available.
              <br /> Please replace them and try again.
            </div>
          </Stack>
        </AlertDialog>

        <AlertDialog
          open={this.state.videoTimeLimitExceeded}
          title="Video duration limit"
          onClose={() => this.setState({ videoTimeLimitExceeded: false })}
        >
          {`Video duration limit exceeded. Maximum allowed limit is ${parseInt(
            (this.getTextToVideoDurationFeatureValue() - 120) / 60
          )} minutes.`}
        </AlertDialog>
        {this.state.showVoPopup && (
          <DialogWithButtonAndIcon
            icon={<KeyboardVoiceOutlinedIcon color="warning" />}
            iconBgPaletteColor={'warning.lighter'}
            open={this.state.showVoPopup}
            title={'Voice no longer available'}
            showCloseIcon={true}
            message={
              "As of ElevenLabs' most recent update, we no longer support the voice previously applied to this project. Please select another voice."
            }
            primaryButtonLabel={'Change'}
            primaryButtonOnClick={() => {
              this.openTab(TAB_AI_VOICEOVER);
              this.setState({ showVoPopup: false });
            }}
            secondaryButtonLabel={'Remove voiceover'}
            secondaryButtonOnClick={() => {
              this.removeVoiceOverTrackFromStorage();
              this.setState({ showVoPopup: false });
            }}
            onClose={() => {
              this.setState({ showVoPopup: false });
            }}
          />
        )}
        {this.showDeleteConfirmationDialog()}
        {this.showBrandSwitchConfirmationDialog()}
        <AlertDialog
          open={this.state.showEntireVideoRemoveConfirmation}
          title="Audio applied to entire video"
          closeIcon={false}
          onClose={() => this.setState({ showEntireVideoRemoveConfirmation: false })}
        >
          {`The project has audio applied to entire video. Remove the audio from the entire video if you wish to apply audio to only one scene`}
        </AlertDialog>

        <div style={{ display: this.state.showInitialLoadingBar ? 'block' : 'none' }}>
          <Progress
            {...this.props.assetsSearchProgress}
            isVisualsToVideo={this.state.source == 'visuals'}
            history={this.props.history}
            subTitle={this.state.findingVisualsMessage}
            showInitialLoadingBar={this.state.showInitialLoadingBar}
          />
        </div>
        <div
          id="main-div-step-3"
          className="full-height working-div"
          style={{ display: this.state.showInitialLoadingBar ? 'none' : 'flex' }}
        >
          {/* <BrowserRouter forceRefresh={false}> */}
          <Header
            openNotificationPanel={this.state.openNotificationPanel}
            history={this.props.history}
            gotoHome={this.gotoHome}
            gotoMyVideo={this.gotoMyVideo}
            gotoLogout={this.gotoLogout}
            isStoryBoard={true}
            projectId={this.state.project_id}
          />
          <style>{dynamicCss}</style>

          <div
            className="VideoProgressBar"
            id="VideoProgressBar"
            style={{ display: this.state.displayVideoProgressBar ? 'block' : 'none' }}
          >
            <div className="VideoProgressBar-overlay-content">
              <img src={videoCameraLoaderV5} alt="Video Creation" title="Video Creation" />
              <div>{ReactHtmlParser(this.state.OverlayMessage)}</div>
            </div>
          </div>

          <div
            id="savingInProgress"
            className="svp-box"
            style={{ display: this.state.displaySaveInprogress ? 'block' : 'none' }}
          >
            <div className="col d-flex h-100 p-0">
              <div className="row justify-content-center align-self-center m-auto">
                <span className="spanForSavingAndSaved" id="spanForErrorSave">
                  {ReactHtmlParser(this.state.OverlayMessage)}
                </span>
              </div>
            </div>
          </div>

          <audio ref={this.previewMusicAudio} id="myAudioPlay" loop />

          <audio ref={this.previewVoiceOverAudio} id="myVoiceOverAudioPlay" />
          {/*{this.state.summaryJsonText && this.state.summaryJsonText.length && this.state.summaryJsonText.map((el, i) => {*/}
          {/*	if (el.recordedAudio) {*/}
          {/*		return <audio src={el.recordedAudio} id={el.recordedAudio}></audio>*/}
          {/*	}*/}
          {/*})}*/}
          {/* To show full video preview (showPreview = true), show VideoPreview here (inside a modal frame),
						else show VideoPreview inside <EditVideo> block (pass videoPreviewComponent to <EditVideoAllScene/>) */}
          {this.state.showPreviewProgress ? (
            <StepProgress
              heading="Preparing video preview"
              step1ProgressMessage={this.state.previewProgressMessage || 'Video preview'}
              step1Progress={Math.ceil(this.state.previewProgress)}
              transparentBackground={true}
              onStopProgress={this.onClosePreviewProgress}
            ></StepProgress>
          ) : (
            <></>
          )}

          <LoadingOverlay
            active={this.state.isShowOverlay}
            spinner
            text={ReactHtmlParser(this.state.OverlayMessage)}
          ></LoadingOverlay>

          {this.state.showFocusOverlay && (
            <div
              className={'focus-overlay-wrapper'}
              onClick={() => {
                this.setState({ showFocusOverlay: false });
              }}
            >
              &nbsp;
            </div>
          )}

          {/**Specially implemented for showing loader on new scene */}
          <LoadingOverlay
            active={this.state.showLoader}
            spinner
            text={ReactHtmlParser('Fetching a relevant background visual <br/> for this new scene...')}
          ></LoadingOverlay>
          {/**end*/}

          <div
            className="page-content d-flex align-items-stretch"
            //style={{ height: 'calc(100vh - var(--app-header-height) !important)' }}
          >
            <Box component="nav" className="side-navbar" id="side-navbar" sx={{ backgroundColor: 'grey.800' }}>
              <ul className="list-unstyled nav nav-tabs">
                <li className="nav-item ">
                  <a
                    className={`nav-link pointer ${
                      this.state.selectedMenuTabValue === menuTabEnum.story ? 'active' : ''
                    }`}
                    // data-toggle="tab"
                    // href="#tab-1"
                    onClick={() => {
                      this.handleMenutabChange(menuTabEnum.story);
                    }}
                  >
                    <DashboardOutlinedIcon sx={{ color: 'grey.200' }} />
                    <h4 className="d-block">Story</h4>
                  </a>
                </li>

                <li className="nav-item ">
                  <a
                    className={`nav-link pointer ${
                      this.state.selectedMenuTabValue === menuTabEnum.visuals ? 'active' : ''
                    }`}
                    id="visuals"
                    // data-toggle="tab"
                    // href="#tab-2"
                    onClick={() => {
                      this.handleMenutabChange(menuTabEnum.visuals);
                    }}
                  >
                    <ImageOutlinedIcon sx={{ color: 'grey.200' }} /> <h4 className="d-block">Visuals</h4>
                    {/* {!currentSubscription?.plan?.plan_code?.includes('app_sumo_pictory_tier') && <NewFeatureChip />} */}
                  </a>
                </li>

                {/* <li className="nav-item ">
                  <a className="nav-link " data-toggle="tab">
                    <MusicVideoIcon sx={{ color: 'grey.200' }} />
                    <h4 className="d-block">Music</h4>
                  </a>
                </li> */}

                {/* <li className="nav-item ">
                  <a className="nav-link " data-toggle="tab">
                    <KeyboardVoiceOutlinedIcon sx={{ color: 'grey.200' }} />
                    <h4 className="d-block">Voice-over</h4>
                  </a>
                </li> */}

                {/* <li className="nav-item ">
                  <a className="nav-link " data-toggle="tab">
                    <TextFieldsIcon sx={{ color: 'grey.200' }} />
                    <h4 className="d-block">Text</h4>
                  </a>
                </li> */}

                {/* <li className="nav-item ">
                  <a className="nav-link " data-toggle="tab">
                    <StyleOutlinedIcon sx={{ color: 'grey.200' }} />
                    <h4 className="d-block">Text</h4>
                  </a>
                </li>

                <li className="nav-item ">
                  <a className="nav-link " data-toggle="tab">
                    <CasesOutlinedIcon sx={{ color: 'grey.200' }} />
                    <h4 className="d-block">Text</h4>
                  </a>
                </li>

                <li className="nav-item ">
                  <a className="nav-link " data-toggle="tab">
                    <AspectRatioOutlinedIcon sx={{ color: 'grey.200' }} />
                    <h4 className="d-block">Text</h4>
                  </a>
                </li> */}

                <li className="nav-item ">
                  <a
                    className={`nav-link pointer  ${
                      this.state.selectedMenuTabValue === menuTabEnum.audio ? 'active' : ''
                    }`}
                    // data-toggle="tab"
                    // href="#tab-3"
                    onClick={() => {
                      this.handleMenutabChange(menuTabEnum.audio);
                    }}
                  >
                    {/* <img src={musicPlayerFilled} /> <h4 className="d-block">Audio</h4> */}
                    {!!this.state.applyingAudio ? (
                      <Box sx={{ display: 'flex' }}>
                        <CircularProgress
                          size={20}
                          thickness={6}
                          // variant={this.props.voiceOverDataResponseID ? 'determinate' : 'indeterminate'}
                          // value={this.state.voiceoverprogressStatus}
                          sx={{
                            color: 'grey.0',
                          }}
                        />
                      </Box>
                    ) : (
                      <>
                        <MusicVideoOutlinedIcon sx={{ color: 'grey.200' }} />
                        {!currentSubscription?.plan?.plan_code?.includes('app_sumo_pictory_tier')}
                      </>
                    )}
                    <h4 className="d-block">Audio</h4>
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className={`nav-link pointer ${
                      this.state.selectedMenuTabValue === menuTabEnum.styles ? 'active' : ''
                    }`}
                    id="template-styles-tab"
                    onClick={() => {
                      this.handleMenutabChange(menuTabEnum.styles);
                    }}
                  >
                    {/* <img src={stylesOutlined} /> */}
                    <StyleOutlinedIcon sx={{ color: 'grey.200' }} />
                    <h4 className="d-block">Styles</h4>
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className={`nav-link pointer ${
                      this.state.selectedMenuTabValue === menuTabEnum.text ? 'active' : ''
                    }`}
                    // data-toggle="tab"
                    // href="#tab-6"
                    id="display-text-tab"
                    onClick={() => {
                      this.handleMenutabChange(menuTabEnum.text);
                    }}
                  >
                    <TextFieldsOutlined sx={{ color: 'grey.200' }} />
                    <h4 className="d-block">Text</h4>
                  </a>
                </li>

                <li className="nav-item ">
                  <a
                    className={`nav-link pointer ${
                      this.state.selectedMenuTabValue === menuTabEnum.branding ? 'active' : ''
                    }`}
                    // data-toggle="tab"
                    // href="#tab-8"
                    id="templates-tab"
                    onClick={() => {
                      this.handleMenutabChange(menuTabEnum.branding);
                    }}
                  >
                    <CasesOutlinedIcon sx={{ color: 'grey.200' }} />
                    {/* <NewFeatureChip /> */}
                    <h4 className="d-block">Branding</h4>
                  </a>
                </li>

                <li className="nav-item ">
                  <a
                    className={`nav-link pointer  ${
                      this.state.selectedMenuTabValue === menuTabEnum.elements ? 'active' : ''
                    }`}
                    id="display-elements-tab"
                    onClick={() => {
                      this.handleMenutabChange(menuTabEnum.elements);
                    }}
                  >
                    <InterestsOutlined sx={{ color: 'grey.200' }} />
                    <h4 className="d-block">Elements</h4>
                  </a>
                </li>

                <li className="nav-item ">
                  <a
                    className={`nav-link pointer ${
                      this.state.selectedMenuTabValue === menuTabEnum.format ? 'active' : ''
                    }`}
                    // data-toggle="tab"
                    // href="#tab-5"
                    onClick={() => {
                      this.handleMenutabChange(menuTabEnum.format);
                    }}
                  >
                    <AspectRatioIcon sx={{ color: 'grey.200' }} />
                    <h4 className="d-block">Format</h4>
                  </a>
                </li>
                <li className="nav-item " style={{ height: '120px' }}></li>
              </ul>
            </Box>
            <main className="content-inner step-final step-3 white-background">
              <header className="page-header white-background subtle-border-bottom">
                <ProjectTitle
                  displayMsg=""
                  article_category={this.state.article_category}
                  ProjectName={this.state.projectName}
                  disablePreviewButton={this.state.disablePreviewButton}
                  disableSaveButton={this.state.disableSaveButton}
                  SaveButtonText={this.state.SaveButtonText}
                  handleBlurProjectName={this.handleBlurProjectName}
                  gotoCreateVideoStep2={this.gotoCreateVideoStep2}
                  OpenCloseVideoPreviewNew={this.OpenCloseVideoPreviewNew}
                  OpenSaveProjectPopup={this.saveProjectDetail_debounce}
                  GenerateDraftVideo={this.GenerateDraftVideo}
                  GenerateNextGenerationVideo={this.GenerateNextGenerationVideo}
                  GenerateVideo={this.generateElements}
                  GenerateCsv={this.generateVideoPostsCSV}
                  generateVideoPosts={this.generateVideoPosts}
                  changeProjectName={this.changeProjectName}
                  saveDate={this.state.saveDate}
                  projectId={this.state.project_id}
                  isNewProject={this.state.isNewProject}
                  username={this.state.user && this.state.user.username}
                  fetchNewProjectName={this.state.url || this.props.location.state?.loadProject ? false : true}
                  changeVideoResolution={this.onSelectingVideoResolution}
                  gotoPlansList={this.gotoPlansList}
                  quotaExceeded={this.state.quotaExceeded}
                  closeQuotaPopup={this.closeQuotaPopup}
                  allowReelFastVideo={allowReelFastVideo(this.state.username)}
                  allowFLVVideo={allowFLVVideo(this.state.username)}
                  templateMetaData={this.state.templateMetaData}
                  openTemplatesPopup={() => this.setState({ templatesAction: TEMPLATES_ACTION.openTemplatesPopup })}
                  videoDuration={this.state.videoDuration}
                  videoTotalDurationInSeconds={this.state.videoTotalDurationInSeconds}
                  videoDurationLimit={this.state.videoDurationLimit}
                  videoDurationLimitWithGrace={this.state.videoDurationLimitWithGrace}
                  videoDurationToolTip={this.state.videoDurationToolTip}
                  teamUsers={this.props.teamUsers}
                  showAlertNotification={showAlertNotification =>
                    this.setState({ showAlertNotification, alertSeverity: 'success' })
                  }
                  screen="Step3"
                  isVoiceOverApplying={this.state.durationUpdatedScenes?.loading}
                />
              </header>
              <section className="container-fluid p-tb-0">
                <div className="col outer-block horizontal-flex pl-0 pr-0 pt-0 pb-0 " id={'step-3-fixed-height'}>
                  <div
                    className={[
                      'col-md-40 col-tb-full light-gray-background',
                      this.state.showFocusOverlay ? 'focus-overlay-element' : '',
                      this.state.showAudioTrimmer ? 'hidden' : 'display-block',
                    ].join(' ')}
                    style={{ paddingTop: '15px', paddingLeft: '15px', paddingBottom: '15px', paddingRight: '15px' }}
                  >
                    <div className="tab-content">
                      <div
                        className="card block-1 no-border light-gray-background fill-height"
                        hidden={this.state.selectedMenuTabValue !== menuTabEnum.story}
                        style={{ zIndex: this.state.elevateStoryboardScriptTab ? '205' : '' }}
                        onClick={() => this.state.elevateStoryboardScriptTab && this.elevateStoryboardScriptTab(false)}
                        ref={this.sceneContainerRef}
                      >
                        <div className="transcribe-search-container horizontal-flex space-between-center pr-1 mr-2 mb-3">
                          <div className="icon search-icon"></div>

                          <input
                            className="search-box naked ml-1 mr-1 flex-filler"
                            placeholder="Search..."
                            name="new-search-value"
                            autoComplete="off"
                            // value={this.state.searchSceneText.query}
                            ref={element => (this.searchBarRef = element)}
                            onChange={e => this.search(e.target.value)}
                            style={{ width: '156px' }}
                          />

                          <span className="grey easy result-line">
                            {this.state.searchSceneText &&
                            this.state.searchSceneText.matches &&
                            this.state.searchSceneText.matches.length
                              ? `${this.state.searchSceneText.activeElIndex + 1} of ${
                                  this.state.searchSceneText.matches.length
                                } results`
                              : ``}
                          </span>

                          <div
                            className={[
                              'icon caret-down-icon',
                              !this.state.searchSceneText.matches.length ||
                              this.state.searchSceneText.activeElIndex + 1 >= this.state.searchSceneText.matches.length
                                ? 'disabled'
                                : '',
                            ].join(' ')}
                            onClick={() => {
                              this.bringSearchedElementToFocus(1);
                            }}
                          ></div>
                          <div
                            className={[
                              'icon caret-up-icon',
                              !this.state.searchSceneText.matches.length || this.state.searchSceneText.activeElIndex < 1
                                ? 'disabled'
                                : '',
                            ].join(' ')}
                            onClick={() => {
                              this.bringSearchedElementToFocus(-1);
                            }}
                          ></div>

                          <div className="min-width-30">
                            {this.state.searchSceneText.query && (
                              <div className="icon close-icon" onClick={this.clearSearchValue}></div>
                            )}
                          </div>
                        </div>

                        <div className="card-body pr-0 pl-0 pt-0 pb-0">
                          <div
                            ref={el =>
                              !this.state.allStatementScrollContainer &&
                              this.setState({ allStatementScrollContainer: el })
                            }
                            className="content mCustomScrollbar fill-height no-border-radius hover-only-scrollbar"
                            id="divLeftSceneSentences"
                          >
                            {
                              <AllStatementPanel
                                ref={this.sceneContainerRef}
                                loadMoreSentences={this.state.loadMoreSentences}
                                loadMoreScenes={this.loadMoreScenes}
                                changeActiveDiv={this.changeActiveDiv}
                                refresh={this.state.refreshAllScene}
                                UpdateAllScene={this.UpdateAllScene}
                                updateAllAssets={this.updateAllAssets}
                                isPrevious={this.state.isPrevious}
                                imageURL={this.state.imageURL}
                                isOverlayShown={this.isOverlayShown}
                                totalNumberOfSentences={this.state.sentences}
                                subSentencesArrayDetail={this.state.subSentencesArray}
                                Url={this.state.url}
                                brandSetting={this.state.brandSetting}
                                project_id={this.state.project_id}
                                scrollContainer={this.state.allStatementScrollContainer}
                                linkScene={this.linkScene}
                                isEditVideoScenario={this.state.source === 'transcribe'}
                                searchSceneText={this.state.searchSceneText}
                                activeSearchElIndex={this.state.activeSearchElIndex}
                                splitScene={this.splitScene}
                                removeRecordedAudio={this.removeRecordedAudio}
                                saveTextEditorValue={this.saveTextEditorValue}
                                reorderScene={this.reorderScene}
                                currentActiveDiv={this.state.currentActiveDiv}
                                isAllowTemplates={allowTemplates(this.state.username)}
                                project_id={this.state.project_id}
                              />
                            }
                          </div>
                        </div>
                      </div>
                      <div
                        className="tabs-innerblock fill-height"
                        hidden={this.state.selectedMenuTabValue !== menuTabEnum.visuals}
                      >
                        <div className="flex-row flex-space-between-start white-background">
                          {/* <ul className="nav nav-tabs nav-tabs-inner pt-1">
                              <li className="nav-item">
                                <a
                                  className="nav-link active"
                                  id="library"
                                  data-toggle="tab"
                                  href="#tbinner-1"
                                  onClick={() => {
                                    this.setState({
                                      activeVisualTab: 'Library',
                                      visualTabsActivationStatus: {
                                        ...this.state.visualTabsActivationStatus,
                                        Library: true,
                                        Recent: true,
                                        Uploads: true,
                                        Favourite: true,
                                      },
                                    });
                                  }}
                                >
                                  Library
                                </a>
                              </li>
                              {allowTextToImages(this.state.username) && (
                                <li className="nav-item">
                                  <a
                                    className="nav-link"
                                    id="reelart"
                                    data-toggle="tab"
                                    href="#tbinner-6"
                                    onClick={() => {
                                      this.setState({
                                        activeVisualTab: 'Library',
                                        visualTabsActivationStatus: {
                                          ...this.state.visualTabsActivationStatus,
                                          ReelArt: true,
                                        },
                                      });
                                      amplitude.getInstance().logEvent('reel-art-visited');
                                    }}
                                  >
                                    ReelArt
                                  </a>
                                </li>
                              )}
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="textures"
                                  data-toggle="tab"
                                  href="#tbinner-4"
                                  onClick={() => {
                                    this.setState({
                                      activeVisualTab: 'Textures',
                                      visualTabsActivationStatus: {
                                        ...this.state.visualTabsActivationStatus,
                                        Textures: true,
                                      },
                                    });
                                    this.getActionForAnalytics('Textures-clicked');
                                  }}
                                >
                                  Textures
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  id="visual-uploads"
                                  data-toggle="tab"
                                  href="#tbinner-3"
                                  onClick={() => {
                                    this.setState({
                                      activeVisualTab: 'Uploads',
                                      visualTabsActivationStatus: {
                                        ...this.state.visualTabsActivationStatus,
                                        Uploads: true,
                                      },
                                    });
                                    this.getActionForAnalytics('upload-clicked');
                                  }}
                                >
                                  My uploads
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  data-toggle="tab"
                                  href="#tbinner-2"
                                  onClick={() => {
                                    this.setState({
                                      activeVisualTab: 'Recent',
                                      visualTabsActivationStatus: {
                                        ...this.state.visualTabsActivationStatus,
                                        Recent: true,
                                      },
                                    });
                                    this.getActionForAnalytics('recent-clicked', 'Visuals');
                                  }}
                                >
                                  Recent
                                </a>
                              </li>
                              <li className="nav-item">
                                <a
                                  className="nav-link"
                                  data-toggle="tab"
                                  href="#tbinner-5"
                                  onClick={() => {
                                    this.setState({
                                      activeVisualTab: 'Favourite',
                                      visualTabsActivationStatus: {
                                        ...this.state.visualTabsActivationStatus,
                                        Favourite: true,
                                      },
                                    });
                                    this.getActionForAnalytics('favorite-clicked', 'Visuals');
                                  }}
                                >
                                  <i className="fa fa-heart"></i>
                                </a>
                              </li>
                            </ul> */}
                          <Box sx={{ backgroundColor: 'grey.0', maxWidth: 'calc(100% - 153px)' }}>
                            <Tabs
                              className="visual-tabs"
                              value={this.state.selectedVisualTabValue}
                              onChange={this.handleVisualtabChange}
                            >
                              <Tab label="Library" />
                              <Tab label="Textures" />
                              <Tab label="My uploads" />
                              <Tab label="Recent" />
                              <Tab icon={<FavoriteIcon />} />
                            </Tabs>
                          </Box>
                          <div
                            className={
                              'split-scene-button apply pointer right-aligned-button' +
                              (this.state.enableApplyVisualToAll ? '' : ' btn-disabled disabled')
                            }
                            onClick={this.applyVisualToAll}
                          >
                            Apply visual to all
                          </div>
                        </div>
                        <div className="tab-content tab-height inrtab-content">
                          <div
                            role="tabpanel"
                            className="fill-height"
                            hidden={this.state.activeVisualTab !== visualTabEnum.library}
                            aria-labelledby={`voice-tab-${visualTabEnum.library}`}
                            id="tbinner-1"
                          >
                            {this.state.visualTabsActivationStatus[visualTabEnum.library] ? (
                              <VisualLibrary
                                refresh={this.state.refreshVisualLibrary}
                                defaultImages={this.state.defaultAssets}
                                imageURL={this.state.imageURL}
                                hideShowOverlay={this.hideShowOverlay}
                                isOutroScene={this.isOutroScene}
                                isCustomIntroScene={this.isCustomIntroScene}
                                updateAllAssets={this.updateAllAssets}
                                allAssets={this.state.allAssets}
                                brandSetting={this.state.brandSetting}
                                username={this.state.username}
                                visualData={this.state.visualData}
                                imageAssests={this.state.imageAssests}
                                project_id={this.state.project_id}
                                aspectRatio={this.state.aspectRatioClass}
                                article_category={this.state.article_category}
                                originalText={this.state.originalText}
                                favoriteVisuals={this.props.favoriteVisualsResult.Items}
                                searchCategories={this.props.searchCategories}
                                sentenceKeywordSuggestions={this.props.sentenceKeywordSuggestions || []}
                                language={this.state.scriptLanguage || 'en'}
                                history={this.props.history}
                              />
                            ) : null}
                          </div>
                          <div className="tab-pane fade" id="tbinner-6">
                            {this.state.visualTabsActivationStatus[visualTabEnum.reelArt] ? (
                              <ReelArt
                                refresh={this.state.refreshVisualLibrary}
                                defaultImages={this.state.defaultAssets}
                                imageURL={this.state.imageURL}
                                hideShowOverlay={this.hideShowOverlay}
                                isOutroScene={this.isOutroScene}
                                isCustomIntroScene={this.isCustomIntroScene}
                                updateAllAssets={this.updateAllAssets}
                                allAssets={this.state.allAssets}
                                brandSetting={this.state.brandSetting}
                                username={this.state.username}
                                visualData={this.state.visualData}
                                imageAssests={this.state.imageAssests}
                                project_id={this.state.project_id}
                                aspectRatio={this.state.aspectRatioClass}
                                article_category={this.state.article_category}
                                originalText={this.state.originalText}
                                favoriteVisuals={this.props.favoriteVisualsResult.Items}
                                searchCategories={this.props.searchCategories}
                                sentenceKeywordSuggestions={this.props.sentenceKeywordSuggestions || []}
                              />
                            ) : null}
                          </div>
                          <div
                            role="tabpanel"
                            className="fill-height"
                            hidden={this.state.activeVisualTab !== visualTabEnum.recent}
                            aria-labelledby={`voice-tab-${visualTabEnum.recent}`}
                            id="tbinner-2"
                          >
                            {this.state.recentLoading ? this.getAssetsLoader() : null}
                            {this.state.visualTabsActivationStatus[visualTabEnum.recent] ? (
                              <ImageRecent
                                refresh={this.state.refreshImageRecent}
                                brandSetting={this.state.brandSetting}
                                imageURL={this.state.imageURL}
                                updateAllAssets={this.updateAllAssets}
                                allAssets={this.state.allAssets}
                                defaultImages={this.state.defaultImages}
                                isOutroScene={this.isOutroScene}
                                isCustomIntroScene={this.isCustomIntroScene}
                                hideShowOverlay={this.hideShowOverlay}
                                username={this.state.username}
                                stopRecentLoader={this.stopRecentLoader}
                                project_id={this.state.project_id}
                                recentVisuals={this.state.recentVisuals}
                              />
                            ) : null}
                          </div>
                          <div
                            role="tabpanel"
                            className="fill-height"
                            hidden={this.state.activeVisualTab !== visualTabEnum.myUploads}
                            aria-labelledby={`voice-tab-${visualTabEnum.myUploads}`}
                            id="tbinner-3"
                          >
                            {this.state.visualTabsActivationStatus[visualTabEnum.myUploads] ? (
                              <UploadImage
                                imageURL={this.state.imageURL}
                                refresh={this.state.refreshImageUpload}
                                hideShowOverlay={this.hideShowOverlay}
                                brandSetting={this.state.brandSetting}
                                isOutroScene={this.isOutroScene}
                                isCustomIntroScene={this.isCustomIntroScene}
                                username={this.state.username}
                                project_id={this.state.project_id}
                                favoriteVisuals={this.props.favoriteVisualsResult.Items}
                                imageList={this.props.imageList}
                                updateUpload={this.updateUpload}
                                getMoreUploadedImages={this.getMoreUploadedImages}
                                history={this.props.history}
                                setImageFilter={this.setImageFilter}
                                teamUsers={this.props.teamUsers}
                                visualImportStatus={this.state.visualImportStatus}
                                source={this.state.source}
                                username={this.state.username}
                                history={this.props.history}
                                brandingVisualList={
                                  this.props?.userBrands?.find(x => x.id == this?.state?.brandId)?.visualList
                                }
                              />
                            ) : null}
                          </div>
                          <div
                            role="tabpanel"
                            className="fill-height"
                            hidden={this.state.activeVisualTab !== visualTabEnum.textures}
                            aria-labelledby={`voice-tab-${visualTabEnum.textures}`}
                            id="tbinner-4"
                          >
                            {this.state.visualTabsActivationStatus[visualTabEnum.textures] ? (
                              <Textures
                                imageURL={this.state.imageURL}
                                refresh={this.state.refreshImageUpload}
                                hideShowOverlay={this.hideShowOverlay}
                                brandSetting={this.state.brandSetting}
                                isOutroScene={this.isOutroScene}
                                isCustomIntroScene={this.isCustomIntroScene}
                                username={this.state.username}
                                project_id={this.state.project_id}
                                updateUpload={this.updateUpload}
                                changeBgColor={this.changeBgColor}
                                currentActiveDiv={this.state.currentActiveDiv}
                                subSentencesArray={this.state.subSentencesArray}
                                currentSceneId={this.state.currentSceneId}
                              />
                            ) : null}
                          </div>
                          <div
                            role="tabpanel"
                            className="fill-height"
                            hidden={this.state.activeVisualTab !== visualTabEnum.favourite}
                            aria-labelledby={`voice-tab-${visualTabEnum.favourite}`}
                            id="tbinner-5"
                          >
                            {this.state.favLoading ? this.getAssetsLoader() : null}
                            {this.state.visualTabsActivationStatus[visualTabEnum.favourite] ? (
                              <ImageFavourite
                                refresh={this.state.refreshImageFavourite}
                                brandSetting={this.state.brandSetting}
                                isOutroScene={this.isOutroScene}
                                isCustomIntroScene={this.isCustomIntroScene}
                                updateAllAssets={this.updateAllAssets}
                                allAssets={this.state.allAssets}
                                imageURL={this.state.imageURL}
                                hideShowOverlay={this.hideShowOverlay}
                                username={this.state.username}
                                visualData={this.state.visualData}
                                stopImageFavouriteLoader={this.stopImageFavouriteLoader}
                                project_id={this.state.project_id}
                                favoriteVisuals={this.props.favoriteVisualsResult.Items}
                                username={this.state.username}
                                history={this.props.history}
                              />
                            ) : null}
                          </div>
                        </div>
                      </div>

                      {this.state.activeDisplayElementsTab && (
                        <div hidden={this.state.selectedMenuTabValue !== menuTabEnum.elements} className="fill-height">
                          <DisplayElementsTab
                            addDisplayElement={this.addDisplayElement}
                            username={this.state.username}
                          />
                        </div>
                      )}

                      <div hidden={this.state.selectedMenuTabValue !== menuTabEnum.audio} className="fill-height">
                        <div className="tabs-innerblock fill-height">
                          {/* <ul className="nav nav-tabs nav-tabs-inner nav-tabs-inner2 pt-1">
                            <li className="nav-item">
                              <a
                                className="nav-link active"
                                data-toggle="tab"
                                href="#tbinnertwo-1"
                                onClick={() => {
                                  this.setState({ activeAudioTab: 'track' });
                                }}
                              >
                                Background music
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#tbinnertwo-2"
                                onClick={() => {
                                  this.getActionForAnalytics('voice-over-clicked', 'voice over tab', 'voiceOver');
                                }}
                              >
                                Voiceover
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#tbinnertwo-5"
                                onClick={() => {
                                  this.getActionForAnalytics('voice-over-clicked', 'upload', 'upload');
                                }}
                              >
                                My uploads
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#tbinnertwo-3"
                                onClick={() => {
                                  this.getActionForAnalytics('recent-clicked', 'Audio', 'recent');
                                }}
                              >
                                Recent
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#tbinnertwo-4"
                                onClick={() => {
                                  this.getActionForAnalytics('favorite-clicked', 'Audio', 'favourite');
                                }}
                              >
                                <i className="fa fa-heart"></i>
                              </a>
                            </li>
                            <li
                              className="nav-item volume-nav-item"
                              style={{ justifyContent: 'flex-end', paddingRight: '20px' }}
                            >
                              <a
                                className="nav-link"
                                data-toggle="tab"
                                href="#tbinnertwo-6"
                                style={{ paddingLleft: '16px', paddingRight: '8px' }}
                                onClick={() => {
                                  this.getActionForAnalytics('settings-clicked', 'Audio', 'settings');
                                }}
                              >
                                <img src="/images/VolumeControlOutlined.svg" width="22px" />
                                <Typography
                                  className="hide-on-1415"
                                  sx={{
                                    display: 'inline-block',
                                  }}
                                >
                                  &nbsp;&nbsp;Volume
                                </Typography>
                              </a>
                            </li>
                          </ul> */}
                          <Box sx={{ backgroundColor: 'grey.0' }}>
                            <Tabs
                              value={this.state.selectedAudioTabValue}
                              className="audio-tabs"
                              onChange={this.handleAudiotabChange}
                              sx={{
                                position: 'relative',
                              }}
                            >
                              <Tab label="Background music" />
                              <Tab label="Voiceover" />
                              <Tab label="My uploads" />
                              <Tab label="Recent" />
                              <Tab icon={<FavoriteIcon />} />
                              <Tab
                                sx={{
                                  position: 'absolute',
                                  right: '0',
                                }}
                                label="Volume"
                                iconPosition="start"
                                icon={
                                  <VolumeControlledSVG
                                    fillColor={this.state.selectedAudioTabValue === 5 ? '#852CFF' : '#595C72'}
                                  />
                                }
                              />
                            </Tabs>
                          </Box>
                          <Box sx={{ width: '100%' }} className="tab-content tab-height inrtab-content">
                            <div
                              role="tabpanel"
                              className="fill-height"
                              hidden={this.state.activeAudioTab !== audioTabEnum.backgroundMusic}
                              id={`voice-tabpanel-${audioTabEnum.backgroundMusic}`}
                              aria-labelledby={`voice-tab-${audioTabEnum.backgroundMusic}`}
                            >
                              <>
                                <audio id="myMusicTrackPlay"></audio>
                                {this.state.audioTabsActivationStatus['track'] ? (
                                  <MusicTracks
                                    fetchingTracks={this.state.fetchingTracks}
                                    activeTrackId={AppLocalStorage.getItem('trackId')}
                                    activeTrack={this.props.musicTrack}
                                    tracks={this.props.musicResult.Items}
                                    removeTrackFromStorage={this.removeTrackFromStorage}
                                    makeTrackActive={this.makeTrackActive}
                                    playMusic={this.playMusic}
                                    AddTrackToFavourite={this.AddTrackToFavourite}
                                    refresh={this.state.refreshFavourite}
                                    getAudioFavouritesAndRecent={this.getAudioFavouritesAndRecent}
                                    audioFavsAndRecent={this.props.audioFavsAndRecent}
                                    project_id={this.state.project_id}
                                    activeMusicTrack={this.state.activeAudioTrack}
                                    brandingBgMusicList={
                                      this.props?.userBrands?.find(x => x.id == this?.state?.brandId)?.bgMusicList
                                    }
                                    updatedFromfavorite={this.state.updatedFromfavorite}
                                    resetUpdatedFrom={this.resetUpdatedFrom}
                                  />
                                ) : null}
                              </>
                            </div>
                            <div
                              role="tabpanel"
                              className="tab-pane active fill-height"
                              hidden={this.state.activeAudioTab !== audioTabEnum.voiceOver}
                              aria-labelledby={`voice-tab-${0}`}
                              id="tbinnertwo-1"
                            >
                              {this.state.audioTabsActivationStatus[audioTabEnum.voiceOver] ? (
                                <VoiceOverTab
                                  speedValue={this.state.speedValue}
                                  onChange={value => this.setState({ speedValue: value })}
                                  onChangeComplete={this.ChangeComplete}
                                  reloadScene={this.reloadScene}
                                  project_id={this.state.project_id}
                                  username={this.state.username}
                                  refresh={this.state.refreshVoiceOver}
                                  voiceOverTracks={this.state.voiceOverTracks}
                                  UpdateFavourite={this.UpdateFavourite}
                                  UpdateRecent={this.UpdateRecent}
                                  UpdateVoiceOver={this.UpdateVoiceOver}
                                  UpdateIsActiveVoiceOver={this.UpdateIsActiveVoiceOver}
                                  brandSetting={this.state.brandSetting}
                                  getAudioFavouritesAndRecent={this.getAudioFavouritesAndRecent}
                                  favouriteTracks={this.state.favourites}
                                  recentTracks={this.state.recents}
                                  scriptLanguage={this.state.scriptLanguage}
                                  filterLanguage={this.state.filterLanguage}
                                  removeVoiceOverTrackFromStorage={this.removeVoiceOverTrackFromStorage}
                                  startApplyVoiceOver={this.startApplyVoiceOver}
                                  getVoiceOverQuota={this.getVoiceOverQuota}
                                  textToSpeechDuration={this.state.textToSpeechDuration}
                                  textToSpeechDurationValue={this.state.textToSpeechDurationValue}
                                  daysRemainingTillResetDate={this.state.daysRemainingTillResetDate}
                                  restrictUsers={restrictUsers}
                                  applyingAudioStatus={this.applyingAudioStatus}
                                  history={this.props.history}
                                  durationUpdated={this.state.durationUpdatedScenes}
                                  applyingVO={this.state.applyingAudio}
                                  videoTotalDurationInSeconds={this.state.videoTotalDurationInSeconds}
                                  hideElevenLabs={hideElevenLabs}
                                  brandingAIVoiceoverList={
                                    this.props?.userBrands?.find(x => x.id == this?.state?.brandId)?.AIVoiceoverList
                                  }
                                  cancelingAudioStatus={this.cancelingAudioStatus}
                                  cancelingVO={this.state.cancelingVO}
                                  videoDuration={this.state.videoDuration}
                                  logEventVoiceSelected={this.logEventVoiceSelected}
                                  voiceoverprogressStatus={this.state.voiceoverprogressStatus}
                                />
                              ) : null}
                            </div>
                            <div
                              role="tabpanel"
                              className="tab-pane active fill-height"
                              hidden={this.state.activeAudioTab !== audioTabEnum.myUploads}
                              aria-labelledby={`voice-tab-${0}`}
                              id="tbinnertwo-5"
                            >
                              <>
                                {this.state.audioTabsActivationStatus[audioTabEnum.myUploads] ? (
                                  <AudioUpload
                                    project_id={this.state.project_id}
                                    username={this.state.username}
                                    refresh={this.state.refreshVoiceOver}
                                    voiceOverTracks={this.state.voiceOverTracks}
                                    UpdateFavourite={this.UpdateFavourite}
                                    UpdateRecent={this.UpdateRecent}
                                    UpdateVoiceOver={this.UpdateVoiceOver}
                                    UpdateIsActiveVoiceOver={this.UpdateIsActiveVoiceOver}
                                    brandSetting={this.state.brandSetting}
                                    getAudioFavouritesAndRecent={this.getAudioFavouritesAndRecent}
                                    favouriteTracks={this.state.favourites}
                                    musicTrackNotAllowed={this.musicTrackNotAllowed}
                                    recentTracks={this.state.recents}
                                    uploadedAudio={this.state.uploadAudio}
                                    makeTrackActive={this.makeTrackActive}
                                    recordAudio={this.recordAudio}
                                    isOutroScene={this.isOutroScene}
                                    isCustomIntroScene={this.isCustomIntroScene}
                                    playMusic={this.playMusic}
                                    activeTrack={AppLocalStorage.getItem('trackId')}
                                    removeTrackFromStorage={this.removeTrackFromStorage}
                                    rerenderAudio={this.state.rerenderAudio}
                                    removeRecordedAudio={this.removeRecordedAudio}
                                    listOfRecordedAudio={this.state.listOfRecordedAudio}
                                    recordingApplyToAll={this.recordingApplyToAll}
                                    toggleAudioTrimmer={this.toggleAudioTrimmer}
                                    type={this.state.audioUploadScreenType}
                                    teamUsers={this.props.teamUsers}
                                    audioImportStatus={this.state.audioImportStatus}
                                    source={this.state.source}
                                    activeAudioTrack={this.state.activeAudioTrack}
                                  />
                                ) : null}
                              </>
                            </div>
                            <div
                              role="tabpanel"
                              className="tab-pane active fill-height"
                              hidden={this.state.activeAudioTab !== audioTabEnum.recent}
                              id={`voice-tabpanel-${audioTabEnum.recent}`}
                              aria-labelledby={`voice-tab-${audioTabEnum.recent}`}
                            >
                              {this.state.audioTabsActivationStatus[audioTabEnum.recent] ? (
                                <div className="card block-1 hover-only-scrollbar ov-right content mCustomScrollbar">
                                  <div className="card-body p-0">
                                    <div className="col-12 p-0 tbinnertwo-box">
                                      <div
                                        id="accordion"
                                        className="track-links"
                                        role="tablist"
                                        aria-multiselectable="true"
                                      >
                                        <div className="card">
                                          <div className="card-header" role="tab" id="headingOne1">
                                            <div className="mb-0">
                                              <a
                                                data-toggle="collapse"
                                                data-parent="#accordion"
                                                href="#recentCollapseOne"
                                                aria-expanded="false"
                                                aria-controls="recentCollapseOne"
                                                className=""
                                              >
                                                <Typography
                                                  sx={{
                                                    paddingLeft: '15px',
                                                    '&:before': {
                                                      left: '15px !important',
                                                    },
                                                  }}
                                                >
                                                  Background music
                                                </Typography>
                                              </a>
                                              <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                          </div>

                                          <div
                                            id="recentCollapseOne"
                                            className="collapse show"
                                            role="tabpanel"
                                            aria-labelledby="headingOne"
                                            aria-expanded="false"
                                          >
                                            <div className="card-block">
                                              <Recent
                                                favouriteTracks={this.state.favourites}
                                                recentTracks={this.state.recents}
                                                project_id={this.state.project_id}
                                                getAudioFavouritesAndRecent={this.getAudioFavouritesAndRecent}
                                                setFavouritesFromFavoritesTab={this.setFavouritesFromFavoritesTab}
                                                type="track"
                                                removeTrackFromStorage={this.removeTrackFromStorage}
                                                refresh={this.state.refreshRecent}
                                                UpdateFavourite={this.UpdateFavourite}
                                                UpdateRecent={this.UpdateRecent}
                                                UpdateVoiceOver={this.UpdateVoiceOver}
                                                brandSetting={this.state.brandSetting}
                                                username={this.state.username}
                                                updateRecentListForMarkActive={this.updateRecentListForMarkActive}
                                                makeTrackActive={this.makeTrackActive}
                                                activeRecentTrack={this.state.activeAudioTrack}
                                                playMusic={this.playMusic}
                                                logEventVoiceSelected={this.logEventVoiceSelected}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="card">
                                          <div className="card-header" role="tab" id="headingTwo1">
                                            <div className="mb-0">
                                              <a
                                                data-toggle="collapse"
                                                data-parent="#accordion"
                                                href="#recentCollapseTwo"
                                                aria-expanded="false"
                                                aria-controls="recentCollapseTwo"
                                                className=""
                                                style={{
                                                  padding: '5px 0',
                                                }}
                                              >
                                                <Typography
                                                  sx={{
                                                    paddingLeft: '15px !important',
                                                    paddingTop: '3px',
                                                    '&:before': {
                                                      left: '15px !important',
                                                    },
                                                  }}
                                                >
                                                  Voiceover
                                                </Typography>
                                              </a>
                                              <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                          </div>

                                          <div
                                            id="recentCollapseTwo"
                                            className="collapse show"
                                            role="tabpanel"
                                            aria-labelledby="headingOne"
                                            aria-expanded="false"
                                          >
                                            <div className="card-block">
                                              <Recent
                                                favouriteTracks={this.state.favourites}
                                                recentTracks={this.state.recents}
                                                project_id={this.state.project_id}
                                                getAudioFavouritesAndRecent={this.getAudioFavouritesAndRecent}
                                                type="voiceover"
                                                refresh={this.state.refreshRecent}
                                                UpdateFavourite={this.UpdateFavourite}
                                                UpdateRecent={this.UpdateRecent}
                                                UpdateVoiceOver={this.UpdateVoiceOver}
                                                brandSetting={this.state.brandSetting}
                                                username={this.state.username}
                                                UpdateIsActiveVoiceOver={this.UpdateIsActiveVoiceOver}
                                                startApplyVoiceOver={this.startApplyVoiceOver}
                                                restrictUsers={restrictUsers}
                                                applyingAudioStatus={this.applyingAudioStatus}
                                                history={this.props.history}
                                                durationUpdated={this.state.durationUpdatedScenes}
                                                applyingVO={this.state.applyingAudio}
                                                activeRecentTrack={this.state.activeAudioTrack}
                                                playMusic={this.playMusic}
                                                textToSpeechDurationValue={this.state.textToSpeechDurationValue}
                                                cancelingAudioStatus={this.cancelingAudioStatus}
                                                cancelingVO={this.state.cancelingVO}
                                                videoDuration={this.state.videoDuration}
                                                videoTotalDurationInSeconds={this.state.videoTotalDurationInSeconds}
                                                logEventVoiceSelected={this.logEventVoiceSelected}
                                                voiceoverprogressStatus={this.state.voiceoverprogressStatus}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                            </div>
                            <div
                              role="tabpanel"
                              className="tab-pane active fill-height"
                              hidden={this.state.activeAudioTab !== audioTabEnum.favourite}
                              aria-labelledby={`voice-tab-${audioTabEnum.favourite}`}
                              id="tbinnertwo-1"
                            >
                              <>
                                {this.state.audioTabsActivationStatus[audioTabEnum.favourite] ? (
                                  <div className="card hover-only-scrollbar block-1 ov-right content mCustomScrollbar">
                                    <div className="card-body p-0">
                                      <div className="col-12 p-0 tbinnertwo-box">
                                        <div
                                          id="accordion"
                                          className="track-links"
                                          role="tablist"
                                          aria-multiselectable="true"
                                        >
                                          <div className="card">
                                            <div className="card-header" role="tab" id="headingOne1">
                                              <div className="mb-0">
                                                <a
                                                  data-toggle="collapse"
                                                  data-parent="#accordion"
                                                  href="#favouriteCollapseOne"
                                                  aria-expanded="false"
                                                  aria-controls="favouriteCollapseOne"
                                                  className=""
                                                  style={{
                                                    padding: '5px 0px',
                                                  }}
                                                >
                                                  <p
                                                    style={{
                                                      m: '0 !important',
                                                      fontSize: '16px',
                                                    }}
                                                  >
                                                    Background music
                                                  </p>
                                                </a>
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                              </div>
                                            </div>
                                            <div
                                              id="favouriteCollapseOne"
                                              className="collapse show"
                                              role="tabpanel"
                                              aria-labelledby="headingOne"
                                              aria-expanded="false"
                                            >
                                              <div className="card-block">
                                                <Favourite
                                                  tracks={this.state.lists}
                                                  project_id={this.state.project_id}
                                                  removeTrackFromStorage={this.removeTrackFromStorage}
                                                  makeTrackActive={this.makeTrackActive}
                                                  getAudioFavouritesAndRecent={this.getAudioFavouritesAndRecent}
                                                  favouriteTracks={this.state.audioFavourites}
                                                  recentTracks={this.state.audioRecent}
                                                  username={this.state.username}
                                                  setFavouritesFromFavoritesTab={this.setFavouritesFromFavoritesTab}
                                                  type="track"
                                                  refresh={this.state.refreshFavourite}
                                                  UpdateFavourite={this.UpdateFavourite}
                                                  UpdateRecent={this.UpdateRecent}
                                                  UpdateVoiceOver={this.UpdateVoiceOver}
                                                  brandSetting={this.state.brandSetting}
                                                  activeFavTrack={this.state.activeAudioTrack}
                                                  playMusic={this.playMusic}
                                                  logEventVoiceSelected={this.logEventVoiceSelected}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                          <div className="card">
                                            <div className="card-header" role="tab" id="headingTwo1">
                                              <div className="mb-0">
                                                <a
                                                  data-toggle="collapse"
                                                  data-parent="#accordion"
                                                  href="#favouriteCollapseTwo"
                                                  aria-expanded="false"
                                                  aria-controls="favouriteCollapseTwo"
                                                  className=""
                                                >
                                                  <p>Voiceover</p>
                                                </a>
                                                <i className="fa fa-angle-right" aria-hidden="true"></i>
                                              </div>
                                            </div>
                                            <div
                                              id="favouriteCollapseTwo"
                                              className="collapse show"
                                              role="tabpanel"
                                              aria-labelledby="headingOne"
                                              aria-expanded="false"
                                            >
                                              <div className="card-block">
                                                <Favourite
                                                  tracks={this.state.lists}
                                                  project_id={this.state.project_id}
                                                  UpdateFavourite={this.UpdateFavourite}
                                                  UpdateRecent={this.UpdateRecent}
                                                  UpdateIsActiveVoiceOver={this.UpdateIsActiveVoiceOver}
                                                  UpdateVoiceOver={this.UpdateVoiceOver}
                                                  getAudioFavouritesAndRecent={this.getAudioFavouritesAndRecent}
                                                  favouriteTracks={this.state.audioFavourites}
                                                  recentTracks={this.state.audioRecent}
                                                  username={this.state.username}
                                                  type="voiceover"
                                                  refresh={this.state.refreshFavourite}
                                                  brandSetting={this.state.brandSetting}
                                                  startApplyVoiceOver={this.startApplyVoiceOver}
                                                  restrictUsers={restrictUsers}
                                                  history={this.props.history}
                                                  durationUpdated={this.state.durationUpdatedScenes}
                                                  applyingVO={this.state.applyingAudio}
                                                  applyingAudioStatus={this.applyingAudioStatus}
                                                  activeFavTrack={this.state.activeAudioTrack}
                                                  playMusic={this.playMusic}
                                                  textToSpeechDurationValue={this.state.textToSpeechDurationValue}
                                                  cancelingAudioStatus={this.cancelingAudioStatus}
                                                  cancelingVO={this.state.cancelingVO}
                                                  videoDuration={this.state.videoDuration}
                                                  videoTotalDurationInSeconds={this.state.videoTotalDurationInSeconds}
                                                  logEventVoiceSelected={this.logEventVoiceSelected}
                                                  voiceoverprogressStatus={this.state.voiceoverprogressStatus}
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                ) : null}
                              </>
                            </div>
                            <div
                              role="tabpanel"
                              className="tab-pane active fill-height"
                              hidden={this.state.activeAudioTab !== audioTabEnum.volumeSettings}
                              id={`voice-tabpanel-${audioTabEnum.volumeSettings}`}
                              aria-labelledby={`voice-tab-${audioTabEnum.volumeSettings}`}
                            >
                              {
                                <>
                                  {this.state.audioTabsActivationStatus[audioTabEnum.volumeSettings] && (
                                    <div className="card block-1 ov-right content fill-height card-body">
                                      <div className="form-group">
                                        <div
                                          className="top-slider d-flex"
                                          style={{
                                            background: 'unset',
                                            border: 'unset',
                                            marginTop: '20px',
                                            width: '100%',
                                            alignItems: 'center',
                                          }}
                                        >
                                          <div className="col-md-5 pt-3 lft-label-slider" style={{ paddingRight: '0' }}>
                                            Background music volume
                                          </div>

                                          {this.state.bgMusicVolPercent === 0 ? (
                                            <VolumeOffOutlined
                                              sx={{
                                                color: 'grey',
                                                alignSelf: 'center',
                                                marginTop: '12px',
                                                fontSize: '16px',
                                              }}
                                            />
                                          ) : (
                                            <>
                                              {this.state.bgMusicVolPercent <= 70 ? (
                                                <VolumeDownOutlined
                                                  style={{
                                                    color: 'grey',
                                                    alignSelf: 'center',
                                                    marginTop: '12px',
                                                    fontSize: '16px',
                                                  }}
                                                />
                                              ) : (
                                                <VolumeUpOutlined
                                                  style={{
                                                    color: 'grey',
                                                    alignSelf: 'center',
                                                    marginTop: '12px',
                                                    fontSize: '16px',
                                                  }}
                                                />
                                              )}
                                            </>
                                          )}

                                          <div className="col-md-7" style={{ paddingRight: '20px' }}>
                                            <div
                                              className={
                                                'col-12 p-0 tabs-slider input-bar-container bgMusicVolPercent' +
                                                (this.state.bgMusicVolPercent === 0 ? ' zero-volume' : '')
                                              }
                                            >
                                              <Box>
                                                <InputRange
                                                  id="bgMusicVolPercent"
                                                  maxValue={100}
                                                  minValue={0}
                                                  formatLabel={value => `${value}%`}
                                                  value={this.state.bgMusicVolPercent}
                                                  onChange={value => this.setState({ bgMusicVolPercent: value })}
                                                  onChangeComplete={() =>
                                                    this.onVolumeChangeComplete('background music')
                                                  } //} => this.setState({ isAnyChange: true })}
                                                />
                                              </Box>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="form-group">
                                        <div
                                          className="top-slider d-flex"
                                          style={{
                                            background: 'unset',
                                            border: 'unset',
                                            marginTop: '0',
                                            width: '100%',
                                            alignItems: 'center',
                                          }}
                                        >
                                          <div
                                            className="col-md-5 col-sm-6 pt-3 lft-label-slider"
                                            style={{ paddingRight: '0' }}
                                          >
                                            Voiceover volume
                                          </div>
                                          {this.state.videoVolume === 0 ? (
                                            <VolumeOffOutlined
                                              sx={{
                                                color: 'grey',
                                                alignSelf: 'center',
                                                marginTop: '12px',
                                                fontSize: '16px',
                                              }}
                                            />
                                          ) : (
                                            <>
                                              {this.state.videoVolume <= 70 ? (
                                                <VolumeDownOutlined
                                                  style={{
                                                    color: 'grey',
                                                    alignSelf: 'center',
                                                    marginTop: '12px',
                                                    fontSize: '16px',
                                                  }}
                                                />
                                              ) : (
                                                <VolumeUpOutlined
                                                  style={{
                                                    color: 'grey',
                                                    alignSelf: 'center',
                                                    marginTop: '12px',
                                                    fontSize: '16px',
                                                  }}
                                                />
                                              )}
                                            </>
                                          )}
                                          <div className="col-md-7 col-sm-6" style={{ paddingRight: '20px' }}>
                                            <div
                                              className={
                                                'col-12 p-0 tabs-slider input-bar-container videoVolumeInputRange' +
                                                (this.state.videoVolume === 0 || !this.state.voiceOverApplied
                                                  ? ' zero-volume'
                                                  : '')
                                              }
                                            >
                                              <Tooltip
                                                title={!this.state.voiceOverApplied ? 'No voiceover applied' : ''}
                                                placement="bottom-start"
                                              >
                                                <Box>
                                                  <InputRange
                                                    id="videoVolumeInputRange"
                                                    disabled={!this.state.voiceOverApplied}
                                                    maxValue={100}
                                                    minValue={0}
                                                    formatLabel={value => `${value}%`}
                                                    value={this.state.voiceOverApplied ? this.state.videoVolume : 0}
                                                    onChange={value => this.setState({ videoVolume: value })}
                                                    onChangeComplete={() => this.onVolumeChangeComplete('voice over')}
                                                  />
                                                </Box>
                                              </Tooltip>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </>
                              }
                            </div>
                          </Box>
                          {/* <div className="tab-content tab-height inrtab-content">
                            <div className="tab-pane active fill-height" id="tbinnertwo-1">
                              <audio id="myMusicTrackPlay"></audio>
                              {this.state.activeAudioTab === 'track' ||
                              this.state.audioTabsActivationStatus['track'] ? (
                                <MusicTracks
                                  fetchingTracks={this.state.fetchingTracks}
                                  activeTrackId={AppLocalStorage.getItem('trackId')}
                                  activeTrack={this.props.musicTrack}
                                  tracks={this.props.musicResult.Items}
                                  removeTrackFromStorage={this.removeTrackFromStorage}
                                  makeTrackActive={this.makeTrackActive}
                                  playMusic={this.playMusic}
                                  AddTrackToFavourite={this.AddTrackToFavourite}
                                  refresh={this.state.refreshFavourite}
                                  getAudioFavouritesAndRecent={this.getAudioFavouritesAndRecent}
                                  audioFavsAndRecent={this.props.audioFavsAndRecent}
                                  project_id={this.state.project_id}
                                  activeMusicTrack={this.state.activeAudioTrack}
                                  brandingBgMusicList={
                                    this.props?.userBrands?.find(x => x.id == this?.state?.brandId)?.bgMusicList
                                  }
                                  updatedFromfavorite={this.state.updatedFromfavorite}
                                  resetUpdatedFrom={this.resetUpdatedFrom}
                                />
                              ) : null}
                            </div>
                            <div className="tab-pane fade fill-height" id="tbinnertwo-5">
                              {this.state.activeAudioTab === 'upload' ||
                              this.state.audioTabsActivationStatus['upload'] ? (
                                <AudioUpload
                                  project_id={this.state.project_id}
                                  username={this.state.username}
                                  refresh={this.state.refreshVoiceOver}
                                  voiceOverTracks={this.state.voiceOverTracks}
                                  UpdateFavourite={this.UpdateFavourite}
                                  UpdateRecent={this.UpdateRecent}
                                  UpdateVoiceOver={this.UpdateVoiceOver}
                                  UpdateIsActiveVoiceOver={this.UpdateIsActiveVoiceOver}
                                  brandSetting={this.state.brandSetting}
                                  getAudioFavouritesAndRecent={this.getAudioFavouritesAndRecent}
                                  favouriteTracks={this.state.favourites}
                                  musicTrackNotAllowed={this.musicTrackNotAllowed}
                                  recentTracks={this.state.recents}
                                  uploadedAudio={this.state.uploadAudio}
                                  makeTrackActive={this.makeTrackActive}
                                  recordAudio={this.recordAudio}
                                  isOutroScene={this.isOutroScene}
                                  isCustomIntroScene={this.isCustomIntroScene}
                                  playMusic={this.playMusic}
                                  activeTrack={AppLocalStorage.getItem('trackId')}
                                  removeTrackFromStorage={this.removeTrackFromStorage}
                                  rerenderAudio={this.state.rerenderAudio}
                                  removeRecordedAudio={this.removeRecordedAudio}
                                  listOfRecordedAudio={this.state.listOfRecordedAudio}
                                  recordingApplyToAll={this.recordingApplyToAll}
                                  toggleAudioTrimmer={this.toggleAudioTrimmer}
                                  type={this.state.audioUploadScreenType}
                                  teamUsers={this.props.teamUsers}
                                  audioImportStatus={this.state.audioImportStatus}
                                  source={this.state.source}
                                  activeAudioTrack={this.state.activeAudioTrack}
                                  brandingBgMusicList={
                                    this.props?.userBrands?.find(x => x.id == this?.state?.brandId)?.bgMusicList
                                  }
                                />
                              ) : null}
                            </div>
                            <div className="tab-pane fade fill-height" id="tbinnertwo-2">
                              {this.state.activeAudioTab === 'voiceOver' ||
                              this.state.audioTabsActivationStatus['voiceOver'] ? (
                                <VoiceOverTab
                                  speedValue={this.state.speedValue}
                                  onChange={value => this.setState({ speedValue: value })}
                                  onChangeComplete={this.ChangeComplete}
                                  reloadScene={this.reloadScene}
                                  project_id={this.state.project_id}
                                  username={this.state.username}
                                  refresh={this.state.refreshVoiceOver}
                                  voiceOverTracks={this.state.voiceOverTracks}
                                  UpdateFavourite={this.UpdateFavourite}
                                  UpdateRecent={this.UpdateRecent}
                                  UpdateVoiceOver={this.UpdateVoiceOver}
                                  UpdateIsActiveVoiceOver={this.UpdateIsActiveVoiceOver}
                                  brandSetting={this.state.brandSetting}
                                  getAudioFavouritesAndRecent={this.getAudioFavouritesAndRecent}
                                  favouriteTracks={this.state.favourites}
                                  recentTracks={this.state.recents}
                                  scriptLanguage={this.state.scriptLanguage}
                                  filterLanguage={this.state.filterLanguage}
                                  transcriptionLanguage={this.state.transcriptionLanguage}
                                  removeVoiceOverTrackFromStorage={this.removeVoiceOverTrackFromStorage}
                                  startApplyVoiceOver={this.startApplyVoiceOver}
                                  getVoiceOverQuota={this.getVoiceOverQuota}
                                  textToSpeechDuration={this.state.textToSpeechDuration}
                                  textToSpeechDurationValue={this.state.textToSpeechDurationValue}
                                  daysRemainingTillResetDate={this.state.daysRemainingTillResetDate}
                                  restrictUsers={restrictUsers}
                                  applyingAudioStatus={this.applyingAudioStatus}
                                  history={this.props.history}
                                  durationUpdated={this.state.durationUpdatedScenes}
                                  applyingVO={this.state.applyingAudio}
                                  videoTotalDurationInSeconds={this.state.videoTotalDurationInSeconds}
                                  hideElevenLabs={hideElevenLabs}
                                  brandingAIVoiceoverList={
                                    this.props?.userBrands?.find(x => x.id == this?.state?.brandId)?.AIVoiceoverList
                                  }
                                  cancelingAudioStatus={this.cancelingAudioStatus}
                                  cancelingVO={this.state.cancelingVO}
                                  videoDuration={this.state.videoDuration}
                                  logEventVoiceSelected={this.logEventVoiceSelected}
                                  voiceoverprogressStatus={this.state.voiceoverprogressStatus}
                                />
                              ) : null}
                            </div>
                            <div className="tab-pane fade" id="tbinnertwo-3">
                              {this.state.activeAudioTab === 'recent' ||
                              this.state.audioTabsActivationStatus['recent'] ? (
                                <div className="card block-1 hover-only-scrollbar ov-right content mCustomScrollbar">
                                  <div className="card-body p-0">
                                    <div className="col-12 p-0 tbinnertwo-box">
                                      <div
                                        id="accordion"
                                        className="track-links"
                                        role="tablist"
                                        aria-multiselectable="true"
                                      >
                                        <div className="card">
                                          <div className="card-header" role="tab" id="headingOne1">
                                            <div className="mb-0">
                                              <a
                                                data-toggle="collapse"
                                                data-parent="#accordion"
                                                href="#recentCollapseOne"
                                                aria-expanded="false"
                                                aria-controls="recentCollapseOne"
                                                className=""
                                              >
                                                <Typography
                                                  sx={{
                                                    paddingLeft: '15px',
                                                    '&:before': {
                                                      left: '15px !important',
                                                    },
                                                  }}
                                                >
                                                  Background music
                                                </Typography>
                                              </a>
                                              <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                          </div>

                                          <div
                                            id="recentCollapseOne"
                                            className="collapse show"
                                            role="tabpanel"
                                            aria-labelledby="headingOne"
                                            aria-expanded="false"
                                          >
                                            <div className="card-block">
                                              <Recent
                                                favouriteTracks={this.state.favourites}
                                                recentTracks={this.state.recents}
                                                project_id={this.state.project_id}
                                                getAudioFavouritesAndRecent={this.getAudioFavouritesAndRecent}
                                                setFavouritesFromFavoritesTab={this.setFavouritesFromFavoritesTab}
                                                type="track"
                                                removeTrackFromStorage={this.removeTrackFromStorage}
                                                refresh={this.state.refreshRecent}
                                                UpdateFavourite={this.UpdateFavourite}
                                                UpdateRecent={this.UpdateRecent}
                                                UpdateVoiceOver={this.UpdateVoiceOver}
                                                brandSetting={this.state.brandSetting}
                                                username={this.state.username}
                                                updateRecentListForMarkActive={this.updateRecentListForMarkActive}
                                                makeTrackActive={this.makeTrackActive}
                                                activeRecentTrack={this.state.activeAudioTrack}
                                                playMusic={this.playMusic}
                                                logEventVoiceSelected={this.logEventVoiceSelected}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="card">
                                          <div className="card-header" role="tab" id="headingTwo1">
                                            <div className="mb-0">
                                              <a
                                                data-toggle="collapse"
                                                data-parent="#accordion"
                                                href="#recentCollapseTwo"
                                                aria-expanded="false"
                                                aria-controls="recentCollapseTwo"
                                                className=""
                                                style={{
                                                  padding: '5px 0',
                                                }}
                                              >
                                                <Typography
                                                  sx={{
                                                    paddingLeft: '15px !important',
                                                    paddingTop: '3px',
                                                    '&:before': {
                                                      left: '15px !important',
                                                    },
                                                  }}
                                                >
                                                  Voiceover
                                                </Typography>
                                              </a>
                                              <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                          </div>

                                          <div
                                            id="recentCollapseTwo"
                                            className="collapse show"
                                            role="tabpanel"
                                            aria-labelledby="headingOne"
                                            aria-expanded="false"
                                          >
                                            <div className="card-block">
                                              <Recent
                                                favouriteTracks={this.state.favourites}
                                                recentTracks={this.state.recents}
                                                project_id={this.state.project_id}
                                                getAudioFavouritesAndRecent={this.getAudioFavouritesAndRecent}
                                                type="voiceover"
                                                refresh={this.state.refreshRecent}
                                                UpdateFavourite={this.UpdateFavourite}
                                                UpdateRecent={this.UpdateRecent}
                                                UpdateVoiceOver={this.UpdateVoiceOver}
                                                brandSetting={this.state.brandSetting}
                                                username={this.state.username}
                                                UpdateIsActiveVoiceOver={this.UpdateIsActiveVoiceOver}
                                                startApplyVoiceOver={this.startApplyVoiceOver}
                                                restrictUsers={restrictUsers}
                                                applyingAudioStatus={this.applyingAudioStatus}
                                                history={this.props.history}
                                                durationUpdated={this.state.durationUpdatedScenes}
                                                applyingVO={this.state.applyingAudio}
                                                activeRecentTrack={this.state.activeAudioTrack}
                                                playMusic={this.playMusic}
                                                textToSpeechDurationValue={this.state.textToSpeechDurationValue}
                                                cancelingAudioStatus={this.cancelingAudioStatus}
                                                cancelingVO={this.state.cancelingVO}
                                                videoDuration={this.state.videoDuration}
                                                videoTotalDurationInSeconds={this.state.videoTotalDurationInSeconds}
                                                logEventVoiceSelected={this.logEventVoiceSelected}
                                                voiceoverprogressStatus={this.state.voiceoverprogressStatus}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                            </div>
                            <div className="tab-pane fade" id="tbinnertwo-4">
                              {this.state.activeAudioTab === 'favourite' ||
                              this.state.audioTabsActivationStatus['favourite'] ? (
                                <div className="card hover-only-scrollbar block-1 ov-right content mCustomScrollbar">
                                  <div className="card-body p-0">
                                    <div className="col-12 p-0 tbinnertwo-box">
                                      <div
                                        id="accordion"
                                        className="track-links"
                                        role="tablist"
                                        aria-multiselectable="true"
                                      >
                                        <div className="card">
                                          <div className="card-header" role="tab" id="headingOne1">
                                            <div className="mb-0">
                                              <a
                                                data-toggle="collapse"
                                                data-parent="#accordion"
                                                href="#favouriteCollapseOne"
                                                aria-expanded="false"
                                                aria-controls="favouriteCollapseOne"
                                                className=""
                                                style={{
                                                  padding: '5px 0px',
                                                }}
                                              >
                                                <p
                                                  style={{
                                                    m: '0 !important',
                                                    fontSize: '16px',
                                                  }}
                                                >
                                                  Background music
                                                </p>
                                              </a>
                                              <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                          </div>
                                          <div
                                            id="favouriteCollapseOne"
                                            className="collapse show"
                                            role="tabpanel"
                                            aria-labelledby="headingOne"
                                            aria-expanded="false"
                                          >
                                            <div className="card-block">
                                              <Favourite
                                                tracks={this.state.lists}
                                                project_id={this.state.project_id}
                                                removeTrackFromStorage={this.removeTrackFromStorage}
                                                makeTrackActive={this.makeTrackActive}
                                                getAudioFavouritesAndRecent={this.getAudioFavouritesAndRecent}
                                                favouriteTracks={this.state.audioFavourites}
                                                recentTracks={this.state.audioRecent}
                                                username={this.state.username}
                                                setFavouritesFromFavoritesTab={this.setFavouritesFromFavoritesTab}
                                                type="track"
                                                refresh={this.state.refreshFavourite}
                                                UpdateFavourite={this.UpdateFavourite}
                                                UpdateRecent={this.UpdateRecent}
                                                UpdateVoiceOver={this.UpdateVoiceOver}
                                                brandSetting={this.state.brandSetting}
                                                activeFavTrack={this.state.activeAudioTrack}
                                                playMusic={this.playMusic}
                                                logEventVoiceSelected={this.logEventVoiceSelected}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                        <div className="card">
                                          <div className="card-header" role="tab" id="headingTwo1">
                                            <div className="mb-0">
                                              <a
                                                data-toggle="collapse"
                                                data-parent="#accordion"
                                                href="#favouriteCollapseTwo"
                                                aria-expanded="false"
                                                aria-controls="favouriteCollapseTwo"
                                                className=""
                                              >
                                                <p>Voiceover</p>
                                              </a>
                                              <i className="fa fa-angle-right" aria-hidden="true"></i>
                                            </div>
                                          </div>
                                          <div
                                            id="favouriteCollapseTwo"
                                            className="collapse show"
                                            role="tabpanel"
                                            aria-labelledby="headingOne"
                                            aria-expanded="false"
                                          >
                                            <div className="card-block">
                                              <Favourite
                                                tracks={this.state.lists}
                                                project_id={this.state.project_id}
                                                UpdateFavourite={this.UpdateFavourite}
                                                UpdateRecent={this.UpdateRecent}
                                                UpdateIsActiveVoiceOver={this.UpdateIsActiveVoiceOver}
                                                UpdateVoiceOver={this.UpdateVoiceOver}
                                                getAudioFavouritesAndRecent={this.getAudioFavouritesAndRecent}
                                                favouriteTracks={this.state.audioFavourites}
                                                recentTracks={this.state.audioRecent}
                                                username={this.state.username}
                                                type="voiceover"
                                                refresh={this.state.refreshFavourite}
                                                brandSetting={this.state.brandSetting}
                                                startApplyVoiceOver={this.startApplyVoiceOver}
                                                restrictUsers={restrictUsers}
                                                history={this.props.history}
                                                durationUpdated={this.state.durationUpdatedScenes}
                                                applyingVO={this.state.applyingAudio}
                                                applyingAudioStatus={this.applyingAudioStatus}
                                                activeFavTrack={this.state.activeAudioTrack}
                                                playMusic={this.playMusic}
                                                textToSpeechDurationValue={this.state.textToSpeechDurationValue}
                                                cancelingAudioStatus={this.cancelingAudioStatus}
                                                cancelingVO={this.state.cancelingVO}
                                                videoDuration={this.state.videoDuration}
                                                videoTotalDurationInSeconds={this.state.videoTotalDurationInSeconds}
                                                logEventVoiceSelected={this.logEventVoiceSelected}
                                                voiceoverprogressStatus={this.state.voiceoverprogressStatus}
                                              />
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                            </div>
                            <div className="tab-pane fade fill-height" id="tbinnertwo-6">
                              {(this.state.activeAudioTab === 'settings' ||
                                this.state.audioTabsActivationStatus['settings']) && (
                                <div className="card block-1 ov-right content fill-height card-body">
                                  <div className="form-group">
                                    <div
                                      className="top-slider d-flex"
                                      style={{
                                        background: 'unset',
                                        border: 'unset',
                                        marginTop: '20px',
                                        width: '100%',
                                        alignItems: 'center',
                                      }}
                                    >
                                      <div className="col-md-5 pt-3 lft-label-slider" style={{ paddingRight: '0' }}>
                                        Background music volume
                                      </div>

                                      {this.state.bgMusicVolPercent === 0 ? (
                                        <VolumeOffOutlined
                                          sx={{
                                            color: 'grey',
                                            alignSelf: 'center',
                                            marginTop: '12px',
                                            fontSize: '16px',
                                          }}
                                        />
                                      ) : (
                                        <>
                                          {this.state.bgMusicVolPercent <= 70 ? (
                                            <VolumeDownOutlined
                                              style={{
                                                color: 'grey',
                                                alignSelf: 'center',
                                                marginTop: '12px',
                                                fontSize: '16px',
                                              }}
                                            />
                                          ) : (
                                            <VolumeUpOutlined
                                              style={{
                                                color: 'grey',
                                                alignSelf: 'center',
                                                marginTop: '12px',
                                                fontSize: '16px',
                                              }}
                                            />
                                          )}
                                        </>
                                      )}

                                      <div className="col-md-7" style={{ paddingRight: '20px' }}>
                                        <div
                                          className={
                                            'col-12 p-0 tabs-slider input-bar-container bgMusicVolPercent' +
                                            (this.state.bgMusicVolPercent === 0 ? ' zero-volume' : '')
                                          }
                                        >
                                          <Box>
                                            <InputRange
                                              id="bgMusicVolPercent"
                                              maxValue={100}
                                              minValue={0}
                                              formatLabel={value => `${value}%`}
                                              value={this.state.bgMusicVolPercent}
                                              onChange={value => this.setState({ bgMusicVolPercent: value })}
                                              onChangeComplete={() => this.onVolumeChangeComplete('background music')} //} => this.setState({ isAnyChange: true })}
                                            />
                                          </Box>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <div
                                      className="top-slider d-flex"
                                      style={{
                                        background: 'unset',
                                        border: 'unset',
                                        marginTop: '0',
                                        width: '100%',
                                        alignItems: 'center',
                                      }}
                                    >
                                      <div
                                        className="col-md-5 col-sm-6 pt-3 lft-label-slider"
                                        style={{ paddingRight: '0' }}
                                      >
                                        Voiceover volume
                                      </div>
                                      {this.state.videoVolume === 0 ? (
                                        <VolumeOffOutlined
                                          sx={{
                                            color: 'grey',
                                            alignSelf: 'center',
                                            marginTop: '12px',
                                            fontSize: '16px',
                                          }}
                                        />
                                      ) : (
                                        <>
                                          {this.state.videoVolume <= 70 ? (
                                            <VolumeDownOutlined
                                              style={{
                                                color: 'grey',
                                                alignSelf: 'center',
                                                marginTop: '12px',
                                                fontSize: '16px',
                                              }}
                                            />
                                          ) : (
                                            <VolumeUpOutlined
                                              style={{
                                                color: 'grey',
                                                alignSelf: 'center',
                                                marginTop: '12px',
                                                fontSize: '16px',
                                              }}
                                            />
                                          )}
                                        </>
                                      )}
                                      <div className="col-md-7 col-sm-6" style={{ paddingRight: '20px' }}>
                                        <div
                                          className={
                                            'col-12 p-0 tabs-slider input-bar-container videoVolumeInputRange' +
                                            (this.state.videoVolume === 0 || !this.state.voiceOverApplied
                                              ? ' zero-volume'
                                              : '')
                                          }
                                        >
                                          <Tooltip
                                            title={!this.state.voiceOverApplied ? 'No voiceover applied' : ''}
                                            placement="bottom-start"
                                          >
                                            <Box>
                                              <InputRange
                                                id="videoVolumeInputRange"
                                                disabled={!this.state.voiceOverApplied}
                                                maxValue={100}
                                                minValue={0}
                                                formatLabel={value => `${value}%`}
                                                value={this.state.voiceOverApplied ? this.state.videoVolume : 0}
                                                onChange={value =>
                                                  this.setState({
                                                    videoVolume: value,
                                                    generatedVoiceOvers:
                                                      this.state.videoVolume !== value
                                                        ? []
                                                        : this.state.generatedVoiceOvers,
                                                  })
                                                }
                                                onChangeComplete={() => this.onVolumeChangeComplete('voice over')}
                                              />
                                            </Box>
                                          </Tooltip>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div> */}
                        </div>
                      </div>

                      {this.state?.subSentencesArray?.length > 0 && (
                        <div hidden={this.state.selectedMenuTabValue !== menuTabEnum.styles} className="fill-height">
                          <TemplatesMain // and here
                            layout={TEMPLATES_LAYOUT.leftSideBar}
                            currentTemplateMetaData={this.state.templateMetaData}
                            applyStyleToScene={this.applyStyleToScene}
                            applyVisualToScene={this.applyVisualToScene}
                            changeTransitions={this.changeTransitions}
                            transitionId={this.state.transitionId}
                            user={this.state.user}
                            project_id={this.state.project_id}
                            playScenePreviewNew={this.playScenePreviewNew}
                            setTemplate={this.setTemplate}
                            templatesAction={this.state.templatesAction}
                            templatesActionData={this.state.templatesActionData}
                            actionPerformed={() => this.setState({ templatesAction: undefined })}
                            showTabs={
                              this.state.activeThemeTab &&
                              (this.state.activeSubThemeTab
                                ? TEMPLATES_VIEW.templatesTabs
                                : TEMPLATES_VIEW.stylesListTabs)
                            }
                            openTab={this.openTab}
                            activeTextStyleIdObj={this.getActiveTextStyleIdObj()}
                            activeShowSceneNumber={currentSubScene.showSceneNumber}
                            isIntroHidden={this.state.subSentencesArray[0].settings.hideScene}
                            isOutroHidden={
                              this.state.subSentencesArray[this.state.subSentencesArray.length - 1].settings.hideScene
                            }
                            outroSceneId={this.state.subSentencesArray[this.state.subSentencesArray.length - 1].sceneId}
                            subSceneCount={this.state.subSentencesArray.length}
                            brandName={this.state.brandName}
                            isFromStep2={this.props.location.state?.isFromStep2}
                            createTextAnimationContainer={this.createTextAnimationContainer.bind(this)}
                            pickVisualFromScene={this.pickVisualFromScene}
                            updateSettings={this.updateSettings}
                            openScene={this.openScene}
                            //changeActiveDiv={this.changeActiveDiv} use openScene() instead of this
                            setSaveButtonText={val => this.setState({ SaveButtonText: val })}
                            hideInitialLoadingBar={async () => {
                              await this.setState({ showInitialLoadingBar: false });
                              this.props.resetAssetsSearchStatus();
                            }}
                            history={this.props.history}
                            source={this.state.source}
                            selectTemplateVisual={this.selectTemplateVisual}
                            disableApplyToAll={
                              this.state.editorFocusItem && this.state.editorFocusItem !== ELEMENT_TYPE.sceneText
                            }
                            teamUsers={this.props.teamUsers}
                            showBusy={this.isOverlayShown}
                          />
                        </div>
                      )}

                      <div hidden={this.state.selectedMenuTabValue !== menuTabEnum.text} className="fill-height">
                        <Box
                          className="d-flex flex-column h-100"
                          sx={{
                            background: '#fff',
                            // margin: '-15px -15px 0',
                            borderRight: '1px solid #e0e0e0',
                          }}
                        >
                          {/* {this.props?.userBrands &&
                            this.props?.userBrands?.find(x => x.id == this.state.brandId) &&
                            this.props?.userBrands?.find(x => x.id == this.state.brandId)?.fontList?.[0]?.fontName && (
                              <>
                                <Box
                                  sx={{
                                    padding: '10px 0 0 30px',
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      color: 'grey.900',
                                      fontWeight: '600',
                                    }}
                                  >
                                    Branded Text Boxes
                                  </Typography>
                                  <Typography sx={{ fontSize: '0.9rem', color: 'grey.500' }}>
                                    Click on text format type to add to scene
                                  </Typography>
                                </Box>
                        <DisplayTextTab
                          key={'brand'}
                          addDisplayText={this.addDisplayText}
                          defaultTextStyles={this.state.defaultTextStyles}
                          fontFamilyOverride={
                                    this.props?.userBrands?.find(x => x.id == this.state.brandId)?.fontList?.[0]
                                      ?.fontName
                                  }
                                />
                              </>
                            )} */}
                          <>
                            <Box
                              sx={{
                                padding: '10px 0 0 30px',
                              }}
                            >
                              <Typography
                                sx={{
                                  color: 'grey.900',
                                  fontWeight: '600',
                                }}
                              >
                                Default Text Boxes
                              </Typography>
                              <Typography sx={{ fontSize: '0.9rem', color: 'grey.500' }}>
                                Click on text format type to add to scene
                              </Typography>
                            </Box>
                            <DisplayTextTab
                              key={'general'}
                              addDisplayText={this.addDisplayText}
                              defaultTextStyles={this.state.defaultTextStyles}
                            />
                          </>
                        </Box>
                      </div>
                      <div hidden={this.state.selectedMenuTabValue !== menuTabEnum.branding} className="fill-height">
                        <BrandView
                          selectedBrandId={this?.state?.brandId ? this?.state?.brandId : ''}
                          brands={this.props?.userBrands}
                          onApplyLogo={logo => {
                            this.addDisplayElement(logo, 'visual', 'top-right', true);
                            amplitude.getInstance().logEvent('brand-logo-clicked', {});
                            this.setState({ showAlertNotification: 'Logo applied successfully' });
                          }}
                          onApplyBrandColor={color => {
                            amplitude.getInstance().logEvent('brand-color-clicked', { 'clicked-from': 'Branding tab' });
                            this.applyBrandingColor(color);
                          }}
                          onApplyBrandVisual={async visual => {
                            let brand = this.props?.userBrands.find(x => x.id == this?.state?.brandId);
                            // visual thumb and large url
                            visual.large = visual.large || visual.url;
                            visual.thumb = visual.thumb || visual.url;
                            await this.hideShowOverlay(
                              this.state.currentSceneId,
                              visual.url,
                              true,
                              visual,
                              'isUploadImage'
                            );
                          }}
                          onApplyBgMusic={music => {
                            let customMusicTrack = getFeatures(this.state?.username)[features.customMusicTrack];
                            if ((customMusicTrack && music.source == 'music') || music.source != 'music') {
                              this.makeTrackActive(
                                music.audio_id,
                                music.url,
                                music.source,
                                music.fileName || music.title,
                                null,
                                true
                              );
                              this.setState({ showAlertNotification: 'Music applied successfully' });
                            } else {
                              this.musicTrackNotAllowed();
                            }
                          }}
                          addDisplayText={style => {
                            amplitude.getInstance().logEvent('brand-text-clicked', { 'clicked-from': 'Branding tab' });
                            this.addDisplayText(style);
                          }}
                          defaultTextStyles={this.state.defaultTextStyles}
                          onApplyBrand={async e => {
                            let brandId = e?.target?.value;
                            this.setState({ showBrandSwitchConfirmationDialog: brandId });
                            // await this.applyBrand(brandId);
                            // this.setState({ showAlertNotification: 'brand applied successfully' });
                          }}
                          onApplyAIVoiceover={async voice => {
                            const voiceOverResult = await this.startApplyVoiceOver(voice);
                            if (voiceOverResult?.success) {
                              this.makeActiveVoiceTrack(
                                voice.trackId,
                                voice.url,
                                voice.type,
                                voice.name,
                                voice.gender,
                                voice.category
                              );
                            }
                          }}
                          onEditBrand={brandId => {
                            amplitude.getInstance().logEvent('edit-brand-from-storyboard', {});
                            this.props.history.push({
                              pathname: GlobalJs.BaseURL + CustomURLs.branding,
                              state: {
                                editBrandId: brandId,
                              },
                            });
                          }}
                          onOpenCreateBrand={() => {
                            amplitude.getInstance().logEvent('create-brand-from-storyboard', {});
                            this.props.history.push({
                              pathname: GlobalJs.BaseURL + CustomURLs.branding,
                              state: {
                                CreateBrandSource: 'storyboard',
                              },
                            });
                          }}
                          isPremiumVOQuotaValid={this.state.textToSpeechDurationValue > 0 ? true : false}
                        />
                      </div>

                      <div className="fill-height" hidden={this.state.selectedMenuTabValue !== menuTabEnum.format}>
                        {this.state.activeAspectRatioTab && (
                          <div className="card  no-border" style={{ height: '100%' }}>
                            <div className="card-header no-btm-border text-left pt-3 pb-0">
                              <div className="select-video-quality">
                                <h5 className="mb-0 track-heading blue">Select video resolution &nbsp;&nbsp;</h5>

                                <div className="radio-containers">
                                  {this.state.videoResolutions.map(videoResolution => {
                                    if (videoResolution === '1080p') {
                                      return (
                                        <div className="radio" onClick={e => this.showUpgradeModal(e, null, '1080p')}>
                                          {this.state.VideoRes === '1080p' ? (
                                            <i className="fa fa-check-circle" aria-hidden="true"></i>
                                          ) : (
                                            <i className="fa fa-circle-thin" aria-hidden="true"></i>
                                          )}
                                          &nbsp;&nbsp;1080p
                                        </div>
                                      );
                                    }
                                    return (
                                      <div
                                        className="radio"
                                        onClick={() => this.onSelectingVideoResolutionValue(videoResolution)}
                                      >
                                        {this.state.VideoRes === videoResolution ? (
                                          <i className="fa fa-check-circle" aria-hidden="true"></i>
                                        ) : (
                                          <i className="fa fa-circle-thin" aria-hidden="true"></i>
                                        )}
                                        &nbsp;&nbsp;{videoResolution !== '720p' ? 'Original resolution' : '720p'}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>

                              <div style={{ height: '100%' }} className="theme-var content">
                                <div className="col-12 p-0 pr-3">
                                  <div
                                    className="select-video-quality"
                                    style={{ alignItems: 'flex-start', marginTop: '20px' }}
                                  >
                                    <div className="optimize-video">
                                      <h5 className="mb-0 track-heading blue">
                                        Optimize generated video for size &nbsp;&nbsp;
                                      </h5>
                                      <span>
                                        Turning this on would reduce the file size but increase the video generation
                                        time
                                      </span>
                                    </div>
                                    <div className="radio-containers" style={{ width: '190px', minWidth: '140px' }}>
                                      <label className="switch mb-0 ml-1">
                                        <input
                                          type="checkbox"
                                          checked={this.state.optimizeVideoOutput}
                                          onChange={e => this.setState({ optimizeVideoOutput: e.target.checked })}
                                        />
                                        <span className="slider round"></span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="card-body ov-right pt-0 pr-0">
                              <div style={{ height: '100%' }} className="theme-var content">
                                <div className="col-12 p-0 pr-3">
                                  <div className="row vertical">
                                    <AspectRatios
                                      username={this.state.username}
                                      aspectRatioValue={this.state.aspectRatioValue}
                                      aspectRatioClass={this.state.aspectRatioClass}
                                      aspectRatioFractionValue={this.state.aspectRatioFractionValue}
                                      onChangeAspectRatio={this.updateAspectRatio}
                                      gotoPlansList={this.gotoPlansList}
                                      isVisualsToVideo={
                                        this.state.source == 'visuals' || this.state.source == 'transcribe'
                                      }
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-60 col-big-xl col-tb-7 flex-space-between white-background"
                    style={{ height: 'fit-content' }}
                  >
                    <div
                      className={
                        ((!this.state.showAudioTrimmerLoading || !this.state.showAudioTrimmer) &&
                          'hide-trimmer-progress') + ' col p-0 top-scene-section'
                      }
                      style={{ flexGrow: 'unset' }}
                    >
                      <audio id="myPreviewAudioPlayForEdit" loop />
                      <audio id="myPreviewVoiceOverPlayForEdit" />
                      <InPortal node={this.audioTrimmerPortalNode}>
                        <div
                          id="audioTrimmerContainer"
                          className="light-gray-background position-relative"
                          style={this.state.showAudioTrimmer ? { display: 'block' } : { display: 'none' }}
                        >
                          <div id="audioTrimmer" onClick={this.onAudioTrimmerClick}></div>
                          <div className="translucent-background">
                            <div className="dot-flashing position-absolute absolute-centered">
                              <div id="audio-trimmer-progress">{this.state.audioTrimmerLoadingPercent} %</div>
                            </div>
                          </div>
                        </div>
                      </InPortal>

                      <ConditionalWrapper condition={this.state.showAudioTrimmer} wrapper={this.audioTrimmerModal}>
                        {this.state.subSentencesArray.length > 0 ? (
                          <EditVideoAllScene
                            isVoiceOverApplying={this.state.durationUpdatedScenes?.loading}
                            currentActiveDiv={this.state.currentActiveDiv}
                            previewReady={this.state.previewReady}
                            showPreviewProgress={this.state.showPreviewProgress}
                            showDeletePopup={this.state.showDeletePopup}
                            setOpenConfirmDeleteDialog={this.setOpenConfirmDeleteDialog}
                            videoPreviewComponentNew={this.videoPreviewComponentNew}
                            closePreviewFlag={this.state.closePreviewFlag}
                            playScenePreviewNew={this.playScenePreviewNew}
                            closePreviewNew={this.closePreviewNew}
                            applyVoiceOverToAllScene={this.applyVoiceOverToAllScene}
                            applyImageZoomPanToAllSceneFn={this.applyImageZoomPanToAllSceneFn}
                            applyHideTextToAllScene={this.applyHideTextToAllScene}
                            applyMusicToAllScene={this.applyMusicToAllScene}
                            // markEditorOpen={this.markEditorOpen}
                            refreshAfterAddSceneBefore={this.state.refreshAfterAddSceneBefore}
                            checkMuteClipAudio={this.checkMuteClipAudio}
                            applyMuteClipAudioToAllScene={this.applyMuteClipAudioToAllScene}
                            //changePosition={this.changePosition}
                            //changeParagraphWidth={this.changeParagraphWidth}
                            changeActiveDiv={this.changeActiveDiv}
                            refresh={this.state.refreshEditScene}
                            closeOpenTextEditor={this.closeOpenTextEditor}
                            saveTextEditorValue={this.saveTextEditorValue}
                            SetTimePerFrame={this.SetTimePerFrame.bind(this)}
                            SetTimePerFrameForAllScenes={this.SetTimePerFrameForAllScenes}
                            imageURL={this.state.imageURL}
                            imageAssets={this.state.imageAssests}
                            subSentencesArrayDetail={this.state.subSentencesArray}
                            isOverlayShown={this.isOverlayShown}
                            Url={this.state.url}
                            brandSetting={this.state.brandSetting}
                            InsertNewScene={this.InsertNewScene}
                            InsertNewSubScene={this.InsertNewSubScene}
                            insertSceneBefore={this.insertSceneBefore}
                            insertSubsceneBefore={this.insertSubsceneBefore}
                            DeleteMultipleScenes={this.DeleteMultipleScenes}
                            animationTheme={this.state.animationTheme}
                            themeChange={this.state.themeChange}
                            editScenePlayVideo={this.state.editScenePlayVideo}
                            project_id={this.state.project_id}
                            videoDuration={this.state.videoDuration}
                            videoTotalDurationInSeconds={this.state.videoTotalDurationInSeconds}
                            videoDurationLimit={this.state.videoDurationLimit}
                            videoDurationLimitWithGrace={this.state.videoDurationLimitWithGrace}
                            videoDurationToolTip={this.state.videoDurationToolTip}
                            aspectRatioClass={this.state.aspectRatioClass}
                            aspectRatioFractionValue={this.state.aspectRatioFractionValue}
                            checkImageZoom={this.checkImageZoom}
                            checkVoiceOver={this.checkVoiceOver}
                            checkMusic={this.checkMusic}
                            checkLoopVideo={this.checkLoopVideo}
                            applyLoopVideoToAllScene={this.applyLoopVideoToAllScene}
                            checkHideText={this.checkHideText}
                            checkAllScene={this.checkAllScene}
                            undo={this.state.past.length > 0 ? this.onUndo : null}
                            redo={this.state.future.length > 0 ? this.onRedo : null}
                            applyToAllScenes={this.state.applyToAllScenes}
                            trimScene={this.trimScene}
                            openTextures={this.openTextures}
                            showFocusOverlay={this.state.showFocusOverlay}
                            user={this.state.user}
                            trimVideoNotAllowed={this.trimVideoNotAllowed}
                            recordAudio={this.recordAudio}
                            getAudioFavouritesAndRecent={this.getAudioFavouritesAndRecent}
                            source={this.state.source}
                            frameAspectRatio={this.state.frameAspectRatio}
                            frameSize={frameSize}
                            setFrameCoordinates={this.setFrameCoordinates}
                            projectName={this.state.projectName}
                            showAudioTrimmer={this.state.showAudioTrimmer}
                            toggleAudioTrimmer={this.toggleAudioTrimmer}
                            saveTrimmedAudio={this.saveTrimmedAudio}
                            SaveButtonText={this.state.SaveButtonText}
                            openTab={this.openTab}
                            timePerFrame={this.state.timePerFrame}
                            saveTextNextSceneCounter={this.state.saveTextNextSceneCounter}
                            removeTranscriptionScenebRoll={this.removeTranscriptionScenebRoll}
                            allowReelFastVideo={allowReelFastVideo(this.state.username)}
                            templateName={this.state.templateMetaData && this.state.templateMetaData.name}
                            isNewPreviewPlaying={this.state.isNewPreviewPlaying}
                            addStyleToTemplate={this.addStyleToTemplate}
                            setEditorFocusItem={editorFocusItem => this.setState({ editorFocusItem })}
                            removeRecordedAudio={this.removeRecordedAudio}
                            pausePreview={this.pausePreview}
                            elevateStoryboardScriptTab={this.elevateStoryboardScriptTab}
                            onChangeAspectRatio={this.updateAspectRatio}
                            removeVoiceOver={this.removeVoiceOverTrackFromStorage}
                            durationUpdatedScenes={this.state.durationUpdatedScenes}
                            updateDuration={this.updateVideoduration}
                            selectedBrand={this.props.userBrands?.find(item => item.id == this.state.brandId)}
                            onSceneDurationUpdate={this.onSceneDurationUpdate}
                          />
                        ) : (
                          <div className="top-probox">
                            <div className="blockbxhide-top mb-0 ml-4 mt-4 mr-4"></div>
                            <div className="block-footer mt-0 mb-0 ml-4 mr-4">
                              {/* <ul className="list-inline upnewbttn-list justify-content-center d-flex upnewbttn-listdis scene-settings-toolbar light-gray-background">
																	<li className="nav-item">
																		<div className="btn-group btn-group-sm sticking" role="group" aria-label="Large button group">
																			<button type="button" className="btn btn-default left">
																				<i className="fa fa-undo" aria-hidden="true"></i></button>
																			<button type="button" className="btn btn-default right">
																				<i className="fa fa-repeat" aria-hidden="true"></i></button>
																		</div>
																	</li>

																	<li className="flex-filler"></li>

																	<li className="nav-item" >
																		<a className="naked-link dropdown-toggle" data-toggle="dropdown">
																			<i className="fa fa-plus-square" aria-hidden="true"></i>
																			Insert
																		</a>
																	</li>

																	<li className="nav-item">
																		<i className="fa fa-trash" aria-hidden="true"></i>
																		Delete
																	</li>

																	<li className="nav-item">
																		<i className="fa fa-play" aria-hidden="true"></i>
																		Preview
																	</li>

																	<li className="nav-item">
																		<i className="fa fa-scissors" aria-hidden="true"></i>
																		Trim video clip
																	</li>

																	<li className="nav-item" >
																		<a className="naked-link dropdown-toggle" data-toggle="dropdown">
																			<i className="fa fa-microphone" aria-hidden="true"></i>
																			Add audio
																		</a>
																	</li>

																	<li className="flex-filler"></li>

																	<div className="dropup flex-centered">
																		<button className="btn btn-default dropdown-toggle naked-button" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
																			<i className="fa fa-sliders" aria-hidden="true"></i>
																			Settings
																			<span className="caret"></span>
																		</button>
																		<ul className="the-dropup dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2" x-placement="top-end" >
																			<li ><a >Image zoom &amp; pan</a>
																				<label className={`switch small`} >
																					<input type="checkbox" />
																					<span className="slider round"></span>
																				</label>
																			</li>
																			<li ><a >Voice-over</a>
																				<label className="switch small" >
																					<input type="checkbox" />
																					<span className="slider round"></span>
																				</label></li>
																			<li ><a >Music</a>
																				<label className="switch small" >
																					<input type="checkbox" />
																					<span className="slider round"></span>
																				</label></li>
																			<li ><a >Apply to all</a>
																				<div className="checkbox">
																					<label><input type="checkbox" /></label>
																				</div>
																			</li>
																		</ul>
																	</div>
																</ul> */}
                            </div>
                          </div>
                        )}
                      </ConditionalWrapper>
                    </div>
                    {
                      <div className="col p-0 bottom-scene-section" style={{ flexGrow: 'unset' }}>
                        <div className="card block-3 no-border no-background">
                          {/*<h5 className="r-line">All scenes</h5>*/}
                          {this.state.showSceneStrip === false && this.displaySceneStripDummy()}
                          {this.state.showSceneStrip &&
                          !this.state.showInitialLoadingBar &&
                          this.state.subSentencesArray.length > 0 &&
                          !this.state.displayGenerateVideo &&
                          !this.state.showPreviewProgress ? (
                            <AllScenePanel
                              reorderScene={this.reorderScene}
                              loadMoreSentences={this.loadMoreSentences}
                              loadMoreScenes={this.state.loadMoreScenes}
                              createElementsProgress={this.props.createElementsProgress}
                              isVideoProgressDialogOpen={this.props.isVideoProgressDialogOpen}
                              animationTheme={this.state.animationTheme}
                              changeActiveDiv={this.changeActiveDiv}
                              refresh={this.state.refreshAllScenePanel}
                              UpdateAllScenePanel={this.UpdateAllScenePanel}
                              subSentencesArrayDetail={this.state.subSentencesArray}
                              hideShowOverlay={this.hideShowOverlay}
                              updateAllAssets={this.updateAllAssets}
                              isPrevious={this.state.isPrevious}
                              imageURL={this.state.imageURL}
                              isOverlayShown={this.isOverlayShown}
                              sentences={this.state.sentences}
                              totalNumberOfSentences={this.state.subSentencesArray.length}
                              Url={this.state.url}
                              allImagesUrl={this.state.imageURL}
                              brandSetting={this.state.brandSetting}
                              imageAssests={this.state.imageAssests}
                              project_id={this.state.project_id}
                              aspectRatioClass={this.state.aspectRatioClass}
                              getSentenceKeywordSuggestions={this.props.getSentenceKeywordSuggestions}
                              scriptLanguage={this.state.scriptLanguage}
                              currentActiveDiv={this.state.currentActiveDiv}
                              user={this.state.user}
                              updateSettings={this.updateSettings}
                              openTab={this.openTab}
                              SetTransition={this.SetTransition}
                              RemoveTransition={this.RemoveTransition}
                              RemoveAllTransitions={this.RemoveAllTransitions}
                              transitionsEnabled={true}
                            />
                          ) : (
                            <div className="bottom-probox"></div>
                          )}
                        </div>
                        {!this.state.showAudioTrimmer && <OutPortal node={this.audioTrimmerPortalNode} />}
                      </div>
                    }
                  </div>
                </div>
              </section>
            </main>
          </div>

          {this.state.goToPreviousConfirm ? (
            <DialogWithButtonAndIcon
              icon={this.state.dialogWithButtonAndIcon.icon}
              iconBgPaletteColor={this.state.dialogWithButtonAndIcon.iconBgPaletteColor}
              open={this.state.dialogWithButtonAndIcon ? true : false}
              title={this.state.dialogWithButtonAndIcon.title}
              message={this.state.dialogWithButtonAndIcon.message}
              primaryButtonLabel={this.state.dialogWithButtonAndIcon.primaryButtonLabel}
              primaryButtonOnClick={this.state.dialogWithButtonAndIcon.primaryButtonOnClick}
              secondaryButtonLabel={this.state.dialogWithButtonAndIcon.secondaryButtonLabel}
              secondaryButtonOnClick={this.state.dialogWithButtonAndIcon.secondaryButtonOnClick}
            />
          ) : (
            <></>
          )}

          <div
            className="VideoProgressBar confirmation-box"
            id="isAnyUpdate"
            style={{ left: '0px', display: this.state.isAnyUpdate ? 'block' : 'none' }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="VideoProgressBar-overlay-content wrap-ovcontent myConfirmationBox">
                  <div className="modal-header">
                    <h4 className="modal-title">Confirm</h4>
                    <span className="close" onClick={this.CloseUpdateBox.bind(this, 'Cancel')}>
                      &times;
                    </span>
                  </div>
                  <div className="modal-bodys">
                    <span className="d-block mb-3">Do you want to save the changes before leaving?</span>
                    <div className="col-12 p-0 text-center bottom-box-btn">
                      <button className="btn btn-submit btn-span" onClick={this.CloseUpdateBox.bind(this, 'Yes')}>
                        Yes
                      </button>
                      <button
                        className="btn btn-default del-btn ml-2 btn-span"
                        onClick={this.CloseUpdateBox.bind(this, 'No')}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="step-3-modal" className="upgrade-modal modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className={`modal-header ${this.state.quotaExceeded ? 'white-header' : ''}`}>
                  <h4 className="modal-title">
                    {this.state.quotaExceeded ? 'Video limit reached!' : 'Upgrade to Professional!'}
                    <span className="close" onClick={this.hideUpgradeModal.bind(this)}>
                      &times;
                    </span>
                  </h4>
                </div>

                <div className="modal-body">
                  {this.state.quotaExceeded ? (
                    <p>
                      Your have reached the video limit of your current
                      <h3 className="header blue">{this.state.planName}</h3>
                      <br />
                      Please upgrade to generate more videos
                    </p>
                  ) : this.state.trimVideoNotAllowed ? (
                    <p>
                      Trim video clips <br />
                      with a Professional plan
                    </p>
                  ) : this.state.transitionsNotAllowed ? (
                    <p>
                      Add scene transitions <br />
                      with a Professional plan
                    </p>
                  ) : this.state.musicTrackNotAllowed ? (
                    <p>
                      Apply custom music tracks <br />
                      with a Professional plan
                    </p>
                  ) : (
                    <p>
                      Create HD 1080p videos <br />
                      with a Professional plan
                    </p>
                  )}

                  <div className="button-container horizontal buttonsStep2head">
                    <a
                      className="btn btn--nexts2 btn-submit"
                      onClick={event => this.hideUpgradeModal(event, this.state.quotaExceeded ? true : true)}
                    >
                      {this.state.quotaExceeded ? 'See plans' : 'See plans'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="VideoProgressBar confirmation-box"
            id="isAskBrandSetting"
            style={{ left: '0px', display: this.state.popupAskBrandSettingChange ? 'block' : 'none' }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="VideoProgressBar-overlay-content wrap-ovcontent myConfirmationBox">
                  <div className="modal-header">
                    <h4 className="modal-title">Confirm</h4>
                    <span className="close" onClick={this.ApplyNewBrandSetting.bind(this, 'Cancel')}>
                      &times;
                    </span>
                  </div>
                  <div className="modal-bodys">
                    <span className="d-block mb-3">Do you want to apply the new brand settings to this project?</span>
                    <div className="col-12 p-0 text-center bottom-box-btn">
                      <button className="btn btn-submit btn-span" onClick={this.ApplyNewBrandSetting.bind(this, 'Yes')}>
                        Yes
                      </button>
                      <button
                        className="btn btn-default del-btn ml-2 btn-span"
                        onClick={this.ApplyNewBrandSetting.bind(this, 'No')}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <PDialog
            open={this.state.showIntroOutroVOConfirm}
            title="Does your voice-over include intro and outro?"
            msg="Your video has an intro and outro. This information will help us better synchronize the audio to your video"
            onClose={() => this.setState({ showIntroOutroVOConfirm: false })}
            actions={
              <>
                <Button variant="contained" onClick={() => this.introOutroVOConfirm(false)}>
                  No, it does not
                </Button>
                <Button variant="contained" onClick={() => this.introOutroVOConfirm(true)}>
                  Yes, it does
                </Button>
              </>
            }
          >
            <Stack direction="row" spacing={2}>
              {/* TODO: remove large padding inside the image to align it with the text */}
              <img src={audio_icon} width="120px" />
              <div>
                Your video has an intro and outro. This information will help us better synchronize the audio to your
                video.
              </div>
            </Stack>
          </PDialog>

          {this.state.isInvalidSceneDuration ? (
            <DialogWithButtonAndIcon
              icon={<WarningAmberIcon color="error" />}
              iconBgPaletteColor={'error.lighter'}
              open={this.state.isInvalidSceneDuration}
              title={'Invalid scene duration'}
              message={
                'Kindly check the scene duration for all scenes and try again. If you still face any issue, kindly contact support@pictory.ai.'
              }
              primaryButtonLabel={'Close'}
              primaryButtonOnClick={() => this.setState({ isInvalidSceneDuration: false })}
              primaryButtonColor={'error.main'}
            />
          ) : (
            <></>
          )}

          {/* <Stack direction="row" spacing={2}>
              <Typography variant="text_base" color="grey.500">
                Kindly check the scene duration for all scenes and try again. If you still face any issue, kindly
                contact support@pictory.ai.
              </Typography>
            </Stack>
          </PDialog>  */}

          {this.state.showAutoSyncVoiceover && (
            <StepProgress
              steps={2}
              heading="Auto syncing voice-over"
              step1ProgressMessage="Auto syncing voiceover"
              step2ProgressMessage="Generating preview"
              step1Progress={this.state.autoSyncProgress}
              step2Progress={this.state.previewProgress}
              transparentBackground={true}
              onStopProgress={this.onClosePreviewProgress}
              image={audio_icon}
              errorMsgStep1={this.state.voiceOverErrorMsgStep1}
              errorMsgStep2={this.state.voiceOverErrorMsgStep2}
              onButtonClick={() => this.setState({ showAutoSyncVoiceover: false })}
            />
          )}
          {this.state.openVisualsFetchErrorDialog && (
            <DialogWithButtonAndIcon
              icon={<img src={crying_face_emoji} />}
              iconBgPaletteColor="warning.lighter"
              open={this.state.openVisualsFetchErrorDialog ? true : false}
              title={this.state.retryVisualFetch ? 'Refetch visuals' : `We are sorry for the inconvenience!`}
              message={
                this.state.retryVisualFetch ? (
                  `No visuals in the project. Please try again by clicking 'Retry'.`
                ) : (
                  <>
                    Our servers are currently experiencing a high volume of requests, preventing our AI from selecting
                    visuals.<br></br>
                    <br></br>
                    We assure you that the issue will be resolved at the earliest.
                  </>
                )
              }
              primaryButtonLabel={this.state.retryVisualFetch ? 'Retry' : 'Manually select visuals'}
              primaryButtonOnClick={() => {
                this.setState({ openVisualsFetchErrorDialog: false });
                this.getSummaryImages();
                // if (this.state.retryVisualFetch) this.getSummaryImages();
                //else this.openTab(TAB_VISUALS);
              }}
              secondaryButtonLabel={`I'll try later`}
              secondaryButtonOnClick={async () => {
                this.getSummaryImages();
                await this.setState({
                  tryLaterGotoStep1: true,
                  openVisualsFetchErrorDialog: false,
                  goToPreviousConfirm: false,
                });
                setTimeout(() => {
                  this.gotoCreateVideoStep2();
                }, 100);
              }}
              onClose={() => this.setState({ openVisualsFetchErrorDialog: false })}
            />
          )}

          {/* <Button
            variant="outlined"
            onClick={() => this.setState({ openVideoGenDialog: true })}
            sx={{ marginTop: '-100px', marginLeft: '100px' }}
          >
            Open dialog
          </Button> */}

          {this.state.displayGenerateVideo && this.props.videoGenerationProgress?.step !== 4 && (
            <GeneratingVideoDialog
              open={this.state.displayGenerateVideo && this.props.videoGenerationProgress?.step !== 4 ? true : false}
              //onClose={() => this.setState({ displayGenerateVideo: false })}
              enableRunInBackgroundButton={
                this.state.hasExportID && this.props.videoGenerationProgress.step <= 3 && !this.state.generateCSV
              }
              videoGenerationProgress={this.props.videoGenerationProgress}
              cancelGenerateVideo={this.CloseGenerateVideo.bind()}
              runInBackgroundMode={this.minimizeVideoGeneration}
            />
          )}

          {this.state.displayGenerateVideo && this.props.videoGenerationProgress?.step == 4 && (
            <DownloadVideoDialogContainer
              open={this.state.displayGenerateVideo && this.props.videoGenerationProgress?.step == 4 ? true : false}
              downloadVideo={this.DownloadVideo}
              downloadAudio={this.downloadAudio}
              audioURL={MediaStorage.Instance.GetVideoUrlFromCDN(this.state.audioURL)}
              videoURL={MediaStorage.Instance.GetVideoUrlFromCDN(this.state.videoURL)}
              downloadTextFile={this.selectSubtitle}
              project_id={this.state.project_id}
              projectName={this.state.projectName}
              srtFile={this.state.srtFile}
              vttFile={this.state.vttFile}
              txtFile={this.state.txtFile}
              previewJson={this.state.previewJson}
              videoThumbnail={this.state.videoThumbnail}
              gotoMyProjects={this.gotoMyVideo}
              onClose={() => this.setState({ displayGenerateVideo: false })}
            />
          )}
          <AlertNotification
            show={this.state.showAlertNotification ? true : false}
            message={this.state.showAlertNotification}
            severity={this.state.alertSeverity ? this.state.alertSeverity : 'success'}
            onClose={() => this.setState({ showAlertNotification: undefined })}
          />

          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    allVideos: state.myVideos.allVideos.videos,
    allVideosStatus: state.myVideos.allVideos.status,
    brandSettings: state.brandSettings.brandSettings,
    saveSettingsStatus: state.brandSettings.saveSettingsStatus,
    saveProjectStatus: state.myVideos.duplicateProjectStatus,
    currentProjectVersionId: state.myVideos.currentProjectVersionId,
    allVideosAndImages: state.createVideoStepThree.allVideosAndImages,
    videoProgress: state.createVideoStepThree.videoProgress,
    generateVideoData: state.createVideoStepThree.generateVideoData,
    voiceOverData: state.createVideoStepThree.voiceOverDataForPreview,
    saveAudioStatus: state.favouriteAndRecents.saveAudioStatus,
    deleteAudioStatus: state.favouriteAndRecents.deleteAudioStatus,
    audioFavsAndRecent: state.favouriteAndRecents.audioFavsAndRecent.audio,
    audioFavsAndRecentStatus: state.favouriteAndRecents.audioFavsAndRecent.status,
    articleAudios: state.createVideoStepThree.articleAudios,
    findProjectMusicResult: state.music.findProjectMusicResult,
    musicResult: state.music.musicResult,
    musicTrack: state.music.music,
    gettingArticleAudios: state.createVideoStepThree.gettingArticleAudios,
    presentState: state.undoRedo.present,
    canRedo: state.undoRedo.future.length > 0,
    canUndo: state.undoRedo.past.length > 1,
    pastState: state.undoRedo.past,
    futureState: state.undoRedo.future,
    videoGenerationProgress: state.createVideoStepThree.videoGenerationProgress,
    favoriteVisualsResult: state.favouriteAndRecents.favoriteVisualsResult,
    recentVisualsResult: state.favouriteAndRecents.recentVisualsResult,
    imageList: state.uploadImage.imageListResult.Items,
    assetsSearchProgress: state.createVideoStepThree.assetsSearchProgress,
    assetResponseId: state.createVideoStepThree.assetsSearchProgress.response_id,
    searchCategories: state.visualsSearch.searchCategories,
    allSummaryAssets: state.visualsSearch.savedAssets,
    asyncVideoGenData: state.createVideoStepThree.asyncVideoGenData,
    asyncCompleteData: state.createVideoStepThree.asyncCompleteData,
    activeProject: state.myVideos.activeProject,
    hostApp: state.login.hostApp,
    videoPostSuccesfulLoginFlag: state.videoPosts.videoPostSuccesfulLoginFlag,
    videoPostFailedLoginFlag: state.videoPosts.videoPostFailedLoginFlag,
    projectSceneLevelAudio: state.createVideoStepThree.projectSceneLevelAudio,
    sentenceKeywordSuggestions: state.createVideoStepThree.sentenceKeywordSuggestions,
    stoppedProject: state.header.stoppedProject,
    sharePreviewResult: state.createVideoStepThree.sharePreviewResult,
    sharedPreviewUrl: state.createVideoStepThree.sharedPreviewUrl,
    teamUsers: state.teams.teamUsersResult,
    importAudioStatus: state.favouriteAndRecents.importAudioStatus,
    importAudioMappings: state.favouriteAndRecents.importAudioMappings,
    importImageStatus: state.uploadImage.importImageStatus,
    importImageMappings: state.uploadImage.importImageMappings,
    userBrands: state.branding.userBrandsResult,
    voiceOverDeleteResult: state.createVideoStepThree.voiceOverDeleteResult,
    voiceOverDataResponseID: state.createVideoStepThree.voiceOverDataResponseID,
    voiceoverprogressStatus: state.createVideoStepThree.voiceoverprogressStatus,
  };
};

export default connect(mapStateToProps, {
  getMyVideos,
  getBrandSettings,
  fetchAllVideosAndImages,
  searchAllAssets,
  saveBrandSettings,
  saveProject,
  getVideoProgress,
  generateVideo,
  getVoiceOverTrackForPreview,
  deleteAudioFavAndRecents,
  saveAudioFavAndRecents,
  getAudioFavAndRecents,
  deleteGeneratedVideo,
  getArticleAudios,
  findProjectMusic,
  getProjectMusic,
  getMusicById,
  getCurrentSubscription,
  quotaUtilization,
  storeUndoableData,
  undo,
  redo,
  clearUndoHistory,
  getFavoriteVisuals,
  getRecentVisuals,
  getImageList,
  getMoreImages,
  searchCategoriesBegin,
  resetAssetsSearchStatus,
  getSavedAssets,
  generateCSV,
  getTranscriptionScenes,
  generateAsyncVideo,
  showErrorNotification,
  openProject,
  openPreviewProject,
  projectOpened,
  stopVideoGeneration,
  saveRecentImages,
  generateVideoStatus,
  initiateVideoPostsLogin,
  createElementsProgress,
  getSceneLevelAudio,
  getSentenceKeywordSuggestions,
  getStylesByAttributes,
  sharePreview,
  getTeamUsersRequest,
  importAudio,
  importImage,
  getUserBrandsRequest,
  getUserPreferenceRequest,
  getStyles,
})(CreateVideo_Step3);

//step3
