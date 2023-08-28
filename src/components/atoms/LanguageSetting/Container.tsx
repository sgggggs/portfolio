import { useState, useCallback, type FC } from 'react';
import { LanguageSettingProvider } from './Provider';

export const LanguageSettingContainer: FC = () => {
	const [isEnableCloseButton, setIsEnableCloseButton] = useState<boolean>(false);
	const handleIsEnableCloseButton = useCallback(() => {
		setIsEnableCloseButton(true);
	}, []);

	return (
		<LanguageSettingProvider
			isEnableCloseButton={isEnableCloseButton}
			handleIsEnableCloseButton={handleIsEnableCloseButton}
		/>
	);
};
