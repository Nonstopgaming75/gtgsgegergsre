import {
  ReactNative as RN,
  constants,
  stylesheet,
  url,
} from "@vendetta/metro/common";
import { General } from "@vendetta/ui/components";
import { SimpleText } from "../../../../stuff/types";
import { semanticColors } from "@vendetta/ui";
import { openCommitsPage } from "./pages/CommitsPage";

export interface CommitUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: false;
}
export interface CommitObj {
  sha: string;
  node_id: string;
  commit: {
    author: {
      name: string;
      email: string;
      date: string;
    };
    commiter: {
      name: string;
      email: string;
      date: string;
    };
    message: string;
    tree: {
      sha: string;
      url: string;
    };
    url: string;
    comment_count: number;
    verification: {
      verified: boolean;
      reason: string;
      signature: any;
      payload: any;
    };
  };
  url: string;
  html_url: string;
  comments_url: string;
  author: CommitUser;
  committer: CommitUser;
  parents: {
    sha: string;
    url: string;
    html_url: string;
  }[];
}

const { View, Pressable } = General;

export default ({
  commit,
  list,
  onPress,
}: {
  commit: CommitObj;
  list?: boolean;
  onPress?: () => void;
}) => {
  const styles = stylesheet.createThemedStyleSheet({
    androidRipple: {
      color: semanticColors.ANDROID_RIPPLE,
      cornerRadius: 8,
    },
    container: {
      backgroundColor: semanticColors.BACKGROUND_SECONDARY_ALT,
      flexDirection: "column",
      borderRadius: 8,
    },
  });

  const UseComponent = onPress ? Pressable : View;

  return (
    <View
      style={
        list
          ? { paddingHorizontal: 12, paddingTop: 12 }
          : { paddingHorizontal: 16, paddingTop: 16 }
      }
    >
      <UseComponent
        android_ripple={styles.androidRipple}
        disabled={false}
        accessibilityRole={"button"}
        accessibilityState={{
          disabled: false,
          expanded: false,
        }}
        accessibilityLabel="Commit"
        onPress={() => onPress()}
        style={styles.container}
      >
        <View style={{ marginHorizontal: 12, marginVertical: 12 }}>
          <View style={{ flexDirection: "row", marginBottom: 4 }}>
            <RN.Image
              style={{
                width: 20,
                height: 20,
                borderRadius: 2147483647,
                marginRight: 8,
              }}
              source={{ uri: commit.committer.avatar_url }}
            />
            <SimpleText
              style={{ marginRight: 8 }}
              variant="text-sm/semibold"
              color="TEXT_NORMAL"
            >
              {commit.committer.login}
            </SimpleText>
            <SimpleText
              style={{ marginRight: 8 }}
              variant="text-sm/semibold"
              color="TEXT_NORMAL"
            >
              •
            </SimpleText>
            <SimpleText
              color="TEXT_NORMAL"
              style={{ fontFamily: constants.Fonts.CODE_SEMIBOLD }}
            >
              {commit.sha.slice(0, 7)}
            </SimpleText>
          </View>
          <SimpleText variant="text-md/semibold" color="TEXT_NORMAL">
            {commit.commit.message}
          </SimpleText>
        </View>
      </UseComponent>
    </View>
  );
};
